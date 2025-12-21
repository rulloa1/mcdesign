import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { projects, categories } from "@/data/projects";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img 
          src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.webp" 
          alt="Portfolio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">My Work</p>
            <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6">Portfolio</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-cream/80 max-w-2xl mx-auto px-6">
              A curated selection of residential, commercial, and hospitality projects showcasing 37 years of design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-8">
        <div className="container mx-auto px-6 flex justify-center gap-16">
          <div className="text-center">
            <p className="text-4xl font-serif text-primary">{projects.length}</p>
            <p className="text-cream/60 text-sm uppercase tracking-wider">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-primary">37</p>
            <p className="text-cream/60 text-sm uppercase tracking-wider">Years</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm tracking-wide transition-all border ${
                  activeFilter === cat
                    ? "bg-charcoal text-cream border-charcoal"
                    : "bg-transparent text-charcoal border-border hover:border-charcoal"
                }`}
              >
                {cat} {cat !== "All" && `(${projects.filter(p => p.category === cat).length})`}
                {cat === "All" && ` (${projects.length})`}
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
