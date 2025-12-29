import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CTASection from "@/components/home/CTASection";
import SplashScreen from "@/components/layout/SplashScreen";
import { useState, useEffect } from "react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setShowSplash(true);
      sessionStorage.setItem("hasSeenSplash", "true");
    }
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <Layout>
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
