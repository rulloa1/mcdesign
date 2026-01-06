import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-40 overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cream/5 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="monarch-label mb-6">Start Your Journey</p>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-cream mb-8 leading-tight">
            Ready to Build Your
            <br />
            <span className="italic text-primary">Dream Home?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-cream/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your vision and create something extraordinary together. 
            I'm ready to bring your ideas to life with unparalleled craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-gold-dark px-12 py-7 text-xs tracking-[0.2em] uppercase"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-cream/30 text-cream hover:bg-cream hover:text-background px-12 py-7 text-xs tracking-[0.2em] uppercase"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
