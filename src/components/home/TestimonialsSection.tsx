import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonials = [
  {
    id: 1,
    quote: "Michael transformed my vision into a stunning reality. His attention to detail and commitment to excellence exceeded all my expectations. My home is truly a masterpiece.",
    author: "Robert & Sarah Thompson",
    location: "Coastal Modern Estate",
  },
  {
    id: 2,
    quote: "Working with Michael was an absolute pleasure. He listened to my needs, offered brilliant solutions, and delivered on time and within budget. Highly recommend!",
    author: "Jennifer Martinez",
    location: "Urban Loft Renovation",
  },
  {
    id: 3,
    quote: "The craftsmanship and quality of work is unmatched. Michael brought my mountain retreat dream to life with incredible skill and professionalism.",
    author: "David & Linda Chen",
    location: "Mountain Retreat",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="py-32 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-cream/5 rounded-full" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="monarch-label mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream">
            What Clients
            <br />
            <span className="italic text-primary">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Large quote mark */}
                <span className="block text-8xl font-serif text-primary/20 leading-none mb-4">"</span>
                
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-cream/90 font-serif italic leading-relaxed mb-10">
                  {testimonials[currentIndex].quote}
                </blockquote>
                
                <div className="space-y-1">
                  <p className="text-cream font-medium tracking-wide">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-primary text-sm tracking-widest uppercase">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 border border-cream/20 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-cream" />
            </button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1 transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-primary" 
                      : "w-4 bg-cream/20 hover:bg-cream/40"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="w-12 h-12 border border-cream/20 hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5 text-cream" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
