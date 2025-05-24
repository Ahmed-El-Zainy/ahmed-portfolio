
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Palligemma Multi-Modal Model",
      description: "Integrated text and image data using a multi-modal model designed to process and generate outputs based on both input types.",
      achievements: ["Fine-tuned to achieve over 75% accuracy", "Multi-modal input processing", "Advanced output generation"],
      tags: ["Multi-Modal", "Computer Vision", "NLP", "Fine-tuning"]
    },
    {
      title: "LLaMA2 from Scratch",
      description: "Built complete LLaMA2 model from scratch, incorporating all key components and fine-tuning for sentiment analysis.",
      achievements: ["Built from scratch implementation", "Achieved over 92% accuracy", "Custom sentiment analysis fine-tuning"],
      tags: ["LLaMA", "Transformer", "Sentiment Analysis", "PyTorch"]
    },
    {
      title: "Soccer AI with YOLOv8x",
      description: "Developed comprehensive Soccer AI system for real-time player and keypoint detection in soccer analysis.",
      achievements: ["95%+ precision and 85% recall for player detection", "99% precision and recall for keypoint detection", "Real-time processing"],
      tags: ["YOLOv8", "Computer Vision", "Real-time", "Sports Analytics"]
    },
    {
      title: "Customer Waiting Time Analysis",
      description: "Analyzed customer behavior at cashier counters and vehicle traffic patterns using computer vision techniques.",
      achievements: ["Real-time object detection and tracking", "Zone-based monitoring system", "Traffic flow analysis"],
      tags: ["YOLOv8", "Object Tracking", "Analytics", "Computer Vision"]
    },
    {
      title: "Naruto Shippuden AI Suite",
      description: "Comprehensive suite of AI models including Character Chatbot, Network Analysis, and Theme Classification for the Naruto series.",
      achievements: ["Character conversation simulation", "Relationship network analysis", "Theme identification system", "Text classification"],
      tags: ["Chatbot", "NLP", "Character AI", "Text Classification"]
    },
    {
      title: "Ticket Support Classifier",
      description: "Advanced machine learning pipeline for automated ticket classification with comprehensive data preprocessing.",
      achievements: ["90% F1 score achievement", "Zero-shot and Few-shot learning", "Advanced preprocessing pipeline", "Multiple model implementation"],
      tags: ["BERT", "T5", "LLaMA", "Classification", "MLOps"]
    },
    {
      title: "CLIP Implementation",
      description: "Comprehensive CLIP model implementation built from scratch using PyTorch with interactive Colab demo.",
      achievements: ["Complete from-scratch implementation", "PyTorch implementation", "Interactive demo development"],
      tags: ["CLIP", "Multi-Modal", "PyTorch", "Computer Vision"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 group">
              <CardHeader>
                <CardTitle className="text-xl text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-pink-400">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-pink-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-500/30 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
