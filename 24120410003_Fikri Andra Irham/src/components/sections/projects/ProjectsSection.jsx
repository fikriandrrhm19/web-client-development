"use client";

import React, { useMemo, useState, useEffect } from 'react';
import clsx from 'clsx';

import Tabs from '@/components/elements/Tabs';
import ProjectCard from '@/components/elements/ProjectCard';
import FadeInOnScroll from '@/components/elements/FadeInOnScroll';
import AnimatedBackground from '@/components/elements/AnimatedBackground';
import CurvedDivider from '@/components/elements/CurvedDivider';
import { projectCategories, projects } from '@/lib/data/projects';

export default function ProjectsSection({ className }) {
  const [activeCategories, setActiveCategories] = useState(['all']);
  const [currentSortOrder, setCurrentSortOrder] = useState('newest');

  useEffect(() => {
    if (activeCategories.length === 0) {
      setActiveCategories(['all']);
    }
  }, [activeCategories]);

  const handleCategoryChange = (newCategories) => {
    setActiveCategories(newCategories);
  };

  const handleSortOrderChange = (newOrder) => {
    setCurrentSortOrder(newOrder);
  };

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    if (!activeCategories.includes('all') && activeCategories.length > 0) {
      filtered = filtered.filter((proj) => activeCategories.includes(proj.category));
    }
    
    filtered = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (currentSortOrder === 'newest') {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
    return filtered;
  }, [activeCategories, currentSortOrder]);

  const handleClearFilters = () => {
    setActiveCategories(['all']);
  };

  return (
    <section
      id="projects"
      className={clsx(
        "relative z-10",
        "overflow-hidden",
        "bg-white",
        "dark:bg-dark-bg-primary",
        className
      )}
    >
      <div className={clsx(
        "relative",
        "pt-24 2xl:pt-[140px]",
        "px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32",
        "bg-gradient-to-br from-blue-50 to-purple-50",
        "dark:bg-gradient-to-br dark:from-dark-accent-primary/10 dark:via-dark-bg-primary dark:to-dark-accent-secondary/20"
      )}>
        <AnimatedBackground className="opacity-70" />

        <div className="relative z-10 pb-[150px]">
            <FadeInOnScroll threshold={0.2} delay={0}>
            <h2 className="text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2 font-poppins text-center mb-tag-gap
                           text-text-dark dark:text-dark-text-dark">
                My Builds
            </h2>
            <p className="text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter text-center
                          text-text-dark dark:text-dark-text-muted">
                A selection of real-world projects I've designed, built, and shipped.
            </p>
            </FadeInOnScroll>
        </div>

        <CurvedDivider className="text-light-bg-white dark:text-dark-bg-primary" />
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32
                      pb-16 pt-[70px] -mt-[97px] sm:-mt-[97px] md:-mt-[80px] lg:-mt-[80px] 2xl:-mt-[80px] relative z-20">
        <div className="max-w-7xl mx-auto">
          <Tabs
            categories={projectCategories}
            isFilterButtonsOnMobile={true}
            showSortOnDesktop={true}
            maxSelectedCategories={2}
            onFilterCategoryChange={handleCategoryChange}
            onSortOrderChange={handleSortOrderChange}
            onClearFilters={handleClearFilters}
          >
            {() => ( 
                <FadeInOnScroll 
                  key={JSON.stringify(activeCategories) + currentSortOrder} 
                  threshold={0.1} 
                  delay={150}
                >
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
                                gap-[20px] justify-items-center
                                max-w-[1040px] mx-auto"
                  >
                    {filteredAndSortedProjects.map((proj) => (
                      <ProjectCard
                        key={proj.id}
                        project={proj}
                      />
                    ))}
                  </div>
                </FadeInOnScroll>
              )}
          </Tabs>
        </div>
      </div>
    </section>
  );
}