import Layout from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { designAlbums } from "@/data/design-albums";
import { motion, useScroll, useTransform } from "framer-motion";

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

const developmentConcepts = [
  {
    title: "Land Development",
    tags: ["Entitlements", "Infrastructure", "Planning"],
  },
  {
    title: "Residential Communities",
    tags: ["Master Plan", "Amenities", "HOA"],
  },
  {
    title: "Resort & Hospitality",
    tags: ["Mixed-Use", "Golf", "Private Clubs"],
  },
  {
    title: "Renovation & Repositioning",
    tags: ["Historic", "Adaptive Reuse", "Restoration"],
  },
];

const Design = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Layout>
      {/* Hero - Full Split Layout (matching Portfolio) */}
      <section ref={heroRef} className="min-h-screen flex flex-col lg:flex-row">
        {/* Left - Dark Hero with Parallax Background */}
        <div className="relative flex-1 bg-charcoal flex items-center justify-center overflow-hidden min-h-[60vh] lg:min-h-screen">
          {/* Parallax Background Images */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: backgroundY, scale: backgroundScale }}
          >
            <div className="grid h-full w-full grid-cols-3 grid-rows-3">
              {[timberBeamsImg, spaVanityImg, marbleBathImg, proRangeImg, limestoneFireplaceImg, leatherCabinetryImg, timberBeamsImg, spaVanityImg, marbleBathImg].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  aria-hidden="true"
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover opacity-60"
                />
              ))}
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-charcoal/70" />

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal/80 z-0" />

          {/* MC Logo */}
          <div className="absolute top-12 left-12 z-20">
            <div className="w-10 h-10 border border-gold/50 flex items-center justify-center">
              <span className="font-serif text-sm font-medium text-gold">MC</span>
            </div>
          </div>

          {/* Vertical Side Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-16 left-12 hidden lg:block z-20"
          >
            <p
              className="text-[9px] tracking-[0.35em] text-cream/30 font-light uppercase"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              Architecture & Interiors
            </p>
          </motion.div>
        </div>

        {/* Right - Content Section */}
        <div className="relative flex-1 bg-background flex flex-col min-h-[40vh] lg:min-h-screen">
          {/* Minimal Corner Accent */}
          <div className="absolute top-16 right-16 w-20 h-20 border-t border-r border-border hidden lg:block" />

          {/* Header Area */}
          <div className="flex justify-between items-center px-8 lg:px-20 py-8 lg:py-12">
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <span className="font-serif text-[10px] font-medium text-charcoal">MC</span>
            </div>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground font-light uppercase">
              Est. 1987
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center px-8 lg:px-20 py-8 lg:py-16">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all mb-8 lg:mb-16 self-start group text-[11px] tracking-[0.15em] uppercase font-light"
            >
              <span className="text-sm group-hover:-translate-x-1 transition-transform">←</span>
              Back
            </motion.button>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-6xl font-serif font-light text-foreground mb-6 lg:mb-8 tracking-tight leading-[1.1]"
            >
              Interior<br />Design
            </motion.h1>

            {/* Subtle Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-[1px] bg-gold mb-6 lg:mb-10"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm leading-relaxed text-muted-foreground max-w-md mb-10 lg:mb-20 font-light"
            >
              Architecture, interiors, and custom environments crafted with 
              meticulous attention to detail and timeless elegance.
            </motion.p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 mt-auto">
              {["Architecture", "Interiors", "Custom"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.6 }}
                >
                  <span className="text-[9px] lg:text-[10px] tracking-[0.2em] text-gold font-light uppercase">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture + Interiors Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Large Architecture Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute top-6 left-6 w-16 h-16 border-l border-t border-gold/30 z-10" />
                <img
                  src={timberBeamsImg}
                  alt="Architecture - Timber beams detail"
                  className="w-full h-[600px] lg:h-[700px] object-cover"
                />
              </div>
              <p className="mt-6 text-[11px] tracking-[0.15em] text-muted-foreground font-light uppercase">
                Site-responsive design, structural coordination, smart home integration
              </p>
              <h2 className="text-2xl font-serif text-foreground mt-3 font-light">Architecture</h2>
            </motion.div>

            {/* Right: Interiors Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-[11px] tracking-[0.2em] text-gold font-light uppercase mb-8">Interiors</h3>
              <div className="space-y-8">
                {interiorCategories.map((category, index) => (
                  <Link
                    to={category.link}
                    key={index}
                    className="group relative overflow-hidden cursor-pointer block"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h4 className="text-xl font-serif text-cream font-light group-hover:text-gold transition-colors duration-300">
                          {category.title}
                        </h4>
                      </div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exterior Spaces Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative overflow-hidden"
            >
              <img
                src={limestoneFireplaceImg}
                alt="Exterior spaces"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 font-light">
                Exterior Spaces<br />& Landscape
              </h2>
              <div className="w-10 h-[1px] bg-gold mb-8" />
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Outdoor Living • Pool & Spa • Motor Courts • Native Landscape
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Furniture Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 font-light">
                Custom<br />Furniture
              </h2>
              <div className="w-10 h-[1px] bg-gold mb-8" />
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Statement Tables • Built-Ins • Vanities • Specialty Storage
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden order-1 lg:order-2"
            >
              <img
                src={leatherCabinetryImg}
                alt="Custom furniture"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development & Concepts Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-4">Expertise</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground font-light mb-6">
              Development & Concepts
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentConcepts.map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-10 border border-border hover:border-gold/30 transition-all duration-500 text-center group"
              >
                <h3 className="text-lg font-serif text-foreground mb-6 font-light group-hover:text-gold transition-colors">
                  {concept.title}
                </h3>
                <div className="space-y-2">
                  {concept.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block text-[10px] tracking-[0.1em] text-muted-foreground bg-cream px-4 py-2 m-1 font-light uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Collections */}
      <section className="py-24 bg-background border-t border-border/30">
        <div className="container mx-auto px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-4">Collections</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground font-light mb-4">
              Curated Collections
            </h2>
            <p className="text-sm text-muted-foreground font-light">
              Explore our specific design focuses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {designAlbums.map((album, index) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden mb-6 aspect-[4/3] relative">
                  <img
                    src={album.coverImage}
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-3 font-light group-hover:text-gold transition-colors">
                  {album.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 font-light">{album.description}</p>
                <Link to={`/design/${album.id}`}>
                  <Button 
                    variant="outline" 
                    className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream text-[11px] tracking-[0.15em] uppercase font-light px-8 py-5"
                  >
                    View Collection
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-6">Begin Your Journey</p>
            <h2 className="text-3xl md:text-5xl font-serif text-cream mb-10 font-light">
              Ready to Discuss Your Vision?
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="bg-gold hover:bg-gold/90 text-charcoal text-[11px] tracking-[0.15em] uppercase font-light px-10 py-6">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button 
                  variant="outline" 
                  className="border-cream/30 text-cream hover:bg-cream/10 text-[11px] tracking-[0.15em] uppercase font-light px-10 py-6"
                >
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-3" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Design;
