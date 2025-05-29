
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { url } from "inspector";

export const Projects = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  // https://www.youtube.com/watch?v=Mn_9W1nCFLo&pp=ygULbGxhbSBtb2RlbHM%3D
  const projects = [
    {
      title: "Palligemma Multi-Modal Model",
      description: "Integrated text and image data using a multi-modal model designed to process and generate outputs based on both input types.",
      achievements: ["Fine-tuned to achieve over 75% accuracy", "Multi-modal input processing", "Advanced output generation"],
      tags: ["Multi-Modal", "Computer Vision", "NLP", "Fine-tuning"],
      media: [
        { type: "image", url: "/assets/pyramids.png", alt: "AI model visualization" },
        { type: "video", url: "https://www.youtube.com/embed/OMBmVInx68M", thumbnail: "/assets/paligemma.jpg" }
      ]
    },
    
    {
      title: "LLaMA2 from Scratch",
      description: "Built complete LLaMA2 model from scratch, incorporating all key components and fine-tuning for sentiment analysis.",
      achievements: ["Built from scratch implementation", "Achieved over 92% accuracy", "Custom sentiment analysis fine-tuning"],
      tags: ["LLaMA", "Transformer", "Sentiment Analysis", "PyTorch"],
      media: [
        { type: "video", url: "https://www.youtube.com/embed/Mn_9W1nCFLo", thumbnail: "/assets/llama_architecutures.jpg" },
        { type: "image", url: "/assets/llama_architecutures.jpg", alt: "Code implementation" }
      ]
    },

    // https://www.youtube.com/watch?v=etjkjZoG2F0&pp=ygULeW9sbyBtb2RlbHM%3D
    {
      title: "Soccer AI with YOLOv8x",
      description: "Developed comprehensive Soccer AI system for real-time player and keypoint detection in soccer analysis.",
      achievements: ["95%+ precision and 85% recall for player detection", "99% precision and recall for keypoint detection", "Real-time processing"],
      tags: ["YOLOv8", "Computer Vision", "Real-time", "Sports Analytics"],
      media: [
        { type: "video", url: "https://www.youtube.com/embed/etjkjZoG2F0", thumbnail: "/assets/performance-comparison.png" },
        { type: "image", url: "assets/1 (1).png", alt: "Soccer player detection" }
      ]
    },
    {
      title: "Customer Waiting Time Analysis",
      description: "Analyzed customer behavior at cashier counters and vehicle traffic patterns using computer vision techniques.",
      achievements: ["Real-time object detection and tracking", "Zone-based monitoring system", "Traffic flow analysis"],
      tags: ["YOLOv8", "Object Tracking", "Analytics", "Computer Vision"],
      media: [
        { type: "image", url: "assets/market.png", alt: "Traffic analysis visualization" },
        { type: "video", url: "https://www.youtube.com/embed/BLFeqq8Fags", thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" }
      ]
    },
    {
      title: "Naruto Shippuden AI Suite",
      description: "Comprehensive suite of AI models including Character Chatbot, Network Analysis, and Theme Classification for the Naruto series.",
      achievements: ["Character conversation simulation", "Relationship network analysis", "Theme identification system", "Text classification"],
      tags: ["Chatbot", "NLP", "Character AI", "Text Classification"],
      media: [
        {type: "image", url: "/assets/map_narto.png", alt: "Naruto character network map" },
        { type: "image", url: "/assets/4 (2).png", alt: "Network analysis visualization" }
      ]
    },
    {
      title: "Ticket Support Classifier",
      description: "Advanced machine learning pipeline for automated ticket classification with comprehensive data preprocessing.",
      achievements: ["90% F1 score achievement", "Zero-shot and Few-shot learning", "Advanced preprocessing pipeline", "Multiple model implementation"],
      tags: ["BERT", "T5", "LLaMA", "Classification", "MLOps"],
      media: [
        { type: "image", url: "/assets/Screenshot 2024-09-29 at 6.52.02 PM.png", alt: "Classification results" }
      ]
    },
    {
      title: "CLIP Implementation",
      description: "Comprehensive CLIP model implementation built from scratch using PyTorch with interactive Colab demo.",
      achievements: ["Complete from-scratch implementation", "PyTorch implementation", "Interactive demo development"],
      tags: ["CLIP", "Multi-Modal", "PyTorch", "Computer Vision"],
      media: [
        { type: "video", url: "https://www.youtube.com/embed/1NCvZY6tLNc", thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81" },
        { type: "image", url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81", alt: "CLIP model architecture" }
      ]
    }
  ];

  const handleOpenVideo = (videoUrl: string) => {
    setActiveVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-pink-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10 group">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {project.media && project.media.length > 0 && (
                  <div className="rounded-md overflow-hidden bg-black/20 h-48 mb-4">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {project.media.map((media, i) => (
                          <CarouselItem key={i}>
                            {media.type === "image" ? (
                              <div className="relative h-48 w-full">
                                <img 
                                  src={media.url} 
                                  alt={media.alt || project.title} 
                                  className="w-full h-full object-cover rounded-md"
                                />
                                <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-md">
                                  <ImageIcon className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            ) : (
                              <div className="relative h-48 w-full cursor-pointer group" onClick={() => handleOpenVideo(media.url)}>
                                <img 
                                  src={media.thumbnail} 
                                  alt={`${project.title} video thumbnail`} 
                                  className="w-full h-full object-cover rounded-md"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all rounded-md">
                                  <div className="bg-pink-500/80 rounded-full p-3 group-hover:scale-110 transition-transform">
                                    <Play className="w-6 h-6 text-white" />
                                  </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-md">
                                  <Play className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            )}
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      {project.media.length > 1 && (
                        <>
                          <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/70 border-none text-white" />
                          <CarouselNext className="right-2 bg-black/50 hover:bg-black/70 border-none text-white" />
                        </>
                      )}
                    </Carousel>
                  </div>
                )}

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

        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={handleCloseVideo}>
            <div className="relative max-w-4xl w-full aspect-video" onClick={e => e.stopPropagation()}>
              <iframe
                src={activeVideo}
                className="w-full h-full rounded-lg"
                title="Project Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={handleCloseVideo}
                className="absolute -top-10 right-0 text-white border-white hover:bg-white/20"
              >
                Close Video
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
