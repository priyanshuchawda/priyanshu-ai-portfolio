
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import GlitchText from "@/components/GlitchText";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 dark:from-black dark:via-purple-950/30 dark:to-black">
      <SEOHead 
        title="404 - Page Not Found | Priyanshu Chawda"
        description="The page you're looking for doesn't exist. Return to Priyanshu Chawda's portfolio to explore AI projects and development work."
        noindex={true}
      />
      
      {/* Neural Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,0,255,0.1),transparent_50%)]" />
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="container mx-auto max-w-2xl">
          <AnimatedSection>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-red-500/50 transition-all duration-500">
              <CardContent className="text-center p-12">
                {/* Error Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="mb-8"
                >
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-500/30 flex items-center justify-center">
                    <AlertTriangle className="h-12 w-12 text-red-400" />
                  </div>
                </motion.div>

                {/* Error Code */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <h1 className="text-8xl md:text-9xl font-black font-mono mb-4">
                    <GlitchText 
                      text="404" 
                      className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                      glitchChance={0.02}
                    />
                  </h1>
                </motion.div>

                {/* Error Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <div className="text-sm font-mono text-red-400 tracking-wider mb-4">
                    &gt; ERROR: ROUTE_NOT_FOUND
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-200 font-mono">
                    NEURAL PATHWAY CORRUPTED
                  </h2>
                  <p className="text-lg text-gray-400 mb-6 font-mono">
                    The requested endpoint <span className="text-cyan-400 font-bold">{location.pathname}</span> does not exist in the system matrix.
                  </p>
                  <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 font-mono text-sm text-left">
                    <div className="text-red-400">$ cd {location.pathname}</div>
                    <div className="text-gray-500"># bash: cd: {location.pathname}: No such file or directory</div>
                    <div className="text-cyan-400 mt-2">$ ls /available_routes</div>
                    <div className="text-green-400">/ /projects /skills /contact /resume</div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-black font-bold border-0 hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/25 font-mono"
                  >
                    <Link to="/">
                      <Home className="mr-2 h-4 w-4" />
                      RETURN_TO_HOME.exe
                    </Link>
                  </Button>

                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.history.back()}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white font-mono"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    GO_BACK.exe
                  </Button>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 pt-6 border-t border-gray-700"
                >
                  <p className="text-gray-500 font-mono text-sm mb-4">Quick Navigation:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[
                      { path: "/", label: "Home" },
                      { path: "/projects", label: "Projects" },
                      { path: "/skills", label: "Skills" },
                      { path: "/contact", label: "Contact" }
                    ].map((link, index) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      >
                        <Link 
                          to={link.path}
                          className="inline-block px-3 py-1 text-sm font-mono text-cyan-400 hover:text-cyan-300 border border-cyan-500/30 rounded hover:border-cyan-400/50 transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
