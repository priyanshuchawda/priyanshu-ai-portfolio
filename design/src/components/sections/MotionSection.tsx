
import React, { useEffect, useRef, useState } from 'react';
import GlitchText from '../GlitchText';

const MotionSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInView, setIsInView] = useState(false);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ff0080', '#00ff80', '#8000ff', '#ffff00', '#00ffff'];

    const createParticle = (x: number, y: number) => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        life: 0,
        maxLife: Math.random() * 100 + 50,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new particles randomly
      if (Math.random() < 0.3 && isInView) {
        particlesRef.current.push(
          createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        const alpha = 1 - (particle.life / particle.maxLife);
        
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles
        particlesRef.current.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 100) * alpha * 0.3;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });

        return particle.life < particle.maxLife;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(canvas);

    return () => {
      observer.disconnect();
    };
  }, [isInView]);

  return (
    <section className="min-h-screen relative overflow-hidden bg-black flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'screen' }}
      />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-8">
        <div className="mb-12">
          <h1 className="text-8xl font-black mb-6 leading-none">
            <GlitchText 
              text="KINETIC" 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-400"
              intensity="medium"
            />
          </h1>
          
          <div className="grid grid-cols-3 gap-4 text-6xl font-black">
            <div 
              className="text-cyan-400"
              style={{ animation: 'text-wave-1 2s ease-in-out infinite' }}
            >
              F
            </div>
            <div 
              className="text-magenta-400"
              style={{ animation: 'text-wave-2 2s ease-in-out infinite 0.2s' }}
            >
              L
            </div>
            <div 
              className="text-yellow-400"
              style={{ animation: 'text-wave-3 2s ease-in-out infinite 0.4s' }}
            >
              O
            </div>
            <div 
              className="text-green-400"
              style={{ animation: 'text-wave-1 2s ease-in-out infinite 0.6s' }}
            >
              W
            </div>
            <div 
              className="text-blue-400"
              style={{ animation: 'text-wave-2 2s ease-in-out infinite 0.8s' }}
            >
              S
            </div>
            <div 
              className="text-red-400"
              style={{ animation: 'text-wave-3 2s ease-in-out infinite 1s' }}
            >
              →
            </div>
          </div>
        </div>

        <p className="text-xl font-mono mb-8 opacity-80">
          Every movement tells a story.<br/>
          Every pixel has purpose.<br/>
          Every transition breathes life.
        </p>

        <button className="group relative px-12 py-6 bg-transparent border-2 border-white font-black text-xl hover:bg-white hover:text-black transition-all duration-300">
          <span className="relative z-10">ENTER THE FLOW</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-magenta-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </div>

      {/* Speed lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-px opacity-30"
          style={{
            background: `linear-gradient(90deg, transparent, ${colors[i % colors.length]}, transparent)`,
            top: `${Math.random() * 100}%`,
            left: '-100%',
            width: '200%',
            animation: `speed-line-brutal ${1 + Math.random() * 2}s linear infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </section>
  );
};

const colors = ['#ff0080', '#00ff80', '#8000ff', '#ffff00', '#00ffff'];

export default MotionSection;
