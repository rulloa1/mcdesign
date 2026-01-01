import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <FeaturedProjects />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
