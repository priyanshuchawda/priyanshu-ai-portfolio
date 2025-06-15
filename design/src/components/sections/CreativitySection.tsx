
import React, { useState, useRef, useEffect } from 'react';
import GlitchText from '../GlitchText';
import BrutalistCard from '../BrutalistCard';
import OrganicBlob from '../OrganicBlob';

const CreativitySection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isExploding, setIsExploding] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const triggerExplosion = () => {
    setIsExploding(true);
    setTimeout(() => setIsExploding(false), 1000);
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-black text-white flex items-center justify-center"
    >
      {/* Dynamic background with mouse-following elements */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #ff0080 0%, #8000ff 25%, #000000 60%)`
        }}
      />
      
      {/* Organic blobs */}
      <OrganicBlob 
        color="#ff0080" 
        size={200} 
        speed={0.5}
        className="absolute top-20 left-20 opacity-70"
      />
      <OrganicBlob 
        color="#00ff80" 
        size={150} 
        speed={0.8}
        className="absolute bottom-20 right-20 opacity-60"
      />
      <OrganicBlob 
        color="#8000ff" 
        size={120} 
        speed={1.2}
        className="absolute top-1/2 left-10 opacity-50"
      />

      {/* Main content area */}
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left column - Title */}
          <div className="lg:col-span-1">
            <h1 className="text-7xl font-black leading-none mb-8">
              <GlitchText 
                text="CHAOS" 
                className="block text-cyan-400"
                intensity="high"
              />
              <GlitchText 
                text="CREATES" 
                className="block text-magenta-400 -mt-2"
                intensity="medium"
              />
              <GlitchText 
                text="BEAUTY" 
                className="block text-yellow-400 -mt-2"
                intensity="low"
              />
            </h1>
          </div>

          {/* Middle column - Interactive elements */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            <BrutalistCard 
              title="BREAK RULES" 
              color="#ff0080"
              rotateAngle={-5}
            >
              <p className="font-mono text-sm">
                Every pixel rebels.<br/>
                Every line questions.<br/>
                Every color screams.
              </p>
            </BrutalistCard>

            <BrutalistCard 
              title="PUSH LIMITS" 
              color="#00ff80"
              rotateAngle={3}
            >
              <p className="font-mono text-sm">
                What if buttons floated?<br/>
                What if text glitched?<br/>
                What if chaos had order?
              </p>
            </BrutalistCard>
          </div>

          {/* Right column - Explosion trigger */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <button
              onClick={triggerExplosion}
              className={`
                relative group bg-transparent border-4 border-white
                px-8 py-4 font-black text-xl transition-all duration-300
                hover:bg-white hover:text-black hover:scale-110
                ${isExploding ? 'animate-ping' : ''}
              `}
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))'
              }}
            >
              <span className="relative z-10">
                {isExploding ? '💥 BOOM!' : 'DETONATE'}
              </span>
              
              {/* Explosion particles */}
              {isExploding && (
                <>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        animation: `explosion-particle-${i} 1s ease-out forwards`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  ))}
                </>
              )}
            </button>

            <p className="mt-4 text-center text-gray-400 font-mono text-sm">
              Click to unleash creative chaos
            </p>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-white opacity-20"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
                animation: `float-chaos ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                clipPath: i % 3 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                         i % 3 === 1 ? 'polygon(0% 0%, 100% 0%, 50% 100%)' : 'circle(50%)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativitySection;
