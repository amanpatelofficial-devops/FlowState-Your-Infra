
import { ArrowRight, Shield, Server, Code } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b')] bg-cover bg-center opacity-10" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
            Accelerate Your DevOps Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
            Streamline your development pipeline with our enterprise-grade DevOps solutions
          </p>
          <Button className="bg-[#0EA5E9] hover:bg-[#0B95D9] text-white px-8 py-6 rounded-lg font-medium text-lg animate-pulse">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { icon: Shield, title: "Security First", desc: "Enterprise-grade security protocols" },
            { icon: Server, title: "Scalable Infrastructure", desc: "Cloud-native architecture" },
            { icon: Code, title: "Automated Pipelines", desc: "CI/CD excellence" }
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all 
                transform hover:-translate-y-1 hover:shadow-xl duration-300"
            >
              <item.icon className="w-12 h-12 text-[#0EA5E9] mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
