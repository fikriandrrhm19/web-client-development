"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function PageLoader({ progress }) {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 300);

    return () => clearInterval(dotInterval);
  }, []);

  return (
    <div
      className={clsx(
        "fixed inset-0 flex flex-col items-center justify-center z-[9999]",
        "bg-gradient-to-br from-blue-50 to-purple-50", 
        "dark:bg-gradient-to-br dark:from-dark-accent-primary/10 dark:via-dark-bg-primary dark:to-dark-accent-secondary/20",
        "transition-colors duration-300"
      )}
    >
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div
          className={clsx(
            "absolute w-32 h-32 rounded-full",
            "bg-accent-primary/30 dark:bg-dark-accent-primary/30",
            "animate-pulse-strong", 
            "flex items-center justify-center",
            "shadow-xl shadow-accent-primary/60 dark:shadow-dark-accent-primary/60"
          )}
          style={{ animationDelay: '0s' }}
        >
          <div
            className={clsx(
              "w-24 h-24 rounded-full",
              "bg-accent-primary dark:bg-dark-accent-primary",
              "opacity-90",
              "animate-float-subtle", 
              "shadow-2xl shadow-accent-primary/70 dark:shadow-dark-accent-primary/70"
            )}
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>

        <div
          className={clsx(
            "absolute w-16 h-16 rounded-full",
            "bg-accent-secondary/20 dark:bg-dark-accent-secondary/20",
            "animate-float-subtle-reverse", 
            "blur-sm", 
            "top-4 left-4"
          )}
          style={{ animationDelay: '0.4s' }}
        ></div>
        <div
          className={clsx(
            "absolute w-12 h-12 rounded-full",
            "bg-accent-primary/15 dark:bg-dark-accent-primary/15",
            "animate-float-subtle",
            "blur-md",
            "bottom-4 right-4"
          )}
          style={{ animationDelay: '0.6s' }}
        ></div>
      </div>

      <p
        className={clsx(
          "mt-8 text-2xl font-semibold font-poppins", 
          "text-text-dark dark:text-dark-text-dark",
          "animate-fade-in-up" 
        )}
      >
        Loading{dots}
      </p>

      <div className="w-40 mt-4 h-1 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <div 
          className={clsx(
            "h-full rounded-full",
            "bg-accent-primary dark:bg-dark-accent-primary",
            "transition-all duration-300 ease-out"
          )}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
}