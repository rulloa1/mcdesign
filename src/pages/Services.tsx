import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Compass, PenTool, HardHat, ClipboardCheck, Shield, Leaf, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { icon: Compass, title: "Planning", description: "Comprehensive site analysis, zoning research, and project feasibility studies.", features: ["Site Analysis", "Zoning Research", "Budget Planning", "Timeline Development"] },
  { icon: PenTool, title: "Design", description: "Custom architectural design reflecting your unique style and vision.", features: ["Architectural Design", "Interior Design", "3D Visualization", "Material Selection"] },
  { icon: HardHat, title: "Construction", description: "Expert construction with skilled craftsmen and premium materials.", features: ["Foundation Work", "Structural Framing", "Roofing & Siding", "Interior Finishing"] },
  { icon: ClipboardCheck, title: "Project Management", description: "Seamless coordination keeping timelines and budgets on track.", features: ["Vendor Coordination", "Schedule Management", "Budget Tracking", "Progress Reports"] },
  { icon: Shield, title: "Quality Assurance", description: "Rigorous quality control at every stage for exceptional results.", features: ["Regular Inspections", "Code Compliance", "Material Testing", "Final Walkthrough"] },
  { icon: Leaf, title: "Sustainability", description: "Eco-friendly practices and energy-efficient solutions.", features: ["Energy Efficiency", "Sustainable Materials", "Solar Integration", "Water Conservation"] },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">What I Do</p>
            <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">My Services</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions from concept to completion.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-8 border border-border hover:border-primary/30 transition-all">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-serif text-charcoal mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process/CTA Section */}
      <section className="py-32 bg-charcoal text-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-charcoal-light/10 -skew-x-12 transform translate-x-1/4" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8">
              Let's Build to Your Vision.
            </h2>
            <p className="text-cream/60 max-w-2xl mx-auto mb-12 font-light text-lg">
              Whether it's a custom home, a commercial development, or a luxury renovation, we bring 37 years of experience to every project.
            </p>

          <div className="text-center mt-16">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark">
                Get a Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
