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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Design", path: "/design" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-charcoal/98 backdrop-blur-sm py-5"
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-8 lg:px-16 flex items-center justify-between">
        {/* Logo - Minimal */}
        <Link to="/" className="flex items-center group">
          <img
            src={mcLogo}
            alt="Michael Chandler"
            className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop Navigation - Refined & Minimal */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-cream/70 hover:text-cream transition-colors duration-300 text-[11px] tracking-[0.2em] uppercase font-light relative group",
                location.pathname === link.path && "text-cream"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-[1px] bg-gold transition-all duration-500",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-cream/80 hover:text-cream p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu - Elegant */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal border-t border-charcoal-light">
          <nav className="container mx-auto px-8 py-10 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-cream/70 hover:text-cream transition-colors text-sm tracking-[0.15em] uppercase font-light py-2",
                  location.pathname === link.path && "text-cream"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;