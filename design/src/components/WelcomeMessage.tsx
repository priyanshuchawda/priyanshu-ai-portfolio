
import React, { useState, useEffect } from 'react';

interface WelcomeMessageProps {
  message: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message || !visible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 
                    bg-black/95 border border-cyan-400 p-6 max-w-md text-center animate-fade-in">
      <div className="text-cyan-400 font-mono text-sm mb-2">
        MEMORY_BANK_ACCESSED
      </div>
      <div className="text-white font-mono text-base">
        {message}
      </div>
    </div>
  );
};

export default WelcomeMessage;
