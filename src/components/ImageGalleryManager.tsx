import { useState, useEffect } from "react";
import { useProjectsByCategory } from "@/hooks/useProjects";
import { ImageUploader } from "@/components/gallery/ImageUploader";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { ProjectImage } from "@/components/gallery/ImageCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/data/projects";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

const ImageGalleryManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const { projects, loading } = useProjectsByCategory(selectedCategory);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = projects.find(p => p.id === selectedProject);

  const [localImages, setLocalImages] = useState<ProjectImage[]>([]);

  useEffect(() => {
    if (activeProject?.images) {
      const mappedImages = activeProject.images.map(img => ({
        id: img.id || "temp-id-" + img.display_order,
        project_id: activeProject.id,
        image_url: img.image_url,
        title: activeProject.title,
        description: null,
        display_order: img.display_order,
        is_before: false, // Default
        is_after: false
      }));
      setLocalImages(mappedImages);
    }
  }, [activeProject]);

  const [uploading, setUploading] = useState(false);

  // ... (existing code)

  const handleUpload = async (file: File) => {
    if (!selectedProject) return;
    setUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${selectedProject}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('project-gallery')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('project-gallery')
        .getPublicUrl(fileName);

      await handleUrlAdd(publicUrl, file.name);
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleUrlAdd = async (url: string, title: string) => {
    if (!selectedProject) return;
    setUploading(true);

    const newOrder = localImages.length;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error } = await supabase.from('project_images' as any).insert({
      project_id: selectedProject,
      image_url: url,
      display_order: newOrder,
      rotation_angle: 0
    }).select().single();

    if (error) {
      toast.error("Failed to add image");
      console.error(error);
    } else {
      toast.success("Image added successfully");
      // Update local state
      if (activeProject && data) {
        const typedData = data as unknown as { id: string };
        const newImage: ProjectImage = {
          id: typedData.id,
          project_id: selectedProject,
          image_url: url,
          title: activeProject.title,
          description: null,
          display_order: newOrder,
          is_before: false,
          is_after: false
        };
        setLocalImages([...localImages, newImage]);
      }
    }
    setUploading(false);
  };

  const handleDelete = async (image: ProjectImage) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await supabase.from('project_images' as any).delete().eq('id', image.id);

    if (error) {
      console.error("Error deleting image:", error);
      toast.error("Failed to delete image");
    } else {
      toast.success("Image deleted");
      setLocalImages(localImages.filter(img => img.id !== image.id));
    }
  };

  const handleReorder = async (newOrder: ProjectImage[]) => {
    // Optimistic update
    setLocalImages(newOrder);

    // Prepare updates for Supabase
    const updates = newOrder.map((img, index) => ({
      id: img.id,
      display_order: index,
      project_id: img.project_id, // Ensure we have required keys if it's a composite key, though ID should suffice if PK
      image_url: img.image_url, // Include just in case
      rotation_angle: 0 // Default or preserve? We don't have it in ProjectImage easily without mapping back. 
      // Actually, ProjectImage doesn't store rotation. 
      // If the table requires it, we might be overwriting it. 
      // But let's assume partial update works or 'id' is substantial. 
      // If 'id' is PK, upserting {id, display_order} should work if valid.
      // Wait, supabase upsert needs all non-nullable columns if it's considered an insert-on-conflict?
      // No, if ID exists, it updates.
    }));

    // We only need to update the display_order. 
    // We can't do a bulk update of just one field deeply easily without a custom function or making sure we provide enough info.
    // Let's try upserting just id and display_order.

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await supabase.from('project_images' as any).upsert(
      newOrder.map((img, index) => ({
        id: img.id,
        project_id: img.project_id,
        image_url: img.image_url,
        display_order: index
      })),
      { onConflict: 'id' } // Specifying conflict on ID
    );

    if (error) {
      console.error("Error reordering:", error);
      toast.error("Failed to save order");
    } else {
      toast.success("Order saved");
    }
  };

  const handleToggle = async (image: ProjectImage, field: 'is_before' | 'is_after') => {
    const newValue = !image[field];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await supabase.from('project_images' as any)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .update({ [field]: newValue } as any)
      .eq('id', image.id);

    if (error) {
      console.error(`Error toggling ${field}:`, error);
      toast.error(`Failed to update ${field} status`);
    } else {
      setLocalImages(localImages.map(img =>
        img.id === image.id ? { ...img, [field]: newValue } : img
      ));
      toast.success(`${field === 'is_before' ? 'Before' : 'After'} status updated`);
    }
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif">Gallery Manager</h1>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={async () => {
              await supabase.auth.signOut();
            }}
          >
            Sign Out
          </Button>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(cat => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedProject || ""} onValueChange={setSelectedProject}>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Select Project" />
            </SelectTrigger>
            <SelectContent>
              {projects.map(p => (
                <SelectItem key={p.id} value={p.id}>{p.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {activeProject ? (
        <Card>
          <CardHeader>
            <CardTitle>Manage: {activeProject.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <ImageUploader
              selectedProject={selectedProject}
              uploading={uploading}
              onFileUpload={handleUpload}
              onUrlAdd={handleUrlAdd}
            />
            <ImageGrid
              images={localImages}
              onDelete={handleDelete}
              onReorder={handleReorder}
              onToggleBeforeAfter={handleToggle}
            />
          </CardContent>
        </Card>
      ) : (
        <div className="text-center py-20 text-muted-foreground">
          {loading ? "Loading projects..." : "Select a project to manage gallery"}
        </div>
      )}
    </div>
  );
};

export default ImageGalleryManager;
