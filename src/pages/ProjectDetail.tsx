import { useState, useEffect, useMemo } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProjectById, projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Clock, Maximize2, Home, Bath, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NumberedGallery } from "@/components/gallery/NumberedGallery";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useGalleryOrder } from "@/hooks/useGalleryOrder";
import { useRef } from "react";

import { AIRedesignDialog } from "@/components/gallery/AIRedesignDialog";
import { SmelekLetterCard } from "@/components/gallery/SmelekLetterCard";
import { ProcessView } from "@/components/gallery/ProcessView";
import { supabase } from "@/integrations/supabase/client";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isRedesignOpen, setIsRedesignOpen] = useState(false);
  const [redesignImage, setRedesignImage] = useState("");
  const [key, setKey] = useState(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

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

  const relatedProjects = projects
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

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
      <section ref={heroRef} className="relative h-[80vh] min-h-[600px] overflow-hidden bg-charcoal">
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-20">
          <div className="container mx-auto">
            <Link to="/portfolio" className="inline-flex items-center gap-3 text-gold tracking-widest text-[10px] uppercase font-bold mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
            </Link>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-gold opacity-50" />
                <p className="text-gold tracking-[0.4em] uppercase text-xs font-medium">{project.category}</p>
              </div>

              <h1 className="text-5xl md:text-8xl font-serif text-cream mb-4 leading-tight tracking-tight">
                {project.title.split(' ').slice(0, -1).join(' ')} <br />
                <span className="italic font-light text-primary">{project.title.split(' ').slice(-1)}</span>
              </h1>

              <div className="flex flex-wrap gap-x-12 gap-y-4 mt-8">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-1">Location</p>
                  <p className="text-cream text-lg font-light">{project.location}</p>
                </div>
                {project.subtitle && (
                  <div>
                    <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-1">Concept</p>
                    <p className="text-cream text-lg font-light">{project.subtitle}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Main Content */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:col-span-8"
            >
              <div className="inline-block py-1 px-4 border border-gold/30 bg-gold/5 rounded-full mb-8">
                <p className="text-gold tracking-[0.3em] uppercase text-[10px] font-medium font-sans">Project Narrative</p>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-10 leading-tight">
                Architectural <br /><span className="italic text-primary">Vision & Execution</span>
              </h2>

              <div className="w-20 h-[1px] bg-gold/50 mb-10" />

              <p className="text-muted-foreground leading-relaxed text-xl mb-12 font-light">
                {project.description}
              </p>

              {project.role && (
                <div className="bg-white/50 backdrop-blur-sm border border-gold/10 p-10 rounded-2xl shadow-sm">
                  <h3 className="text-xs tracking-[0.3em] uppercase text-gold font-bold mb-6">My Executive Role</h3>
                  <p className="text-charcoal leading-relaxed text-lg font-light italic">
                    "{project.role}"
                  </p>
                </div>
              )}

              {project.processView && (
                <div className="mt-16">
                  <div className="inline-block py-1 px-4 border border-gold/30 bg-gold/5 rounded-full mb-8">
                    <p className="text-gold tracking-[0.3em] uppercase text-[10px] font-medium font-sans">Design Evolution</p>
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal mb-8">From Concept to Reality</h3>
                  <ProcessView
                    beforeImage={project.processView.beforeImage}
                    afterImage={project.processView.afterImage}
                    beforeLabel={project.processView.beforeLabel}
                    afterLabel={project.processView.afterLabel}
                  />
                </div>
              )}
            </motion.div>

            {/* Sidebar Stats */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:col-span-4"
            >
              <div className="bg-charcoal p-12 text-cream shadow-2xl relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 -skew-x-12 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                <h3 className="text-xl font-serif mb-10 text-primary border-b border-white/10 pb-6 uppercase tracking-widest">Specifications</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
                  {project.duration && (
                    <div className="flex items-start gap-6 group">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-1">Timeline</p>
                        <p className="text-lg font-light">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  {project.sqft && (
                    <div className="flex items-start gap-6 group">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Maximize2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-1">Area</p>
                        <p className="text-lg font-light">{project.sqft}</p>
                      </div>
                    </div>
                  )}
                  {project.gallons && (
                    <div className="flex items-start gap-6 group">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Maximize2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-1">Capacity</p>
                        <p className="text-lg font-light">{project.gallons}</p>
                      </div>
                    </div>
                  )}
                  {project.bedrooms && (
                    <div className="flex items-start gap-6 group">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Home className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-1">Accommodations</p>
                        <p className="text-lg font-light">{project.bedrooms} Bedrooms</p>
                      </div>
                    </div>
                  )}
                  {project.baths && (
                    <div className="flex items-start gap-6 group">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Bath className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] tracking-widest uppercase text-cream/40 mb-1">Facilities</p>
                        <p className="text-lg font-light">{project.baths} Bathrooms</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 p-8 border border-gold/10 bg-white/50 backdrop-blur-sm">
                <p className="text-[10px] tracking-widest uppercase text-gold font-bold mb-4">Inquiry</p>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                  Interested in a similar development or custom build?
                </p>
                <Link to="/contact">
                  <Button variant="ghost" className="text-charcoal hover:text-primary p-0 h-auto text-[10px] tracking-widest uppercase font-bold flex items-center gap-2">
                    Request Consultation <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
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
      <section className="py-24 bg-cream border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-charcoal/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {prevProject ? (
              <Link to={`/project/${prevProject.id}`} className="group flex items-center gap-8 max-w-sm">
                <div className="w-20 h-20 overflow-hidden relative border border-gold/20 flex-shrink-0">
                  <img src={prevProject.coverImage} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="" />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-gold font-bold mb-2 flex items-center gap-2">
                    <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Previous
                  </p>
                  <p className="font-serif text-2xl text-charcoal group-hover:text-gold transition-colors">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}

            <div className="h-[1px] w-24 bg-gold/30 hidden md:block" />

            {nextProject ? (
              <Link to={`/project/${nextProject.id}`} className="group flex items-center gap-8 text-right max-w-sm">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-gold font-bold mb-2 flex items-center gap-2 justify-end">
                    Next <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </p>
                  <p className="font-serif text-2xl text-charcoal group-hover:text-gold transition-colors">{nextProject.title}</p>
                </div>
                <div className="w-20 h-20 overflow-hidden relative border border-gold/20 flex-shrink-0">
                  <img src={nextProject.coverImage} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt="" />
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <p className="text-gold tracking-[0.4em] uppercase text-xs mb-4 font-semibold">Discovery</p>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Related Projects</h2>
              <div className="w-20 h-[1px] bg-gold mx-auto opacity-50" />
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {relatedProjects.map((rp, idx) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link to={`/project/${rp.id}`} className="group block">
                    <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                      <img
                        src={rp.coverImage}
                        alt={rp.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-[10px] tracking-widest uppercase text-gold mb-2">{rp.category}</p>
                    <h3 className="text-2xl font-serif text-charcoal group-hover:text-gold transition-colors mb-2">{rp.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{rp.location}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

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

          {galleryImages[selectedImage] === "special://smelek-letter" ? (
            <div className="max-w-[85vw] max-h-[85vh] bg-cream shadow-2xl overflow-y-auto w-full">
              <SmelekLetterCard />
            </div>
          ) : galleryImages[selectedImage].match(/\.(mp4|webm|ogg)$/i) ? (
            <video
              src={galleryImages[selectedImage]}
              controls
              autoPlay
              className="max-h-[85vh] max-w-[85vw] shadow-2xl"
            />
          ) : galleryImages[selectedImage].includes('youtube.com') || galleryImages[selectedImage].includes('youtu.be') ? (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${galleryImages[selectedImage].includes('v=') ? galleryImages[selectedImage].split('v=')[1].split('&')[0] : galleryImages[selectedImage].split('/').pop()}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="max-h-[85vh] max-w-[85vw] w-full aspect-video shadow-2xl"
            ></iframe>
          ) : (
            <motion.img
              key={selectedImage}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.3
              }}
              src={galleryImages[selectedImage]}
              alt={`${project.title} - Item ${selectedImage + 1}`}
              className="max-h-[85vh] max-w-[85vw] object-contain"
            />
          )}

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