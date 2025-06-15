
import React, { useState } from 'react';

interface LiquidButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary' 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const variantStyles = {
    primary: 'from-purple-500 via-pink-500 to-cyan-500',
    secondary: 'from-blue-500 via-purple-500 to-pink-500',
    accent: 'from-yellow-400 via-orange-500 to-red-500'
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 800);
    
    onClick?.();
  };

  return (
    <button
      className={`
        relative px-8 py-4 rounded-full font-bold text-white overflow-hidden
        bg-gradient-to-r ${variantStyles[variant]}
        transform transition-all duration-300 ease-out
        hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25
        active:scale-95
        group cursor-pointer
      `}
      style={{
        backgroundSize: isHovered ? '200% 200%' : '100% 100%',
        animation: isHovered ? 'gradient-shift 2s ease-in-out infinite' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Liquid morphing background */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r ${variantStyles[variant]} 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `}
        style={{
          backgroundSize: '400% 400%',
          animation: 'liquid-morph 4s ease-in-out infinite'
        }}
      />
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-white opacity-30 pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
            animation: 'ripple 0.8s ease-out forwards'
          }}
        />
      ))}
      
      {/* Button content */}
      <span className="relative z-10 group-hover:text-shadow-glow transition-all duration-300">
        {children}
      </span>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r from-purple-400 to-pink-400" />
    </button>
  );
};

export default LiquidButton;
