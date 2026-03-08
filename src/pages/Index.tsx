import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdvocacySection from "@/components/AdvocacySection";
import ManifestoSection from "@/components/ManifestoSection";
import ContactSection from "@/components/ContactSection";
import SpotifyPlayer from "@/components/SpotifyPlayer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdvocacySection />
      <ManifestoSection />
      <ContactSection />
      <SpotifyPlayer />
    </div>
  );
};

export default Index;
