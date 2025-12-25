import Layout from "@/components/layout/Layout";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { projects, categories } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import logoVideo from "@/assets/logo-animation.mp4";

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
      {/* Hero - Full Split Layout */}
      <section className="min-h-screen flex flex-col lg:flex-row">
        {/* Left - Dark Hero with Hexagonal Logo */}
        <div className="relative flex-1 bg-charcoal flex items-center justify-center overflow-hidden min-h-[60vh] lg:min-h-screen">

          {/* Static Project Photo Collage Background */}
          <div className="absolute inset-0">
            <div className="grid h-full w-full grid-cols-3 grid-rows-3">
              {projects.slice(0, 9).map((p, i) => (
                <img
                  key={p.id}
                  src={p.coverImage}
                  alt=""
                  aria-hidden="true"
                  loading={i < 3 ? "eager" : "lazy"}
                  decoding="async"
                  className="h-full w-full object-cover opacity-35 blur-[1px] saturate-90"
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-charcoal/55" />
          </div>

          {/* Logo Animation Layer */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-55"
            />
          </div>

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85 z-0" />

          {/* Main Content */}
          <div className="relative z-10 text-center px-8 py-16">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-sans text-2xl md:text-4xl font-light tracking-[0.5em] text-cream mb-4 drop-shadow-lg"
            >
              MICHAEL CHANDLER
            </motion.h1>
          </div>

          {/* Vertical Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-10 left-10 hidden lg:block z-20"
          >
            <p
              className="text-xs tracking-[0.25em] text-cream/50 font-medium"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              PORTFOLIO
            </p>
          </motion.div>
        </div>

        {/* Right - Content Section */}
        <div className="relative flex-1 bg-background flex flex-col">
          {/* Decorative Corner Accents */}
          <div className="absolute top-10 right-10 w-24 h-24 border-t-2 border-r-2 border-primary/20 hidden lg:block" />
          <div className="absolute bottom-10 left-10 w-24 h-24 border-b-2 border-l-2 border-primary/20 hidden lg:block" />

          {/* Header */}
          <div className="flex justify-between items-center px-10 lg:px-16 py-10 bg-card shadow-sm">
            <div className="flex items-center gap-5">
              {/* Mini Hexagon Logo */}
              <div
                className="w-12 h-12 bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              >
                <span className="font-serif text-sm font-bold text-cream">MC</span>
              </div>
            </div>
            <span className="text-sm tracking-[0.2em] text-primary font-medium cursor-pointer hover:text-gold-dark transition-colors">
              PORTFOLIO
            </span>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 py-12">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all mb-10 self-start group"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
              Back
            </motion.button>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6"
            >
              Project Collection
            </motion.h2>

            {/* Gold Underline Accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="h-1 bg-gradient-to-r from-primary to-transparent mb-8"
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg leading-relaxed text-muted-foreground max-w-xl mb-16"
            >
              A curated selection of residential, commercial, and hospitality projects showcasing 37 years of design excellence and meticulous craftsmanship.
            </motion.p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 gap-20 mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span
                  className="block font-serif text-7xl md:text-8xl font-light leading-none mb-3"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold-dark)) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  19
                </span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium uppercase">
                  Signature Projects
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <span
                  className="block font-serif text-7xl md:text-8xl font-light leading-none mb-3"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--gold-dark)) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  37
                </span>
                <span className="text-xs tracking-[0.2em] text-muted-foreground font-medium uppercase">
                  Years of Excellence
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-background py-6 border-b border-border sticky top-0 z-10 backdrop-blur-sm bg-background/90">
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
                  : "bg-transparent text-foreground border-border hover:border-charcoal"
                  }`}
              >
                {cat} ({cat === "All" ? projects.length : projects.filter(p => p.category === cat).length})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background min-h-screen">
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
