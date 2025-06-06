
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "JavaScript/TypeScript", level: 90, icon: "🟨" },
        { name: "Java", level: 85, icon: "☕" },
        { name: "C++", level: 80, icon: "⚡" },
        { name: "Go", level: 75, icon: "🔷" },
      ],
    },
    {
      title: "AI/ML Technologies",
      skills: [
        { name: "TensorFlow", level: 90, icon: "🧠" },
        { name: "PyTorch", level: 85, icon: "🔥" },
        { name: "OpenAI API", level: 95, icon: "🤖" },
        { name: "Scikit-learn", level: 88, icon: "📊" },
        { name: "Computer Vision", level: 82, icon: "👁️" },
        { name: "NLP", level: 87, icon: "💬" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: 92, icon: "⚛️" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Vue.js", level: 80, icon: "💚" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "Three.js", level: 75, icon: "🌐" },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: 90, icon: "💚" },
        { name: "FastAPI", level: 92, icon: "⚡" },
        { name: "Django", level: 85, icon: "🎯" },
        { name: "Express.js", level: 88, icon: "🚂" },
        { name: "GraphQL", level: 80, icon: "🔗" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", level: 88, icon: "🐘" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "Redis", level: 80, icon: "🔴" },
        { name: "AWS", level: 85, icon: "☁️" },
        { name: "Docker", level: 90, icon: "🐳" },
        { name: "Kubernetes", level: 75, icon: "⚓" },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", level: 95, icon: "📱" },
        { name: "VS Code", level: 90, icon: "💙" },
        { name: "Postman", level: 85, icon: "📮" },
        { name: "Figma", level: 78, icon: "🎨" },
        { name: "Linux", level: 88, icon: "🐧" },
      ],
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional ML Engineer",
    "MongoDB Certified Developer",
    "Meta React Developer Certificate",
    "NVIDIA Deep Learning Institute Certificate",
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold flex items-center gap-3">
                  <span className="text-2xl">{index === 0 ? "💻" : index === 1 ? "🤖" : index === 2 ? "🎨" : index === 3 ? "⚙️" : index === 4 ? "☁️" : "🛠️"}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 font-medium">
                          <span>{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted/30"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              Certifications & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {certifications.map((cert) => (
                <Badge
                  key={cert}
                  variant="secondary"
                  className="text-sm py-2 px-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Competitive Programming */}
        <div className="mt-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center gap-3">
                <span className="text-2xl">🏅</span>
                Competitive Programming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">1500+</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">Expert</div>
                  <div className="text-sm text-muted-foreground">Codeforces Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500 mb-2">5⭐</div>
                  <div className="text-sm text-muted-foreground">HackerRank Rating</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
