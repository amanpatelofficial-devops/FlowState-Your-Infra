
import { ArrowRight, Shield, Server, Code } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8]">
            Accelerate Your DevOps Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Streamline your development pipeline with our enterprise-grade DevOps solutions
          </p>
          <div className="mt-8">
            <button className="bg-[#0EA5E9] hover:bg-[#0B95D9] transition-all px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { icon: Shield, title: "Security First", desc: "Enterprise-grade security protocols" },
            { icon: Server, title: "Scalable Infrastructure", desc: "Cloud-native architecture" },
            { icon: Code, title: "Automated Pipelines", desc: "CI/CD excellence" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all">
              <item.icon className="w-10 h-10 text-[#0EA5E9] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
