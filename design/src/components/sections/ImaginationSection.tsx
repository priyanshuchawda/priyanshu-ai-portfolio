
import React, { useEffect, useState } from 'react';
import LiquidButton from '../LiquidButton';

const ImaginationSection = () => {
  const [dreamElements, setDreamElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    type: 'glitch-cube' | 'neon-triangle' | 'brutal-circle';
  }>>([]);

  useEffect(() => {
    const colors = [
      '#ff0080', // Brutal magenta
      '#00ff80', // Brutal green
      '#8000ff', // Brutal purple
      '#ffff00', // Brutal yellow
      '#00ffff'  // Brutal cyan
    ];

    const generateDreamElements = () => {
      const elements = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 30,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: ['glitch-cube', 'neon-triangle', 'brutal-circle'][Math.floor(Math.random() * 3)] as 'glitch-cube' | 'neon-triangle' | 'brutal-circle'
      }));
      
      setDreamElements(elements);
    };

    generateDreamElements();
    
    const interval = setInterval(() => {
      setDreamElements(prev => 
        prev.map(element => ({
          ...element,
          x: (element.x + Math.random() * 4 - 2) % 100,
          y: (element.y + Math.random() * 2 - 1) % 100
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const renderDreamElement = (element: typeof dreamElements[0]) => {
    const baseStyle = {
      left: `${element.x}%`,
      top: `${element.y}%`,
      width: element.size,
      height: element.size,
      transition: 'all 2s ease-in-out'
    };

    switch (element.type) {
      case 'glitch-cube':
        return (
          <div
            key={element.id}
            className="absolute border-2 border-black"
            style={{
              ...baseStyle,
              backgroundColor: element.color,
              animation: 'glitch-shake 4s ease-in-out infinite, float-chaos 8s ease-in-out infinite',
              animationDelay: `${element.id * 0.3}s`,
              boxShadow: `4px 4px 0px #000, 8px 8px 0px ${element.color}80`
            }}
          />
        );
      case 'neon-triangle':
        return (
          <div
            key={element.id}
            className="absolute"
            style={{
              ...baseStyle,
              background: element.color,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              animation: 'brutal-slide 6s linear infinite, neon-pulse 3s ease-in-out infinite',
              animationDelay: `${element.id * 0.4}s`,
              filter: `drop-shadow(0 0 10px ${element.color})`
            }}
          />
        );
      case 'brutal-circle':
        return (
          <div
            key={element.id}
            className="absolute rounded-full border-4 border-black"
            style={{
              ...baseStyle,
              backgroundColor: element.color,
              animation: 'explosive-enter 5s ease-in-out infinite',
              animationDelay: `${element.id * 0.2}s`,
              boxShadow: `inset 0 0 20px rgba(0,0,0,0.5), 0 0 20px ${element.color}60`
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black flex items-center justify-center">
      {/* Brutal scan lines */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'repeating-linear-gradient(90deg, transparent, transparent 1px, #ff0080 1px, #ff0080 3px)',
          animation: 'speed-line-brutal 10s linear infinite'
        }}
      />
      
      {/* Dream elements */}
      <div className="absolute inset-0">
        {dreamElements.map(renderDreamElement)}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <h1 className="text-8xl font-black mb-8 text-white relative">
          <span 
            className="absolute inset-0 text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400 bg-clip-text text-shadow-brutal"
            style={{ 
              animation: 'text-wave-1 6s ease-in-out infinite',
              filter: 'drop-shadow(0 0 30px rgba(255, 0, 128, 0.7))'
            }}
          >
            IMAGINATION
          </span>
          <span className="text-transparent">IMAGINATION</span>
        </h1>
        
        <div className="border-brutal bg-black p-8 mb-12 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              background: 'linear-gradient(45deg, #ff0080 25%, transparent 25%, transparent 75%, #ff0080 75%), linear-gradient(45deg, #ff0080 25%, transparent 25%, transparent 75%, #ff0080 75%)',
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 10px 10px'
            }}
          />
          <p className="text-2xl text-white/90 mb-4 font-mono leading-relaxed relative z-10">
            WHERE DREAMS BECOME{' '}
            <span 
              className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-black text-shadow-brutal"
              style={{ animation: 'neon-pulse 4s ease-in-out infinite' }}
            >
              BRUTAL_REALITY.EXE
            </span>
          </p>
          <p className="text-sm text-cyan-400 font-mono relative z-10">
            &gt; DREAM_PROTOCOL_ACTIVATED();
          </p>
        </div>
        
        <LiquidButton variant="primary">
          HACK_DREAMS.BAT ✨
        </LiquidButton>
      </div>
      
      {/* Brutal glitch particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-white border border-black opacity-80"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `glitch-shake ${2 + Math.random() * 3}s ease-in-out infinite, matrix-rain ${5 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`,
            boxShadow: '0 0 5px #ff0080'
          }}
        />
      ))}
    </section>
  );
};

export default ImaginationSection;
