
export const ProcessSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#2A2F3C] to-[#1A1F2C]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
          Our Process
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Assessment", desc: "Evaluate current infrastructure" },
            { step: "02", title: "Strategy", desc: "Develop implementation roadmap" },
            { step: "03", title: "Implementation", desc: "Execute DevOps solutions" },
            { step: "04", title: "Optimization", desc: "Continuous improvement" }
          ].map((item, i) => (
            <div 
              key={i} 
              className="text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-5xl font-bold text-[#0EA5E9] mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
