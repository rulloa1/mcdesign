import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Construction, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const interiorCategories = [
  { title: "Great Rooms", image: "https://mcdesign.bio/assets/detail-spa-vanity-BxlkwkET.jpg" },
  { title: "Primary Suites", image: "https://mcdesign.bio/assets/detail-marble-bath-BMs-D6Yk.jpg" },
  { title: "Chef's Kitchens", image: "https://mcdesign.bio/assets/detail-pro-range-Dljk2FL9.jpg" },
];

const developmentConcepts = [
  { title: "Land Development", tags: ["Entitlements", "Infrastructure", "Planning"] },
  { title: "Residential Communities", tags: ["Master Plan", "Amenities", "HOA"] },
  { title: "Resort & Hospitality", tags: ["Mixed-Use", "Golf", "Private Clubs"] },
  { title: "Renovation & Repositioning", tags: ["Historic", "Adaptive Reuse", "Restoration"] },
];

const Design = () => {
  const [showConstruction, setShowConstruction] = useState(true);
  const heroAnimation = useScrollAnimation();
  const architectureAnimation = useScrollAnimation();
  const interiorsAnimation = useScrollAnimation();
  const exteriorAnimation = useScrollAnimation();
  const furnitureAnimation = useScrollAnimation();
  const developmentAnimation = useScrollAnimation();
  const bespokeAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <Layout>
      {/* Under Construction Overlay */}
      {showConstruction && (
        <div className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center">
          <button 
            onClick={() => setShowConstruction(false)}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="text-center px-6 max-w-lg">
            <div className="w-24 h-24 mx-auto mb-8 bg-primary/20 rounded-full flex items-center justify-center">
              <Construction className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Under Construction</h2>
            <p className="text-white/70 mb-8">
              I'm currently updating this page with new content and projects. Check back soon for the full experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowConstruction(false)}
                className="bg-primary text-primary-foreground hover:bg-gold-dark"
              >
                Preview Anyway
              </Button>
              <Link to="/">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div 
          ref={heroAnimation.ref}
          className={`container mx-auto px-6 transition-all duration-700 ${
            heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back
          </Link>
          <h1 className="text-6xl md:text-7xl font-serif text-charcoal mb-4">Interior Design</h1>
          <p className="text-muted-foreground text-lg mb-6">Architecture • Interiors • Custom Environments</p>
          <div className="w-20 h-1 bg-primary" />
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div 
              ref={architectureAnimation.ref}
              className={`relative group transition-all duration-700 ${
                architectureAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <img 
                src="https://mcdesign.bio/assets/detail-timber-beams-DCRmMNpo.jpg" 
                alt="Architecture detail" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                <p className="text-white text-center max-w-md">Site-responsive design, structural coordination, smart home integration</p>
              </div>
              <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(201,169,97,0.5)]" />
            </div>
            <div
              ref={interiorsAnimation.ref}
              className={`transition-all duration-700 delay-200 ${
                interiorsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Architecture</p>
              <p className="text-muted-foreground mb-12">Site-responsive design, structural coordination, smart home integration</p>
              
              <h2 className="text-3xl font-serif text-charcoal mb-8">Interiors</h2>
              <div className="space-y-6">
                {interiorCategories.map((category, index) => (
                  <div 
                    key={index} 
                    className={`group cursor-pointer transition-all duration-500 hover:-translate-y-1`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="flex gap-6 items-center">
                      <div className="relative overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-32 h-24 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="text-xl font-serif text-charcoal group-hover:text-primary transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Spaces Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={exteriorAnimation.ref}
              className={`transition-all duration-700 ${
                exteriorAnimation.isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <h2 className="text-3xl font-serif text-charcoal mb-4">Exterior Spaces & Landscape</h2>
              <p className="text-muted-foreground text-lg">
                Outdoor Living • Pool & Spa • Motor Courts • Native Landscape
              </p>
            </div>
            <div
              className={`group relative overflow-hidden transition-all duration-700 delay-150 ${
                exteriorAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <img 
                src="https://mcdesign.bio/assets/detail-limestone-fireplace-D6LgYJBI.jpg" 
                alt="Exterior spaces"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Furniture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={furnitureAnimation.ref}
              className={`group relative overflow-hidden transition-all duration-700 ${
                furnitureAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
            >
              <img 
                src="https://mcdesign.bio/assets/detail-leather-cabinetry-BBj8D7nk.jpg" 
                alt="Custom furniture"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div
              className={`transition-all duration-700 delay-150 ${
                furnitureAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <h2 className="text-3xl font-serif text-charcoal mb-4">Custom Furniture</h2>
              <p className="text-muted-foreground text-lg">
                Statement Tables • Built-Ins • Vanities • Specialty Storage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development & Concepts Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div 
            ref={developmentAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              developmentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl font-serif text-charcoal mb-4">Development & Concepts</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentConcepts.map((concept, index) => (
              <div 
                key={index} 
                className={`bg-card p-8 border border-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 text-center ${
                  developmentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <h3 className="text-xl font-serif text-charcoal mb-4">{concept.title}</h3>
                <div className="space-y-2">
                  {concept.tags.map((tag, i) => (
                    <span key={i} className="inline-block text-xs text-muted-foreground bg-cream px-3 py-1 rounded m-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Section */}
      <section 
        ref={bespokeAnimation.ref}
        className={`py-20 bg-charcoal text-white transition-all duration-700 ${
          bespokeAnimation.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 
            className={`text-4xl font-serif mb-4 transition-all duration-700 delay-200 ${
              bespokeAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Custom Furniture
          </h2>
          <p 
            className={`text-white/70 mb-8 transition-all duration-700 delay-300 ${
              bespokeAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Bespoke craftsmanship for discerning clients
          </p>
          <Link 
            to="/portfolio"
            className={`inline-block transition-all duration-700 delay-400 ${
              bespokeAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal group">
              Explore Collection <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.ref}
        className={`py-20 bg-cream transition-all duration-700 ${
          ctaAnimation.isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 
            className={`text-4xl font-serif text-charcoal mb-8 transition-all duration-700 delay-200 ${
              ctaAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ready to Discuss Your Vision?
          </h2>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-400 ${
              ctaAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark transition-all hover:scale-105">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="transition-all hover:scale-105">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Design;
