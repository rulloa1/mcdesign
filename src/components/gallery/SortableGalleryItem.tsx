import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

interface SortableGalleryItemProps {
  id: string;
  image: string;
  index: number;
  projectTitle: string;
  onImageClick: (index: number) => void;
}

export const SortableGalleryItem = ({
  id,
  image,
  index,
  projectTitle,
  onImageClick,
}: SortableGalleryItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`aspect-square overflow-hidden group relative ${
        isDragging ? "opacity-50 scale-105" : ""
      }`}
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-2 left-2 z-10 bg-charcoal/70 text-cream p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing"
      >
        <GripVertical className="w-4 h-4" />
      </div>
      
      {/* Image */}
      <img
        src={image}
        alt={`${projectTitle} - Image ${index + 1}`}
        onClick={() => onImageClick(index)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
      />
    </div>
  );
};
