import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScenarioCard } from './components/ScenarioCard';
import { PersonalityTest } from './components/PersonalityTest';
import { ScenarioTest } from './components/ScenarioTest';
import type { Scenario, PersonalityQuestion } from './types';

const sampleScenarios: Scenario[] = [
  {
    id: '1',
    title: 'System Performance Analysis',
    description: 'A critical production system is experiencing slowdowns. What would be your first step?',
    category: 'Technical',
    difficulty: 'medium',
    estimatedTime: 20,
    options: [
      {
        id: 'a',
        text: 'Check system logs and monitoring dashboards for anomalies',
        isCorrect: true
      },
      {
        id: 'b',
        text: 'Immediately restart the system',
        isCorrect: false
      },
      {
        id: 'c',
        text: 'Ask users to clear their browser cache',
        isCorrect: false
      },
      {
        id: 'd',
        text: 'Deploy the latest code version',
        isCorrect: false
      }
    ]
  },
  {
    id: '2',
    title: 'Team Conflict Resolution',
    description: "Two team members disagree on the technical approach for a critical feature. What would be your first action?",
    category: 'Leadership',
    difficulty: 'hard',
    estimatedTime: 15,
    options: [
      {
        id: 'a',
        text: 'Schedule a meeting to discuss pros and cons of each approach',
        isCorrect: true
      },
      {
        id: 'b',
        text: 'Choose the approach from the more senior developer',
        isCorrect: false
      },
      {
        id: 'c',
        text: 'Implement both approaches in parallel',
        isCorrect: false
      },
      {
        id: 'd',
        text: 'Escalate to upper management',
        isCorrect: false
      }
    ]
  },
  {
    id: '3',
    title: 'Database Optimization',
    description: "A database query is taking significantly longer than usual. How do you approach this issue?",
    category: 'Technical',
    difficulty: 'hard',
    estimatedTime: 25,
    options: [
      {
        id: 'a',
        text: 'Analyze the query execution plan and identify bottlenecks',
        isCorrect: true
      },
      {
        id: 'b',
        text: 'Add more RAM to the database server',
        isCorrect: false
      },
      {
        id: 'c',
        text: 'Rewrite the query without investigating the current one',
        isCorrect: false
      },
      {
        id: 'd',
        text: 'Switch to a different database system',
        isCorrect: false
      }
    ]
  },
  {
    id: '4',
    title: 'Security Incident Response',
    description: "You notice unusual access patterns in your application logs. What's your immediate response?",
    category: 'Security',
    difficulty: 'medium',
    estimatedTime: 30,
    options: [
      {
        id: 'a',
        text: 'Document the incident and initiate the security response protocol',
        isCorrect: true
      },
      {
        id: 'b',
        text: 'Shut down all systems immediately',
        isCorrect: false
      },
      {
        id: 'c',
        text: 'Ignore it as it might be a false positive',
        isCorrect: false
      },
      {
        id: 'd',
        text: 'Delete the suspicious logs',
        isCorrect: false
      }
    ]
  },
  {
    id: '5',
    title: 'Code Review Practices',
    description: 'You notice a potential security vulnerability while reviewing a colleague\'s code. How do you handle it?',
    category: 'Security',
    difficulty: 'medium',
    estimatedTime: 20,
    options: [
      {
        id: 'a',
        text: 'Privately discuss the issue with the developer and suggest secure alternatives',
        isCorrect: true
      },
      {
        id: 'b',
        text: 'Reject the PR without explanation',
        isCorrect: false
      },
      {
        id: 'c',
        text: 'Approve it since it\'s not your responsibility',
        isCorrect: false
      },
      {
        id: 'd',
        text: 'Publicly criticize the code in the team channel',
        isCorrect: false
      }
    ]
  },
  {
    id: '6',
    title: 'Project Deadline Management',
    description: 'Your team is falling behind on a critical project deadline. What\'s your approach?',
    category: 'Leadership',
    difficulty: 'hard',
    estimatedTime: 25,
    options: [
      {
        id: 'a',
        text: 'Analyze bottlenecks, reprioritize tasks, and communicate status to stakeholders',
        isCorrect: true
      },
      {
        id: 'b',
        text: 'Demand overtime from the team',
        isCorrect: false
      },
      {
        id: 'c',
        text: 'Reduce code quality standards to speed up delivery',
        isCorrect: false
      },
      {
        id: 'd',
        text: 'Blame team members for poor performance',
        isCorrect: false
      }
    ]
  },
  {
    id: '7',
    title: 'API Design Decision',
    description: 'You\'re designing a new API endpoint. Which approach do you take?',
    category: 'Technical',
    difficulty: 'medium',
    estimatedTime: 20,
    options: [
      {
        id: 'a',
        text: 'Design with backward compatibility and clear documentation in mind',
        isCorrect: true
      },
      {
        id: 'b',
        text: 'Implement whatever is fastest to code',
        isCorrect: false
      },
      {
        id: 'c',
        text: 'Copy design from a similar endpoint without analysis',
        isCorrect: false
      },
      {
        id: 'd',
        text: 'Let each developer implement their own version',
        isCorrect: false
      }
    ]
  },
  {
    id: '8',
    title: 'Production Outage',
    description: 'The production system is completely down. What\'s your first action?',
    category: 'Technical',
    difficulty: 'hard',
    estimatedTime: 30,
    options: [
      {
        id: 'a',
        text: 'Follow incident response protocol and begin systematic investigation',
        isCorrect: true
      },
      {
        id: 'b',
        text: 'Start randomly checking different systems',
        isCorrect: false
      },
      {
        id: 'c',
        text: 'Wait for someone else to notice and fix it',
        isCorrect: false
      },
      {
        id: 'd',
        text: 'Immediately roll back all recent changes without investigation',
        isCorrect: false
      }
    ]
  }
];

