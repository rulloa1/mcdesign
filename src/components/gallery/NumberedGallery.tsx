import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Upload, Plus, X, Copy, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface NumberedGalleryProps {
  images: string[];
  projectTitle: string;
  projectId?: string;
  onImageClick: (index: number) => void;
  onOrderChange?: (newImages: string[]) => Promise<boolean> | void;
  onEditImage?: (image: string) => void;
  onAddImage?: (file: File) => Promise<void>;
  onRemoveImage?: (index: number) => void;
  isEditable?: boolean;
}

export const NumberedGallery = ({
  images: externalImages,
  projectTitle,
  projectId,
  onImageClick,
  onOrderChange,
  onEditImage,
  onAddImage,
  onRemoveImage,
  isEditable = false,
}: NumberedGalleryProps) => {
  const { toast } = useToast();
  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});
  const addInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState(externalImages);
  const [isCopied, setIsCopied] = useState(false);
  const [orderValues, setOrderValues] = useState<{ [key: number]: string }>(
    Object.fromEntries(externalImages.map((_, i) => [i, String(i + 1)]))
  );

  // Sync with external images
  useEffect(() => {
    setImages(externalImages);
    setOrderValues(Object.fromEntries(externalImages.map((_, i) => [i, String(i + 1)])));
  }, [externalImages]);

  const handleOrderChange = (index: number, value: string) => {
    setOrderValues((prev) => ({ ...prev, [index]: value }));
  };

  const handleCopyConfig = () => {
    const config = JSON.stringify(images, null, 2);
    navigator.clipboard.writeText(config);
    setIsCopied(true);
    toast({
      title: "Configuration Copied",
      description: "Paste this into src/data/projects.ts to save changes permanently.",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleOrderBlur = async (index: number) => {
    const newOrder = parseInt(orderValues[index], 10);

    if (isNaN(newOrder) || newOrder < 1 || newOrder > images.length) {
      setOrderValues((prev) => ({ ...prev, [index]: String(index + 1) }));
      return;
    }

    const targetIndex = newOrder - 1;

    if (targetIndex === index) return;

    // Reorder images
    const newImages = [...images];
    const [movedImage] = newImages.splice(index, 1);
    newImages.splice(targetIndex, 0, movedImage);

    // Notify parent and save
    const result = await onOrderChange?.(newImages);

    if (result !== false) {
      setImages(newImages);
      setOrderValues(Object.fromEntries(newImages.map((_, i) => [i, String(i + 1)])));
    } else {
      // Reset on failure
      setOrderValues((prev) => ({ ...prev, [index]: String(index + 1) }));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter") {
      handleOrderBlur(index);
    }
  };

  const handleReplaceClick = (index: number) => {
    fileInputRefs.current[index]?.click();
  };

  const handleAddClick = () => {
    addInputRef.current?.click();
  };

  const handleFileChange = async (index: number | null, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 10MB.",
        variant: "destructive",
      });
      return;
    }

    try {
      if (index === null) {
        // Add new image
        await onAddImage?.(file);
      } else {
        // Replace existing
        let publicUrl;

        // Try Supabase upload if configured/project ID exists, else local preview
        if (projectId && supabase) {
          try {
            const fileExt = file.name.split('.').pop();
            const fileName = `${projectId}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
            const { error: uploadError } = await supabase.storage
              .from('project-gallery')
              .upload(fileName, file);

            if (!uploadError) {
              const { data } = supabase.storage
                .from('project-gallery')
                .getPublicUrl(fileName);
              publicUrl = data.publicUrl;
            }
          } catch (err) {
            console.warn("Supabase upload failed, falling back to local URL", err);
          }
        }

        if (!publicUrl) {
          publicUrl = URL.createObjectURL(file);
        }

        const newImages = [...images];
        newImages[index] = publicUrl;

        const result = await onOrderChange?.(newImages);

        if (result !== false) {
          setImages(newImages);
          toast({
            title: "Image replaced",
            description: "The image has been successfully replaced (local preview).",
          });
        }
      }
    } catch (error) {
      console.error('File operation error:', error);
      toast({
        title: "Operation failed",
        description: "Failed to process image.",
        variant: "destructive",
      });
    }

    // Reset input
    e.target.value = '';
  };

  return (
    <>
      {isEditable && (
        <div className="mb-6 flex justify-between items-center bg-card/10 p-4 rounded-lg border border-primary/20">
          <div className="text-cream text-sm">
            <span className="font-bold text-primary">Edit Mode Active</span>
            <span className="mx-2">|</span>
            Drag/Drop or change numbers to reorder.
          </div>
          <Button
            onClick={handleCopyConfig}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 border-primary/50 hover:bg-primary/20 text-cream"
          >
            {isCopied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            {isCopied ? "Copied!" : "Copy Configuration"}
          </Button>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="aspect-square overflow-hidden group relative bg-black/20"
          >
            {/* Controls - only show if editable */}
            {isEditable && (
              <>
                <div className="absolute top-2 left-2 z-10">
                  <Input
                    type="text"
                    inputMode="numeric"
                    value={orderValues[index] || ""}
                    onChange={(e) => handleOrderChange(index, e.target.value)}
                    onBlur={() => handleOrderBlur(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-8 text-center bg-charcoal/80 text-cream border-cream/30 text-sm font-medium focus:border-primary"
                  />
                </div>

                <div className="absolute top-2 right-2 z-10 flex gap-1 bg-charcoal/80 rounded-md p-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReplaceClick(index);
                    }}
                    className="p-1.5 rounded hover:bg-primary hover:text-charcoal text-cream transition-colors"
                    title="Replace image"
                  >
                    <Upload className="w-4 h-4" />
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    ref={(el) => { fileInputRefs.current[index] = el; }}
                    onChange={(e) => handleFileChange(index, e)}
                    className="hidden"
                  />

                  {onRemoveImage && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm("Are you sure you want to remove this image?")) {
                          onRemoveImage(index);
                        }
                      }}
                      className="p-1.5 rounded hover:bg-destructive hover:text-white text-cream transition-colors"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {onEditImage && (
                  <div className="absolute bottom-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEditImage(image);
                      }}
                      className="bg-charcoal/80 text-cream p-2 rounded-md hover:bg-primary hover:text-charcoal backdrop-blur-sm"
                      title="Redesign with AI"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-wand-2"
                      >
                        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                        <path d="m14 7 3 3" />
                        <path d="M5 6v4" />
                        <path d="M19 14v4" />
                        <path d="M10 2v2" />
                        <path d="M7 8H3" />
                        <path d="M21 16h-4" />
                        <path d="M11 3H9" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}

            <img
              src={image}
              alt={`${projectTitle} - Image ${index + 1}`}
              onClick={() => onImageClick(index)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
            />
          </div>
        ))}

        {/* Add Image Card */}
        {isEditable && (
          <div
            onClick={handleAddClick}
            className="aspect-square border-2 border-dashed border-primary/30 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all group"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary group-hover:text-charcoal transition-colors text-primary">
              <Plus className="w-6 h-6" />
            </div>
            <span className="text-cream/60 font-medium group-hover:text-primary">Add Image</span>
            <input
              type="file"
              accept="image/*"
              ref={addInputRef}
              onChange={(e) => handleFileChange(null, e)}
              className="hidden"
            />
          </div>
        )}
      </div>
    </>
  );
};
