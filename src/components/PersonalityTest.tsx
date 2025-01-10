import React, { useState } from 'react';
import type { PersonalityQuestion } from '../types';

interface PersonalityTestProps {
  questions: PersonalityQuestion[];
  onSubmit: (responses: Record<string, string>) => void;
}

export function PersonalityTest({ questions, onSubmit }: PersonalityTestProps) {
  const [responses, setResponses] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(responses);
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personality Assessment</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} className="mb-8 bg-white rounded-lg shadow-md p-6">
            <p className="text-lg text-gray-900 mb-4">{question.question}</p>
            <div className="space-y-3">
              {question.options.map((option) => (
                <label key={option.id} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name={question.id}
                    value={option.id}
                    onChange={(e) => setResponses({
                      ...responses,
                      [question.id]: e.target.value
                    })}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-gray-700">{option.text}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors duration-200"
        >
          Submit Assessment
        </button>
      </form>
    </div>
  );
}