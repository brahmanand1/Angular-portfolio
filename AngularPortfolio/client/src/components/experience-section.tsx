import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My journey through leading technology companies</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
          
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}>
              <div className={`flex-1 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                <Card className="shadow-lg border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.role}</h3>
                      <p className="text-lg font-semibold">{exp.company}</p>
                      <p className="text-gray-600 dark:text-gray-400">{exp.duration}</p>
                    </div>
                    
                    <div className="space-y-3 text-sm mb-4">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <CheckCircle className="text-green-500 mt-1 mr-2 h-4 w-4 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Timeline dot */}
              <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
              
              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
