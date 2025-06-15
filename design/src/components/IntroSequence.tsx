
import React, { useState, useEffect } from 'react';
import GlitchText from './GlitchText';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence: React.FC<IntroSequenceProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1200),
      setTimeout(() => setStage(3), 1800),
      setTimeout(() => {
        setVisible(false);
        setTimeout(onComplete, 500);
      }, 2500)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-500 ${!visible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {stage >= 1 && (
          <div className="text-cyan-400 font-mono text-sm mb-4 animate-fade-in">
            INITIALIZING_NEURAL_INTERFACE...
          </div>
        )}
        
        {stage >= 2 && (
          <div className="text-2xl font-mono text-white mb-4">
            <GlitchText 
              text="ACCESSING_CREATIVE_CONSCIOUSNESS.EXE" 
              intensity="high"
              className="animate-fade-in"
            />
          </div>
        )}
        
        {stage >= 3 && (
          <div className="text-green-400 font-mono text-sm animate-fade-in">
            CONNECTION_ESTABLISHED → ENTERING_DIGITAL_MIND...
          </div>
        )}
        
        {/* Loading bar */}
        <div className="w-64 h-1 bg-gray-800 mt-6 mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-2000"
            style={{ width: stage >= 1 ? '100%' : '0%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSequence;
