import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-charcoal text-cream px-6">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-serif text-primary mb-4 opacity-20">404</h1>
        <div className="relative -mt-20 mb-12">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Page Not Found</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-cream/70 text-lg font-light mb-12">
            The architectural marvel you're looking for seems to have vanished from our blueprints.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="default" className="w-full sm:w-auto">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Return Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto border-cream/30 text-cream hover:bg-cream/10">
              <button onClick={() => window.history.back()} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
