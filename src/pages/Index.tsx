
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TypewriterText from "@/components/TypewriterText";
import NeuralBackground from "@/components/NeuralBackground";
import GlitchText from "@/components/GlitchText";
import TerminalWindow from "@/components/TerminalWindow";
import CodeSnippet from "@/components/CodeSnippet";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { Download, Github, Linkedin, ArrowRight, Brain, Zap, Cpu, Terminal, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const typewriterTexts = [
    "intelligent automation systems",
    "neural network architectures", 
    "scalable AI infrastructures",
    "competitive algorithms",
    "full-stack innovations"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 dark:bg-black transition-colors duration-300">
      <SEOHead 
        title="Priyanshu Chawda - AI & Full-Stack Developer | Portfolio"
        description="AI & Full-Stack Developer creating intelligent solutions. Expert in Python, React, Machine Learning, and modern web technologies. Available for freelance projects."
        keywords="Priyanshu Chawda, AI Developer, Full-Stack Developer, Machine Learning, Python, React, Portfolio, Freelance"
      />
      
      {/* Cyberpunk Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="text-sm font-mono text-cyan-400 dark:text-cyan-300 tracking-wider">
                  &gt; SYSTEM INITIALIZED
                </div>
                
                {/* SEO-optimized H1 - visually hidden but accessible */}
                <h1 className="sr-only">
                  Priyanshu Chawda - AI & Full-Stack Developer Building Smart Tools for Real-World Impact
                </h1>
                
                {/* Visual heading for design */}
                <div className="text-6xl md:text-8xl font-black leading-none" role="presentation" aria-hidden="true">
                  <GlitchText 
                    text="PRIYANSHU" 
                    className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    glitchChance={0.01}
                  />
                  <GlitchText 
                    text="CHAWDA" 
                    className="block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    glitchChance={0.01}
                  />
                </div>
                
                <div className="text-xl md:text-2xl font-mono">
                  <span className="text-green-400">&gt; </span>
                  <span className="text-muted-foreground">Building </span>
                  <TypewriterText
                    texts={typewriterTexts}
                    className="text-cyan-400 dark:text-cyan-300 font-bold"
                  />
                </div>
                
                <div className="flex items-center gap-4 text-sm font-mono text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>AI_SYSTEMS: ONLINE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>FULL_STACK: READY</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-wrap gap-4"
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-black font-bold border-0 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25"
                >
                  <Link to="/projects">
                    <Terminal className="mr-2 h-5 w-5" />
                    VIEW_PROJECTS.exe
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/resume">
                    <Download className="mr-2 h-4 w-4" />
                    RESUME.pdf
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:scale-105 transition-all duration-300"
                >
                  <Link to="/contact">
                    <Sparkles className="mr-2 h-4 w-4" />
                    CONTACT.init()
                  </Link>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                className="flex gap-6"
              >
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-all duration-300 text-cyan-400 hover:text-cyan-300">
                  <a href="https://github.com/priyanshuchawda" target="_blank" rel="noopener noreferrer" title="Visit GitHub Profile">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hover:scale-110 transition-all duration-300 text-cyan-400 hover:text-cyan-300">
                  <a href="https://linkedin.com/in/priyanshuchawda" target="_blank" rel="noopener noreferrer" title="Visit LinkedIn Profile">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="flex flex-col gap-8 items-center">
              <TerminalWindow />
              <CodeSnippet />
            </div>
          </div>
        </div>
      </section>

      {/* Neural Network Stats */}
      <AnimatedSection delay={0.2}>
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Brain,
                  value: "50+",
                  label: "AI_MODELS_DEPLOYED",
                  color: "cyan"
                },
                {
                  icon: Cpu,
                  value: "1500+", 
                  label: "ALGORITHMS_SOLVED",
                  color: "purple"
                },
                {
                  icon: Zap,
                  value: "99.9%",
                  label: "SYSTEM_UPTIME",
                  color: "green"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-cyan-500/50 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${
                        stat.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                        stat.color === 'purple' ? 'from-purple-500 to-pink-500' :
                        'from-green-500 to-emerald-500'
                      } rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold font-mono text-white mb-2">{stat.value}</div>
                      <div className="text-sm font-mono text-gray-400">{stat.label}</div>
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
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="text-sm font-mono text-cyan-400 tracking-wider">
                  &gt; READY TO INNOVATE?
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black">
                  <GlitchText 
                    text="LET'S BUILD THE FUTURE" 
                    className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    glitchChance={0.005}
                  />
                </h2>
                
                <p className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto">
                  Whether you need AI integration, full-stack development, or algorithmic solutions - 
                  let's create something extraordinary together.
                </p>
                
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-black font-bold border-0 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25"
                >
                  <Link to="/contact">
                    INITIALIZE_PROJECT.sh <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Index;
