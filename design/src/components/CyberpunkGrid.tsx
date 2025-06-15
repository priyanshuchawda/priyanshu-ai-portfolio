
import React, { useEffect, useState } from 'react';

const CyberpunkGrid: React.FC = () => {
  const [activeLines, setActiveLines] = useState<Set<number>>(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveLines = new Set<number>();
      // Randomly activate 3-5 lines
      const numActive = Math.floor(Math.random() * 3) + 3;
      
      for (let i = 0; i < numActive; i++) {
        newActiveLines.add(Math.floor(Math.random() * 20));
      }
      
      setActiveLines(newActiveLines);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
      {/* Vertical lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className={`
            absolute h-full w-px transition-all duration-1000
            ${activeLines.has(i) ? 'bg-cyan-400 shadow-cyan-glow' : 'bg-gray-600'}
          `}
          style={{
            left: `${i * 5}%`,
            boxShadow: activeLines.has(i) ? '0 0 10px #00ffff' : 'none'
          }}
        />
      ))}
      
      {/* Horizontal lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className={`
            absolute w-full h-px transition-all duration-1000
            ${activeLines.has(i + 20) ? 'bg-magenta-400 shadow-magenta-glow' : 'bg-gray-600'}
          `}
          style={{
            top: `${i * 7}%`,
            boxShadow: activeLines.has(i + 20) ? '0 0 10px #ff00ff' : 'none'
          }}
        />
      ))}
      
      {/* Corner accent */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-cyan-400" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-magenta-400" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-magenta-400" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-cyan-400" />
    </div>
  );
};

export default CyberpunkGrid;
