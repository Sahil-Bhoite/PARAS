import React from 'react';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Brain className="h-8 w-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">PARAS</h1>
          </div>
          <nav className="flex space-x-8">
            <a href="#scenarios" className="text-gray-700 hover:text-indigo-600 font-medium">Scenarios</a>
            <a href="#assessment" className="text-gray-700 hover:text-indigo-600 font-medium">Assessment</a>
            <a href="#profile" className="text-gray-700 hover:text-indigo-600 font-medium">Profile</a>
          </nav>
        </div>
      </div>
    </header>
  );
}