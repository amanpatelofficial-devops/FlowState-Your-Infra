
export const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">DevOps Co.</h3>
            <p className="text-gray-400">
              Accelerating software delivery through DevOps excellence
            </p>
          </div>
          
          {[
            {
              title: "Services",
              links: ["Cloud Infrastructure", "CI/CD", "Consulting", "Training"]
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Contact"]
            },
            {
              title: "Legal",
              links: ["Privacy", "Terms", "Security", "Compliance"]
            }
          ].map((col, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 DevOps Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
