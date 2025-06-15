import React, { useEffect, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'circle' | 'triangle' | 'square';
  color: string;
  speed: number;
  rotation: number;
  rotationSpeed: number;
}

const FloatingShapes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colors = [
      'from-pink-400 to-purple-600',
      'from-cyan-400 to-blue-600',
      'from-yellow-400 to-orange-600',
      'from-green-400 to-teal-600',
      'from-indigo-400 to-purple-600'
    ];

    const initialShapes: Shape[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 60 + 20,
      type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as Shape['type'],
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.2,
      rotation: 0,
      rotationSpeed: (Math.random() - 0.5) * 2
    }));

    setShapes(initialShapes);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animateShapes = () => {
      setShapes(prevShapes => 
        prevShapes.map(shape => {
          const dx = mousePos.x - shape.x;
          const dy = mousePos.y - shape.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let newX = shape.x;
          let newY = shape.y;
          
          // Magnetic attraction when cursor is close
          if (distance < 150 && distance > 0) {
            const force = (150 - distance) / 150;
            newX += (dx / distance) * force * 2;
            newY += (dy / distance) * force * 2;
          } else {
            // Normal floating movement
            newX += Math.sin(Date.now() * 0.001 * shape.speed) * 0.5;
            newY += Math.cos(Date.now() * 0.001 * shape.speed) * 0.3;
          }
          
          // Keep shapes within bounds
          if (newX < -50) newX = window.innerWidth + 50;
          if (newX > window.innerWidth + 50) newX = -50;
          if (newY < -50) newY = window.innerHeight + 50;
          if (newY > window.innerHeight + 50) newY = -50;

          return {
            ...shape,
            x: newX,
            y: newY,
            rotation: shape.rotation + shape.rotationSpeed
          };
        })
      );
      
      requestAnimationFrame(animateShapes);
    };

    animateShapes();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePos.x, mousePos.y]);

  const getShapeElement = (shape: Shape) => {
    const baseClasses = `absolute bg-gradient-to-br ${shape.color} opacity-70 transition-all duration-300 hover:opacity-90 hover:scale-110`;
    const style = {
      left: shape.x,
      top: shape.y,
      width: shape.size,
      height: shape.size,
      transform: `rotate(${shape.rotation}deg)`,
      filter: 'blur(0.5px)',
      boxShadow: `0 0 ${shape.size * 0.5}px rgba(168, 85, 247, 0.3)`
    };

    switch (shape.type) {
      case 'circle':
        return <div key={shape.id} className={`${baseClasses} rounded-full`} style={style} />;
      case 'triangle':
        return (
          <div 
            key={shape.id} 
            className={baseClasses} 
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }} 
          />
        );
      case 'square':
        return <div key={shape.id} className={`${baseClasses} rounded-lg`} style={style} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map(getShapeElement)}
    </div>
  );
};

export default FloatingShapes;
