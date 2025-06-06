
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TypewriterText from "@/components/TypewriterText";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { Download, Github, Linkedin, ArrowRight, Code2, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const typewriterTexts = [
    "AI-powered tools",
    "full-stack solutions", 
    "intelligent automation",
    "scalable applications",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEOHead 
        title="Priyanshu Chawda - AI & Full-Stack Developer | Portfolio"
        description="AI & Full-Stack Developer creating intelligent solutions. Expert in Python, React, Machine Learning, and modern web technologies. Available for freelance projects."
        keywords="Priyanshu Chawda, AI Developer, Full-Stack Developer, Machine Learning, Python, React, Portfolio, Freelance"
      />
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            >
              Priyanshu Chawda
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 h-16"
            >
              I build{" "}
              <TypewriterText
                texts={typewriterTexts}
                className="text-primary font-semibold"
              />
              <br />
              that solve real-world problems.
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              AI & Full-Stack Developer | Open-Source Contributor | Competitive Programmer
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-300">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300">
                <Link to="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="flex justify-center space-x-6"
            >
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-all duration-300">
                <a href="https://github.com/priyanshuchawda" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-all duration-300">
                <a href="https://linkedin.com/in/priyanshuchawda" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Combining cutting-edge AI technology with full-stack development to create intelligent solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Code2,
                  title: "AI Development",
                  description: "Building intelligent systems using machine learning, natural language processing, and computer vision",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: Zap,
                  title: "Full-Stack Solutions", 
                  description: "End-to-end web applications with modern technologies, scalable architecture, and seamless user experiences",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  icon: Users,
                  title: "Consultation",
                  description: "Strategic technical guidance and architecture planning for your next big project or startup idea",
                  gradient: "from-green-500 to-teal-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection delay={0.4}>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and bring your ideas to life with cutting-edge technology
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 hover:scale-105 transition-all duration-300">
                <Link to="/contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Index;
