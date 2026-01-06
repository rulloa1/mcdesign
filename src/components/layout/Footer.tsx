import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import mcLogo from "@/assets/mc-logo.png";

const Footer = () => {
  return (
    <footer className="bg-navy text-cream py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border border-primary/50 rounded flex items-center justify-center">
                  <img src={mcLogo} alt="MC" className="h-7 w-auto" />
                </div>
                <div>
                  <span className="block text-xs tracking-[0.2em] text-cream uppercase">Michael</span>
                  <span className="block text-xs tracking-[0.2em] text-cream uppercase">Chandler</span>
                </div>
              </div>
            </Link>
            <p className="text-cream/50 text-sm leading-relaxed">
              With over 37 years of experience, I bring unparalleled craftsmanship 
              and attention to detail to every project.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6">Navigation</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-cream/50 hover:text-cream transition-colors text-sm">Home</Link>
              <Link to="/portfolio" className="block text-cream/50 hover:text-cream transition-colors text-sm">Projects</Link>
              <Link to="/design" className="block text-cream/50 hover:text-cream transition-colors text-sm">Design</Link>
              <Link to="/services" className="block text-cream/50 hover:text-cream transition-colors text-sm">Services</Link>
              <Link to="/contact" className="block text-cream/50 hover:text-cream transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+14352377373" className="flex items-center gap-3 text-cream/50 hover:text-cream transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" />
                (435) 237-7373
              </a>
              <a href="mailto:Mike.rcccon@yahoo.com" className="flex items-center gap-3 text-cream/50 hover:text-cream transition-colors text-sm">
                <Mail className="w-4 h-4 text-primary" />
                Mike.rcccon@yahoo.com
              </a>
              <div className="flex items-start gap-3 text-cream/50 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <span>8215 Winding Hill Ln<br />Spring, TX 77379</span>
              </div>
            </div>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6">Our Office</h4>
            <p className="text-cream/50 text-sm leading-relaxed mb-4">
              Spring, Texas
              <br />
              United States
            </p>
            <div className="w-full h-24 bg-secondary/50 flex items-center justify-center border border-border">
              <span className="text-xs text-cream/30 tracking-widest">MAP</span>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Michael Chandler Design. All rights reserved.
          </p>
          <div className="flex gap-8 text-cream/30 text-xs tracking-wide">
            <Link to="/privacy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cream transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
