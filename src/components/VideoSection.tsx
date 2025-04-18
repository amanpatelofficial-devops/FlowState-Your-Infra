
import { Play } from "lucide-react";
import { Button } from "./ui/button";

export const VideoSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#2A2F3C] to-[#1A1F2C] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            See How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch our platform in action and discover how we can transform your DevOps workflow
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
          <div className="aspect-video bg-black/50">
            {/* Replace src with your actual video URL */}
            <video 
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <Button 
                className="bg-white/90 hover:bg-white text-black rounded-full w-16 h-16 flex items-center justify-center"
                size="icon"
              >
                <Play className="w-8 h-8" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
