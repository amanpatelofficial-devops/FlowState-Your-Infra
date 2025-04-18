
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProcessSection } from "../components/ProcessSection";
import { VideoSection } from "../components/VideoSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#2A2F3C] to-[#3A3F4C] bg-fixed relative overflow-hidden">
      {/* Subtle background particles/overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0EA5E9]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#38BDF8]/20 rounded-full blur-3xl animate-pulse delay-500" />
      
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <VideoSection />
        <ProcessSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
