
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin, User } from "lucide-react";

export const Contact = () => {
  const references = [
    {
      name: "Ahmed Stohy",
      title: "Sr Machine Learning Engineer",
      contact: "Available upon request"
    },
    {
      name: "Hend Adel",
      title: "Associate Professor", 
      contact: "Available upon request"
    },
    {
      name: "Abdelrhman Elmashtoly",
      title: "Sr Software Machine Learning Engineer",
      contact: "Available upon request"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <Mail className="w-8 h-8 text-cyan-400" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:ahmedelzainy44@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                      ahmedelzainy44@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+201140945406" className="text-white hover:text-green-400 transition-colors">
                      +2(0114) 094–5406
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <span className="text-white">Cairo, Egypt</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <a href="https://linkedin.com/in/Ahmed-El-Zainy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700">
                  <a href="https://github.com/Ahmed-El-Zainy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <User className="w-8 h-8 text-purple-400" />
                References
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <div key={index} className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                    <h4 className="text-lg font-semibold text-white mb-1">{ref.name}</h4>
                    <p className="text-purple-400 text-sm mb-2">{ref.title}</p>
                    <p className="text-gray-400 text-sm">{ref.contact}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                <p className="text-gray-300 text-sm text-center">
                  Professional references available upon request with full contact details and LinkedIn profiles.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Ready to collaborate on cutting-edge AI projects? Let's discuss how we can work together.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
            <a href="mailto:ahmedelzainy44@gmail.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Start a Conversation
            </a>
          </Button>
        </div>

        <div className="mt-16 text-center border-t border-slate-700 pt-8">
          <p className="text-gray-400 text-sm">
            Last updated: Monday 28th April, 2025 at 06:34
          </p>
        </div>
      </div>
    </section>
  );
};
