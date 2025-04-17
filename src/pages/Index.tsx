
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProcessSection } from "../components/ProcessSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#E7F0FD] via-[#ACCBEE] to-[#E2D1C3] 
      bg-fixed bg-cover bg-center relative"
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

