import { Award, Clock, Users, Building2 } from "lucide-react";
import mikeProfile from "@/assets/mike-profile.jpeg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

const stats = [
  { icon: Clock, value: "37+", label: "Years Experience" },
  { icon: Building2, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
  { icon: Award, value: "25+", label: "Awards Won" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={cn(
            "transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6 leading-tight">
              Who I Am
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-gold text-lg leading-relaxed mb-6">
              Through my experience of 37 years as a Business, Design, and Construction professional, I have found that exceptional results come from exceptional teams.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              My approach is simple: bring together the right people, create an environment built on mutual respect, and stay closely attuned to client feedback throughout every phase of a project.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I've built my career on the universal business principle that quality construction isn't just about meeting standards—it's about exceeding them by combining rigorous processes with forward-thinking design.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <img
                  src={mikeProfile}
                  alt="Michael Chandler"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-charcoal text-lg">Michael Chandler</p>
                <p className="text-primary text-sm">Founder & Master Builder</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className={cn(
            "grid grid-cols-2 gap-4 transition-all duration-700 delay-200",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.webp"
                  alt="S. Florida High Rise Luxe Condo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/alpine-ranch-cover.webp"
                  alt="High Alpine Ranch Montana"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/southcoast-cover.webp"
                  alt="South Coast Renovation Big Sur"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp"
                  alt="Ultra Luxe Private Club Pool"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "text-center transition-all duration-700",
                statsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: statsVisible ? `${index * 100}ms` : "0ms" }}
            >
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-4xl md:text-5xl font-serif text-charcoal mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
