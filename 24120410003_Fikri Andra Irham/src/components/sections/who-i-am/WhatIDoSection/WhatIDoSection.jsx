"use client";

import React, { useRef } from 'react';
import clsx from 'clsx';

import FadeInOnScroll from '@/components/elements/FadeInOnScroll';
import WhatIDoCarousel from '@/components/elements/WhatIDoCarousel';
import { whatIDo } from '@/lib/data/whatIDo';

export default function WhatIDoSection({ className }) {
  const sectionRef = useRef(null);

  return (
    <section
      id="what-i-do"
      ref={sectionRef}
      className={clsx(
        "relative z-10 px-4 sm:px-8 pb-section-gap bg-white",
        "dark:bg-dark-bg-primary",
        className
      )}
    >
      <FadeInOnScroll threshold={0.2} delay={0}>
        <h2 className="text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2 font-poppins text-center mb-header-content
          text-text-dark dark:text-dark-text-dark">
          What I Do?
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll threshold={0.1} delay={100}>
        <WhatIDoCarousel data={whatIDo} sectionRef={sectionRef} />
      </FadeInOnScroll>
    </section>
  );
}