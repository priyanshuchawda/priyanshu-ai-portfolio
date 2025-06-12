
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import GlitchText from "@/components/GlitchText";
import { motion } from "framer-motion";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resume Downloaded!",
      description: "The resume PDF has been downloaded to your device.",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 dark:bg-black transition-colors duration-300">
      <SEOHead 
        title="Resume - Priyanshu Chawda | AI & Full-Stack Developer"
        description="Download Priyanshu Chawda's resume showcasing AI development, full-stack expertise, professional experience, education, and achievements."
        keywords="Priyanshu Chawda resume, AI developer CV, full-stack developer resume, download resume, professional experience"
      />
      
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm font-mono text-cyan-400 dark:text-cyan-300 tracking-wider mb-4">
                &gt; PROFESSIONAL_PROFILE.load()
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <GlitchText 
                  text="RESUME" 
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  glitchChance={0.01}
                />
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
                Download my complete resume or view my professional experience and qualifications
              </p>
            </div>
          </AnimatedSection>

          {/* Download Section */}
          <AnimatedSection delay={0.2}>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-cyan-500/50 transition-all duration-500 mb-12">
              <CardContent className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Download className="h-10 w-10 text-white" />
                </motion.div>
                <h2 className="text-2xl font-bold mb-4 font-mono text-cyan-300">Download Resume</h2>
                <p className="text-gray-300 mb-6 font-mono">
                  Get the complete PDF version of my resume with detailed experience, projects, and achievements
                </p>
                <Button 
                  size="lg" 
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-black font-bold border-0 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 font-mono"
                >
                  <Download className="mr-2 h-5 w-5" />
                  DOWNLOAD_RESUME.pdf
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Resume Preview */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Experience */}
            <AnimatedSection delay={0.4}>
              <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-500 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-mono text-purple-300">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-cyan-500 pl-4"
                  >
                    <h3 className="font-bold font-mono text-gray-200">AI & Full-Stack Developer</h3>
                    <p className="text-sm text-gray-400 font-mono">Freelance & Open Source • 2020 - Present</p>
                    <p className="text-sm mt-2 text-gray-300 font-mono">
                      Specializing in AI development, web applications, and modern tech solutions. 
                      Passionate about creating innovative digital experiences.
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Education */}
            <AnimatedSection delay={0.6}>
              <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-green-500/50 transition-all duration-500 h-full">
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-mono text-green-300">Skills & Learning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      title: "Self-Taught Developer",
                      institution: "Online Learning & Practice",
                      period: "2020 - Present",
                      description: "Continuous learning through projects, documentation, and hands-on experience",
                      color: "cyan"
                    },
                    {
                      title: "Modern Web Development",
                      institution: "Various Platforms", 
                      period: "2021 - Present",
                      description: "Mastering React, TypeScript, AI technologies, and full-stack development",
                      color: "purple"
                    },
                    {
                      title: "AI & Machine Learning",
                      institution: "Open Source & Projects",
                      period: "2022 - Present",
                      description: "Building AI applications and exploring modern machine learning frameworks",
                      color: "green"
                    }
                  ].map((edu, index) => (
                    <motion.div
                      key={edu.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`border-l-2 pl-4 ${
                        edu.color === 'cyan' ? 'border-cyan-500' :
                        edu.color === 'purple' ? 'border-purple-500' :
                        'border-green-500'
                      }`}
                    >
                      <h3 className="font-bold font-mono text-gray-200">{edu.title}</h3>
                      <p className="text-sm text-gray-400 font-mono">{edu.institution} • {edu.period}</p>
                      <p className="text-sm mt-2 text-gray-300 font-mono">{edu.description}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Key Achievements */}
          <AnimatedSection delay={0.8}>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-pink-500/50 transition-all duration-500 mt-8">
              <CardHeader>
                <CardTitle className="text-xl font-bold font-mono text-pink-300">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    {[
                      "Built 20+ modern web applications",
                      "Expert in React, TypeScript & AI integration", 
                      "Active open source contributor"
                    ].map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-mono text-gray-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      "Proficient in modern development tools",
                      "Focus on user experience & performance",
                      "Passionate about learning new technologies"
                    ].map((achievement, index) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-mono text-gray-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Portfolio Link */}
          <AnimatedSection delay={1.0}>
            <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 mt-8">
              <CardContent className="p-8 text-center">
                <h2 className="text-xl font-bold mb-4 font-mono text-cyan-300">
                  <GlitchText 
                    text="Explore My Work"
                    className="text-cyan-300"
                    glitchChance={0.005}
                  />
                </h2>
                <p className="text-gray-300 mb-6 font-mono">
                  Want to see my projects in action? Check out my complete portfolio
                </p>
                <Button 
                  variant="outline" 
                  asChild
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 font-mono"
                >
                  <a href="/projects">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    VIEW_PORTFOLIO.exe
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Resume;
