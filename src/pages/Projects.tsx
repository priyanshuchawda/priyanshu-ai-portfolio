
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of AI-powered tools, full-stack applications, and innovative solutions I've built
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={activeFilter === category ? "bg-gradient-to-r from-blue-500 to-purple-600" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Want something like this built?
          </h2>
          <p className="text-muted-foreground mb-6">
            Let's discuss your project requirements and bring your ideas to life
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700">
            <a href="/contact">Let's Talk!</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
