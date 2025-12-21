import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface NumberedGalleryProps {
  images: string[];
  projectTitle: string;
  onImageClick: (index: number) => void;
  onOrderChange?: (newImages: string[]) => Promise<boolean> | void;
  isEditable?: boolean;
}

export const NumberedGallery = ({
  images: externalImages,
  projectTitle,
  onImageClick,
  onOrderChange,
  isEditable = false,
}: NumberedGalleryProps) => {
  const [images, setImages] = useState(externalImages);
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

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className="aspect-square overflow-hidden group relative"
        >
          {/* Order number input - only show if editable */}
          {isEditable && (
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
          )}

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