const sampleQuestions: PersonalityQuestion[] = [
  {
    id: '1',
    question: 'How do you typically approach problem-solving?',
    options: [
      { id: 'a', text: 'Analyze all available data before making decisions', trait: 'analytical', weight: 1 },
      { id: 'b', text: 'Trust your intuition and experience', trait: 'intuitive', weight: 1 },
      { id: 'c', text: 'Consult with others and gather different perspectives', trait: 'collaborative', weight: 1 },
      { id: 'd', text: 'Take immediate action and adjust as needed', trait: 'action-oriented', weight: 1 }
    ]
  },
  {
    id: '2',
    question: 'When working on a complex project, you prefer to:',
    options: [
      { id: 'a', text: 'Break it down into smaller, manageable tasks', trait: 'structured', weight: 1 },
      { id: 'b', text: 'Focus on the big picture and overall goals', trait: 'strategic', weight: 1 },
      { id: 'c', text: 'Start with the most challenging aspects', trait: 'challenge-driven', weight: 1 },
      { id: 'd', text: 'Collaborate with team members to divide responsibilities', trait: 'collaborative', weight: 1 }
    ]
  },
  {
    id: '3',
    question: 'In a team discussion, you are most likely to:',
    options: [
      { id: 'a', text: 'Listen carefully and speak when you have concrete data', trait: 'analytical', weight: 1 },
      { id: 'b', text: 'Share your vision and inspire others', trait: 'visionary', weight: 1 },
      { id: 'c', text: 'Mediate between different viewpoints', trait: 'diplomatic', weight: 1 },
      { id: 'd', text: 'Challenge assumptions and propose alternatives', trait: 'innovative', weight: 1 }
    ]
  },
  {
    id: '4',
    question: 'When facing a deadline, you typically:',
    options: [
      { id: 'a', text: 'Create a detailed schedule and stick to it', trait: 'organized', weight: 1 },
      { id: 'b', text: 'Focus on the most important tasks first', trait: 'prioritizing', weight: 1 },
      { id: 'c', text: 'Work longer hours to ensure completion', trait: 'dedicated', weight: 1 },
      { id: 'd', text: 'Negotiate for more time if needed', trait: 'pragmatic', weight: 1 }
    ]
  },
  {
    id: '5',
    question: 'Your preferred learning style is:',
    options: [
      { id: 'a', text: 'Reading documentation and analyzing examples', trait: 'theoretical', weight: 1 },
      { id: 'b', text: 'Hands-on experimentation and practice', trait: 'practical', weight: 1 },
      { id: 'c', text: 'Discussing concepts with others', trait: 'social', weight: 1 },
      { id: 'd', text: 'Watching demonstrations and tutorials', trait: 'visual', weight: 1 }
    ]
  },
  {
    id: '6',
    question: 'When making technical decisions, you prioritize:',
    options: [
      { id: 'a', text: 'Long-term maintainability and scalability', trait: 'strategic', weight: 1 },
      { id: 'b', text: 'Immediate problem resolution', trait: 'tactical', weight: 1 },
      { id: 'c', text: 'Team consensus and buy-in', trait: 'collaborative', weight: 1 },
      { id: 'd', text: 'Innovation and cutting-edge solutions', trait: 'innovative', weight: 1 }
    ]
  },
  {
    id: '7',
    question: 'In high-pressure situations, you tend to:',
    options: [
      { id: 'a', text: 'Remain calm and methodical', trait: 'composed', weight: 1 },
      { id: 'b', text: 'Become more focused and energized', trait: 'resilient', weight: 1 },
      { id: 'c', text: 'Seek support from teammates', trait: 'collaborative', weight: 1 },
      { id: 'd', text: 'Take charge and direct others', trait: 'leadership', weight: 1 }
    ]
  },
  {
    id: '8',
    question: 'When receiving criticism, you usually:',
    options: [
      { id: 'a', text: 'Analyze it objectively for validity', trait: 'analytical', weight: 1 },
      { id: 'b', text: 'Look for ways to improve', trait: 'growth-minded', weight: 1 },
      { id: 'c', text: 'Discuss it openly with others', trait: 'open', weight: 1 },
      { id: 'd', text: 'Defend your position with facts', trait: 'assertive', weight: 1 }
    ]
  },
  {
    id: '9',
    question: 'Your approach to documentation is:',
    options: [
      { id: 'a', text: 'Comprehensive and detailed', trait: 'thorough', weight: 1 },
      { id: 'b', text: 'Focused on key points and examples', trait: 'practical', weight: 1 },
      { id: 'c', text: 'Collaborative with team input', trait: 'collaborative', weight: 1 },
      { id: 'd', text: 'Minimal but sufficient', trait: 'efficient', weight: 1 }
    ]
  },
  {
    id: '10',
    question: 'When leading a project, you focus most on:',
    options: [
      { id: 'a', text: 'Clear goals and measurable outcomes', trait: 'goal-oriented', weight: 1 },
      { id: 'b', text: 'Team dynamics and motivation', trait: 'people-oriented', weight: 1 },
      { id: 'c', text: 'Process efficiency and optimization', trait: 'process-oriented', weight: 1 },
      { id: 'd', text: 'Innovation and creative solutions', trait: 'innovative', weight: 1 }
    ]
  }
];

