import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const featuredProjects = projects.slice(0, 4);

const FeaturedProjects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8"
        >
          <div>
            <p className="monarch-label mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream leading-tight">
              Featured
              <br />
              <span className="italic text-primary">Projects</span>
            </h2>
          </div>
          <Link to="/portfolio">
            <Button 
              variant="outline" 
              className="border-cream/30 text-cream hover:bg-cream hover:text-background tracking-widest uppercase text-xs"
            >
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Alternating layout grid */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Link
                to={`/project/${project.id}`}
                className={`group grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`aspect-[16/10] overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:col-start-1 lg:text-right" : ""}`}>
                  <span className="monarch-label">{project.category}</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-cream group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cream/50 text-sm">{project.subtitle}</p>
                  <div className={`flex items-center gap-2 text-primary text-sm tracking-wide ${
                    index % 2 === 1 ? "lg:justify-end" : ""
                  }`}>
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
              
              {/* Divider */}
              {index < featuredProjects.length - 1 && (
                <div className="mt-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
