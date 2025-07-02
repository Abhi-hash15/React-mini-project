import React from 'react';
import { useId } from 'react';
import useTheme from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const id = useId();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {theme === 'light' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </label>
      <input
        id={id}
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === 'dark'}
        className="w-5 h-5 accent-indigo-600"
      />
    </div>
  );
}
