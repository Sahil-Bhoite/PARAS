import React from 'react';
import { Clock, Tag } from 'lucide-react';
import type { Scenario } from '../types';

interface ScenarioCardProps {
  scenario: Scenario;
  onSelect: (scenario: Scenario) => void;
}

export function ScenarioCard({ scenario, onSelect }: ScenarioCardProps) {
  return (
    <div 
      className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer transform hover:-translate-y-1"
      onClick={() => onSelect(scenario)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{scenario.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            scenario.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
            scenario.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {scenario.difficulty}
          </span>
        </div>
        <p className="text-gray-700 mb-4">{scenario.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {scenario.estimatedTime} min
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {scenario.category}
            </div>
          </div>
          <div className="text-sm text-gray-600">
            {scenario.options.length} options
          </div>
        </div>
      </div>
    </div>
  );
}