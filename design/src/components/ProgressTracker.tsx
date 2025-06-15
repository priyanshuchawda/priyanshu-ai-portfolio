
import React from 'react';
import { Progress } from './ui/progress';

interface ProgressTrackerProps {
  discoveries: number;
  totalDiscoveries: number;
  currentSection: string;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ 
  discoveries, 
  totalDiscoveries, 
  currentSection 
}) => {
  const percentage = (discoveries / totalDiscoveries) * 100;
  
  const getStatusMessage = () => {
    if (discoveries < 10) return "Initializing connection...";
    if (discoveries < 25) return "Syncing with creative matrix...";
    if (discoveries < 50) return "You're glitching into my brain...";
    if (discoveries < 75) return "Deep neural pathway access...";
    if (discoveries < 100) return "Almost inside the core...";
    return "FULL CREATIVE CONSCIOUSNESS UNLOCKED";
  };

  const getUnlockStatus = () => {
    if (discoveries >= 50) return "🔓 SECRET MODE UNLOCKED";
    return "";
  };

  return (
    <div className="fixed top-20 left-4 z-50 bg-black/90 border border-cyan-400 p-4 max-w-xs">
      <div className="text-cyan-400 font-mono text-xs mb-2">
        CONSCIOUSNESS_SYNC
      </div>
      
      <div className="mb-3">
        <div className="text-white text-sm font-mono">
          {discoveries}/{totalDiscoveries} NEURAL_PATHS
        </div>
        <Progress value={percentage} className="mt-1 h-2" />
      </div>
      
      <div className="text-green-400 font-mono text-xs mb-2">
        STATUS: {getStatusMessage()}
      </div>
      
      {getUnlockStatus() && (
        <div className="text-yellow-400 font-mono text-xs animate-pulse">
          {getUnlockStatus()}
        </div>
      )}
      
      <div className="text-purple-400 font-mono text-xs mt-2">
        LOCATION: {currentSection}
      </div>
    </div>
  );
};

export default ProgressTracker;
