import { useState } from 'react';
import { Send, Sparkles, MessageSquare, TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { aiResponses } from '../../data/mockData';
import { AIInsight } from '../../types/dashboard';

interface PromptBoxProps {
  onInsightGenerated?: (insight: AIInsight) => void;
}

const quickPrompts = [
  { text: "Top campaigns this month", icon: TrendingUp, type: 'campaigns' },
  { text: "Revenue trends", icon: DollarSign, type: 'revenue' },
  { text: "Traffic sources", icon: Activity, type: 'traffic' },
  { text: "User metrics", icon: Users, type: 'users' }
];

export const PromptBox = ({ onInsightGenerated }: PromptBoxProps) => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastInsight, setLastInsight] = useState<AIInsight | null>(null);

  const generateInsight = async (query: string, type?: string) => {
    setIsLoading(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Get appropriate response based on query type
    let response;
    if (type && type in aiResponses) {
      response = aiResponses[type as keyof typeof aiResponses];
    } else {
      // Simple keyword matching for demo
      const lowerQuery = query.toLowerCase();
      if (lowerQuery.includes('campaign')) {
        response = aiResponses.campaigns;
      } else if (lowerQuery.includes('revenue') || lowerQuery.includes('sales')) {
        response = aiResponses.revenue;
      } else if (lowerQuery.includes('traffic') || lowerQuery.includes('source')) {
        response = aiResponses.traffic;
      } else if (lowerQuery.includes('user') || lowerQuery.includes('customer')) {
        response = aiResponses.users;
      } else {
        response = {
          question: query,
          answer: "I understand you're asking about analytics data. Based on your current dashboard metrics, I can provide insights about revenue trends, user engagement, campaign performance, and traffic sources. Please try asking about specific metrics for more detailed analysis.",
          confidence: 75
        };
      }
    }

    const insight: AIInsight = {
      id: Date.now().toString(),
      question: query,
      answer: response.answer,
      timestamp: new Date(),
      confidence: response.confidence
    };

    setLastInsight(insight);
    onInsightGenerated?.(insight);
    setIsLoading(false);
    setPrompt('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      generateInsight(prompt.trim());
    }
  };

  const handleQuickPrompt = (promptData: typeof quickPrompts[0]) => {
    generateInsight(promptData.text, promptData.type);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-lg bg-gradient-primary">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">AI Analytics Assistant</h3>
          <p className="text-sm text-muted-foreground">Ask questions about your data</p>
        </div>
      </div>

      {/* Quick Prompts */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {quickPrompts.map((item, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="justify-start gap-2 h-auto py-2"
            onClick={() => handleQuickPrompt(item)}
            disabled={isLoading}
          >
            <item.icon className="h-4 w-4" />
            <span className="text-xs">{item.text}</span>
          </Button>
        ))}
      </div>

      {/* Prompt Input */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask about your analytics data..."
          disabled={isLoading}
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={isLoading || !prompt.trim()}
          size="sm"
        >
          {isLoading ? (
            <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>

      {/* Response Display */}
      {lastInsight && (
        <div className="ai-prompt-box animate-slide-up">
          <div className="flex items-start gap-3">
            <MessageSquare className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div className="flex-1">
              <div className="mb-2">
                <p className="text-sm font-medium text-foreground mb-1">
                  {lastInsight.question}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    Confidence: {lastInsight.confidence}%
                  </span>
                  <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary transition-all duration-1000"
                      style={{ width: `${lastInsight.confidence}%` }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lastInsight.answer}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="ai-prompt-box">
          <div className="flex items-center gap-3">
            <div className="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full" />
            <span className="text-sm text-muted-foreground">Analyzing your data...</span>
          </div>
        </div>
      )}
    </div>
  );
};