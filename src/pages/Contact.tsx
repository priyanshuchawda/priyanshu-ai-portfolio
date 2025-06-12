
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Send, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import GlitchText from "@/components/GlitchText";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-black dark:via-purple-950/30 dark:to-black">
      <SEOHead 
        title="Contact - Priyanshu Chawda | AI & Full-Stack Developer"
        description="Get in touch with Priyanshu Chawda for AI development, full-stack projects, and freelance opportunities. Available for consulting and custom solutions."
        keywords="contact Priyanshu Chawda, hire AI developer, freelance full-stack developer, AI consulting, custom software development"
      />
      
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="text-sm font-mono text-cyan-400 dark:text-cyan-300 tracking-wider mb-4">
                &gt; COMMUNICATION_INTERFACE.start()
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6">
                <GlitchText 
                  text="GET IN TOUCH" 
                  className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  glitchChance={0.01}
                />
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono">
                Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-cyan-500/50 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-mono text-cyan-300 flex items-center gap-3">
                      <Send className="h-6 w-6" />
                      Send Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="font-mono text-gray-300">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your name"
                            className="mt-1 bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 font-mono"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="font-mono text-gray-300">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className="mt-1 bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 font-mono"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="font-mono text-gray-300">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Project inquiry / Collaboration / etc."
                          className="mt-1 bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 font-mono"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="font-mono text-gray-300">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell me about your project or what you'd like to discuss..."
                          rows={6}
                          className="mt-1 bg-gray-800/50 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-cyan-500 focus:ring-cyan-500/20 font-mono resize-none"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-black font-bold border-0 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 font-mono"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        TRANSMIT_MESSAGE.exe
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>

            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection delay={0.4}>
                <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-purple-500/50 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-mono text-purple-300">Connection Protocols</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        icon: Github,
                        title: "GitHub",
                        value: "@priyanshuchawda",
                        href: "https://github.com/priyanshuchawda",
                        gradient: "from-purple-500 to-pink-500"
                      },
                      {
                        icon: Linkedin,
                        title: "LinkedIn",
                        value: "/in/priyanshuchawda",
                        href: "https://linkedin.com/in/priyanshuchawda",
                        gradient: "from-blue-600 to-blue-800"
                      },
                      {
                        icon: Twitter,
                        title: "Twitter / X",
                        value: "@priyanshu_tech4",
                        href: "https://x.com/priyanshu_tech4",
                        gradient: "from-cyan-500 to-blue-500"
                      }
                    ].map((contact, index) => (
                      <motion.div
                        key={contact.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <contact.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-medium font-mono text-gray-300">{contact.title}</p>
                          <a 
                            href={contact.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono text-sm"
                          >
                            {contact.value}
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Freelance CTA */}
              <AnimatedSection delay={0.6}>
                <Card className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border-green-500/30 hover:border-green-400/50 transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-center font-mono text-green-300">
                      <GlitchText 
                        text="Want something like this built?"
                        className="text-green-300"
                        glitchChance={0.005}
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 mb-6 font-mono">
                      I'm available for freelance projects and consulting. Let's discuss how I can help bring your vision to life.
                    </p>
                    <div className="space-y-3">
                      {[
                        "AI & Machine Learning Solutions",
                        "Full-Stack Web Applications", 
                        "Process Automation & Integration",
                        "Technical Consulting & Architecture"
                      ].map((service, index) => (
                        <motion.div
                          key={service}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-sm text-green-400 font-mono flex items-center justify-center gap-2"
                        >
                          <span className="text-green-300">▶</span>
                          {service}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
