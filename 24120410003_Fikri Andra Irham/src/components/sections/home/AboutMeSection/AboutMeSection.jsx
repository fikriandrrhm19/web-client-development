"use client";

import React from 'react';
import Link from 'next/link';
import Card from '@/components/elements/Card';
import Button from '@/components/elements/Button';
import FadeInOnScroll from '@/components/elements/FadeInOnScroll';
import clsx from 'clsx';

export default function AboutMeSection({ className }) {
  return (
    <section
      id="about"
      className={clsx(
        "relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32",
        "bg-white dark:bg-dark-bg-primary",
        "py-section-gap",
        className
      )}
    >
      <FadeInOnScroll threshold={0.2} delay={0}>
        <h2 className={clsx(
          "text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2",
          "text-center text-text-dark dark:text-dark-text-dark",
          "mb-header-content font-poppins"
        )}>
          Short Bio About Me
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll threshold={0.1} delay={150}>
        <Card
          className="max-w-[849px] mx-auto p-6 sm:p-8 md:p-10 lg:p-12 text-center
                     bg-light-card dark:bg-dark-card"
        >
          <p className={clsx(
            "text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph",
            "leading-relaxed mb-tag-gap",
            "text-text-dark dark:text-dark-text-dark"
          )}>
            I'm a <span className="font-bold text-accent-primary dark:text-dark-accent-primary">tech enthusiast</span> and <span className="font-bold text-accent-primary dark:text-dark-accent-primary">problem solver</span> with a solid background in <span className="font-bold text-accent-primary dark:text-dark-accent-primary">server and website management</span>. I thrive on handling technical tasks from system configuration to performance optimization, and I'm also an <span className="font-bold text-bold text-accent-primary dark:text-dark-accent-primary">active technical writer</span>, dedicated to creating clear and accessible documentation.
          </p>

          <p className={clsx(
            "text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph",
            "leading-relaxed mb-tag-gap",
            "text-text-dark dark:text-dark-text-dark"
          )}>
            My interests also span <span className="font-bold text-accent-primary dark:text-dark-accent-primary">front-end development</span>, focusing on modern, responsive interfaces, and I'm currently deepening my expertise in <span className="font-bold text-accent-primary dark:text-dark-accent-primary">containerization technologies</span> like Docker. For me, technology is about simplifying problems and delivering meaningful digital solutions.
          </p>

          <Link href="/who-i-am" passHref>
            <Button
              className={clsx(
                "text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m",
                "flex items-center space-x-2 px-6 py-3 sm:px-8 sm:py-4 mx-auto",
                "bg-accent-primary text-white hover:bg-accent-primary-dark dark:bg-dark-accent-primary dark:hover:bg-dark-accent-primary-dark"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              <span>See more about me</span>
            </Button>
          </Link>
        </Card>
      </FadeInOnScroll>
    </section>
  );
}