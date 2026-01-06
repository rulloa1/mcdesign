import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-background">
      {/* Decorative curved line - like Monarch */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ y: backgroundY }}
      >
        <motion.path
          d="M720,0 Q600,200 720,400 Q840,600 720,900"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M0,450 Q360,350 720,450 Q1080,550 1440,450"
          fill="none"
          stroke="hsl(var(--cream))"
          strokeWidth="0.3"
          opacity="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.3 }}
        />
      </motion.svg>

      {/* Subtle star/sparkle accent */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-6 h-6 opacity-40"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 180 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <path
            d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
            fill="hsl(var(--primary))"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: textOpacity, y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          {/* Large dramatic headline - Monarch style */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-cream leading-[0.95] tracking-tight">
            <span className="block">MICHAEL CHANDLER IS THE</span>
            <span className="block">PLACE WHERE YOU</span>
            <span className="block">BELONG</span>
          </h1>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Monarch style */}
      <motion.div 
        className="absolute bottom-12 left-12 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-8 h-12 border border-primary/50 rounded-full flex items-start justify-center p-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50">Scroll</span>
      </motion.div>

      {/* Bottom right text - Monarch style */}
      <motion.div
        className="absolute bottom-12 right-12 z-20 text-right max-w-xs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="text-[11px] tracking-[0.15em] uppercase text-cream/50 leading-relaxed">
          Exceptional luxury residential
          <br />
          design and construction.
          <br />
          37+ years crafting
          <br />
          extraordinary homes.
        </p>
      </motion.div>

      {/* Architectural image emerging from bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/3 z-5 w-[500px] h-[400px]"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 50, opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
      >
        <img
          src="/hero-pool.png"
          alt="Luxury Architecture"
          className="w-full h-full object-contain opacity-40"
          style={{ filter: "grayscale(50%) brightness(0.7)" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
