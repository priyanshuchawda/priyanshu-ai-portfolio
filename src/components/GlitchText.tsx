
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchChance?: number;
}

const GlitchText = ({ text, className = "", glitchChance = 0.02 }: GlitchTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?~`";

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < glitchChance) {
        setIsGlitching(true);
        
        // Create glitch effect
        const chars = text.split('');
        const glitchedChars = chars.map(char => {
          if (char === ' ') return char;
          return Math.random() < 0.3 
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : char;
        });
        
        setDisplayText(glitchedChars.join(''));
        
        // Restore original text after short delay
        setTimeout(() => {
          setDisplayText(text);
          setIsGlitching(false);
        }, 100);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, glitchChance]);

  return (
    <motion.span 
      className={`${className} ${isGlitching ? 'text-cyan-400 dark:text-cyan-300' : ''} transition-colors duration-100`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff00ff, -2px 0 #00ffff' 
          : 'none',
        filter: isGlitching ? 'blur(0.5px)' : 'none'
      }}
    >
      {displayText}
    </motion.span>
  );
};

export default GlitchText;
