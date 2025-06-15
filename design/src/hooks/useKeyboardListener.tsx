
import { useState, useEffect } from 'react';

export const useKeyboardListener = () => {
  const [showConsole, setShowConsole] = useState(false);
  const [keyBuffer, setKeyBuffer] = useState('');

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Don't capture keys when typing in input fields
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = event.key;
      const newBuffer = (keyBuffer + key).slice(-10); // Keep last 10 characters
      setKeyBuffer(newBuffer);

      // Check for the trigger sequence
      if (newBuffer.includes('~brainhack')) {
        setShowConsole(true);
        setKeyBuffer(''); // Clear buffer after triggering
        event.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [keyBuffer]);

  const closeConsole = () => {
    setShowConsole(false);
    setKeyBuffer('');
  };

  return {
    showConsole,
    closeConsole
  };
};
