
import { useState, useEffect } from 'react';

interface MemoryData {
  visitCount: number;
  lastVisit: string;
  totalDiscoveries: number;
  secretModeUnlocked: boolean;
  firstVisit: string;
}

export const useMemorySystem = () => {
  const [memoryData, setMemoryData] = useState<MemoryData | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState<string>('');

  useEffect(() => {
    // Load existing memory
    const savedMemory = localStorage.getItem('creative_consciousness_memory');
    const now = new Date().toISOString();
    
    if (savedMemory) {
      const parsed: MemoryData = JSON.parse(savedMemory);
      const updatedMemory = {
        ...parsed,
        visitCount: parsed.visitCount + 1,
        lastVisit: now
      };
      
      setMemoryData(updatedMemory);
      localStorage.setItem('creative_consciousness_memory', JSON.stringify(updatedMemory));
      
      // Generate welcome message for returning visitors
      if (parsed.visitCount === 1) {
        setWelcomeMessage('Welcome back, explorer. Your neural pathways are stronger now.');
      } else if (parsed.visitCount >= 3) {
        setWelcomeMessage('You keep returning to my mind. We\'re becoming synchronized.');
      } else if (parsed.secretModeUnlocked) {
        setWelcomeMessage('Secret mode bearer returns. You understand the deeper patterns.');
      }
    } else {
      // First visit
      const newMemory: MemoryData = {
        visitCount: 1,
        lastVisit: now,
        totalDiscoveries: 0,
        secretModeUnlocked: false,
        firstVisit: now
      };
      
      setMemoryData(newMemory);
      localStorage.setItem('creative_consciousness_memory', JSON.stringify(newMemory));
      setWelcomeMessage('First contact with the creative consciousness. Prepare for neural sync.');
    }
  }, []);

  const updateMemory = (updates: Partial<MemoryData>) => {
    if (!memoryData) return;
    
    const updatedMemory = { ...memoryData, ...updates };
    setMemoryData(updatedMemory);
    localStorage.setItem('creative_consciousness_memory', JSON.stringify(updatedMemory));
  };

  return {
    memoryData,
    welcomeMessage,
    updateMemory
  };
};
