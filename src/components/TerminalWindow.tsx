
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TerminalWindow = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const terminalCommands = [
    "$ whoami",
    "priyanshu_chawda",
    "$ ls -la skills/",
    "drwxr-xr-x  ai_development/",
    "drwxr-xr-x  full_stack/", 
    "drwxr-xr-x  competitive_programming/",
    "$ cat experience.txt",
    "Building intelligent solutions since 2020...",
    "500+ problems solved on competitive platforms",
    "Multiple AI projects deployed in production",
    "$ python -c \"print('Ready to innovate!')\"",
    "Ready to innovate!",
    "$ _"
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const typeNextLine = () => {
      if (currentIndex < terminalCommands.length) {
        const line = terminalCommands[currentIndex];
        setCurrentLine("");
        setIsTyping(true);

        let charIndex = 0;
        const typeChar = () => {
          if (charIndex < line.length) {
            setCurrentLine(line.substring(0, charIndex + 1));
            charIndex++;
            timeoutId = setTimeout(typeChar, 50);
          } else {
            setIsTyping(false);
            timeoutId = setTimeout(() => {
              setLines(prev => [...prev, line]);
              setCurrentLine("");
              currentIndex++;
              if (currentIndex < terminalCommands.length) {
                timeoutId = setTimeout(typeNextLine, 300);
              } else {
                // Restart after completion
                setTimeout(() => {
                  setLines([]);
                  currentIndex = 0;
                  typeNextLine();
                }, 3000);
              }
            }, 800);
          }
        };

        typeChar();
      }
    };

    typeNextLine();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 font-mono text-sm max-w-md w-full"
    >
      <div className="flex items-center gap-2 mb-3 pb-2 border-b border-green-500/20">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-green-400 text-xs ml-2">priyanshu@terminal</span>
      </div>
      
      <div className="space-y-1">
        {lines.map((line, index) => (
          <div key={index} className={`${line.startsWith('$') ? 'text-green-400' : 'text-gray-300'}`}>
            {line}
          </div>
        ))}
        
        {currentLine && (
          <div className={`${currentLine.startsWith('$') ? 'text-green-400' : 'text-gray-300'}`}>
            {currentLine}
            {isTyping && <span className="animate-pulse">|</span>}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