// Rest of the App component remains the same...

function App() {
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const [results, setResults] = useState<{
    correct: number;
    total: number;
  } | null>(null);

  const handleScenarioSubmit = (responses: Record<string, string>) => {
    const total = Object.keys(responses).length;
    const correct = Object.entries(responses).reduce((acc, [scenarioId, answer]) => {
      const scenario = sampleScenarios.find(s => s.id === scenarioId);
      const isCorrect = scenario?.options.find(o => o.id === answer)?.isCorrect;
      return isCorrect ? acc + 1 : acc;
    }, 0);

    setResults({ correct, total });
    setTimeout(() => {
      setActiveScenario(null);
      setResults(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="min-h-screen backdrop-blur-sm bg-white/30">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {!showAssessment && !activeScenario && (
            <>
              <div className="text-center mb-12">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl mb-8 inline-block">
                  <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    Welcome to PARAS
                  </h1>
                  <p className="text-xl text-gray-700">
                  Personality Analysis & Reasoning Assessment System
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {sampleScenarios.map((scenario) => (
                  <ScenarioCard
                    key={scenario.id}
                    scenario={scenario}
                    onSelect={setActiveScenario}
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => setShowAssessment(true)}
                  className="bg-white/80 backdrop-blur-sm text-indigo-600 py-3 px-8 rounded-full hover:bg-white transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  Take Personality Assessment
                </button>
              </div>
            </>
          )}

          {showAssessment && (
            <PersonalityTest
              questions={sampleQuestions}
              onSubmit={(responses) => {
                console.log('Assessment responses:', responses);
                setShowAssessment(false);
              }}
            />
          )}

          {activeScenario && (
            <ScenarioTest
              scenario={activeScenario}
              onBack={() => setActiveScenario(null)}
              onSubmit={handleScenarioSubmit}
            />
          )}

          {results && (
            <div className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Results</h3>
                <p className="text-lg">
                  You got {results.correct} out of {results.total} correct!
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;