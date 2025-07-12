"use client";

import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { CalendarDays, Building2 } from 'lucide-react';

import Card from '../Card';

const EducationCard = forwardRef(({ education, className }, ref) => {
  return (
    <Card
      ref={ref}
      className={clsx(
        "w-full max-w-[902px] p-5 sm:p-7 md:p-8 flex flex-col justify-between",
        className
      )}
      style={{
        minHeight: '162px'
      }}
    >
      <div>
        <h3 className="text-card-header md:text-md-card-header lg:text-lg-card-header 2xl:text-2xl-card-header font-poppins leading-tight mb-[11px]
                       text-text-dark dark:text-dark-text-dark">
          {education.degree}
        </h3>

        <div className="flex flex-wrap items-center text-base font-inter mb-[11px]">
          <div className="flex items-center mr-4">
            <Building2 className="h-4 w-4 mr-1.5 flex-shrink-0 text-text-muted dark:text-dark-text-muted" />
            {education.website ? (
              <Link
                href={education.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter text-accent-primary hover:underline transition-colors duration-200 dark:text-dark-accent-primary"
              >
                {education.institution}
              </Link>
            ) : (
              <span className="text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter text-text-muted dark:text-dark-text-muted">
                {education.institution}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5 flex-shrink-0 text-text-muted dark:text-dark-text-muted" />
            <span className="text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter text-text-muted dark:text-dark-text-muted">
              {education.duration}
            </span>
          </div>
        </div>

        {education.description && (
          <p className="text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter leading-relaxed
                        text-text-dark dark:text-dark-text-dark">
            {education.description}
          </p>
        )}
      </div>
    </Card>
  );
});

EducationCard.displayName = 'EducationCard';

export default EducationCard;