"use client";

import React from 'react';
import clsx from 'clsx';

export default function SlideHint({ show }) {
  return (
    <div
      className={clsx(
        "absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-opacity duration-300",
        "text-text-muted dark:text-dark-text-muted text-sm md:text-base",
        "whitespace-nowrap pointer-events-none z-20",
        "bottom-[-55px] md:bottom-[-60px]",
        show ? 'opacity-100' : 'opacity-0'
      )}
      style={{ width: '100%', maxWidth: 'max-content' }}
    >
      <span className="inline-block w-1.5 h-1.5 bg-text-muted dark:bg-dark-text-muted rounded-full animate-wavy-dot-1 mr-2"></span>
      <span className={clsx("inline-block", show && 'animate-text-bump')}>Explore further, just a swipe away!</span>
      <span className="inline-block w-1.5 h-1.5 bg-text-muted dark:bg-dark-text-muted rounded-full animate-wavy-dot-2 ml-2"></span>
    </div>
  );
}