import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { designAlbums } from "@/data/design-albums";
import { useRef } from "react";

import timberBeamsImg from "@/assets/detail-timber-beams.jpg";
import spaVanityImg from "@/assets/detail-spa-vanity.jpg";
import marbleBathImg from "@/assets/detail-marble-bath.jpg";
import proRangeImg from "@/assets/detail-pro-range.jpg";
import limestoneFireplaceImg from "@/assets/detail-limestone-fireplace.jpg";
import leatherCabinetryImg from "@/assets/detail-leather-cabinetry.jpg";

// Cinematic parallax image with blur/fade as it scrolls out of view
const ParallaxImage = ({ 
  src, 
  alt, 
  parallaxStrength = 20 
}: { 
  src: string; 
  alt: string; 
  parallaxStrength?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax movement
  const y = useTransform(scrollYProgress, [0, 1], [parallaxStrength, -parallaxStrength]);

  // Cinematic blur effect - blur as image exits viewport edges
  const blur = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    [6, 0, 0, 6]
  );
  
  // Fade effect - subtle fade at viewport edges
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.12, 0.88, 1], 
    [0.4, 1, 1, 0.4]
  );
  
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ 
          y,
          opacity,
          filter: useTransform(blur, b => `blur(${b}px)`)
        }}
        className="w-full h-[120%] object-cover absolute -top-[10%] transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  );
};

const Design = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-6 lg:px-12">
          {/* DESIGN Header */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.3em] text-foreground mb-16 uppercase"
          >
            Design
          </motion.h1>

          {/* Asymmetrical Grid Layout - Mobile-first approach */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-12 md:gap-5 lg:gap-6">
            
            {/* Architecture - Large Hero Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:col-span-7 md:row-span-2"
            >
              <Link to="/portfolio?category=Design+Build" className="group block h-full">
                <div className="relative h-[350px] sm:h-[400px] md:h-full md:min-h-[500px] lg:min-h-[700px] border border-border overflow-hidden">
                  <ParallaxImage src={timberBeamsImg} alt="Architecture" parallaxStrength={30} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 lg:p-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-cream tracking-[0.15em] uppercase font-light group-hover:text-gold transition-colors">
                      Architecture
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Interiors - Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="md:col-span-5"
            >
              <Link to="/portfolio?category=Residential+Construction" className="group block">
                <div className="relative h-[280px] sm:h-[300px] md:h-[240px] lg:h-[340px] border border-border overflow-hidden">
                  <ParallaxImage src={spaVanityImg} alt="Interiors" parallaxStrength={15} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 right-0 p-5 sm:p-6 lg:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-cream tracking-[0.15em] uppercase font-light group-hover:text-gold transition-colors">
                      Interiors
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Pools & Landscape - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="md:col-span-5"
            >
              <Link to="/design/pools-exterior" className="group block">
                <div className="relative h-[280px] sm:h-[300px] md:h-[240px] lg:h-[340px] border border-border overflow-hidden">
                  <ParallaxImage src={limestoneFireplaceImg} alt="Pools & Landscape" parallaxStrength={15} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 right-0 p-5 sm:p-6 lg:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-cream tracking-[0.15em] uppercase font-light group-hover:text-gold transition-colors">
                      Pools & Landscape
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Reimagined - Left/Center */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="md:col-span-7"
            >
              <Link to="/portfolio" className="group block">
                <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] border border-border overflow-hidden">
                  <ParallaxImage src={marbleBathImg} alt="Reimagined" parallaxStrength={20} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 sm:p-6 lg:p-8">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-cream tracking-[0.15em] uppercase font-light group-hover:text-gold transition-colors">
                      Reimagined
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Concepts - Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="md:col-span-5"
            >
              <Link to="/services" className="group block">
                <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] border border-border overflow-hidden">
                  <ParallaxImage src={proRangeImg} alt="Concepts" parallaxStrength={20} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 right-0 p-5 sm:p-6 lg:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-cream tracking-[0.15em] uppercase font-light group-hover:text-gold transition-colors">
                      Concepts
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Bottom Row: Development + Custom Furniture - Side by side on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="col-span-1 md:col-span-4"
            >
              <Link to="/services" className="group block">
                <div className="relative h-[200px] sm:h-[250px] lg:h-[350px] border border-border overflow-hidden bg-charcoal">
                  {/* X Pattern Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
                      <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-5 lg:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-cream tracking-[0.1em] sm:tracking-[0.15em] uppercase font-light group-hover:text-gold transition-colors">
                      Development
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Custom Furniture - Right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="col-span-1 md:col-span-8"
            >
              <Link to="/design/finishes" className="group block">
                <div className="relative h-[200px] sm:h-[250px] lg:h-[350px] border border-border overflow-hidden">
                  <ParallaxImage src={leatherCabinetryImg} alt="Custom Furniture" parallaxStrength={15} />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 right-0 p-4 sm:p-5 lg:p-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-cream tracking-[0.1em] sm:tracking-[0.15em] uppercase font-light group-hover:text-gold transition-colors">
                      Custom Furniture
                    </h2>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Curated Collections - Below Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 pt-16 border-t border-border/30"
          >
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-4">Collections</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground font-light mb-4 tracking-wide">
                Curated Collections
              </h2>
              <p className="text-sm text-muted-foreground font-light">
                Explore our specific design focuses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designAlbums.map((album, index) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/design/${album.id}`}>
                    <div className="overflow-hidden mb-4 aspect-[4/3] relative border border-border">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-serif text-foreground mb-2 font-light group-hover:text-gold transition-colors tracking-wide">
                      {album.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light line-clamp-2">{album.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default Design;
