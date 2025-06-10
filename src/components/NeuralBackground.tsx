import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const NeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      connections: number[];
      pulse: number;
      type: 'input' | 'hidden' | 'output';
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNeuralNetwork = () => {
      nodes.length = 0;
      const nodeCount = 80;
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connections: [],
          pulse: Math.random() * Math.PI * 2,
          type: i < 20 ? 'input' : i < 60 ? 'hidden' : 'output'
        });
      }

      // Create connections
      nodes.forEach((node, i) => {
        const connections = Math.floor(Math.random() * 4) + 2;
        for (let j = 0; j < connections; j++) {
          const targetIndex = Math.floor(Math.random() * nodes.length);
          if (targetIndex !== i && !node.connections.includes(targetIndex)) {
            node.connections.push(targetIndex);
          }
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = theme === 'dark';
      const time = Date.now() * 0.001;

      // Update and draw nodes
      nodes.forEach((node, index) => {
        // Movement
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        // Boundary bounce
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Draw connections first
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex];
          if (!target) return;

          const distance = Math.sqrt((node.x - target.x) ** 2 + (node.y - target.y) ** 2);
          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.3;
            const pulseIntensity = Math.sin(time * 2 + distance * 0.01) * 0.5 + 0.5;
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            
            const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
            if (isDark) {
              gradient.addColorStop(0, `rgba(0, 255, 255, ${opacity * pulseIntensity})`);
              gradient.addColorStop(0.5, `rgba(255, 0, 255, ${opacity * pulseIntensity * 0.7})`);
              gradient.addColorStop(1, `rgba(0, 255, 255, ${opacity * pulseIntensity})`);
            } else {
              gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * pulseIntensity})`);
              gradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity * pulseIntensity * 0.7})`);
              gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity * pulseIntensity})`);
            }
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1 + pulseIntensity;
            ctx.stroke();
          }
        });

        // Draw nodes
        const pulseSize = Math.sin(node.pulse) * 2 + 4;
        const nodeSize = node.type === 'input' ? 6 : node.type === 'output' ? 8 : 4;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize + pulseSize, 0, Math.PI * 2);
        
        if (isDark) {
          const colors = {
            input: `rgba(0, 255, 255, ${0.8 + Math.sin(node.pulse) * 0.2})`,
            hidden: `rgba(255, 255, 255, ${0.6 + Math.sin(node.pulse) * 0.2})`,
            output: `rgba(255, 0, 255, ${0.8 + Math.sin(node.pulse) * 0.2})`
          };
          ctx.fillStyle = colors[node.type];
        } else {
          const colors = {
            input: `rgba(59, 130, 246, ${0.8 + Math.sin(node.pulse) * 0.2})`,
            hidden: `rgba(100, 100, 100, ${0.6 + Math.sin(node.pulse) * 0.2})`,
            output: `rgba(147, 51, 234, ${0.8 + Math.sin(node.pulse) * 0.2})`
          };
          ctx.fillStyle = colors[node.type];
        }
        
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10 + Math.sin(node.pulse) * 5;
        ctx.shadowColor = ctx.fillStyle as string;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    createNeuralNetwork();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createNeuralNetwork();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-60"
      style={{ zIndex: -1 }}
    />
  );
};

export default NeuralBackground;
