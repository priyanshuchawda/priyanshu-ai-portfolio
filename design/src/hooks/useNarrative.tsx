
import { useState, useEffect } from 'react';

export const useNarrative = () => {
  const [discoveries, setDiscoveries] = useState(0);
  const [currentSection, setCurrentSection] = useState('CHAOS_CORE');
  const [secretModeUnlocked, setSecretModeUnlocked] = useState(false);

  useEffect(() => {
    if (discoveries >= 50 && !secretModeUnlocked) {
      setSecretModeUnlocked(true);
      // You could trigger special effects here
      console.log('🔓 SECRET MODE UNLOCKED: Enhanced visual effects activated');
    }
  }, [discoveries, secretModeUnlocked]);

  const addDiscovery = () => {
    setDiscoveries(prev => Math.min(prev + 1, 100));
  };

  const updateSection = (section: string) => {
    setCurrentSection(section);
  };

  const getSectionNarrative = (sectionName: string) => {
    const narratives = {
      'CHAOS_CORE': 'You are entering the chaotic creative core...',
      'MOTION_FLUX': 'Feel the kinetic energy of pure movement...',
      'VOID_SPACE': 'In the breathing space between thoughts...',
      'EXPLORATION_MATRIX': 'Discovering the hidden neural pathways...',
      'DREAM_STATE': 'Where impossible ideas become reality...',
      'REFLECTION_CHAMBER': 'The journey through my mind is complete...'
    };
    
    return narratives[sectionName] || 'Navigating the creative consciousness...';
  };

  return {
    discoveries,
    currentSection,
    secretModeUnlocked,
    addDiscovery,
    updateSection,
    getSectionNarrative
  };
};
