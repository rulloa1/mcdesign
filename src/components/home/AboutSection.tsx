import { Award, Clock, Users, Building2 } from "lucide-react";
import mikeProfile from "@/assets/mike-profile.jpeg";

const stats = [
  { icon: Clock, value: "37+", label: "Years Experience" },
  { icon: Building2, value: "500+", label: "Projects Completed" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
  { icon: Award, value: "25+", label: "Awards Won" },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6 leading-tight">
              Crafting Dreams Into Reality Since 1987
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With over three decades of experience, I have established myself as a premier custom home builder and renovation specialist. My commitment to excellence, attention to detail, and innovative design solutions have earned me a reputation for creating homes that exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I believe every home tells a story. My approach combines traditional craftsmanship with modern techniques, ensuring that each project reflects the unique vision and lifestyle of my clients. From initial concept to final walkthrough, I partner with you to bring your dream home to life.
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
          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80"
                  alt="Luxury interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
                  alt="Custom kitchen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80"
                  alt="Modern living"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80"
                  alt="Exterior design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
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
