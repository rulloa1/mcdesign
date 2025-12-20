import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back
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
            <div className="relative">
              <img 
                src="https://mcdesign.bio/assets/detail-timber-beams-DCRmMNpo.jpg" 
                alt="Architecture detail" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary" />
            </div>
            <div>
              <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Architecture</p>
              <p className="text-muted-foreground mb-12">Site-responsive design, structural coordination, smart home integration</p>
              
              <h2 className="text-3xl font-serif text-charcoal mb-8">Interiors</h2>
              <div className="space-y-6">
                {interiorCategories.map((category, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex gap-6 items-center">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-32 h-24 object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <h3 className="text-xl font-serif text-charcoal group-hover:text-primary transition-colors">
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
            <div>
              <h2 className="text-3xl font-serif text-charcoal mb-4">Exterior Spaces & Landscape</h2>
              <p className="text-muted-foreground text-lg">
                Outdoor Living • Pool & Spa • Motor Courts • Native Landscape
              </p>
            </div>
            <img 
              src="https://mcdesign.bio/assets/detail-limestone-fireplace-D6LgYJBI.jpg" 
              alt="Exterior spaces"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Custom Furniture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img 
              src="https://mcdesign.bio/assets/detail-leather-cabinetry-BBj8D7nk.jpg" 
              alt="Custom furniture"
              className="w-full h-80 object-cover"
            />
            <div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">Development & Concepts</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentConcepts.map((concept, index) => (
              <div key={index} className="bg-card p-8 border border-border hover:border-primary/30 transition-all text-center">
                <h3 className="text-xl font-serif text-charcoal mb-4">{concept.title}</h3>
                <div className="space-y-2">
                  {concept.tags.map((tag, i) => (
                    <p key={i} className="text-sm text-muted-foreground">{tag}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-4">Custom Furniture</h2>
          <p className="text-white/70 mb-8">Bespoke craftsmanship for discerning clients</p>
          <Link to="/portfolio">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
              Explore Collection <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-charcoal mb-8">Ready to Discuss Your Vision?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline">
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
