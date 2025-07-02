import React from 'react';
import ThemeToggle from './components/Toggle';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center transition-colors bg-background text-foreground">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Theme Switcher</h1>
        <ThemeToggle />
      </div>
    </div>
  );
}
