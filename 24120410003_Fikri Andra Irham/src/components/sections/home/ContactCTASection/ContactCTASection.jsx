"use client";

import React from 'react';
import Link from 'next/link';
import Button from '@/components/elements/Button';
import clsx from 'clsx';
import { MessageSquare } from 'lucide-react';
import FadeInOnScroll from '@/components/elements/FadeInOnScroll';

export default function ContactCTASection({ className }) {
  return (
    <section
      id="contact-cta"
      className={clsx(
        "relative z-10 w-full",
        "bg-neutral-700 text-white dark:bg-dark-bg-secondary dark:text-dark-text-dark",
        "py-[45px]",
        "flex items-center justify-center",
        className
      )}
    >
      <div className="text-center max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll threshold={0.2} delay={0}>
          <h2 className={clsx(
            "font-poppins",
            "text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2",
            "leading-tight mb-tag-gap",
            "text-white dark:text-dark-text-dark"
          )}>
            Looking for help with a project?
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll threshold={0.1} delay={150}>
          <p className={clsx(
            "font-inter leading-relaxed",
            "text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph",
            "mb-tag-gap",
            "text-white dark:text-dark-text-muted"
          )}>
            I&apos;m currently open for freelance work, collaboration, or part-time opportunities. Let&apos;s build something great together!
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll threshold={0.1} delay={300}>
          <Link href="/contact" passHref>
            <Button
              className={clsx(
                "text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m",
                "px-6 py-2",
                "flex items-center space-x-2 mx-auto",
                "bg-accent-primary text-white",
                "hover:bg-accent-primary-dark transition-colors duration-300",
                "shadow-md hover:shadow-lg",
                "dark:bg-dark-accent-primary dark:hover:bg-dark-accent-primary-dark"
              )}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Contact Me</span>
            </Button>
          </Link>
        </FadeInOnScroll>
      </div>
    </section>
  );
}