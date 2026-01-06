import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import mcLogo from "@/assets/mc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img 
                src={mcLogo} 
                alt="Michael Chandler Logo" 
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              With over 37 years of experience, I bring unparalleled craftsmanship and attention to detail to every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-primary">Quick Links</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-cream/70 hover:text-primary transition-colors text-sm">Home</Link>
              <Link to="/portfolio" className="block text-cream/70 hover:text-primary transition-colors text-sm">Portfolio</Link>
              <Link to="/services" className="block text-cream/70 hover:text-primary transition-colors text-sm">Services</Link>
              <Link to="/contact" className="block text-cream/70 hover:text-primary transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-primary">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+14352377373" className="flex items-center gap-3 text-cream/70 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                (435) 237-7373
              </a>
              <a href="mailto:Mike.rcccon@yahoo.com" className="flex items-center gap-3 text-cream/70 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                Mike.rcccon@yahoo.com
              </a>
              <div className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>8215 Winding Hill Ln<br />Spring, TX 77379</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg mb-4 text-primary">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-sm flex items-center justify-center text-cream/70 hover:text-primary hover:bg-primary/10 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-sm flex items-center justify-center text-cream/70 hover:text-primary hover:bg-primary/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-charcoal-light rounded-sm flex items-center justify-center text-cream/70 hover:text-primary hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © {new Date().getFullYear()} Michael Chandler Design. All rights reserved.
          </p>
          <div className="flex gap-6 text-cream/50 text-sm">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
