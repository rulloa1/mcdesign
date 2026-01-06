import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const services = [
  {
    number: "01",
    title: "Planning & Design",
    description: "Comprehensive site analysis and custom architectural design that reflects your unique style.",
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/southcoast-cover.webp",
  },
  {
    number: "02",
    title: "Construction",
    description: "Expert construction management with skilled craftsmen using premium materials.",
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.webp",
  },
  {
    number: "03",
    title: "Project Management",
    description: "Seamless coordination of all project phases, keeping timelines and budgets on track.",
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/alpine-ranch-cover.webp",
  },
];

const ServicesPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-secondary relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="monarch-label mb-4">What We Do</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-tight">
              Crafting Extraordinary
              <br />
              <span className="italic text-primary">Living Spaces</span>
            </h2>
            <Link to="/services">
              <Button 
                variant="outline" 
                className="border-cream/30 text-cream hover:bg-cream hover:text-background tracking-widest uppercase text-xs"
              >
                All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="space-y-3">
                <span className="text-primary text-sm tracking-widest">{service.number}</span>
                <h3 className="text-2xl font-serif text-cream group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
