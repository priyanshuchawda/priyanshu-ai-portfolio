
import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '', intensity = 'medium' }) => {
  const [glitchText, setGlitchText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?`~';
  
  const intensitySettings = {
    low: { probability: 0.02, duration: 100, interval: 3000 },
    medium: { probability: 0.05, duration: 150, interval: 2000 },
    high: { probability: 0.1, duration: 200, interval: 1000 }
  };

  useEffect(() => {
    const settings = intensitySettings[intensity];
    
    const triggerGlitch = () => {
      setIsGlitching(true);
      
      const glitched = text.split('').map(char => {
        if (Math.random() < settings.probability && char !== ' ') {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      }).join('');
      
      setGlitchText(glitched);
      
      setTimeout(() => {
        setGlitchText(text);
        setIsGlitching(false);
      }, settings.duration);
    };

    const interval = setInterval(triggerGlitch, settings.interval);
    
    return () => clearInterval(interval);
  }, [text, intensity]);

  return (
    <span 
      className={`
        ${className} 
        ${isGlitching ? 'animate-pulse' : ''}
        transition-all duration-75
      `}
      style={{
        filter: isGlitching ? 'hue-rotate(90deg) contrast(150%)' : 'none',
        textShadow: isGlitching ? '2px 0 #ff0000, -2px 0 #00ffff' : 'none'
      }}
    >
      {glitchText}
    </span>
  );
};

export default GlitchText;
