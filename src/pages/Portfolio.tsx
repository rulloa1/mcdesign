import Layout from "@/components/layout/Layout";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { projects, categories } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [activeFilter, setActiveFilter] = useState(categoryFromUrl || "All");
  const navigate = useNavigate();

  // Update filter when URL changes
  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveFilter(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero - Split Layout */}
      <section className="min-h-[70vh] grid lg:grid-cols-2">
        {/* Left - Image with vertical text */}
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="/portfolio-hero.png"
            alt="Portfolio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          {/* Vertical Portfolio Text */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-cream text-xl tracking-[0.5em] font-serif"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
              PORTFOLIO
            </motion.p>
          </div>
        </div>

        {/* Right - Content with improved spacing */}
        <div className="bg-cream flex flex-col justify-center px-10 lg:px-16 py-10 lg:py-0">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-charcoal hover:text-primary transition-colors mb-8 self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            Project Collection
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="w-16 h-1 bg-primary mb-6 origin-left"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg"
          >
            A curated selection of residential, commercial, and hospitality projects showcasing 37 years of design excellence and meticulous craftsmanship.
          </motion.p>

          {/* Stats Section - Grid with improved spacing */}
          <div className="grid grid-cols-2 gap-16 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-7xl md:text-8xl font-light text-primary leading-none">{projects.length}</p>
              <p className="text-sm text-muted-foreground uppercase tracking-[2px] mt-2">Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-7xl md:text-8xl font-light text-primary leading-none">37</p>
              <p className="text-sm text-muted-foreground uppercase tracking-[2px] mt-2">Years</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters with improved spacing */}
      <section className="bg-cream py-6 border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-cream/90">
        <div className="container mx-auto px-10 lg:px-16">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (index * 0.1) }}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-sm tracking-[2px] transition-all rounded-full border ${activeFilter === cat
                    ? "bg-charcoal text-cream border-charcoal"
                    : "bg-transparent text-charcoal border-border hover:border-charcoal"
                  }`}
              >
                {cat} ({cat === "All" ? projects.length : projects.filter(p => p.category === cat).length})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with improved spacing */}
      <section className="py-16 bg-cream min-h-screen">
        <div className="container mx-auto px-10 lg:px-16">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  key={project.id}
                >
                  <Link
                    to={`/project/${project.id}`}
                    className="group relative aspect-[4/3] block overflow-hidden cursor-pointer"
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-primary text-xs tracking-widest uppercase mb-1">{project.category}</p>
                      <h3 className="text-xl font-serif text-cream group-hover:text-primary transition-colors mb-1">{project.title}</h3>
                      <p className="text-cream/70 text-sm">{project.subtitle}</p>
                      <p className="text-cream/50 text-xs mt-2">{project.location}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-primary/0 group-hover:bg-primary flex items-center justify-center transition-all rounded-full scale-0 group-hover:scale-100 duration-300">
                      <ArrowRight className="w-5 h-5 text-cream" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark transition-all duration-300 hover:scale-105">
                Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
