
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import GlitchText from "@/components/GlitchText";
import { motion } from "framer-motion";

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-black dark:via-purple-950/30 dark:to-black">
      <SEOHead 
        title="Skills - Priyanshu Chawda | AI & Full-Stack Developer"
        description="Comprehensive overview of Priyanshu Chawda's technical skills including AI/ML, full-stack development, cloud technologies, and programming languages."
        keywords="AI skills, machine learning, Python, React, full-stack developer skills, cloud computing, web development technologies"
      />
      
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm font-mono text-cyan-400 dark:text-cyan-300 tracking-wider mb-4">
                &gt; SKILL_MATRIX.load()
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <GlitchText 
                  text="SKILLS & EXPERTISE" 
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  glitchChance={0.01}
                />
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
                A comprehensive overview of my technical skills, tools, and technologies I work with
              </p>
            </div>
          </AnimatedSection>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-cyan-500/50 transition-all duration-500 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center gap-3 font-mono text-cyan-300">
                        <span className="text-2xl">
                          {categoryIndex === 0 ? "💻" : 
                           categoryIndex === 1 ? "🤖" : 
                           categoryIndex === 2 ? "🎨" : 
                           categoryIndex === 3 ? "⚙️" : 
                           categoryIndex === 4 ? "☁️" : "🛠️"}
                        </span>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                          >
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-2 font-medium font-mono text-gray-300">
                                <span>{skill.icon}</span>
                                {skill.name}
                              </span>
                              <span className="text-sm text-cyan-400 font-mono">{skill.level}%</span>
                            </div>
                            <div className="relative">
                              <Progress 
                                value={skill.level} 
                                className="h-2 bg-gray-700/50"
                              />
                              <div 
                                className="absolute top-0 left-0 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Certifications */}
          <AnimatedSection delay={0.6}>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-500 mb-16">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-3 font-mono text-purple-300">
                  <span className="text-2xl">🏆</span>
                  Certifications & Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-2 px-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300 font-mono hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                      >
                        {cert}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Competitive Programming */}
          <AnimatedSection delay={0.8}>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-green-500/50 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-xl font-bold flex items-center gap-3 font-mono text-green-300">
                  <span className="text-2xl">🏅</span>
                  Competitive Programming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { value: "1500+", label: "Problems Solved", color: "cyan" },
                    { value: "Expert", label: "Codeforces Rating", color: "green" },
                    { value: "5⭐", label: "HackerRank Rating", color: "purple" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className={`text-3xl font-bold mb-2 font-mono ${
                        stat.color === 'cyan' ? 'text-cyan-400' :
                        stat.color === 'green' ? 'text-green-400' :
                        'text-purple-400'
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Skills;
