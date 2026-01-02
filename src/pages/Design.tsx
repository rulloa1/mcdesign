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
import mcLogo from "@/assets/mc-logo.png";

const Design = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* DESIGN Header */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.4em] text-foreground mb-12 uppercase underline underline-offset-8 decoration-1"
          >
            Design
          </motion.h1>

          {/* Main Grid Layout */}
          <div className="space-y-4">
            
            {/* Row 1: Hero + Interiors (3 vertical) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left: Large Hero Image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link to="/portfolio?category=Design+Build" className="group block">
                  <div className="relative aspect-[4/3] border border-foreground/30 overflow-hidden">
                    <img
                      src={timberBeamsImg}
                      alt="Design Build"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-500" />
                  </div>
                </Link>
              </motion.div>

              {/* Right: INTERIORS - 3 vertical images */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <Link to="/portfolio?category=Residential+Construction" className="group block">
                  <h2 className="text-right text-lg md:text-xl font-serif text-foreground tracking-[0.3em] uppercase font-light mb-3 group-hover:text-gold transition-colors">
                    Interiors
                  </h2>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                      <img
                        src={spaVanityImg}
                        alt="Interiors 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                      <img
                        src={marbleBathImg}
                        alt="Interiors 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                      <img
                        src={proRangeImg}
                        alt="Interiors 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Row 2: Architecture (4 squares with 1 gray placeholder) + 3 tall verticals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left: ARCHITECTURE - 4 squares in row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link to="/portfolio?category=Design+Build" className="group block">
                  <h2 className="text-lg md:text-xl font-serif text-foreground tracking-[0.3em] uppercase font-light mb-3 group-hover:text-gold transition-colors">
                    Architecture
                  </h2>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="relative aspect-square border border-foreground/30 overflow-hidden">
                      <img
                        src={limestoneFireplaceImg}
                        alt="Architecture 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    <div className="relative aspect-square border border-foreground/30 overflow-hidden">
                      <img
                        src={leatherCabinetryImg}
                        alt="Architecture 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    {/* Gray placeholder with image icon */}
                    <div className="relative aspect-square border border-foreground/30 overflow-hidden bg-muted flex items-center justify-center">
                      <svg className="w-8 h-8 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21,15 16,10 5,21" />
                      </svg>
                    </div>
                    <div className="relative aspect-square border border-foreground/30 overflow-hidden">
                      <img
                        src={timberBeamsImg}
                        alt="Architecture 3"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Right: 3 tall vertical images (continuation) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                <div className="grid grid-cols-3 gap-2 lg:mt-8">
                  <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                    <img
                      src={spaVanityImg}
                      alt="Detail 1"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                    <img
                      src={marbleBathImg}
                      alt="Detail 2"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                    <img
                      src={proRangeImg}
                      alt="Detail 3"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: REIMAGINED (2 tall) + POOLS & LANDSCAPE (1 tall + 2 horizontal stacked) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left: REIMAGINED - 2 tall vertical images */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Link to="/portfolio" className="group block">
                  <h2 className="text-lg md:text-xl font-serif text-foreground tracking-[0.3em] uppercase font-light mb-3 group-hover:text-gold transition-colors">
                    Reimagined
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                      <img
                        src={marbleBathImg}
                        alt="Reimagined 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                      <img
                        src={limestoneFireplaceImg}
                        alt="Reimagined 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Right: POOLS & LANDSCAPE - 1 tall + 2 horizontal stacked */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Link to="/design/pools-exterior" className="group block">
                  <h2 className="text-right text-lg md:text-xl font-serif text-foreground tracking-[0.3em] uppercase font-light mb-3 group-hover:text-gold transition-colors">
                    Pools & Landscape
                  </h2>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Left: 1 tall vertical */}
                    <div className="relative aspect-[2/3] border border-foreground/30 overflow-hidden">
                      <img
                        src={proRangeImg}
                        alt="Pools 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    {/* Right: 2 horizontal stacked */}
                    <div className="flex flex-col gap-2">
                      <div className="relative aspect-[16/9] border border-foreground/30 overflow-hidden flex-1">
                        <img
                          src={limestoneFireplaceImg}
                          alt="Pools 2"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                      </div>
                      <div className="relative aspect-[16/9] border border-foreground/30 overflow-hidden flex-1">
                        <img
                          src={spaVanityImg}
                          alt="Pools 3"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Row 4: DEVELOPMENT (large) + 2 horizontal stacked + diagonal image */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Left: DEVELOPMENT - large image with label overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/services" className="group block">
                  <div className="relative aspect-[4/3] border border-foreground/30 overflow-hidden">
                    <img
                      src={timberBeamsImg}
                      alt="Development"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/10 transition-colors duration-500" />
                    <h2 className="absolute bottom-6 left-6 text-lg md:text-xl font-serif text-foreground tracking-[0.3em] uppercase font-light group-hover:text-gold transition-colors">
                      Development
                    </h2>
                  </div>
                </Link>
              </motion.div>

              {/* Right: 2 horizontal stacked + diagonal split image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="space-y-2"
              >
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative aspect-[16/9] border border-foreground/30 overflow-hidden">
                    <img
                      src={leatherCabinetryImg}
                      alt="Detail 4"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="relative aspect-[16/9] border border-foreground/30 overflow-hidden">
                    <img
                      src={marbleBathImg}
                      alt="Detail 5"
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                {/* Diagonal split large image */}
                <div className="relative aspect-[16/9] border border-foreground/30 overflow-hidden">
                  <img
                    src={proRangeImg}
                    alt="Diagonal Detail"
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                </div>
              </motion.div>
            </div>

            {/* Row 5: LOGO + CUSTOM FURNITURE (2 wide horizontal images) */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Left: LOGO square */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="lg:col-span-1"
              >
                <div className="relative aspect-square border border-foreground/30 overflow-hidden bg-muted/20 flex items-center justify-center">
                  <img
                    src={mcLogo}
                    alt="MC Logo"
                    className="w-16 h-16 object-contain opacity-70"
                  />
                  <span className="absolute bottom-3 left-3 text-xs font-serif text-muted-foreground tracking-[0.2em] uppercase">
                    Logo
                  </span>
                </div>
              </motion.div>

              {/* Right: CUSTOM FURNITURE - 2 wide horizontal stacked */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="lg:col-span-4"
              >
                <Link to="/design/finishes" className="group block">
                  <div className="space-y-2">
                    <div className="relative aspect-[4/1] border border-foreground/30 overflow-hidden">
                      <img
                        src={leatherCabinetryImg}
                        alt="Custom Furniture 1"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    <div className="relative aspect-[4/1] border border-foreground/30 overflow-hidden">
                      <img
                        src={timberBeamsImg}
                        alt="Custom Furniture 2"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                  </div>
                  <h2 className="text-right text-lg md:text-xl font-serif text-foreground tracking-[0.3em] uppercase font-light mt-3 group-hover:text-gold transition-colors">
                    Custom Furniture
                  </h2>
                </Link>
              </motion.div>
            </div>
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
