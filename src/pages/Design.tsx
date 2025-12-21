import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const interiorCategories = [{
  title: "Great Rooms",
  image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.webp"
}, {
  title: "Primary Suites",
  image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/montana-cover.webp"
}, {
  title: "Chef's Kitchens",
  image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/southcoast-cover.webp"
}];
const developmentConcepts = [{
  title: "Land Development",
  tags: ["Entitlements", "Infrastructure", "Planning"]
}, {
  title: "Residential Communities",
  tags: ["Master Plan", "Amenities", "HOA"]
}, {
  title: "Resort & Hospitality",
  tags: ["Mixed-Use", "Golf", "Private Clubs"]
}, {
  title: "Renovation & Repositioning",
  tags: ["Historic", "Adaptive Reuse", "Restoration"]
}];
const Design = () => {
  const heroAnimation = useScrollAnimation();
  const architectureAnimation = useScrollAnimation();
  const interiorsAnimation = useScrollAnimation();
  const exteriorAnimation = useScrollAnimation();
  const furnitureAnimation = useScrollAnimation();
  const developmentAnimation = useScrollAnimation();
  const bespokeAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();
  return <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div ref={heroAnimation.ref} className={`container mx-auto px-6 transition-all duration-700 ${heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back
          </Link>
          <h1 className="text-6xl md:text-7xl font-serif text-charcoal mb-4">DESIGN</h1>
          <p className="text-muted-foreground text-lg mb-6">Architecture • Interiors • Custom Environments</p>
          <div className="w-20 h-1 bg-primary" />
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={architectureAnimation.ref} className={`group relative overflow-hidden transition-all duration-700 ${architectureAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <img src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.webp" alt="Architecture" className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className={`transition-all duration-700 delay-150 ${architectureAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <h2 className="text-3xl font-serif text-charcoal mb-4">Architecture</h2>
              <p className="text-muted-foreground text-lg mb-6">
                From concept to completion, we craft residences that seamlessly blend form and function. Our architectural vision embraces modern luxury while honoring timeless design principles.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Custom Home Design
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Renovations & Additions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Schematic & Construction Documents
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interiors Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div ref={interiorsAnimation.ref} className={`text-center mb-16 transition-all duration-700 ${interiorsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl font-serif text-charcoal mb-4">Interior Design</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Curated spaces that reflect your lifestyle. Every detail is thoughtfully considered to create environments of enduring beauty.
            </p>
            <div className="w-20 h-1 bg-primary mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {interiorCategories.map((category, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden transition-all duration-500 ${interiorsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-[1.05]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-serif text-white">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exterior Spaces Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={exteriorAnimation.ref} className={`transition-all duration-700 ${exteriorAnimation.isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <h2 className="text-3xl font-serif text-charcoal mb-4">Exterior Spaces & Landscape</h2>
              <p className="text-muted-foreground text-lg">
                Outdoor Living • Pool & Spa • Motor Courts • Native Landscape
              </p>
            </div>
            <div className={`group relative overflow-hidden transition-all duration-700 delay-150 ${exteriorAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <img src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-cover.webp" alt="Exterior spaces" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Custom Furniture Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={furnitureAnimation.ref} className={`group relative overflow-hidden transition-all duration-700 ${furnitureAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <img src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls-cover.webp" alt="Custom furniture" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className={`transition-all duration-700 delay-150 ${furnitureAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
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
          <div ref={developmentAnimation.ref} className={`text-center mb-16 transition-all duration-700 ${developmentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl font-serif text-charcoal mb-4">Development & Concepts</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentConcepts.map((concept, index) => <div key={index} className={`bg-card p-8 border border-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 text-center ${developmentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
            transitionDelay: `${(index + 1) * 100}ms`
          }}>
                <h3 className="text-xl font-serif text-charcoal mb-4">{concept.title}</h3>
                <div className="space-y-2">
                  {concept.tags.map((tag, i) => <span key={i} className="inline-block text-xs text-muted-foreground bg-cream px-3 py-1 rounded m-1">
                      {tag}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Bespoke Section */}
      

      {/* CTA Section */}
      
    </Layout>;
};
export default Design;