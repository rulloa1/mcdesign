import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useGalleryOrder = (projectId: string, defaultImages: string[]) => {
  const [images, setImages] = useState<string[]>(defaultImages);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if current user is admin
  useEffect(() => {
    const checkAdminStatus = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "admin")
          .maybeSingle();
        setIsAdmin(!!data);
      }
    };
    checkAdminStatus();
  }, []);

  // Load saved gallery order
  useEffect(() => {
    const loadGalleryOrder = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("project_gallery_orders")
        .select("image_order")
        .eq("project_id", projectId)
        .maybeSingle();

      if (error) {
        console.error("Error loading gallery order:", error);
        setImages(defaultImages);
      } else if (data?.image_order) {
        // Merge saved order with default images (in case new images were added)
        const savedOrder = data.image_order as string[];
        const newImages = defaultImages.filter(img => !savedOrder.includes(img));
        setImages([...savedOrder.filter(img => defaultImages.includes(img)), ...newImages]);
      } else {
        setImages(defaultImages);
      }
      setIsLoading(false);
    };

    loadGalleryOrder();
  }, [projectId, defaultImages]);

  const saveGalleryOrder = async (newImages: string[]) => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      toast.error("You must be logged in to save changes");
      return false;
    }

    const { error } = await supabase
      .from("project_gallery_orders")
      .upsert({
        project_id: projectId,
        image_order: newImages,
        updated_at: new Date().toISOString(),
        updated_by: user.id,
      }, {
        onConflict: "project_id"
      });

    if (error) {
      console.error("Error saving gallery order:", error);
      toast.error("Failed to save gallery order");
      return false;
    }

    setImages(newImages);
    toast.success("Gallery order saved");
    return true;
  };

  return { images, isLoading, isAdmin, saveGalleryOrder };
};
