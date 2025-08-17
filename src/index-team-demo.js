/*
 * Alternative index.js for Team Section Demo
 * 
 * To use this demo:
 * 1. Rename this file to index.js (backup the original first)
 * 2. Or modify your existing index.js to import TeamDemo instead
 * 
 * This will show just the team section component for testing
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TeamDemo from './TeamDemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TeamDemo />
  </React.StrictMode>
);