"use client";

import React from 'react';
import clsx from 'clsx';

import Tabs from '@/components/elements/Tabs';
import CertificateCard from '@/components/elements/CertificateCard';
import FadeInOnScroll from '@/components/elements/FadeInOnScroll';
import AnimatedBackground from '@/components/elements/AnimatedBackground';
import CurvedDivider from '@/components/elements/CurvedDivider';
import { certificateCategories } from '@/lib/data/certificates';
import useCertificateFilters from '@/hooks/useCertificateFilters'; 

export default function CertificatesSection({ className }) {
  const {
    activeCategories,
    sortOrder,
    filteredAndSortedCertificates,
    setActiveCategories,
    setSortOrder,
    handleClearFilters,
  } = useCertificateFilters();

  return (
    <section
      id="certificates"
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
              My Tech Certifications
            </h2>
            <p className="text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter text-center
                          text-text-dark dark:text-dark-text-muted">
              A collection of skills I've developed and got certified for.
            </p>
          </FadeInOnScroll>
        </div>

        <CurvedDivider className="text-white dark:text-dark-bg-primary" />
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32
                      pb-16 pt-[70px] -mt-[97px] sm:-mt-[97px] md:-mt-[80px] lg:-mt-[80px] 2xl:-mt-[80px] relative z-20">
        <div className="max-w-7xl mx-auto">
          <Tabs
            categories={certificateCategories}
            isFilterButtonsOnMobile={true}
            showSortOnDesktop={true}
            maxSelectedCategories={2}
            onFilterCategoryChange={setActiveCategories}
            onSortOrderChange={setSortOrder}
            onClearFilters={handleClearFilters}
            activeCategories={activeCategories}
            sortOrder={sortOrder}
          >
            {() => (
              <FadeInOnScroll key={JSON.stringify(activeCategories) + sortOrder} threshold={0.1} delay={150}>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                             gap-[20px] justify-items-center
                             max-w-[1250px] mx-auto"
                >
                  {filteredAndSortedCertificates.map((cert) => (
                    <CertificateCard
                      key={cert.id}
                      certificate={cert}
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
