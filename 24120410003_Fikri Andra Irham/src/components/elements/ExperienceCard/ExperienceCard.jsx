"use client";

import React, { forwardRef, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

import Card from '../Card';

const ExperienceCard = forwardRef(({ experience, className }, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const MAX_VISIBLE_DETAILS = 2;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const showToggleButton = experience.details.length > MAX_VISIBLE_DETAILS;

  return (
    <Card
      ref={ref}
      className={clsx(
        "w-full",
        "p-4 sm:p-5 md:p-8",
        "overflow-hidden flex flex-col justify-between",
        className
      )}
    >
      <div>
        <h3 className={clsx(
          "text-card-header md:text-md-card-header lg:text-lg-card-header 2xl:text-2xl-card-header font-poppins",
          "mb-2",
          "text-text-dark dark:text-dark-text-dark"
        )}>
          {experience.role}{' '}
          <span className="text-accent-primary dark:text-dark-accent-primary">
            @{' '}
            {experience.website ? (
              <Link
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "font-normal",
                  "text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter",
                  "hover:underline transition-colors duration-200",
                  "dark:hover:text-dark-accent-primary-dark"
                )}
              >
                {experience.company}
              </Link>
            ) : (
              <span className={clsx(
                "font-normal text-text-muted",
                "text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter",
                "dark:text-dark-text-muted"
              )}>
                {experience.company}
              </span>
            )}
          </span>
        </h3>
        <div className={clsx(
          "flex flex-wrap items-center font-inter",
          "text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip",
          "mb-4",
          "text-text-muted dark:text-dark-text-muted"
        )}>
          <div className="flex items-center mr-4 mb-1 sm:mb-0">
            <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0" />
            <span>{experience.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1.5 flex-shrink-0" />
            <span>{experience.location}</span>
          </div>
        </div>

        <div className="relative">
          <ul className={clsx(
            "list-disc pl-5 font-inter leading-relaxed",
            "text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph",
            "space-y-2",
            "text-text-dark dark:text-dark-text-dark",
            "md:max-h-full md:overflow-visible",
            {
              "max-h-[7.5em] overflow-hidden": !isExpanded && showToggleButton,
            }
          )}>
            {experience.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>

          {showToggleButton && (
            <div className="md:hidden flex justify-center mt-2 relative z-20">
              <button
                onClick={toggleExpand}
                className={clsx(
                  "flex items-center text-accent-primary dark:text-dark-accent-primary",
                  "hover:underline",
                  "text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m font-inter",
                  "transition-colors duration-200",
                  "bg-light-card dark:bg-dark-card px-4 py-2 rounded-md"
                )}
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="ml-1 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="ml-1 h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

export default ExperienceCard;