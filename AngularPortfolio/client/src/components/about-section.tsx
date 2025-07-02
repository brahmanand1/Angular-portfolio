import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen } from "lucide-react";
import { SKILLS, STATS, CERTIFICATIONS, ACHIEVEMENTS } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            6.9 years of total experience with 6 years specialized in Angular development. Passionate about creating scalable web applications and mentoring teams to deliver exceptional digital experiences.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Frontend Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {SKILLS.frontend.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="skill-badge bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">UI Libraries & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {SKILLS.libraries.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="skill-badge bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Development Tools</h4>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="skill-badge bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Concepts & Practices</h4>
              <div className="flex flex-wrap gap-2">
                {SKILLS.concepts.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="skill-badge bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications & Achievements */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="text-blue-600 dark:text-blue-400 mr-2 h-5 w-5" />
                  <h4 className="font-semibold text-lg">Professional Certifications</h4>
                </div>
                <div className="space-y-3">
                  {CERTIFICATIONS.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{cert.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{cert.provider}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Achievements */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="text-green-600 dark:text-green-400 mr-2 h-5 w-5" />
                  <h4 className="font-semibold text-lg">Awards & Recognition</h4>
                </div>
                <div className="space-y-3">
                  {ACHIEVEMENTS.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <p className="text-sm">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
