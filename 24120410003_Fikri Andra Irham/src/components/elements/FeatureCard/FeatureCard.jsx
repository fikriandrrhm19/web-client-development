"use client";

import React from 'react';
import clsx from 'clsx';

export default function FeatureCard({ title, icon: IconComponent, onClick }) {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center justify-center w-full min-h-[180px] p-5 rounded-xl shadow-lg border",
        "bg-white border-gray-200 dark:bg-dark-card dark:border-dark-border-color",
        "cursor-pointer transition-all duration-300 transform",
        "hover:scale-[1.03] hover:shadow-xl hover:translate-y-[-5px]",
        "flex-grow"
      )}
      onClick={onClick}
    >
      <div className={clsx(
        "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 mb-4",
        "bg-blue-50 border-accent-primary text-accent-primary",
        "dark:bg-dark-accent-primary/20 dark:border-dark-accent-primary dark:text-dark-accent-primary"
      )}>
        {IconComponent && (
          <IconComponent className="w-8 h-8 md:w-10 h-10" />
        )}
      </div>
      <h3 className={clsx(
        "text-center font-poppins font-semibold text-xl md:text-2xl leading-tight",
        "text-text-dark dark:text-dark-text-dark"
      )}>
        {title}
      </h3>
    </div>
  );
}