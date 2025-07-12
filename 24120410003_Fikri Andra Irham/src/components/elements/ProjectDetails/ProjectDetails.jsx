import React from 'react';
import { User, CalendarDays } from 'lucide-react';
import { formatDate } from '@/utils/dateUtils';
import clsx from 'clsx';

export default function ProjectDetails({ title, issuer, date, dateDisplay, description, techStacks }) {
  return (
    <div className="flex-grow flex flex-col justify-start">
      <h3 className="text-card-header md:text-md-card-header lg:text-lg-card-header 2xl:text-2xl-card-header font-poppins leading-tight mb-3
                     text-text-dark dark:text-dark-text-dark">
        {title}
      </h3>

      <div className="flex items-center text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter mb-3 w-full flex-wrap gap-x-[5px]">
        {issuer && (
          <>
            <User className="w-4 h-4 text-text-muted flex-shrink-0 dark:text-dark-text-muted" />
            <span className="font-medium text-text-dark mr-1 flex-shrink-0 dark:text-dark-text-dark">
              {issuer}
            </span>
          </>
        )}
        <CalendarDays className="w-4 h-4 text-text-muted flex-shrink-0 dark:text-dark-text-muted" />
        <span className="text-text-muted dark:text-dark-text-muted">
          {dateDisplay || formatDate(date)}
        </span>
      </div>

      <p className="text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter leading-relaxed mb-4
                    h-[120px] sm:h-[145px] md:h-[150px] lg:h-[130px] 2xl:h-[115px] overflow-hidden text-ellipsis
                    text-text-dark dark:text-dark-text-dark">
        {description}
      </p>

      {techStacks && techStacks.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techStacks.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full
                         bg-gray-100 text-gray-700 text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter
                         dark:bg-dark-bg-secondary dark:text-dark-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      <div className="flex-grow"></div>
    </div>
  );
}