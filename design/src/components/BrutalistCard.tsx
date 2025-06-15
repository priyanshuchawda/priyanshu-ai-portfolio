
import React, { useState } from 'react';

interface BrutalistCardProps {
  title: string;
  children: React.ReactNode;
  color: string;
  rotateAngle?: number;
}

const BrutalistCard: React.FC<BrutalistCardProps> = ({ 
  title, 
  children, 
  color, 
  rotateAngle = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      style={{
        transform: `rotate(${rotateAngle}deg)`,
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Brutal shadow layers */}
      <div 
        className="absolute inset-0 border-4 border-black"
        style={{
          backgroundColor: color,
          transform: 'translate(8px, 8px)',
          zIndex: -3
        }}
      />
      <div 
        className="absolute inset-0 border-4 border-black"
        style={{
          backgroundColor: '#000000',
          transform: 'translate(4px, 4px)',
          zIndex: -2
        }}
      />
      
      {/* Main card */}
      <div
        className={`
          relative p-8 border-4 border-black bg-white
          transition-all duration-300
          ${isHovered ? 'transform -translate-y-2 -translate-x-2' : ''}
        `}
        style={{
          backgroundColor: isHovered ? color : 'white',
          zIndex: 1
        }}
      >
        <h3 className={`
          font-black text-2xl mb-4 transition-colors duration-300
          ${isHovered ? 'text-white' : 'text-black'}
        `}>
          {title}
        </h3>
        <div className={`
          transition-colors duration-300
          ${isHovered ? 'text-white' : 'text-black'}
        `}>
          {children}
        </div>
        
        {/* Decorative elements */}
        <div className={`
          absolute top-2 right-2 w-6 h-6 border-2 border-black
          transition-colors duration-300
          ${isHovered ? 'bg-white border-white' : 'bg-black'}
        `} />
        <div className={`
          absolute bottom-2 left-2 w-4 h-4 
          transition-colors duration-300
          ${isHovered ? 'bg-white' : 'bg-black'}
        `} />
      </div>
    </div>
  );
};

export default BrutalistCard;
