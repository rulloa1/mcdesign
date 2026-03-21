import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/projects/carmel-valley-new/carmel_valley_new1 cover.png"
          alt="Luxury home background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/85 to-charcoal/90" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-primary/30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-primary/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">
            Let's Work Together
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-6 leading-tight text-balance">
            Ready to Build Your Dream Home?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-cream/80 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together. I'm ready to bring your ideas to life with unparalleled craftsmanship and attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-gold-dark px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="border-cream text-cream hover:bg-cream hover:text-charcoal px-10 py-6 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              >
                View My Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
