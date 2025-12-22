import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import mcLogo from "@/assets/mc-logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "Portfolio",
    path: "/portfolio"
  }, {
    name: "Design",
    path: "/design"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", isScrolled ? "bg-charcoal/95 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6")}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img src={mcLogo} alt="Michael Chandler Logo" className="h-14 w-auto group-hover:scale-105 transition-transform object-scale-down" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={cn("text-cream/80 hover:text-primary transition-colors text-sm tracking-widest uppercase font-medium relative group", location.pathname === link.path && "text-primary")}>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>)}
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-cream p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="lg:hidden bg-charcoal/98 backdrop-blur-lg border-t border-primary/20">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={cn("text-cream/80 hover:text-primary transition-colors text-lg tracking-widest uppercase font-medium py-2", location.pathname === link.path && "text-primary")}>
                {link.name}
              </Link>)}
          </nav>
        </div>}
    </header>;
};
export default Header;