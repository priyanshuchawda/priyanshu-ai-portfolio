
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import GlitchText from "@/components/GlitchText";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "JavaScript/TypeScript", icon: "🟨" },
        { name: "Java", icon: "☕" },
        { name: "C++", icon: "⚡" },
        { name: "Go", icon: "🔷" },
      ],
    },
    {
      title: "AI/ML Technologies",
      skills: [
        { name: "TensorFlow", icon: "🧠" },
        { name: "PyTorch", icon: "🔥" },
        { name: "OpenAI API", icon: "🤖" },
        { name: "Scikit-learn", icon: "📊" },
        { name: "Computer Vision", icon: "👁️" },
        { name: "NLP", icon: "💬" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Vue.js", icon: "💚" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Three.js", icon: "🌐" },
      ],
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", icon: "💚" },
        { name: "FastAPI", icon: "⚡" },
        { name: "Django", icon: "🎯" },
        { name: "Express.js", icon: "🚂" },
        { name: "GraphQL", icon: "🔗" },
      ],
    },
    {
      title: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Redis", icon: "🔴" },
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "⚓" },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", icon: "📱" },
        { name: "VS Code", icon: "💙" },
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" },
        { name: "Linux", icon: "🐧" },
      ],
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900 dark:bg-black transition-colors duration-300">
      <SEOHead 
        title="Skills - Priyanshu Chawda | AI & Full-Stack Developer"
        description="Comprehensive overview of Priyanshu Chawda's technical skills including AI/ML, full-stack development, cloud technologies, and programming languages."
        keywords="AI skills, machine learning, Python, React, full-stack developer skills, cloud computing, web development technologies"
      />
      
      <div className="min-h-screen pt-24 pb-16 px-4 smooth-scroll">
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
                Technologies and tools I work with to build innovative solutions
              </p>
            </div>
          </AnimatedSection>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection key={category.title} delay={categoryIndex * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="will-change-transform"
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
                      <div className="grid grid-cols-1 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="group"
                          >
                            <div className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-gray-800/30 to-gray-700/20 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-500/10">
                              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                              </span>
                              <span className="font-medium font-mono text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">
                                {skill.name}
                              </span>
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
