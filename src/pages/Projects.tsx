
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import GlitchText from "@/components/GlitchText";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "AI Content Generator",
      description: "Advanced AI-powered content generation tool using GPT models for blogs, social media, and marketing copy.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      tags: ["AI", "React", "Node.js", "OpenAI"],
      category: "AI",
      github: "https://github.com/priyanshuchawda",
      demo: "https://priyanshutech.xyz",
    },
    {
      id: 2,
      title: "Smart Task Automation",
      description: "Intelligent task automation platform that learns user patterns and automates repetitive workflows.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      tags: ["Automation", "Python", "Machine Learning", "FastAPI"],
      category: "Automation",
      github: "https://github.com/priyanshuchawda",
      demo: "https://priyanshutech.xyz",
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web App",
      github: "https://github.com/priyanshuchawda",
      demo: "https://priyanshutech.xyz",
    },
    {
      id: 4,
      title: "Voice Assistant AI",
      description: "Custom voice assistant with natural language processing and smart home integration capabilities.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
      tags: ["AI", "NLP", "Speech Recognition", "Python"],
      category: "AI",
      github: "https://github.com/priyanshuchawda",
      demo: "https://priyanshutech.xyz",
    },
    {
      id: 5,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for real-time data visualization and business intelligence insights.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      tags: ["React", "D3.js", "Python", "Data Science"],
      category: "Web App",
      github: "https://github.com/priyanshuchawda",
      demo: "https://priyanshutech.xyz",
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology with smart contracts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      tags: ["Blockchain", "Solidity", "Web3", "React"],
      category: "Web App",
      github: "https://github.com/priyanshuchawda",
      demo: "https://priyanshutech.xyz",
    },
  ];

  const categories = ["All", "AI", "Automation", "Web App"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-black dark:via-purple-950/30 dark:to-black">
      <SEOHead 
        title="Projects - Priyanshu Chawda | AI & Full-Stack Developer"
        description="Explore AI-powered tools, full-stack applications, and innovative solutions built by Priyanshu Chawda. From machine learning projects to web applications."
        keywords="AI projects, web applications, machine learning, full-stack projects, automation tools, Priyanshu Chawda portfolio"
      />
      
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm font-mono text-cyan-400 dark:text-cyan-300 tracking-wider mb-4">
                &gt; PROJECT_PORTFOLIO.exe
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <GlitchText 
                  text="MY PROJECTS" 
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  glitchChance={0.01}
                />
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
                A showcase of AI-powered tools, full-stack applications, and innovative solutions I've built
              </p>
            </div>
          </AnimatedSection>

          {/* Filter Buttons */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={`font-mono transition-all duration-300 ${
                    activeFilter === category 
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-black border-0 shadow-lg shadow-cyan-500/25" 
                      : "border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300"
                  }`}
                >
                  {category.toUpperCase()}
                </Button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group overflow-hidden bg-black/40 backdrop-blur-sm border-gray-800 hover:border-cyan-500/50 transition-all duration-500 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl font-bold font-mono text-cyan-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-gray-300 mb-4 flex-1 font-mono text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge 
                            key={tag} 
                            variant="secondary" 
                            className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30 font-mono"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" asChild className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            CODE
                          </a>
                        </Button>
                        <Button size="sm" asChild className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-mono">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            DEMO <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection delay={0.8}>
            <div className="text-center mt-20">
              <div className="text-sm font-mono text-cyan-400 tracking-wider mb-4">
                &gt; READY_TO_BUILD_SOMETHING_AMAZING?
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4 font-mono">
                <GlitchText 
                  text="Want something like this built?"
                  className="text-white"
                  glitchChance={0.005}
                />
              </h2>
              <p className="text-muted-foreground mb-8 font-mono">
                Let's discuss your project requirements and bring your ideas to life
              </p>
              <Button 
                size="lg" 
                asChild
                className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-black font-bold border-0 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25 font-mono"
              >
                <a href="/contact">
                  CONTACT.init() <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Projects;
