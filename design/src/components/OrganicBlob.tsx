
import React, { useEffect, useRef } from 'react';

interface OrganicBlobProps {
  color: string;
  size: number;
  speed?: number;
  className?: string;
}

const OrganicBlob: React.FC<OrganicBlobProps> = ({ 
  color, 
  size, 
  speed = 1, 
  className = '' 
}) => {
  const blobRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01 * speed;
      
      if (blobRef.current) {
        // Create organic morphing path
        const x1 = 50 + Math.sin(time) * 20;
        const y1 = 30 + Math.cos(time * 0.8) * 15;
        const x2 = 80 + Math.sin(time * 1.2) * 15;
        const y2 = 60 + Math.cos(time * 0.9) * 20;
        const x3 = 60 + Math.sin(time * 0.7) * 25;
        const y3 = 90 + Math.cos(time * 1.1) * 18;
        const x4 = 20 + Math.sin(time * 1.3) * 22;
        const y4 = 70 + Math.cos(time * 0.6) * 16;

        const path = `
          M ${x1} ${y1}
          C ${x1 + 20} ${y1 - 10}, ${x2 + 10} ${y2 - 15}, ${x2} ${y2}
          C ${x2 + 5} ${y2 + 20}, ${x3 + 15} ${y3 + 10}, ${x3} ${y3}
          C ${x3 - 20} ${y3 + 5}, ${x4 - 10} ${y4 + 15}, ${x4} ${y4}
          C ${x4 - 15} ${y4 - 25}, ${x1 - 10} ${y1 + 20}, ${x1} ${y1}
          Z
        `;

        blobRef.current.setAttribute('d', path);
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [speed]);

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
      }}
    >
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>
      <path
        ref={blobRef}
        fill={`url(#gradient-${color})`}
        stroke="none"
      />
    </svg>
  );
};

export default OrganicBlob;
