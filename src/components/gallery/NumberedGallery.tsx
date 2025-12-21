import { useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface NumberedGalleryProps {
  images: string[];
  projectTitle: string;
  onImageClick: (index: number) => void;
  onOrderChange?: (newImages: string[]) => void;
}

export const NumberedGallery = ({
  images: initialImages,
  projectTitle,
  onImageClick,
  onOrderChange,
}: NumberedGalleryProps) => {
  const [images, setImages] = useState(initialImages);
  const [orderValues, setOrderValues] = useState<{ [key: number]: string }>(
    Object.fromEntries(initialImages.map((_, i) => [i, String(i + 1)]))
  );

  const handleOrderChange = (index: number, value: string) => {
    setOrderValues((prev) => ({ ...prev, [index]: value }));
  };

  const handleOrderBlur = (index: number) => {
    const newOrder = parseInt(orderValues[index], 10);
    
    if (isNaN(newOrder) || newOrder < 1 || newOrder > images.length) {
      // Reset to current position
      setOrderValues((prev) => ({ ...prev, [index]: String(index + 1) }));
      toast.error("Invalid position number");
      return;
    }

    const targetIndex = newOrder - 1;
    
    if (targetIndex === index) return;

    // Reorder images
    const newImages = [...images];
    const [movedImage] = newImages.splice(index, 1);
    newImages.splice(targetIndex, 0, movedImage);
    
    setImages(newImages);
    // Reset all order values to reflect new positions
    setOrderValues(Object.fromEntries(newImages.map((_, i) => [i, String(i + 1)])));
    
    // Notify parent of the change
    onOrderChange?.(newImages);
    toast.success("Gallery order saved");
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter") {
      handleOrderBlur(index);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="aspect-square overflow-hidden group relative"
        >
          {/* Order number input */}
          <div className="absolute top-2 left-2 z-10">
            <Input
              type="text"
              inputMode="numeric"
              value={orderValues[index] || ""}
              onChange={(e) => handleOrderChange(index, e.target.value)}
              onBlur={() => handleOrderBlur(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-8 text-center bg-charcoal/80 text-cream border-cream/30 text-sm font-medium"
            />
          </div>

          {/* Image */}
          <img
            src={image}
            alt={`${projectTitle} - Image ${index + 1}`}
            onClick={() => onImageClick(index)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};
