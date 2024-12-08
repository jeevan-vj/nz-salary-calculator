"use client";
import { useTheme } from '../theme/ThemeProvider';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 border-b bg-background">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">NZ Salary Calculator</h1>
        <button
          onClick={toggleTheme}
          className="btn"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}
