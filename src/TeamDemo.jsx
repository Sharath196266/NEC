/*
 * Team Section Demo
 * 
 * This file demonstrates how to use the TeamSection component.
 * You can either:
 * 1. Use this as a standalone page
 * 2. Import TeamSection into your main component
 * 3. Replace the existing team section in GECH_E_CELL_Portfolio.jsx
 */

import React from 'react';
import TeamSection from './TeamSection';

const TeamDemo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Optional: Add a simple header */}
      <header className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-900">Team Section Demo</h1>
          <p className="text-gray-600">Responsive team component with Tailwind CSS</p>
        </div>
      </header>

      {/* Team Section Component */}
      <TeamSection />

      {/* Optional: Add footer or other content */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            This is a reusable team section component. 
            Follow the instructions in the component to add your team photos.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TeamDemo;