import Layout from "@/components/layout/Layout";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { projects, categories } from "@/data/projects";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");
  const [activeFilter, setActiveFilter] = useState(categoryFromUrl || "All");
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveFilter(categoryFromUrl);
    } else {
      setActiveFilter("All");
    }
  }, [categoryFromUrl]);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero - Full Split Layout */}
      <section ref={heroRef} className="min-h-screen flex flex-col lg:flex-row">
        {/* Left - Dark Hero */}
        <div className="relative flex-1 bg-charcoal flex items-center justify-center overflow-hidden min-h-[60vh] lg:min-h-screen">
          {/* Parallax Project Photo Collage Background */}
          <motion.div
            className="absolute inset-0"
            style={{ y: backgroundY, scale: backgroundScale }}
          >
            <div className="grid h-full w-full grid-cols-3 grid-rows-3">
              {projects.slice(0, 9).map((p, i) => (
                <img
                  key={p.id}
                  src={p.coverImage}
                  alt=""
                  aria-hidden="true"
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover opacity-25 grayscale"
                />
              ))}
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-charcoal/70" />


          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-transparent to-charcoal/80 z-0" />

          {/* MC Logo */}
          <div className="absolute top-12 left-12 z-20">
            <div className="w-10 h-10 border border-gold/50 flex items-center justify-center">
              <span className="font-serif text-sm font-medium text-gold">MC</span>
            </div>
          </div>

          {/* Vertical Side Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-16 left-12 hidden lg:block z-20"
          >
            <p
              className="text-[9px] tracking-[0.35em] text-cream/30 font-light uppercase"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              Design & Construction
            </p>
          </motion.div>
        </div>

        {/* Right - Content Section */}
        <div className="relative flex-1 bg-background flex flex-col">
          {/* Minimal Corner Accent */}
          <div className="absolute top-16 right-16 w-20 h-20 border-t border-r border-border hidden lg:block" />

          {/* Header Area */}
          <div className="flex justify-between items-center px-12 lg:px-20 py-12">
            <div className="w-8 h-8 bg-gold flex items-center justify-center">
              <span className="font-serif text-[10px] font-medium text-charcoal">MC</span>
            </div>
            <span className="text-[10px] tracking-[0.25em] text-muted-foreground font-light uppercase">
              Est. 1987
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center px-12 lg:px-20 py-16">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all mb-16 self-start group text-[11px] tracking-[0.15em] uppercase font-light"
            >
              <span className="text-sm group-hover:-translate-x-1 transition-transform">←</span>
              Back
            </motion.button>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-foreground mb-8 tracking-tight leading-[1.1]"
            >
              Project<br />Collection
            </motion.h2>

            {/* Subtle Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-[1px] bg-gold mb-10"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm leading-relaxed text-muted-foreground max-w-md mb-20 font-light"
            >
              A curated selection of residential, commercial, and hospitality projects
              showcasing 37 years of design excellence and meticulous craftsmanship.
            </motion.p>

            {/* Stats Section - Refined */}
            <div className="grid grid-cols-2 gap-16 mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="block font-serif text-6xl md:text-7xl font-light text-gold leading-none mb-4">
                  19
                </span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-light uppercase">
                  Signature Projects
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <span className="block font-serif text-6xl md:text-7xl font-light text-gold leading-none mb-4">
                  37
                </span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-light uppercase">
                  Years of Excellence
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters - Cinematic Sticky bar */}
      <section className="bg-background/80 py-8 border-b border-border sticky top-[72px] z-40 backdrop-blur-xl transition-all duration-300">
        <div className="container mx-auto px-12 lg:px-20">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {categories.map((cat, index) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index * 0.05) }}
                  onClick={() => {
                    setActiveFilter(cat);
                    window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' });
                  }}
                  className="relative group py-2"
                >
                  <span className={cn(
                    "text-[10px] tracking-[0.3em] uppercase transition-all duration-500 block",
                    activeFilter === cat
                      ? "text-charcoal font-bold"
                      : "text-muted-foreground group-hover:text-charcoal font-medium"
                  )}>
                    {cat}
                  </span>
                  {activeFilter === cat && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {activeFilter !== cat && (
                    <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold/30 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100" />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden md:block"
            >
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase opacity-50">
                Found {filteredProjects.length} Architectural Artifacts
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Premium Framer Layout */}
      <section className="py-24 bg-background min-h-screen">
        <div className="container mx-auto px-12 lg:px-20">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (index % 3) * 0.1
                  }}
                  key={project.id}
                >
                  <Link
                    to={`/project/${project.id}`}
                    className="group block"
                  >
                    {/* Perspective Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="px-8 py-4 border border-cream/30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                          <span className="text-cream text-[10px] tracking-[0.4em] uppercase font-bold">View Archive</span>
                        </div>
                      </div>
                      <div className="absolute top-6 left-6 inline-block py-1 px-3 bg-charcoal/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-cream text-[8px] tracking-[0.2em] uppercase font-bold">{project.category}</p>
                      </div>
                    </div>

                    {/* Text Content - Refined Alignment */}
                    <div className="space-y-3 px-1">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-gold opacity-30 group-hover:w-16 group-hover:bg-gold transition-all duration-700" />
                        <span className="text-[10px] tracking-[0.2em] text-gold uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                          Explore
                        </span>
                      </div>
                      <h3 className="font-serif text-3xl text-charcoal group-hover:text-primary transition-colors duration-500 leading-tight">
                        {project.title}
                      </h3>
                      <div className="flex justify-between items-center pt-2 border-t border-border/50">
                        <p className="text-xs text-muted-foreground font-light tracking-wide italic">
                          {project.location}
                        </p>
                        <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA - Refined */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-500 text-[11px] tracking-[0.2em] uppercase font-light px-10 py-6"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-3" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
