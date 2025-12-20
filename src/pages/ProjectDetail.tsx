import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProjectById, projects } from "@/data/projects";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Clock, Maximize2, Home, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  if (!project) {
    return (
      <Layout>
        <div className="pt-32 pb-24 bg-cream min-h-screen">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-serif text-charcoal mb-4">Project Not Found</h1>
            <Link to="/portfolio">
              <Button>Back to Portfolio</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => {
    if (selectedImage !== null && selectedImage < project.gallery.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };
  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px]">
        <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="container mx-auto">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-cream/70 hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-2">{project.category}</p>
            <h1 className="text-4xl md:text-6xl font-serif text-cream mb-2">{project.title}</h1>
            <p className="text-cream/80 text-xl">{project.subtitle}</p>
            <p className="text-cream/60 mt-2">{project.location}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-charcoal mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">{project.description}</p>

              {project.role && (
                <div className="mb-8 bg-primary/10 border-l-4 border-primary p-6">
                  <h3 className="text-xl font-serif text-charcoal mb-3">My Role</h3>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>
              )}

            </div>

            {/* Sidebar Stats */}
            <div className="bg-charcoal text-cream p-8">
              <h3 className="text-xl font-serif mb-6 text-primary">Project Details</h3>
              <div className="space-y-6">
                {project.duration && (
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-cream/60 text-sm">Duration</p>
                      <p className="text-lg">{project.duration}</p>
                    </div>
                  </div>
                )}
                {project.sqft && (
                  <div className="flex items-center gap-4">
                    <Maximize2 className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-cream/60 text-sm">Square Feet</p>
                      <p className="text-lg">{project.sqft}</p>
                    </div>
                  </div>
                )}
                {project.bedrooms && (
                  <div className="flex items-center gap-4">
                    <Home className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-cream/60 text-sm">Bedrooms</p>
                      <p className="text-lg">{project.bedrooms}</p>
                    </div>
                  </div>
                )}
                {project.baths && (
                  <div className="flex items-center gap-4">
                    <Bath className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-cream/60 text-sm">Bathrooms</p>
                      <p className="text-lg">{project.baths}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif text-cream mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="aspect-square overflow-hidden cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-12 bg-cream border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {prevProject ? (
              <Link
                to={`/project/${prevProject.id}`}
                className="flex items-center gap-3 group"
              >
                <ArrowLeft className="w-5 h-5 text-charcoal group-hover:text-primary transition-colors" />
                <div>
                  <p className="text-sm text-muted-foreground">Previous Project</p>
                  <p className="font-serif text-charcoal group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject && (
              <Link
                to={`/project/${nextProject.id}`}
                className="flex items-center gap-3 text-right group"
              >
                <div>
                  <p className="text-sm text-muted-foreground">Next Project</p>
                  <p className="font-serif text-charcoal group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-charcoal group-hover:text-primary transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-cream hover:text-primary transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            disabled={selectedImage === 0}
            className="absolute left-6 text-cream hover:text-primary transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <img
            src={project.gallery[selectedImage]}
            alt={`${project.title} - Image ${selectedImage + 1}`}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />

          <button
            onClick={nextImage}
            disabled={selectedImage === project.gallery.length - 1}
            className="absolute right-6 text-cream hover:text-primary transition-colors disabled:opacity-30"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="absolute bottom-6 text-cream/60 text-sm">
            {selectedImage + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ProjectDetail;
