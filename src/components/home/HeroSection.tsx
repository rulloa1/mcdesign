import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax: video moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // Subtle fade as you scroll down
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {/* Background Video with Parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity }}
        >
          <source src={heroVideo} type="video/mp4" />
        </motion.video>
        <div className="absolute inset-0 bg-charcoal/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-4 tracking-wide">
            Michael Chandler
          </h1>
          <p className="text-lg md:text-xl text-primary tracking-[0.4em] uppercase mb-8">
            Design • Build • Develop
          </p>

          {/* Stats Container */}
          <div className="grid grid-cols-2 gap-12 md:gap-20 mb-10">
            <div className="text-center">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-light text-primary leading-none">
                19
              </span>
              <span className="block text-xs md:text-sm tracking-[2px] text-cream/80 mt-2 uppercase">
                Signature Projects
              </span>
            </div>
            <div className="text-center">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-light text-primary leading-none">
                37
              </span>
              <span className="block text-xs md:text-sm tracking-[2px] text-cream/80 mt-2 uppercase">
                Years of Excellence
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark px-8 py-6 text-sm tracking-widest uppercase">
                View My Work
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-cream bg-cream/10 text-cream hover:bg-cream hover:text-charcoal px-8 py-6 text-sm tracking-widest uppercase"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cream/60" />
      </div>
    </section>
  );
};

export default HeroSection;
