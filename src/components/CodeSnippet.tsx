
import { motion } from "framer-motion";
import { useState } from "react";

const CodeSnippet = () => {
  const [activeTab, setActiveTab] = useState("ai");

  const codeExamples = {
    ai: `# Neural Network Implementation
import tensorflow as tf
from transformers import pipeline

class AIAssistant:
    def __init__(self):
        self.nlp = pipeline("text-generation")
        self.model = self.build_neural_net()
    
    def solve_problem(self, query):
        analysis = self.nlp(query)
        solution = self.model.predict(analysis)
        return self.optimize_response(solution)`,
    
    fullstack: `// React + Node.js Integration
const app = express();
const ai_service = new AIService();

app.post('/api/intelligent-response', async (req, res) => {
  const { userInput } = req.body;
  
  const processed = await ai_service.process({
    input: userInput,
    context: req.user.preferences,
    optimize: true
  });
  
  res.json({ 
    response: processed.result,
    confidence: processed.accuracy 
  });
});`,
    
    algorithms: `// Competitive Programming Solution
class Solution {
  public optimizedAlgorithm(data: number[]): number {
    // Dynamic Programming + Binary Search
    const dp = new Array(data.length).fill(0);
    
    for (let i = 1; i < data.length; i++) {
      dp[i] = Math.max(
        dp[i-1],
        data[i] + (i >= 2 ? dp[i-2] : 0)
      );
    }
    
    return dp[data.length - 1]; // O(n) solution
  }
}`
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 1.5 }}
      className="bg-gray-900/95 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden max-w-lg w-full"
    >
      <div className="flex border-b border-purple-500/20">
        {Object.keys(codeExamples).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-xs font-medium transition-colors ${
              activeTab === tab
                ? 'bg-purple-500/20 text-purple-300 border-b-2 border-purple-400'
                : 'text-gray-400 hover:text-purple-300'
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      
      <div className="p-4 font-mono text-xs text-gray-300 leading-relaxed overflow-hidden">
        <pre className="whitespace-pre-wrap">
          {codeExamples[activeTab as keyof typeof codeExamples]}
        </pre>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
