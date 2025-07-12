"use client";

import React, { useState } from 'react';
import clsx from 'clsx';

import SlideInOnScroll from '@/components/elements/SlideInOnScroll';
import FeatureCard from '@/components/elements/FeatureCard';
import DetailModal from '@/components/elements/DetailModal';
import FadeInOnScroll from '@/components/elements/FadeInOnScroll';
import AnimatedBackground from '@/components/elements/AnimatedBackground';
import { whoIAmHeroCardsData } from '@/lib/data/whoIAmHeroCards';

export default function WhoIAmHeroSection({ className }) {
  const [modalData, setModalData] = useState(null);

  const handlePointClick = (data) => {
    setModalData(data);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  return (
    <section
      id="who-i-am-hero"
      className={clsx(
        "relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-8 md:px-16 lg:px-24 xl:px-32 overflow-hidden",
        "bg-gradient-to-br from-blue-50 to-purple-50",
        "dark:bg-gradient-to-br dark:from-dark-accent-primary/10 dark:via-dark-bg-primary dark:to-dark-accent-secondary/20",
        className
      )}
    >
      <AnimatedBackground />

      <div className="absolute inset-0 bg-pattern-light dark:bg-pattern-dark opacity-10 z-0"></div>

      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-extrabold text-accent-primary/5 dark:text-dark-accent-primary/5 select-none blur-sm z-0 pointer-events-none">GROWTH</div>


      <FadeInOnScroll threshold={0.1} delay={0}>
        <h1 className="font-bold text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2 font-poppins text-center mb-4 leading-tight max-w-4xl mx-auto z-10
                       text-text-dark dark:text-dark-text-dark">
          <span className="text-accent-primary dark:text-dark-accent-primary">My Journey</span> & <span className="text-accent-primary dark:text-dark-accent-primary">Passions</span>.
        </h1>
      </FadeInOnScroll>

      <FadeInOnScroll threshold={0.1} delay={200}>
        <p className="text-center text-paragraph md:text-md-paragraph lg:text-lg-paragraph text-text-muted dark:text-dark-text-muted max-w-3xl mx-auto mb-header-content z-10">
          From curious beginnings to a continuous quest for knowledge and impact.
        </p>
      </FadeInOnScroll>

      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 py-8 z-10">
        {whoIAmHeroCardsData.map((data, index) => (
          <SlideInOnScroll key={index} threshold={0.1} delay={100 + index * 100}
            className="flex justify-center"
          >
            <FeatureCard
              title={data.title}
              icon={data.icon}
              onClick={() => handlePointClick(data)}
            />
          </SlideInOnScroll>
        ))}
      </div>

      <DetailModal
        isOpen={!!modalData}
        onClose={handleCloseModal}
        title={modalData?.title}
        icon={modalData?.icon}
      >
        {modalData?.paragraph}
      </DetailModal>
    </section>
  );
}