
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  const courses = [
    "Calculus", "Probabilities and Statistics", "Artificial Intelligence", 
    "Machine Learning", "Deep Learning", "Natural Language Processing", "Pattern Recognition"
  ];

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Conversational" }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Education & Languages
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <GraduationCap className="w-8 h-8 text-yellow-400" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Bachelor's Degree in Computer Science
                </h3>
                <p className="text-lg text-gray-300 mb-3">
                  Helwan University, Faculty of Computers & AI
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>October 2020 - July 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Cairo, Egypt</span>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-lg font-semibold text-green-400">GPA: 3.25/4.0</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-yellow-400 mb-3">Relevant Courses:</h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, i) => (
                    <Badge key={i} variant="outline" className="border-yellow-400/30 text-yellow-300 hover:bg-yellow-400/10">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <div className="w-8 h-8 text-blue-400">🌍</div>
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-white">{lang.language}</span>
                    <Badge 
                      className={`${lang.level === 'Native' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'}`}
                    >
                      {lang.level}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
