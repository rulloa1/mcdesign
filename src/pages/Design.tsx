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
          <div className="space-y-4 max-w-6xl mx-auto">
            
            {/* Row 1: Large Hero + 3 vertical slivers */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 px-1">
              {/* Left: Large Hero Image (approx 7/12) */}
              <motion.div
                className="lg:col-span-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link to="/portfolio?category=Design+Build" className="group block h-full">
                  <div className="relative aspect-[16/10] border-[0.5px] border-foreground/40 overflow-hidden h-full">
                    <img
                      src={timberBeamsImg}
                      alt="Luxury Residence"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/0 transition-colors duration-500" />
                  </div>
                </Link>
              </motion.div>

              {/* Right: 3 vertical slivers (approx 5/12) */}
              <motion.div
                className="lg:col-span-4 grid grid-cols-3 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative aspect-[1/4] border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={spaVanityImg} alt="Interior Detail 1" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="relative aspect-[1/4] border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={marbleBathImg} alt="Interior Detail 2" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="relative aspect-[1/4] border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={proRangeImg} alt="Interior Detail 3" className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                </div>
              </motion.div>
            </div>

            {/* Row 2: 4 squares + 3 vertical slivers */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 px-1">
              {/* Left: 4 squares (one placeholder) */}
              <motion.div
                className="lg:col-span-7 grid grid-cols-4 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative aspect-square border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={limestoneFireplaceImg} alt="Detail 1" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={leatherCabinetryImg} alt="Detail 2" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={timberBeamsImg} alt="Detail 3" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square border-[0.5px] border-foreground/40 bg-charcoal/10 flex items-center justify-center">
                  <div className="w-full h-full border-[0.5px] border-foreground/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <div className="w-full h-px bg-foreground rotate-45 absolute" />
                      <div className="w-full h-px bg-foreground -rotate-45 absolute" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: 3 vertical slivers (top half) */}
              <div className="lg:col-span-5 grid grid-cols-3 gap-1">
                {/* These will be part of a larger vertical block or separate rows as needed */}
                <div className="relative aspect-[1/3] border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={spaVanityImg} alt="Detail" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[1/3] border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={marbleBathImg} alt="Detail" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[1/3] border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={proRangeImg} alt="Detail" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Row 3: Two large vertical images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 px-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative aspect-[3/4] border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={spaVanityImg} alt="Stairs Detail" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="relative aspect-[3/4] border-[0.5px] border-foreground/40 overflow-hidden">
                  <img src={limestoneFireplaceImg} alt="Architecture Detail" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Row 4: Complex Architecture Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 px-1">
              {/* Left small vertical slivers next to large ones */}
              <div className="lg:col-span-3 grid grid-cols-2 gap-1">
                 <div className="relative aspect-[1/2] border-[0.5px] border-foreground/40 overflow-hidden">
                    <img src={proRangeImg} alt="Detail" className="w-full h-full object-cover" />
                 </div>
                 <div className="relative aspect-[1/2] border-[0.5px] border-foreground/40 overflow-hidden">
                    <img src={leatherCabinetryImg} alt="Detail" className="w-full h-full object-cover" />
                 </div>
              </div>
              {/* Right: Architectural shots */}
              <div className="lg:col-span-9 grid grid-cols-2 gap-1">
                <div className="flex flex-col gap-1">
                  <div className="relative aspect-[16/9] border-[0.5px] border-foreground/40 overflow-hidden flex-1">
                      <img src={timberBeamsImg} alt="Ext" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative aspect-[16/9] border-[0.5px] border-foreground/40 overflow-hidden flex-1">
                      <img src={limestoneFireplaceImg} alt="Ext" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="relative aspect-[4/3] border-[0.5px] border-foreground/40 overflow-hidden flex-1">
                      <img src={marbleBathImg} alt="Ext" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative aspect-square border-[0.5px] border-foreground/40 overflow-hidden">
                      <img src={spaVanityImg} alt="Ext" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative aspect-square border-[0.5px] border-foreground/40 overflow-hidden">
                      <img src={proRangeImg} alt="Ext" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5: LOGO + CUSTOM FURNITURE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 px-1 pt-4">
              {/* Logo Box */}
              <div className="lg:col-span-3">
                <div className="relative aspect-square border-[0.5px] border-foreground/40 flex items-center justify-center group overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-px bg-foreground rotate-45 absolute top-1/2" />
                      <div className="w-full h-px bg-foreground -rotate-45 absolute top-1/2" />
                  </div>
                  <img src={mcLogo} alt="MC Logo" className="w-16 h-16 object-contain z-10 opacity-60" />
                  <span className="absolute bottom-2 text-[8px] tracking-[0.3em] uppercase opacity-40">Logo</span>
                </div>
              </div>
              {/* Custom Furniture Sliver */}
              <div className="lg:col-span-9 flex flex-col justify-end">
                <div className="relative aspect-[4/1] border-[0.5px] border-foreground/40 overflow-hidden">
                   <img src={leatherCabinetryImg} alt="Custom Furniture" className="w-full h-full object-cover opacity-90" />
                   <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-end">
                      <span className="text-[10px] tracking-[0.5em] uppercase text-white/70">Custom Furniture</span>
                   </div>
                </div>
              </div>
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
