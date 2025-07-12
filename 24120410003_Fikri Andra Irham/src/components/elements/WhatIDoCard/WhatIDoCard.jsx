"use client";

import React from 'react';
import clsx from 'clsx';

import Card from '../Card';
import { techIcons } from '@/lib/data/whatIDo';

import TechIconWithTooltip from './TechIconWithTooltip';

export default function WhatIDoCard({ data, className }) {
  const HeadingIconComponent = data.icon ? techIcons[data.icon] : null;

  return (
    <Card
      className={clsx(
        "w-full p-6 md:p-7 flex flex-col mb-3",
        "bg-white border border-gray-200 shadow-md rounded-xl",
        "max-w-[720px] md-tab:max-w-[600px] lg:max-w-[700px]",
        "h-[325px] sm:h-[240px] md:h-[355px] lg:h-[325px] 2xl:h-[340px]",
        "dark:bg-dark-card dark:border-dark-border-color dark:shadow-none",
        className
      )}
    >
      <div>
        <div className="flex items-center mb-4">
          {HeadingIconComponent && (
            <HeadingIconComponent
              className="w-6 h-6 text-accent-primary mr-3 flex-shrink-0 dark:text-dark-accent-primary"
            />
          )}
          <h3 className="text-card-header md:text-md-card-header lg:text-lg-card-header 2xl:text-2xl-card-header font-poppins text-text-dark leading-tight dark:text-dark-text-dark">
            {data.title}
          </h3>
        </div>

        <ul className="list-disc pl-5 text-text-dark text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter space-y-1 mb-4 dark:text-dark-text-muted">
          {data.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-gray-100 relative dark:border-dark-border-color">
        {data.technologies && data.technologies.map((techName, index) => {
          const TechIcon = techIcons[techName];

          return TechIcon ? (
            <TechIconWithTooltip
              key={index}
              IconComponent={TechIcon}
              tooltipText={techName}
            />
          ) : (
            null
          );
        })}
      </div>
    </Card>
  );
}
