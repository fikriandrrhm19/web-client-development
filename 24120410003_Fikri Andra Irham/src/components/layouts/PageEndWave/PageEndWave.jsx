"use client";

import React from 'react';
import clsx from 'clsx';
import FooterWaveTop from '../FooterWaveTop';
export default function PageEndWave({ prevSectionBgClass, className }) {
  return (
    <section
      id="page-end-wave"
      className={clsx(
        "relative w-full h-[85px] overflow-hidden",
        prevSectionBgClass,
        className
      )}
      aria-hidden="true"
    >

      <FooterWaveTop fillColor="fill-neutral-700 dark:fill-dark-bg-secondary" />
    </section>
  );
}