import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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

  const leftLinks = [
    { name: "Menu", path: "/portfolio", hasDropdown: true },
    { name: "About Us", path: "/services" },
    { name: "Design", path: "/design" },
  ];

  const rightLinks = [
    { name: "Projects", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {leftLinks.map((link) => (
              <Link
                key={link.path + link.name}
                to={link.path}
                className={cn(
                  "flex items-center gap-1 text-cream/70 hover:text-cream transition-colors duration-300 text-[11px] tracking-[0.2em] uppercase font-light",
                  location.pathname === link.path && "text-cream"
                )}
              >
                {link.hasDropdown && (
                  <span className="px-3 py-1.5 border border-primary/40 rounded-full text-cream/80 hover:border-primary transition-colors flex items-center gap-1">
                    {link.name}
                    <ChevronDown className="w-3 h-3" />
                  </span>
                )}
                {!link.hasDropdown && link.name}
              </Link>
            ))}
          </nav>

          {/* Center Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
            <div className="w-10 h-10 border border-primary/50 rounded flex items-center justify-center mb-1 group-hover:border-primary transition-colors">
              <img
                src={mcLogo}
                alt="MC"
                className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-[9px] tracking-[0.15em] text-cream/60 uppercase">Michael</span>
            <span className="text-[9px] tracking-[0.15em] text-cream/60 uppercase">Chandler</span>
          </Link>

          {/* Right Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {rightLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-cream/70 hover:text-cream transition-colors duration-300 text-[11px] tracking-[0.2em] uppercase font-light",
                  location.pathname === link.path && "text-cream"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cream/80 hover:text-cream p-2 transition-colors ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border mt-4">
          <nav className="container mx-auto px-6 py-8 flex flex-col gap-4">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link
                key={link.path + link.name}
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
