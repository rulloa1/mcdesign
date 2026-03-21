import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const featuredProjects = projects.slice(0, 4);

const FeaturedProjects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div>
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">My Work</p>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Featured Projects</h2>
          </div>
          <Link to="/portfolio" className="animate-slide-in-right">
            <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to={`/project/${project.id}`}
                className="group relative aspect-[4/3] overflow-hidden block"
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-primary text-sm tracking-widest uppercase mb-2">{project.category}</p>
                  <h3 className="text-2xl md:text-3xl font-serif text-cream group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-cream/70 text-sm mt-2 group-hover:text-cream/90 transition-colors">{project.subtitle}</p>
                </div>
                
                {/* Arrow indicator */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-charcoal/50 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-5 h-5 text-cream opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
