// Design page layout - Modern architectural portfolio grid with black background
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
      <div className="min-h-screen bg-charcoal pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* DESIGN Header - Centered with spacing */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-[0.4em] text-cream mb-16 uppercase underline underline-offset-8 decoration-1"
          >
            Design
          </motion.h1>

          {/* Main Grid Layout - Black background with cream/gold text */}
          <div className="space-y-1 max-w-7xl mx-auto">

            {/* Row 1: Large Hero Image (16:10) + 3 vertical slivers */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
              {/* Left: Large Hero Image (8/12) */}
              <motion.div
                className="lg:col-span-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Link to="/portfolio?category=Design+Build" className="group block h-full">
                  <div className="relative aspect-[16/10] border border-cream/20 overflow-hidden h-full">
                    <img
                      src={timberBeamsImg}
                      alt="Luxury Residence"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/0 transition-colors duration-500" />
                  </div>
                </Link>
              </motion.div>

              {/* Right: 3 vertical slivers (4/12) */}
              <motion.div
                className="lg:col-span-4 grid grid-cols-3 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative aspect-[1/4] border border-cream/20 overflow-hidden">
                  <img src={spaVanityImg} alt="Interior Detail 1" className="w-full h-full object-cover hover:brightness-110 transition-all duration-700" />
                </div>
                <div className="relative aspect-[1/4] border border-cream/20 overflow-hidden">
                  <img src={marbleBathImg} alt="Interior Detail 2" className="w-full h-full object-cover hover:brightness-110 transition-all duration-700" />
                </div>
                <div className="relative aspect-[1/4] border border-cream/20 overflow-hidden">
                  <img src={proRangeImg} alt="Interior Detail 3" className="w-full h-full object-cover hover:brightness-110 transition-all duration-700" />
                </div>
              </motion.div>
            </div>

            {/* Row 2: 3 small squares + 1 placeholder + 3 tall vertical slivers */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
              {/* Left: 3 small squares + 1 placeholder (4/12) */}
              <motion.div
                className="lg:col-span-4 grid grid-cols-2 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="relative aspect-square border border-cream/20 overflow-hidden">
                  <img src={limestoneFireplaceImg} alt="Detail 1" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square border border-cream/20 overflow-hidden">
                  <img src={leatherCabinetryImg} alt="Detail 2" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square border border-cream/20 overflow-hidden">
                  <img src={timberBeamsImg} alt="Detail 3" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-square border border-cream/20 bg-charcoal/30 flex items-center justify-center">
                  <div className="w-full h-full border border-cream/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-30">
                      <div className="w-full h-px bg-cream rotate-45 absolute" />
                      <div className="w-full h-px bg-cream -rotate-45 absolute" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right: 3 vertical slivers (8/12) */}
              <motion.div
                className="lg:col-span-8 grid grid-cols-3 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative aspect-[1/2.5] border border-cream/20 overflow-hidden">
                  <img src={spaVanityImg} alt="Detail" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[1/2.5] border border-cream/20 overflow-hidden">
                  <img src={marbleBathImg} alt="Detail" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[1/2.5] border border-cream/20 overflow-hidden">
                  <img src={proRangeImg} alt="Detail" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Row 3: Two medium-tall vertical images side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="relative aspect-[3/4] border border-cream/20 overflow-hidden">
                  <img src={spaVanityImg} alt="Stairs Detail" className="w-full h-full object-cover" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="relative aspect-[3/4] border border-cream/20 overflow-hidden">
                  <img src={limestoneFireplaceImg} alt="Architecture Detail" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>

            {/* Row 4: Complex Architecture Grid - Left small + Right large */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
              {/* Left: 2 small vertical slivers (2/12) */}
              <motion.div
                className="lg:col-span-2 grid grid-cols-1 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="relative aspect-[1/2] border border-cream/20 overflow-hidden">
                  <img src={proRangeImg} alt="Detail" className="w-full h-full object-cover" />
                </div>
                <div className="relative aspect-[1/2] border border-cream/20 overflow-hidden">
                  <img src={leatherCabinetryImg} alt="Detail" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Right: Complex grid (10/12) */}
              <motion.div
                className="lg:col-span-10 grid grid-cols-3 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Left column - 2 tall images */}
                <div className="flex flex-col gap-1">
                  <div className="relative aspect-[4/3] border border-cream/20 overflow-hidden flex-1">
                    <img src={timberBeamsImg} alt="Ext" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative aspect-[4/3] border border-cream/20 overflow-hidden flex-1">
                    <img src={limestoneFireplaceImg} alt="Ext" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Middle column - 1 tall + 2 small */}
                <div className="flex flex-col gap-1">
                  <div className="relative aspect-[4/3] border border-cream/20 overflow-hidden flex-1">
                    <img src={marbleBathImg} alt="Ext" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-1 flex-1">
                    <div className="relative aspect-square border border-cream/20 overflow-hidden">
                      <img src={spaVanityImg} alt="Ext" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative aspect-square border border-cream/20 overflow-hidden">
                      <img src={proRangeImg} alt="Ext" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                {/* Right column - 1 tall image + 2 small */}
                <div className="flex flex-col gap-1">
                  <div className="relative aspect-[4/3] border border-cream/20 overflow-hidden flex-1">
                    <img src={leatherCabinetryImg} alt="Ext" className="w-full h-full object-cover" />
                  </div>
                  <div className="grid grid-cols-2 gap-1 flex-1">
                    <div className="relative aspect-square border border-cream/20 overflow-hidden">
                      <img src={timberBeamsImg} alt="Ext" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative aspect-square border border-cream/20 overflow-hidden">
                      <img src={marbleBathImg} alt="Ext" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 5: LOGO + CUSTOM FURNITURE */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 pt-2">
              {/* Logo Box - Small square (2/12) */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="relative aspect-square border border-cream/20 flex items-center justify-center group overflow-hidden bg-charcoal/40">
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-px bg-cream rotate-45 absolute top-1/2" />
                    <div className="w-full h-px bg-cream -rotate-45 absolute top-1/2" />
                  </div>
                  <img src={mcLogo} alt="MC Logo" className="w-12 h-12 object-contain z-10 opacity-50" />
                </div>
              </motion.div>

              {/* Custom Furniture Sliver - Wide horizontal (10/12) */}
              <motion.div
                className="lg:col-span-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="relative aspect-[5/1] border border-cream/20 overflow-hidden">
                  <img src={leatherCabinetryImg} alt="Custom Furniture" className="w-full h-full object-cover opacity-85" />
                  <div className="absolute inset-x-0 bottom-0 p-4 flex justify-end items-end">
                    <span className="text-[10px] tracking-[0.5em] uppercase text-cream/70 font-light">CUSTOMFURNITURE</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Curated Collections Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 pt-16 border-t border-cream/20"
          >
            <div className="text-center mb-16">
              <p className="text-[10px] tracking-[0.3em] text-gold uppercase mb-4 font-light">Collections</p>
              <h2 className="text-3xl md:text-4xl font-serif text-cream font-light mb-4 tracking-wide">
                Curated Collections
              </h2>
              <p className="text-sm text-cream/60 font-light">
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
                    <div className="overflow-hidden mb-4 aspect-[4/3] relative border border-cream/20">
                      <img
                        src={album.coverImage}
                        alt={album.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-serif text-cream mb-2 font-light group-hover:text-gold transition-colors tracking-wide">
                      {album.title}
                    </h3>
                    <p className="text-xs text-cream/60 font-light line-clamp-2">{album.description}</p>
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
