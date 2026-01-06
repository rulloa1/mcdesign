import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/hero-pool.png",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/southcoast-cover.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/alpine-ranch-cover.webp",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={image}
            alt={`Luxury home ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
      ))}

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

      {/* Slide Navigation */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 transition-all ${index === currentSlide ? "bg-primary" : "bg-cream/40"
              }`}
          />
        ))}
      </div>

      {/* Arrow Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-charcoal/50 hover:bg-primary transition-colors flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6 text-cream" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-charcoal/50 hover:bg-primary transition-colors flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6 text-cream" />
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cream/60" />
      </div>
    </section>
  );
};

export default HeroSection;
