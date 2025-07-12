"use client";

import React, { useState } from 'react';
import clsx from 'clsx';

export default function TechIconWithTooltip({ IconComponent, tooltipText }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <IconComponent
        className="w-6 h-6 text-text-muted hover:text-accent-primary transition-colors cursor-pointer
dark:text-dark-text-muted dark:hover:text-dark-accent-primary"
      />
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
bg-gray-800 text-white text-xs rounded-md shadow-lg
px-2 py-1 whitespace-nowrap z-50 animate-tooltip-appear
dark:bg-dark-tooltip-bg dark:text-dark-tooltip-text">
          {tooltipText}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-gray-800
dark:border-t-dark-tooltip-bg"></div>
        </div>
      )}
    </div>
  );
}