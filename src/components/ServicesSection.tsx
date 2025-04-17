
import { Cloud, GitBranch, Terminal, Settings, Shield, Lock, Database } from "lucide-react";

export const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1A1F2C] to-[#2A2F3C]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
          Our DevOps & Security Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Cloud,
              title: "Cloud Infrastructure",
              desc: "Build and manage scalable cloud infrastructure with best practices"
            },
            {
              icon: GitBranch,
              title: "CI/CD Implementation",
              desc: "Automated testing and deployment pipelines for faster delivery"
            },
            {
              icon: Terminal,
              title: "Infrastructure as Code",
              desc: "Version-controlled infrastructure with modern IaC tools"
            },
            {
              icon: Shield,
              title: "DevSecOps",
              desc: "Integrated security practices throughout the development lifecycle"
            },
            {
              icon: Lock,
              title: "Security Services",
              desc: "Comprehensive security audits and threat prevention"
            },
            {
              icon: Database,
              title: "Container Orchestration",
              desc: "Kubernetes and Docker implementation and management"
            }
          ].map((service, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all
                transform hover:-translate-y-1 hover:shadow-xl duration-300"
            >
              <service.icon className="w-12 h-12 text-[#0EA5E9] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
