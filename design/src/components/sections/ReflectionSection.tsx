
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import BrutalistCard from '../BrutalistCard';
import LiquidButton from '../LiquidButton';
import FloatingShapes from '../FloatingShapes';

interface ReflectionSectionProps {
  totalDiscoveries: number;
}

const ReflectionSection: React.FC<ReflectionSectionProps> = ({ totalDiscoveries }) => {
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFinalMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleGoHome = () => {
    window.open('https://priyanshutech.xyz', '_blank');
  };

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-black via-purple-950 to-black 
                       flex items-center justify-center overflow-hidden">
      
      <FloatingShapes />
      
      {/* Reflection content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        
        {/* Stats Display */}
        <div className="mb-12">
          <div className="text-6xl font-black text-transparent bg-clip-text 
                          bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 mb-6">
            REFLECTION_CHAMBER
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <BrutalistCard 
              title={`${totalDiscoveries}/100`}
              color="#ff6600"
              rotateAngle={-2}
            >
              <div className="text-lg font-bold">NEURAL PATHWAYS</div>
              <div className="text-sm">DISCOVERED</div>
            </BrutalistCard>
            
            <BrutalistCard 
              title="∞"
              color="#ff0080"
              rotateAngle={1}
            >
              <div className="text-lg font-bold">CREATIVE ENERGY</div>
              <div className="text-sm">UNLOCKED</div>
            </BrutalistCard>
            
            <BrutalistCard 
              title="999%"
              color="#8000ff"
              rotateAngle={-1}
            >
              <div className="text-lg font-bold">CONSCIOUSNESS</div>
              <div className="text-sm">EXPANDED</div>
            </BrutalistCard>
          </div>
        </div>

        {/* Final Message */}
        {showFinalMessage && (
          <div className="animate-fade-in mb-12">
            <div className="text-2xl font-mono text-white mb-6 leading-relaxed">
              You've journeyed through the digital depths of creativity.
            </div>
            <div className="text-xl text-orange-400 font-mono mb-8">
              Every interaction, every discovery, every moment of chaos...
            </div>
            <div className="text-3xl font-black text-transparent bg-clip-text 
                            bg-gradient-to-r from-pink-400 to-orange-400 mb-8">
              If this site made you FEEL something — that was the point.
            </div>
            
            {/* Contact/Home Button */}
            <div className="mt-12">
              <LiquidButton 
                onClick={handleGoHome}
                variant="accent"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg font-black">GO HOME / CONTACT</span>
                  <ExternalLink size={20} />
                </div>
              </LiquidButton>
              
              <div className="mt-4 text-sm font-mono text-cyan-400">
                priyanshutech.xyz → Ready for the next adventure?
              </div>
            </div>
          </div>
        )}

        {/* Technical Achievement Unlock */}
        {totalDiscoveries >= 75 && (
          <div className="mt-8 p-6 border-2 border-yellow-400 bg-black/80 animate-pulse">
            <div className="text-yellow-400 font-mono text-sm mb-2">
              🏆 ACHIEVEMENT_UNLOCKED
            </div>
            <div className="text-white font-mono">
              "CREATIVE_CONSCIOUSNESS_MASTER" - You've unlocked the deepest layers of digital creativity
            </div>
          </div>
        )}

        {/* Brutal signature */}
        <div className="mt-16 text-xs font-mono text-gray-500 border-t border-gray-700 pt-4">
          <div>HANDCRAFTED_WITH_CREATIVE_RAGE.EXE</div>
          <div>NO_TEMPLATES • NO_SHORTCUTS • PURE_DIGITAL_ART</div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ReflectionSection;
