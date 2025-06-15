
import React, { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  opacity: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationId: number;
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      setTrail(prevTrail => {
        const newPoint: TrailPoint = {
          x: e.clientX,
          y: e.clientY,
          id: trailId++,
          opacity: 1
        };
        
        return [...prevTrail.slice(-20), newPoint];
      });
    };

    const updateTrail = () => {
      setTrail(prevTrail => 
        prevTrail
          .map(point => ({
            ...point,
            opacity: point.opacity * 0.95
          }))
          .filter(point => point.opacity > 0.01)
      );
      animationId = requestAnimationFrame(updateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationId = requestAnimationFrame(updateTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
          style={{
            left: point.x - 8,
            top: point.y - 8,
            opacity: point.opacity,
            transform: `scale(${point.opacity})`,
            boxShadow: `0 0 ${point.opacity * 20}px rgba(168, 85, 247, ${point.opacity * 0.8})`
          }}
        />
      ))}
      
      {/* Main cursor glow */}
      <div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-60 blur-sm"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </div>
  );
};

export default CursorTrail;
