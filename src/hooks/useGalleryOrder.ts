import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useGalleryOrder = (projectId: string, defaultImages: string[]) => {
  const [images, setImages] = useState<string[]>(defaultImages);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [adminPin, setAdminPin] = useState<string | null>(null);

  // Check if current user is admin - defaults to false for security
  useEffect(() => {
    const checkAdminStatus = async () => {
      setIsAdmin(false);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data);
    };
    checkAdminStatus();
  }, []);

  // Load saved gallery order
  useEffect(() => {
    const loadGalleryOrder = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("project_gallery_orders")
          .select("image_order")
          .eq("project_id", projectId)
          .maybeSingle();

        if (error) {
          console.error("Error loading gallery order:", error);
          setImages(defaultImages);
        } else if (data?.image_order) {
          const savedOrder = data.image_order as string[];
          const newImages = defaultImages.filter(img => !savedOrder.includes(img));
          setImages([...savedOrder.filter(img => defaultImages.includes(img)), ...newImages]);
        } else {
          setImages(defaultImages);
        }
      } catch (e) {
        console.error("Gallery load error:", e);
        setImages(defaultImages);
      } finally {
        setIsLoading(false);
      }
    };

    loadGalleryOrder();
  }, [projectId, defaultImages]);

  const saveGalleryOrder = async (newImages: string[]) => {
    console.log("New Gallery Order (Copy to projects.ts):");
    console.log(JSON.stringify(newImages, null, 2));

    // Update local state immediately
    setImages(newImages);

    // Try saving via edge function with PIN
    if (adminPin) {
      const { data, error } = await supabase.functions.invoke("save-gallery-order", {
        body: { pin: adminPin, project_id: projectId, image_order: newImages },
      });

      if (error || !data?.success) {
        console.error("Error saving gallery order:", error || data?.error);
        toast.error("Failed to save to database. Check console for code snippet.");
        return false;
      }

      toast.success("Gallery order saved");
      return true;
    }

    // Fallback: try with Supabase auth
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { error } = await supabase
        .from("project_gallery_orders")
        .upsert({
          project_id: projectId,
          image_order: newImages,
          updated_at: new Date().toISOString(),
          updated_by: user.id,
        }, { onConflict: "project_id" });

      if (error) {
        console.error("Error saving gallery order:", error);
        toast.error("Failed to save gallery order");
        return false;
      }
      toast.success("Gallery order saved");
      return true;
    }

    toast.error("Changes saved locally only. Check console for code snippet.");
    return true;
  };

  const toggleEditMode = () => setIsEditMode(prev => !prev);

  const enableEditWithPin = (pin: string) => {
    setAdminPin(pin);
    setIsEditMode(true);
  };

  const disableEdit = () => {
    setAdminPin(null);
    setIsEditMode(false);
  };

  const isEditable = isAdmin || isEditMode;

  return { images, isLoading, isAdmin, isEditable, toggleEditMode, enableEditWithPin, disableEdit, saveGalleryOrder };
};
