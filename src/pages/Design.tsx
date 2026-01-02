import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { designAlbums } from "@/data/design-albums";

import timberBeamsImg from "@/assets/detail-timber-beams.jpg";
import spaVanityImg from "@/assets/detail-spa-vanity.jpg";
import marbleBathImg from "@/assets/detail-marble-bath.jpg";
import proRangeImg from "@/assets/detail-pro-range.jpg";
import limestoneFireplaceImg from "@/assets/detail-limestone-fireplace.jpg";
import leatherCabinetryImg from "@/assets/detail-leather-cabinetry.jpg";

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
            className="text-center text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.4em] text-foreground mb-12 uppercase underline underline-offset-8 decoration-1"
          >
            Design
          </motion.h1>

          {/* Grid Layout matching wireframe */}
          <div className="grid grid-cols-12 gap-3 lg:gap-4">
            
            {/* Row 1-2: Main Architecture Block (large, spans rows) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-12 lg:col-span-7 row-span-1 lg:row-span-2"
            >
              <Link to="/portfolio?category=Design+Build" className="group block h-full">
                <div className="relative h-[400px] lg:h-full lg:min-h-[580px] border border-foreground/80 overflow-hidden">
                  <img
                    src={timberBeamsImg}
                    alt="Architecture"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                </div>
                <h2 className="mt-2 text-lg md:text-xl font-serif text-foreground tracking-[0.2em] uppercase font-light underline underline-offset-4 decoration-1 group-hover:text-gold transition-colors">
                  Architecture
                </h2>
              </Link>
            </motion.div>

            {/* Interiors - Top Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="col-span-12 lg:col-span-5"
            >
              <Link to="/portfolio?category=Residential+Construction" className="group block">
                <h2 className="mb-2 text-lg md:text-xl font-serif text-foreground tracking-[0.2em] uppercase font-light underline underline-offset-4 decoration-1 text-right group-hover:text-gold transition-colors">
                  Interiors
                </h2>
                <div className="relative h-[200px] lg:h-[240px] border border-foreground/80 overflow-hidden">
                  <img
                    src={spaVanityImg}
                    alt="Interiors"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Pools & Landscape - Right Side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-12 lg:col-span-5"
            >
              <Link to="/design/pools-exterior" className="group block">
                <div className="relative h-[200px] lg:h-[280px] border border-foreground/80 overflow-hidden">
                  <img
                    src={limestoneFireplaceImg}
                    alt="Pools & Landscape"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                </div>
                <h2 className="mt-2 text-lg md:text-xl font-serif text-foreground tracking-[0.2em] uppercase font-light underline underline-offset-4 decoration-1 text-right group-hover:text-gold transition-colors">
                  Pools & Landscape
                </h2>
              </Link>
            </motion.div>

            {/* Row 3: Reimagined - Large Left */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="col-span-12 lg:col-span-7"
            >
              <Link to="/portfolio" className="group block">
                <div className="relative h-[300px] lg:h-[380px] border border-foreground/80 overflow-hidden">
                  <img
                    src={marbleBathImg}
                    alt="Reimagined"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                </div>
                <h2 className="mt-2 text-lg md:text-xl font-serif text-foreground tracking-[0.2em] uppercase font-light underline underline-offset-4 decoration-1 group-hover:text-gold transition-colors">
                  Reimagined
                </h2>
              </Link>
            </motion.div>

            {/* Concepts - Right (spans 2 rows) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-12 lg:col-span-5 lg:row-span-2"
            >
              <Link to="/services" className="group block h-full">
                <div className="relative h-[300px] lg:h-full lg:min-h-[500px] border border-foreground/80 overflow-hidden">
                  <img
                    src={proRangeImg}
                    alt="Concepts"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                </div>
                <h2 className="mt-2 text-lg md:text-xl font-serif text-foreground tracking-[0.2em] uppercase font-light underline underline-offset-4 decoration-1 text-right group-hover:text-gold transition-colors">
                  Concepts
                </h2>
              </Link>
            </motion.div>

            {/* Row 4: Development (with X) + Custom Furniture */}
            {/* Development - Small Left with X pattern */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="col-span-4 lg:col-span-2"
            >
              <Link to="/services" className="group block">
                <h2 className="mb-2 text-sm md:text-base font-serif text-foreground tracking-[0.15em] uppercase font-light underline underline-offset-4 decoration-1 group-hover:text-gold transition-colors">
                  Development
                </h2>
                <div className="relative h-[150px] lg:h-[180px] border border-foreground/80 overflow-hidden bg-background">
                  {/* X Pattern */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="1" className="text-foreground/60" />
                    <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" className="text-foreground/60" />
                  </svg>
                </div>
              </Link>
            </motion.div>

            {/* Custom Furniture - Wide Right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-8 lg:col-span-5"
            >
              <Link to="/design/finishes" className="group block">
                <div className="relative h-[150px] lg:h-[180px] border border-foreground/80 overflow-hidden">
                  <img
                    src={leatherCabinetryImg}
                    alt="Custom Furniture"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  />
                </div>
                <h2 className="mt-2 text-sm md:text-base font-serif text-foreground tracking-[0.15em] uppercase font-light underline underline-offset-4 decoration-1 text-right group-hover:text-gold transition-colors">
                  Custom Furniture
                </h2>
              </Link>
            </motion.div>
          </div>

          {/* Curated Collections */}
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
