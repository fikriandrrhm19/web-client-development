"use client";

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={clsx(
        "relative group flex items-center justify-center",
        "w-10 h-10",
        "rounded-full border",
        "border-gray-400 dark:border-gray-500",
        "transition-colors duration-300",
        "focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2",
        "hover:border-accent-primary dark:hover:border-dark-accent-primary",
        "hover:bg-accent-primary dark:hover:bg-dark-accent-primary"
      )}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun
          className={clsx(
            "h-6 w-6 transition-all duration-300",
            "text-gray-400 dark:text-white",
            "group-hover:text-white group-hover:fill-white",
            "dark:group-hover:text-dark-bg-primary dark:group-hover:fill-dark-bg-primary"
          )}
        />
      ) : (
        <Moon
          className={clsx(
            "h-6 w-6 transition-all duration-300",
            "text-gray-600",
            "group-hover:text-white group-hover:fill-white",
            "dark:group-hover:text-dark-bg-primary dark:group-hover:fill-dark-bg-primary"
          )}
        />
      )}
    </button>
  );
}