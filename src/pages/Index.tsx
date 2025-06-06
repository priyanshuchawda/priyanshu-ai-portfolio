
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TypewriterText from "@/components/TypewriterText";
import ParticleBackground from "@/components/ParticleBackground";
import { Download, Github, Linkedin, ArrowRight, Code2, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const typewriterTexts = [
    "AI-powered tools",
    "full-stack solutions",
    "intelligent automation",
    "scalable applications",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Priyanshu Chawda
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16">
              I build{" "}
              <TypewriterText
                texts={typewriterTexts}
                className="text-primary font-semibold"
              />
              <br />
              that solve real-world problems.
            </div>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              AI & Full-Stack Developer | Open-Source Contributor | Competitive Programmer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Link to="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resume">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>

            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/priyanshuchawda" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/priyanshuchawda" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combining cutting-edge AI technology with full-stack development to create intelligent solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Development</h3>
                <p className="text-muted-foreground">
                  Building intelligent systems using machine learning, natural language processing, and computer vision
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Full-Stack Solutions</h3>
                <p className="text-muted-foreground">
                  End-to-end web applications with modern technologies, scalable architecture, and seamless user experiences
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Consultation</h3>
                <p className="text-muted-foreground">
                  Strategic technical guidance and architecture planning for your next big project or startup idea
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and bring your ideas to life with cutting-edge technology
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
