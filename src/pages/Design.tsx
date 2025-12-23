import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { designAlbums } from "@/data/design-albums";

import timberBeamsImg from "@/assets/detail-timber-beams.jpg";
import spaVanityImg from "@/assets/detail-spa-vanity.jpg";
import marbleBathImg from "@/assets/detail-marble-bath.jpg";
import proRangeImg from "@/assets/detail-pro-range.jpg";
import limestoneFireplaceImg from "@/assets/detail-limestone-fireplace.jpg";
import leatherCabinetryImg from "@/assets/detail-leather-cabinetry.jpg";

const interiorCategories = [
  {
    title: "Great Rooms",
    image: spaVanityImg,
    link: "/portfolio?category=Residential+Construction",
  },
  {
    title: "Primary Suites",
    image: marbleBathImg,
    link: "/portfolio?category=Design+Build",
  },
  {
    title: "Chef's Kitchens",
    image: proRangeImg,
    link: "/portfolio?category=Hospitality",
  },
];



const Design = () => {
  const heroAnimation = useScrollAnimation();
  const interiorsAnimation = useScrollAnimation();
  const exteriorAnimation = useScrollAnimation();
  const furnitureAnimation = useScrollAnimation();
  const developmentAnimation = useScrollAnimation();
  const bespokeAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div
          ref={heroAnimation.ref}
          className={`container mx-auto px-6 transition-all duration-700 ${heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back
          </Link>
          <h1 className="text-6xl md:text-7xl font-serif text-charcoal mb-4">INTERIOR DESIGN</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Architecture • Interiors • Custom Environments
          </p>
          <div className="w-20 h-1 bg-primary" />
        </div>
      </section>

      {/* Architecture + Interiors Split Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Large Architecture Image */}
            <div
              ref={interiorsAnimation.ref}
              className={`relative transition-all duration-700 ${interiorsAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
            >
              <div className="relative">
                {/* Corner bracket decoration */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary z-10" />
                <img
                  src={timberBeamsImg}
                  alt="Architecture - Timber beams detail"
                  className="w-full h-[600px] lg:h-[700px] object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Site-responsive design, structural coordination, smart home integration
              </p>
              <h2 className="text-2xl font-serif text-charcoal mt-2 tracking-wider">ARCHITECTURE</h2>
            </div>

            {/* Right: Interiors Stack */}
            <div
              className={`transition-all duration-700 delay-150 ${interiorsAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
            >
              <h3 className="text-xl font-serif text-charcoal mb-6 tracking-wider">INTERIORS</h3>
              <div className="space-y-6">
                {interiorCategories.map((category, index) => (
                  <Link
                    to={category.link}
                    key={index}
                    className="group relative overflow-hidden cursor-pointer block"
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-[1.05]"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500" />
                      {/* Title on photo */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-xl font-serif text-white group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h4>
                      </div>
                      {/* Corner accent */}
                      <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
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
              className={`group relative overflow-hidden transition-all duration-700 ${exteriorAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                }`}
            >
              <img
                src={limestoneFireplaceImg}
                alt="Exterior spaces"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div
              className={`transition-all duration-700 delay-150 ${exteriorAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
            >
              <h2 className="text-2xl font-serif text-charcoal mb-4 tracking-wider">
                EXTERIOR SPACES & LANDSCAPE
              </h2>
              <p className="text-muted-foreground text-lg">
                Outdoor Living • Pool & Spa • Motor Courts • Native Landscape
              </p>
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
              className={`transition-all duration-700 ${furnitureAnimation.isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"
                }`}
            >
              <h2 className="text-2xl font-serif text-charcoal mb-4 tracking-wider">
                CUSTOM FURNITURE
              </h2>
              <p className="text-muted-foreground text-lg">
                Statement Tables • Built-Ins • Vanities • Specialty Storage
              </p>
            </div>
            <div
              className={`group relative overflow-hidden transition-all duration-700 delay-150 ${furnitureAnimation.isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
                }`}
            >
              <img
                src={leatherCabinetryImg}
                alt="Custom furniture"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Development & Concepts Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div
            ref={developmentAnimation.ref}
            className={`text-center mb-16 transition-all duration-700 ${developmentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl font-serif text-charcoal mb-4 tracking-wider">
              DEVELOPMENT & CONCEPTS
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentConcepts.map((concept, index) => (
              <div
                key={index}
                {designAlbums
                  .filter((album) =>
                    [
                      "land-development",
                      "residential-communities",
                      "resort-hospitality",
                      "renovation-repositioning",
                    ].includes(album.id)
                  )
                  .map((album, index) => (
                    <Link
                      to={`/design/${album.id}`}
                      key={album.id}
                      className={`group bg-card border border-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 overflow-hidden rounded-lg ${developmentAnimation.isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                        }`}
                      style={{
                        transitionDelay: `${(index + 1) * 100}ms`,
                      }}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img
                          src={album.coverImage}
                          alt={album.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-serif text-charcoal mb-4">
                          {album.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {album.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                {developmentConcepts.map((concept, index) => <div key={index} className={`bg-card p-8 border border-border hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 text-center ${developmentAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{
                  transitionDelay: `${(index + 1) * 100}ms`
                }}>
                  <h3 className="text-xl font-serif text-charcoal mb-4">{concept.title}</h3>
                  <div className="space-y-2">
                    {concept.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block text-xs text-muted-foreground bg-cream px-3 py-1 rounded m-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>)}
          </div>
        </div>
      </section>

      {/* Design Portfolio Albums (New) */}
      <section className="py-20 bg-background border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-charcoal mb-4 tracking-wider">
              CURATED COLLECTIONS
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our specific design focuses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {designAlbums
              .filter(
                (album) =>
                  ![
                    "land-development",
                    "residential-communities",
                    "resort-hospitality",
                    "renovation-repositioning",
                  ].includes(album.id)
              )
              .map((album) => (
                <div key={album.id} className="group cursor-pointer">
                  <div className="overflow-hidden rounded-lg mb-4 aspect-[4/3] relative">
                    <img
                      src={album.coverImage}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal mb-2 group-hover:text-primary transition-colors">{album.title}</h3>
                  <p className="text-muted-foreground mb-4">{album.description}</p>
                  <Link to={`/design/${album.id}`}>
                    <Button variant="outline">View Collection</Button>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Bespoke Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div
            ref={bespokeAnimation.ref}
            className={`text-center transition-all duration-700 ${bespokeAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl font-serif text-charcoal mb-4 tracking-wider">
              CUSTOM FURNITURE
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Bespoke craftsmanship for discerning clients
            </p>
            <Link to="/portfolio">
              <Button variant="outline" className="group">
                Explore Collection
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-6">
          <div
            ref={ctaAnimation.ref}
            className={`text-center transition-all duration-700 ${ctaAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">
              Ready to Discuss Your Vision?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Design;
