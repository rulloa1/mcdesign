import Layout from "@/components/layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { projects, categories } from "@/data/projects";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero - Split Layout */}
      <section className="min-h-[70vh] grid lg:grid-cols-2">
        {/* Left - Image with vertical text */}
        <div className="relative h-[50vh] lg:h-auto">
          <img 
            src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.webp" 
            alt="Portfolio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          {/* Vertical Portfolio Text */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
            <p className="text-cream text-xl tracking-[0.5em] font-serif" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>
              PORTFOLIO
            </p>
          </div>
        </div>

        {/* Right - Content */}
        <div className="bg-cream flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-charcoal hover:text-primary transition-colors mb-8 self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          
          
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Project Collection</h1>
          <div className="w-16 h-1 bg-primary mb-6" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
            A curated selection of residential, commercial, and hospitality projects showcasing 37 years of design excellence and meticulous craftsmanship.
          </p>
          
          {/* Stats */}
          <div className="flex gap-12">
            <div>
              <p className="text-4xl font-serif text-primary">{projects.length}</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-primary">37</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-sm tracking-wide transition-all rounded-full border ${
                  activeFilter === cat
                    ? "bg-charcoal text-cream border-charcoal"
                    : "bg-transparent text-charcoal border-border hover:border-charcoal"
                }`}
              >
                {cat} ({cat === "All" ? projects.length : projects.filter(p => p.category === cat).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              >
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-xs tracking-widest uppercase mb-1">{project.category}</p>
                  <h3 className="text-xl font-serif text-cream group-hover:text-primary transition-colors mb-1">{project.title}</h3>
                  <p className="text-cream/70 text-sm">{project.subtitle}</p>
                  <p className="text-cream/50 text-xs mt-2">{project.location}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary/0 group-hover:bg-primary flex items-center justify-center transition-all">
                  <ArrowRight className="w-5 h-5 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark">
                Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
