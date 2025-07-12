"use client";

import React from 'react';
import clsx from 'clsx';

export default function MiniCard({ icon: Icon, text, className, onClick }) {
  const CardElement = onClick ? 'button' : 'div';

  return (
    <CardElement
      className={clsx(
        "relative flex items-center space-x-2 p-2 rounded-md", 
        "transition-colors duration-200",
        "bg-gray-100 dark:bg-dark-bg-secondary", 
        "hover:bg-gray-200 dark:hover:bg-dark-bg-secondary-hover", 
        {
          "cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 dark:focus:ring-dark-accent-primary": onClick,
        },
        className
      )}
      onClick={onClick}
      {...(onClick && { type: 'button' })}
    >
      {Icon && (
        <Icon className="h-5 w-5 flex-shrink-0 text-text-dark dark:text-dark-text-dark" />
      )}
      <span className="font-inter text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-normal whitespace-nowrap overflow-hidden text-ellipsis
                       text-text-dark dark:text-dark-text-dark">
        {text}
      </span>
    </CardElement>
  );
}