import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Email functionality will be added with edge function
    setTimeout(() => {
      toast({ title: "Message Sent", description: "I'll get back to you shortly!" });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">Contact Me</h1>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-serif text-charcoal mb-6">Let's Discuss Your Project</h2>
              <p className="text-muted-foreground mb-8">Ready to start? I'd love to hear about your vision and how I can bring it to life.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center"><Phone className="w-5 h-5 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Phone</p><a href="tel:+1234567890" className="text-charcoal hover:text-primary">(123) 456-7890</a></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center"><Mail className="w-5 h-5 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Email</p><a href="mailto:michael@mcdesign.bio" className="text-charcoal hover:text-primary">michael@mcdesign.bio</a></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div><p className="text-sm text-muted-foreground">Address</p><p className="text-charcoal">123 Builder Lane, City, State 12345</p></div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 border border-border space-y-6">
              <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
              <Input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              <Input placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              <Textarea placeholder="Tell us about your project..." rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-gold-dark" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <><Send className="w-4 h-4 mr-2" /> Send Message</>}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
