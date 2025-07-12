"use client";

import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import clsx from 'clsx';
import { useScrollToTop } from '@/hooks/useScrollToTop'; 

export default function ScrollToTopButton() {
  const { isVisible, scrollToTop } = useScrollToTop();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    scrollToTop();
    const timer = setTimeout(() => {
      setIsClicked(false);
    }, 300);
    return () => clearTimeout(timer);
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        "fixed bottom-6 right-6 z-50",
        "p-3 rounded-full shadow-lg",
        "bg-accent-primary text-white",
        "dark:bg-dark-accent-primary dark:text-dark-bg-primary",
        "border border-accent-primary dark:border-dark-accent-primary",
        "hover:bg-accent-primary-dark dark:hover:bg-dark-accent-primary-dark",
        "focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2",
        "transform transition-all duration-300 ease-in-out",
        "group",
        {
          "opacity-100 scale-100": isVisible,
          "opacity-0 scale-0 pointer-events-none": !isVisible,
          "animate-pop-out": isClicked, 
        }
      )}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUp
        className="h-6 w-6 transition-transform duration-200 ease-out group-hover:-translate-y-1"
      />
    </button>
  );
}