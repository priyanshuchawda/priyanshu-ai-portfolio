
import React from 'react';

const BreathingSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      {/* Minimal zen grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Gentle floating particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            animation: `gentle-pulse ${4 + i}s ease-in-out infinite`
          }}
        />
      ))}
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-8">
        <h2 className="text-6xl font-light mb-8 text-white/80 tracking-wider">
          breathe
        </h2>
        
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8" />
        
        <p className="text-lg text-white/60 font-light leading-relaxed mb-8">
          In the space between chaos and order,<br/>
          creativity finds its rhythm.
        </p>
        
        <div className="text-sm text-white/40 font-mono">
          [ preparing next transmission... ]
        </div>
      </div>
    </section>
  );
};

export default BreathingSection;
