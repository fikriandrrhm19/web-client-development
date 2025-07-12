"use client";

import React from 'react';
import clsx from 'clsx';

import FadeInOnScroll from '@/components/elements/FadeInOnScroll';
import AnimatedBackground from '@/components/elements/AnimatedBackground';
import ContactForm from '@/components/elements/ContactForm';

export default function ContactSection({ className }) {
  return (
    <section
      id="contact"
      className={clsx(
        "relative z-10",
        "pt-24 2xl:pt-[140px] pb-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32",
        "bg-gradient-to-br from-blue-50 to-pink-50 overflow-hidden",
        "dark:bg-gradient-to-br dark:from-dark-accent-primary/10 dark:via-dark-bg-secondary dark:to-dark-accent-secondary/20",
        className
      )}
      data-footer-wave-color="fill-neutral-700 dark:fill-dark-bg-primary"
    >
      <AnimatedBackground className="opacity-70" />

      <FadeInOnScroll threshold={0.2} delay={0}>
        <h2 className="text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2 font-poppins text-center mb-tag-gap
                       text-text-dark dark:text-dark-text-dark">
          Get in Touch
        </h2>
        <p className="text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter text-center mb-header-content max-w-2xl mx-auto
                      text-text-dark dark:text-dark-text-muted">
          Open for collaboration, projects, or a quick chat. Drop me a message below.
        </p>
      </FadeInOnScroll>

      <FadeInOnScroll threshold={0.1} delay={150}>
        <ContactForm />
      </FadeInOnScroll>
    </section>
  );
}