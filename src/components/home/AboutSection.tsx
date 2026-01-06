import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import mikeProfile from "@/assets/mike-profile.jpeg";

const features = [
  {
    title: "Timber",
    subtitle: "construction",
  },
  {
    title: "value the forest",
    subtitle: "promoting",
  },
  {
    title: "reforestation",
    subtitle: "",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-32 bg-gradient-to-b from-transparent to-primary/30" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Features list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border-l-2 border-primary/30 pl-8"
              >
                <h3 className="text-2xl md:text-3xl font-serif text-cream italic">
                  {feature.title}
                </h3>
                {feature.subtitle && (
                  <p className="text-lg text-cream/50 font-light tracking-wide">
                    {feature.subtitle}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.webp"
                  alt="Luxury project"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/alpine-ranch-cover.webp"
                  alt="Mountain retreat"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/southcoast-cover.webp"
                  alt="Coastal design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp"
                  alt="Pool design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Founder section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 max-w-4xl mx-auto text-center"
        >
          <p className="monarch-label mb-6">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-8 leading-tight">
            37 Years of Excellence in
            <br />
            <span className="italic text-primary">Design & Construction</span>
          </h2>
          <p className="text-lg text-cream/60 leading-relaxed max-w-2xl mx-auto mb-10">
            Through my experience as a Business, Design, and Construction professional, 
            I have found that exceptional results come from exceptional teams. My approach 
            is simple: bring together the right people and stay closely attuned to client 
            feedback throughout every phase.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
              <img src={mikeProfile} alt="Michael Chandler" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-serif text-cream text-xl">Michael Chandler</p>
              <p className="text-primary text-sm tracking-wide">Founder & Master Builder</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
