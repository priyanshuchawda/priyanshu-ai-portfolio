
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Resume Downloaded!",
      description: "The resume PDF has been downloaded to your device.",
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete resume or view my professional experience and qualifications
          </p>
        </div>

        {/* Download Section */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-12">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Download Resume</h2>
            <p className="text-muted-foreground mb-6">
              Get the complete PDF version of my resume with detailed experience, projects, and achievements
            </p>
            <Button 
              size="lg" 
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF Resume
            </Button>
          </CardContent>
        </Card>

        {/* Resume Preview */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="font-semibold">Senior AI Developer</h3>
                <p className="text-sm text-muted-foreground">TechCorp Solutions • 2023 - Present</p>
                <p className="text-sm mt-2">Leading AI initiatives and developing machine learning solutions for enterprise clients.</p>
              </div>
              
              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="font-semibold">Full-Stack Developer</h3>
                <p className="text-sm text-muted-foreground">Innovation Labs • 2022 - 2023</p>
                <p className="text-sm mt-2">Built scalable web applications using React, Node.js, and cloud technologies.</p>
              </div>
              
              <div className="border-l-2 border-green-500 pl-4">
                <h3 className="font-semibold">Software Engineering Intern</h3>
                <p className="text-sm text-muted-foreground">StartupXYZ • 2021 - 2022</p>
                <p className="text-sm mt-2">Developed REST APIs and contributed to frontend development using modern frameworks.</p>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Education & Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="font-semibold">B.Tech Computer Science</h3>
                <p className="text-sm text-muted-foreground">Indian Institute of Technology • 2018 - 2022</p>
                <p className="text-sm mt-2">CGPA: 8.7/10 • Major in AI & Machine Learning</p>
              </div>
              
              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="font-semibold">AWS Solutions Architect</h3>
                <p className="text-sm text-muted-foreground">Amazon Web Services • 2023</p>
                <p className="text-sm mt-2">Professional certification in cloud architecture and deployment.</p>
              </div>
              
              <div className="border-l-2 border-green-500 pl-4">
                <h3 className="font-semibold">Deep Learning Specialization</h3>
                <p className="text-sm text-muted-foreground">Coursera (Andrew Ng) • 2022</p>
                <p className="text-sm mt-2">Comprehensive course on neural networks and deep learning.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Achievements */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Key Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Published 3 research papers in AI conferences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Winner of National Hackathon 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Led team of 8 developers in major project</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">50+ open source contributions on GitHub</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Expert rating in competitive programming</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span className="text-sm">Mentored 20+ junior developers</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Portfolio Link */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 mt-8">
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">Explore My Work</h2>
            <p className="text-muted-foreground mb-6">
              Want to see my projects in action? Check out my complete portfolio
            </p>
            <Button variant="outline" asChild>
              <a href="/projects">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Portfolio
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
