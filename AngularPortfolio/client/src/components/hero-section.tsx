import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, Linkedin, Github, User } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export function HeroSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume file
    window.open("/api/resume/download", "_blank");
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const navHeight = 80;
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <Badge className="bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20">
                Available for new opportunities
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Senior Angular
              <span className="text-blue-600 dark:text-blue-400"> Developer</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Senior Experience Engineer with {PERSONAL_INFO.experience} years of total experience, including {PERSONAL_INFO.angularExperience} years specialized in Angular development. 
              Expert in TypeScript, performance optimization, mentoring teams, and delivering scalable enterprise applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href={`tel:${PERSONAL_INFO.phone}`} 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href={PERSONAL_INFO.linkedIn} 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl animate-float">
                <User className="text-white text-8xl" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-4 rounded-full shadow-lg">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.931 12.645h4.138l-2.07-4.138-2.068 4.138zm-7.931 9.355l2.045-4.093.678-1.357h5.731l.678 1.357 2.045 4.093h-11.177zm15.678-6.786c.668-1.337 1.322-2.683 1.322-4.214 0-3.314-2.686-6-6-6s-6 2.686-6 6c0 1.531.654 2.877 1.322 4.214l4.678 9.786 4.678-9.786z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
