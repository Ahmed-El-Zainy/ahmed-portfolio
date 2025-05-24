
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "LINNAEA",
      position: "Machine Learning Engineer - Full-time",
      location: "Cairo, Egypt",
      period: "Sep 2024 - Mar 2025",
      achievements: [
        "Fine-tuned Microsoft's TrOCR model, achieving 0.21 CER, surpassing the baseline for bilanguage (AR-EN)",
        "Enhanced the Image Registration module using the Xoftr model",
        "Developed Unit-Tests, ensuring pipeline reliability and robustness of models",
        "Fine-tuned UNet segmentation model for text segmentation, achieving an F1 Score of 99.8%",
        "Built a Language Classifier based on MobileNet-V4, achieving an error rate of 0.01%",
        "Reviewed SOTA for VLM models designed for OCR tasks, such as OCR-GOT-0.2",
        "Led the change to use VLM Models instead of the classic pipeline, using models like QWEN-2.5-VL",
        "Built the training pipeline for Qwen-2.5-VL using GRPO to optimize performance",
        "Deployed LLMs on AWS infrastructure, including EC2 instances"
      ],
      tags: ["TrOCR", "UNet", "MobileNet", "AWS", "VLM", "QWEN"]
    },
    {
      company: "Singularity",
      position: "Machine Learning Engineer - Part-time",
      location: "Cairo, Egypt",
      period: "Jul 2024 - Mar 2025",
      achievements: [
        "Contributed to LLM-based solutions, based on Llama-2,3 QWEN-2, 2.5 and PHI-3,4",
        "Surveyed Small Visual Language Models (SmallVLM) as pipeline alternatives",
        "Assisted in building LLMs for text generation and text-to-speech tasks",
        "Refactored base code and applied UnitTests, ensuring streaming support for multiple cameras",
        "Utilized the TRELIIS model for domain-specific demo"
      ],
      tags: ["LLaMA", "QWEN", "PHI", "SmallVLM", "TTS"]
    },
    {
      company: "Space Minders",
      position: "Machine Learning Engineer - Internship",
      location: "Cairo, Egypt",
      period: "June 2024 - Sept 2024",
      achievements: [
        "Developed high-accuracy real-time TTS solutions for voice assistants",
        "Used models like speech-t5, xtts-2, fish-speech-1, Style-TTS-1,2",
        "Optimized training and inference pipelines for diverse language structures",
        "Advanced data processing and preprocessing for efficient dataset preparation"
      ],
      tags: ["TTS", "Speech-T5", "XTTS", "Voice Assistants"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-white mb-2">{exp.position}</CardTitle>
                    <CardDescription className="text-xl text-blue-400 font-semibold">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="text-gray-400 space-y-2">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 leading-relaxed flex items-start gap-3">
                      <span className="text-purple-400 mt-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
