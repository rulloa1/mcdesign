import { useState } from "react";
import { useProjectsByCategory } from "@/hooks/useProjects";
import { ImageUploader } from "@/components/gallery/ImageUploader";
import { ImageGrid } from "@/components/gallery/ImageGrid";
import { ProjectImage } from "@/components/gallery/ImageCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/data/projects";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ImageGalleryManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const { projects, loading } = useProjectsByCategory(selectedCategory);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = projects.find(p => p.id === selectedProject);

  // Transform Hook Project images to Component ProjectImage
  const galleryImages: ProjectImage[] = activeProject?.images?.map(img => ({
    id: "temp-id-" + img.display_order, // fallback if ID missing in hook
    project_id: activeProject.id,
    image_url: img.image_url,
    title: activeProject.title,
    description: null,
    display_order: img.display_order,
    is_before: false, // Default
    is_after: false
  })) || [];

  const [uploading, setUploading] = useState(false);

  // ... (existing code)

  const handleUpload = async (file: File) => {
    if (!selectedProject) return;
    setUploading(true);
    toast.info("Upload logic to be implemented with Supabase Storage");
    // Implementation placeholder
    setTimeout(() => setUploading(false), 1000);
  };

  const handleUrlAdd = async (url: string, title: string) => {
    if (!selectedProject) return;
    setUploading(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await supabase.from('project_images' as any).insert({
      project_id: selectedProject,
      image_url: url,
      display_order: galleryImages.length,
      rotation_angle: 0
    });

    if (error) {
      toast.error("Failed to add image");
    } else {
      toast.success("Image added successfully");
      // Ideally trigger refetch or update local state
    }
    setUploading(false);
  };

  const handleDelete = async (image: ProjectImage) => {
    toast.info("Delete logic to be implemented");
  };

  const handleReorder = (newOrder: ProjectImage[]) => {
    // Update display_order in DB
  };

  const handleToggle = (image: ProjectImage, field: 'is_before' | 'is_after') => {
    // Toggle logic
    console.log("Toggling", image.id, field);
  };

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif">Gallery Manager</h1>
        <div className="flex gap-4">
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
              images={galleryImages}
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
