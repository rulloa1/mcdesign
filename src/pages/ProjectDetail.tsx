import { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProjectById, projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Clock, Maximize2, Home, Bath, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NumberedGallery } from "@/components/gallery/NumberedGallery";
import { motion, AnimatePresence } from "framer-motion";
import { useGalleryOrder } from "@/hooks/useGalleryOrder";

import { AIRedesignDialog } from "@/components/gallery/AIRedesignDialog";
import { supabase } from "@/integrations/supabase/client";
const ProjectDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  // Force a re-render/reset when ID changes
  const [key, setKey] = useState(0);
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // AI Redesign State
  const [isRedesignOpen, setIsRedesignOpen] = useState(false);
  const [redesignImage, setRedesignImage] = useState<string | null>(null);

  // Memoize default gallery to prevent infinite loops
  const defaultGallery = useMemo(() => project?.gallery || [], [project?.gallery]);
  const {
    images: galleryImages,
    isLoading,
    isAdmin,
    isEditable,
    toggleEditMode,
    saveGalleryOrder
  } = useGalleryOrder(id || "", defaultGallery);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setKey(prev => prev + 1); // Trigger animation reset
  }, [id]);

  const handleEditImage = (image: string) => {
    setRedesignImage(image);
    setIsRedesignOpen(true);
  };

  const handleSaveRedesign = (newImageUrl: string) => {
    // Add the new image to the start of the gallery
    const newGallery = [newImageUrl, ...galleryImages];
    saveGalleryOrder(newGallery);
  };

  const handleAddImage = async (file: File) => {
    let publicUrl = "";

    // Try Supabase upload if user is admin (or we just allow it for this demo if logic permits)
    // In strict real world, we'd check auth/RLS.
    if (id && isAdmin) {
      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${id}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('project-gallery')
          .upload(fileName, file);

        if (!uploadError) {
          const { data } = supabase.storage
            .from('project-gallery')
            .getPublicUrl(fileName);
          publicUrl = data.publicUrl;
        }
      } catch (error) {
        console.error("Supabase upload failed:", error);
      }
    }

    if (!publicUrl) {
      // Fallback to local
      publicUrl = URL.createObjectURL(file);
    }

    const newGallery = [...galleryImages, publicUrl];
    saveGalleryOrder(newGallery);
  };

  const handleRemoveImage = (index: number) => {
    const newGallery = [...galleryImages];
    newGallery.splice(index, 1);
    saveGalleryOrder(newGallery);
  };

  if (!project) {
    return <Layout>
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-serif text-charcoal mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    </Layout>;
  }
  const currentIndex = projects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };
  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };
  return <Layout>
    <motion.div key={project.id} // Ensure animations trigger on route change
      initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} transition={{
        duration: 0.5
      }}>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <motion.img initial={{
          scale: 1.1
        }} animate={{
          scale: 1
        }} transition={{
          duration: 1.5,
          ease: "easeOut"
        }} src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-cream/70 hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            <motion.div initial={{
              y: 20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.2,
              duration: 0.6
            }}>
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2">{project.category}</p>
              <h1 className="text-4xl md:text-6xl font-serif text-cream mb-2">{project.title}</h1>
              <p className="text-cream/80 text-xl">{project.subtitle}</p>
              <p className="text-cream/60 mt-2">{project.location}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div initial={{
              y: 30,
              opacity: 0
            }} whileInView={{
              y: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3,
              duration: 0.6
            }} className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-charcoal mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">{project.description}</p>

              {project.role && <div className="mb-8 bg-primary/10 border-l-4 border-primary p-6">
                <h3 className="text-xl font-serif text-charcoal mb-3">My Role</h3>
                <p className="text-muted-foreground">{project.role}</p>
              </div>}

            </motion.div>

            {/* Sidebar Stats */}
            <motion.div initial={{
              x: 30,
              opacity: 0
            }} whileInView={{
              x: 0,
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.5,
              duration: 0.6
            }} className="bg-charcoal text-cream p-8 h-fit">
              <h3 className="text-xl font-serif mb-6 text-primary">Project Details</h3>
              <div className="space-y-6">
                {project.duration && <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-cream/60 text-sm">Duration</p>
                    <p className="text-lg">{project.duration}</p>
                  </div>
                </div>}
                {project.sqft && <div className="flex items-center gap-4">
                  <Maximize2 className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-cream/60 text-sm">Square Footage</p>
                    <p className="text-lg">{project.sqft}</p>
                  </div>
                </div>}
                {project.gallons && <div className="flex items-center gap-4">
                  <Maximize2 className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-cream/60 text-sm">Gallons</p>
                    <p className="text-lg">{project.gallons}</p>
                  </div>
                </div>}
                {project.bedrooms && <div className="flex items-center gap-4">
                  <Home className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-cream/60 text-sm">Bedrooms</p>
                    <p className="text-lg">{project.bedrooms}</p>
                  </div>
                </div>}
                {project.baths && <div className="flex items-center gap-4">
                  <Bath className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-cream/60 text-sm">Bathrooms</p>
                    <p className="text-lg">{project.baths}</p>
                  </div>
                </div>}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }}>
            <h2 className="text-3xl font-serif text-cream mb-8">Gallery</h2>
            {isAdmin && (
              <p className="text-cream/60 text-sm mb-4">Enter a number to reorder images</p>
            )}
            {isLoading ? (
              <div className="text-cream/60">Loading gallery...</div>
            ) : (
              <NumberedGallery
                images={galleryImages}
                projectTitle={project.title}
                projectId={id}
                onImageClick={openLightbox}
                onOrderChange={saveGalleryOrder}
                onEditImage={handleEditImage}
                onAddImage={handleAddImage}
                onRemoveImage={handleRemoveImage}
                isEditable={isEditable}
              />
            )}

            <div className="mt-8 flex justify-end">
              <Button
                variant="ghost"
                onClick={toggleEditMode}
                className="text-cream/40 hover:text-primary hover:bg-transparent text-xs flex items-center gap-2"
              >
                <Settings2 className="w-3 h-3" />
                {isEditable ? "Disable Editing" : "Enable Editing"}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-12 bg-cream border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevProject ? <Link to={`/project/${prevProject.id}`} className="flex items-center gap-3 group">
              <ArrowLeft className="w-5 h-5 text-charcoal group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm text-muted-foreground">Previous Project</p>
                <p className="font-serif text-charcoal group-hover:text-primary transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </Link> : <div />}
            {nextProject && <Link to={`/project/${nextProject.id}`} className="flex items-center gap-3 text-right group">
              <div>
                <p className="text-sm text-muted-foreground">Next Project</p>
                <p className="font-serif text-charcoal group-hover:text-primary transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-charcoal group-hover:text-primary transition-colors" />
            </Link>}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center">
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-cream hover:text-primary transition-colors" aria-label="Close lightbox">
            <X className="w-8 h-8" />
          </button>

          <button onClick={prevImage} disabled={selectedImage === 0} className="absolute left-6 text-cream hover:text-primary transition-colors disabled:opacity-30" aria-label="Previous image">
            <ChevronLeft className="w-12 h-12" />
          </button>

          <motion.img key={selectedImage} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.3
          }} src={galleryImages[selectedImage]} alt={`${project.title} - Image ${selectedImage + 1}`} className="max-h-[85vh] max-w-[85vw] object-contain" />

          <button onClick={nextImage} disabled={selectedImage === galleryImages.length - 1} className="absolute right-6 text-cream hover:text-primary transition-colors disabled:opacity-30" aria-label="Next image">
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="absolute bottom-6 text-cream/60 text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </motion.div>}
      </AnimatePresence>

      {/* AI Redesign Dialog */}
      <AIRedesignDialog
        isOpen={isRedesignOpen}
        onClose={() => setIsRedesignOpen(false)}
        imageUrl={redesignImage}
        onSave={handleSaveRedesign}
      />
    </motion.div>
  </Layout>;
};
export default ProjectDetail;