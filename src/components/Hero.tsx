
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Ahmed Mustafa
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            AI Engineer & Machine Learning Specialist
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Passionate AI Engineer with expertise in Machine Learning, Computer Vision, and Natural Language Processing. 
            Specialized in fine-tuning state-of-the-art models, building scalable ML pipelines, and deploying AI solutions on cloud infrastructure.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
              asChild
            >
              <a href="mailto:ahmedelzainy44@gmail.com" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View Projects
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/Ahmed-El-Zainy" 
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://github.com/Ahmed-El-Zainy" 
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="mailto:ahmedelzainy44@gmail.com" 
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a 
              href="tel:+201140945406" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <Phone className="w-8 h-8" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-gray-400">
            <MapPin className="w-5 h-5" />
            <span>Cairo, Egypt</span>
          </div>
        </div>
      </div>
    </section>
  );
};
