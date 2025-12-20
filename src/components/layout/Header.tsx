import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform">
            <span className="text-primary-foreground font-serif text-xl font-bold">MC</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-cream text-lg font-serif tracking-wide">Michael Chandler</span>
            <p className="text-cream/60 text-xs tracking-[0.3em] uppercase">Design • Build • Develop</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-cream/80 hover:text-primary transition-colors text-sm tracking-widest uppercase font-medium relative group",
                location.pathname === link.path && "text-primary"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link to="/portal">
            <Button variant="outline" size="sm" className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <User className="w-4 h-4 mr-2" />
              Client Portal
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal/98 backdrop-blur-lg border-t border-primary/20">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-cream/80 hover:text-primary transition-colors text-lg tracking-widest uppercase font-medium py-2",
                  location.pathname === link.path && "text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/portal" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <User className="w-4 h-4 mr-2" />
                Client Portal
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
