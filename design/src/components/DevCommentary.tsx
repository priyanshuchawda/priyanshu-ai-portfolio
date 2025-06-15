
import React, { useState } from 'react';
import { Code, Eye, EyeOff } from 'lucide-react';

const DevCommentary: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsActive(!isActive)}
        className="fixed bottom-4 right-4 z-50 bg-black border-2 border-cyan-400 p-3 
                   hover:bg-cyan-400 hover:text-black transition-all duration-300
                   font-mono text-xs text-cyan-400"
        title="Toggle Developer Commentary"
      >
        <div className="flex items-center space-x-2">
          <Code size={16} />
          <span>{isActive ? 'DEV_MODE: ON' : 'DEV_MODE'}</span>
          {isActive ? <EyeOff size={12} /> : <Eye size={12} />}
        </div>
      </button>

      {/* Easter Egg Hint */}
      <div className="fixed top-4 right-1/2 transform translate-x-1/2 z-40 font-mono text-xs text-green-400 
                      border border-green-400 bg-black p-2 opacity-70 hover:opacity-100 transition-opacity">
        <div className="text-center">
          <div>💡 HINT: Try typing "~brainhack"</div>
          <div className="text-green-300">Hidden terminal awaits...</div>
        </div>
      </div>

      {/* Commentary Tooltips - Only show when active */}
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {/* Creativity Section Commentary */}
          <div className="absolute top-1/4 left-8 max-w-xs pointer-events-auto">
            <div className="bg-black/95 border border-purple-400 p-3 font-mono text-xs text-purple-400">
              <div className="text-white mb-1">💡 TECH_INSIGHT:</div>
              <div>Mouse-following radial gradients + SVG path morphing create organic chaos. 12 explosion particles use trigonometry for perfect distribution.</div>
            </div>
          </div>

          {/* Motion Section Commentary */}
          <div className="absolute top-1/2 right-8 max-w-xs pointer-events-auto">
            <div className="bg-black/95 border border-green-400 p-3 font-mono text-xs text-green-400">
              <div className="text-white mb-1">⚡ PERFORMANCE_NOTE:</div>
              <div>HTML5 Canvas + RequestAnimationFrame for 60fps particles. Intersection Observer prevents off-screen rendering waste.</div>
            </div>
          </div>

          {/* Exploration Section Commentary */}
          <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 max-w-xs pointer-events-auto">
            <div className="bg-black/95 border border-yellow-400 p-3 font-mono text-xs text-yellow-400">
              <div className="text-white mb-1">🎮 UX_PSYCHOLOGY:</div>
              <div>100 discoverable elements + progress tracking = dopamine-driven exploration. Gamification meets art.</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DevCommentary;
