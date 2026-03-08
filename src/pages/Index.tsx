import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdvocacySection from "@/components/AdvocacySection";
import ManifestoSection from "@/components/ManifestoSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdvocacySection />
      <ManifestoSection />
      <ContactSection />
    </div>
  );
};

export default Index;
