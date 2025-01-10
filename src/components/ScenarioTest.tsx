import React, { useState } from 'react';
import type { Scenario } from '../types';

interface ScenarioTestProps {
  scenario: Scenario;
  onBack: () => void;
  onSubmit: (responses: Record<string, string>) => void;
}

export function ScenarioTest({ scenario, onBack, onSubmit }: ScenarioTestProps) {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption) {
      onSubmit({ [scenario.id]: selectedOption });
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-gray-600 hover:text-gray-900"
      >
        ← Back to scenarios
      </button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{scenario.title}</h2>
        <p className="text-gray-600 mb-6">{scenario.description}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {scenario.options.map((option) => (
            <label
              key={option.id}
              className="flex items-start p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="radio"
                name="scenario-option"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-3 text-gray-700">{option.text}</span>
            </label>
          ))}
          
          <button
            type="submit"
            disabled={!selectedOption}
            className="mt-6 w-full bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Response
          </button>
        </form>
      </div>
    </div>
  );
}