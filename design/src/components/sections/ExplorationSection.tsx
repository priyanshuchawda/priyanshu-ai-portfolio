import React, { useState, useEffect } from 'react';
import LiquidButton from '../LiquidButton';

interface ExplorationSectionProps {
  onDiscovery: () => void;
  secretModeUnlocked: boolean;
}

const ExplorationSection: React.FC<ExplorationSectionProps> = ({ 
  onDiscovery, 
  secretModeUnlocked 
}) => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);
  const [discoveredElements, setDiscoveredElements] = useState<Set<number>>(new Set());

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  const handleStarClick = (starId: number) => {
    setDiscoveredElements(prev => new Set([...prev, starId]));
    onDiscovery(); // Add this line to notify parent
    
    setTimeout(() => {
      setDiscoveredElements(prev => {
        const newSet = new Set(prev);
        newSet.delete(starId);
        return newSet;
      });
    }, 3000);
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      {/* Enhanced effects if secret mode is unlocked */}
      {secretModeUnlocked && (
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(255, 0, 128, 0.3) 0%, transparent 70%)',
              animation: 'neon-pulse 2s ease-in-out infinite'
            }}
          />
        </div>
      )}

      {/* Brutal cyberpunk grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(128, 0, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(128, 0, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'matrix-rain 20s linear infinite'
          }}
        />
      </div>

      {/* Interactive starfield */}
      <div className="absolute inset-0">
        {stars.map(star => (
          <div
            key={star.id}
            className={`absolute transition-all duration-300 cursor-crosshair ${
              discoveredElements.has(star.id) 
                ? 'animate-pulse' 
                : 'hover:scale-150'
            }`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              opacity: discoveredElements.has(star.id) ? 1 : star.opacity,
              background: discoveredElements.has(star.id) 
                ? 'linear-gradient(45deg, #ff0080, #00ff80)' 
                : '#fff',
              boxShadow: discoveredElements.has(star.id) 
                ? `0 0 ${star.size * 8}px #ff0080, 0 0 ${star.size * 16}px #00ff80` 
                : 'none',
              clipPath: discoveredElements.has(star.id) 
                ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                : 'none'
            }}
            onClick={() => handleStarClick(star.id)}
          />
        ))}
      </div>
      
      {/* Brutal glitch overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 128, 0.1) 2px, rgba(255, 0, 128, 0.1) 4px)',
          animation: 'glitch-shake 8s infinite'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
        <h1 className="text-8xl font-black mb-8 text-white relative">
          <span 
            className="absolute inset-0 text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text"
            style={{ 
              animation: 'neon-pulse 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 20px rgba(128, 0, 255, 0.8))'
            }}
          >
            EXPLORATION
          </span>
          <span className="text-transparent">EXPLORATION</span>
        </h1>
        
        <div className="border-brutal bg-black p-8 mb-8">
          <p className="text-xl text-cyan-400 mb-4 font-mono leading-relaxed">
            HACK THE{' '}
            <span className="text-shadow-brutal bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-black">
              UNKNOWN.EXE
            </span>
          </p>
          <p className="text-sm text-white/70 font-mono">
            &gt; CLICK_STARS_TO_UNLOCK_SECRETS();
          </p>
          {secretModeUnlocked && (
            <p className="text-sm text-yellow-400 font-mono mt-2 animate-pulse">
              &gt; SECRET_MODE_ACTIVE: Enhanced_Neural_Access();
            </p>
          )}
        </div>
        
        <LiquidButton variant="accent">
          INITIALIZE_JOURNEY.BAT 🚀
        </LiquidButton>
        
        {/* Enhanced discovery counter */}
        <div className="mt-8 border-2 border-cyan-400 bg-black p-4 inline-block">
          <div className="text-cyan-400 font-mono text-xs">
            DISCOVERIES_FOUND: {discoveredElements.size}/100
          </div>
          <div className="text-green-400 font-mono text-xs">
            STATUS: {discoveredElements.size > 50 ? 'HACKER_MODE' : 'SCANNING...'}
          </div>
          {secretModeUnlocked && (
            <div className="text-yellow-400 font-mono text-xs">
              MODE: DEEP_NEURAL_ACCESS
            </div>
          )}
        </div>
      </div>
      
      {/* Explosive discovery effects */}
      {Array.from(discoveredElements).map(starId => (
        <div
          key={`discovery-${starId}`}
          className="absolute w-32 h-32 pointer-events-none"
          style={{
            left: `${stars[starId]?.x}%`,
            top: `${stars[starId]?.y}%`,
            background: 'radial-gradient(circle, rgba(255, 0, 128, 0.6) 0%, rgba(0, 255, 128, 0.3) 50%, transparent 70%)',
            animation: 'explosive-enter 3s ease-out forwards',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </section>
  );
};

export default ExplorationSection;
