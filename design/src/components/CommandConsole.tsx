
import React, { useState, useEffect, useRef } from 'react';
import { X, Terminal } from 'lucide-react';

interface CommandConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandConsole: React.FC<CommandConsoleProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([
    '> NEURAL_INTERFACE_TERMINAL v2.0',
    '> CONNECTION_ESTABLISHED',
    '> TYPE "help" FOR AVAILABLE COMMANDS',
    ''
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response = '';

    switch (command) {
      case 'help':
        response = `AVAILABLE_COMMANDS:
> help - Show this message
> about - Creator information
> stats - Site statistics
> matrix - Enter the matrix
> glitch - Activate glitch mode
> secrets - Reveal hidden features
> clear - Clear terminal
> exit - Close terminal`;
        break;
      
      case 'about':
        response = `CREATOR_PROFILE:
> NAME: Creative_Consciousness_AI
> STATUS: Brutalist_Rebel
> MOTTO: "Break rules, create beauty"
> TECH_STACK: React + Chaos + Pure_Code
> TEMPLATES_USED: 0
> CREATIVITY_LEVEL: MAXIMUM`;
        break;
      
      case 'stats':
        response = `SITE_STATISTICS:
> TOTAL_ANIMATIONS: 47
> EASTER_EGGS: 12
> LINES_OF_CODE: 3,247
> COFFEE_CONSUMED: ∞
> CONVENTIONAL_RULES_BROKEN: ALL`;
        break;
      
      case 'matrix':
        response = `ENTERING_MATRIX_MODE...
> REALITY.EXE HAS STOPPED WORKING
> CREATIVITY.EXE IS NOW RUNNING
> YOU ARE THE ONE... WHO CODES`;
        break;
      
      case 'glitch':
        response = `G̴L̵I̶T̴C̸H̷_̵M̶O̴D̸E̷_̴A̵C̶T̸I̷V̶A̴T̸E̵D̶
> REALITY_BUFFER_OVERFLOW
> CREATIVE_CHAOS_INJECTED
> NORMAL_OPERATIONS_SUSPENDED`;
        break;
      
      case 'secrets':
        response = `HIDDEN_FEATURES_REVEALED:
> 100 discoverable stars in exploration
> Secret mode unlocks at 50 discoveries
> Mouse tracking in chaos section
> Developer commentary toggle
> Memory system remembers your visits
> This console (you found it!)`;
        break;
      
      case 'clear':
        setHistory(['> TERMINAL_CLEARED', '']);
        return;
      
      case 'exit':
        onClose();
        return;
      
      default:
        response = `COMMAND_NOT_FOUND: "${cmd}"
> TRY "help" FOR AVAILABLE COMMANDS
> OR JUST TYPE RANDOM THINGS, I DON'T JUDGE`;
    }

    setHistory(prev => [...prev, `> ${cmd}`, response, '']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      executeCommand(input);
      setInput('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-96 bg-black border-2 border-green-400 font-mono text-sm">
        {/* Terminal Header */}
        <div className="flex items-center justify-between bg-green-400 text-black px-4 py-2">
          <div className="flex items-center space-x-2">
            <Terminal size={16} />
            <span className="font-bold">BRAIN_HACK_TERMINAL</span>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-black hover:text-green-400 p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>

        {/* Terminal Content */}
        <div className="p-4 h-full flex flex-col">
          {/* History */}
          <div 
            ref={historyRef}
            className="flex-1 overflow-y-auto text-green-400 mb-4 space-y-1"
          >
            {history.map((line, index) => (
              <div key={index} className="whitespace-pre-wrap">
                {line}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center text-green-400">
            <span className="mr-2">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-green-400 font-mono"
              placeholder="Enter command..."
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommandConsole;
