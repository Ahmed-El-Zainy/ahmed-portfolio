
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Cpu, Award, BookOpen } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "TensorFlow", "PyTorch", "R", "Java", "C", "C++", "JavaScript", "SQL"]
    },
    {
      title: "MLOps & Tools",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["MLFlow", "DVC", "HuggingFace", "SegMaker", "DagsHub", "Gretal AI", "Wandb", "Git", "CI/CD", "GitHub Actions", "Docker"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "GCP", "EC2", "OpenCV", "Keras", "scikit-learn"]
    },
    {
      title: "Web Development",
      icon: <Database className="w-6 h-6" />,
      skills: ["Flask", "Django", "SQL-lite", "MongoDB", "HTML", "CSS", "PostgreSQL"]
    }
  ];

  const certifications = [
    "AWS Machine Learning Engineer",
    "AWS Academy Cloud Foundations",
    "Computer Vision Engineer",
    "Associate AI Engineer for Data Scientists"
  ];

  const courses = [
    "Advanced Practical GenAI",
    "Natural Language Processing Specialization", 
    "Machine Learning Engineering for Production (MLOps)",
    "Build Multimodal RAG Apps",
    "Generative AI with Large Language Models",
    "Deep Learning Specialization"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <div className="text-green-400">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-green-400/30 text-green-300 hover:bg-green-400/10">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <Award className="w-6 h-6 text-yellow-400" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-yellow-400 mt-1">✓</span>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <BookOpen className="w-6 h-6 text-blue-400" />
                Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {courses.map((course, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">📚</span>
                    <span className="text-gray-300">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
