"use client";

import React, { useState } from 'react';
import clsx from 'clsx';
import MiniCard from '../MiniCard/MiniCard';

export default function MiniCardWithTooltip({ icon, text, description, href, className }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const CardWrapperElement = href ? 'a' : 'div'; 

  return (
    <CardWrapperElement
      {...(href && { href: href, target: "_blank", rel: "noopener noreferrer" })}
      className={clsx(
        "relative w-full xs:w-auto min-h-[48px] sm:min-h-[54px] rounded-[10px]",
        {
          "cursor-pointer": href,
          "cursor-help": description && !href, 
        },
        className
      )}
      onMouseEnter={() => description && setShowTooltip(true)} 
      onMouseLeave={() => description && setShowTooltip(false)} 
    >
      <MiniCard
        icon={icon}
        text={text}
        className={clsx(
          "w-full h-full border rounded-[10px] shadow-sm",
          "px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3",
          "justify-center", 
          "bg-light-card border-border-color text-text-dark",
          "hover:shadow-md transition-shadow duration-300",
          "dark:bg-dark-card dark:border-dark-border-color dark:text-dark-text-dark"
        )}
      />

      {showTooltip && description && (
        <div
          className={clsx(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50",
            "bg-gray-800 text-white",
            "dark:bg-dark-bg-secondary dark:text-dark-text-dark",
            "text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip rounded-md shadow-lg",
            "px-3 py-2 w-max max-w-[250px]",
            "transform origin-bottom scale-95 opacity-0 animate-tooltip-appear"
          )}
        >
          {description}
          <div
            className={clsx(
              "absolute top-full left-1/2 -translate-x-1/2 w-0 h-0",
              "border-l-4 border-l-transparent border-r-4 border-r-transparent",
              "border-t-4 border-t-gray-800",
              "dark:border-t-dark-bg-secondary"
            )}
          ></div>
        </div>
      )}
    </CardWrapperElement>
  );
}