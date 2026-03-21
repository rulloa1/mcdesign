import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/hero-pool.png",
  "/projects/hospitality-pool-cover-v2.jpg",
  "/projects/syracuse-cover.png",
  "/portfolio-hero.png",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={heroImages[currentSlide]}
            alt={`Luxury home ${currentSlide + 1}`}
            className="w-full h-full object-cover"
            animate={{ scale: 1.05 }}
            transition={{ duration: 6, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-4 tracking-wide text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Michael Chandler
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-primary tracking-[0.4em] uppercase mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Design • Build • Develop
          </motion.p>

          {/* Stats Container */}
          <motion.div 
            className="grid grid-cols-2 gap-12 md:gap-24 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-light text-primary leading-none">
                19
              </span>
              <span className="block text-xs md:text-sm tracking-[3px] text-cream/80 mt-3 uppercase">
                Signature Projects
              </span>
            </div>
            <div className="text-center">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-light text-primary leading-none">
                37
              </span>
              <span className="block text-xs md:text-sm tracking-[3px] text-cream/80 mt-3 uppercase">
                Years of Excellence
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link to="/portfolio">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-cream bg-cream/10 text-cream hover:bg-cream hover:text-charcoal px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              >
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="relative w-12 h-1 bg-cream/30 overflow-hidden"
            aria-label={`Go to slide ${index + 1}`}
          >
            <motion.div
              className="absolute inset-0 bg-primary origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: index === currentSlide ? 1 : 0 }}
              transition={{ duration: index === currentSlide ? 6 : 0.3, ease: "linear" }}
            />
          </button>
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-charcoal/40 backdrop-blur-sm hover:bg-primary transition-all duration-300 flex items-center justify-center group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-cream group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-charcoal/40 backdrop-blur-sm hover:bg-primary transition-all duration-300 flex items-center justify-center group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-cream group-hover:scale-110 transition-transform" />
      </button>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-cream/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
