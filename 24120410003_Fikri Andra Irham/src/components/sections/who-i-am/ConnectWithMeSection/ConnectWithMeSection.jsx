"use client";

import React from 'react';
import clsx from 'clsx';

import MiniCardWithTooltip from '@/components/elements/MiniCardWithTooltip';
import FadeInOnScroll from '@/components/elements/FadeInOnScroll';
import { socialLinks, socialIcons } from '@/lib/data/socialLinks';

const MemoizedMiniCardWithTooltip = React.memo(MiniCardWithTooltip);

export default function ConnectWithMeSection({ className }) {
  return (
    <section
      id="connect-with-me"
      className={clsx(
        "relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pb-section-gap bg-white dark:bg-dark-bg-primary",
        className
      )}
    >
      <FadeInOnScroll threshold={0.2} delay={0}>
        <h2 className="text-h2 text-center mb-header-content text-text-dark dark:text-dark-text-dark">
          Connect With Me
        </h2>
      </FadeInOnScroll>

      <FadeInOnScroll threshold={0.1} delay={150}>
        <div
          className="grid grid-cols-2
                      gap-4
                      justify-items-center
                      max-w-[925px] mx-auto
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4
                      sm:gap-y-5 sm:gap-x-4 md:gap-y-[20px] md:gap-x-[15px]"
        >
          {socialLinks.map((link) => {
            const IconComponent = socialIcons[link.icon];
            return (
              <MemoizedMiniCardWithTooltip
                key={link.id}
                icon={IconComponent}
                text={link.name}
                href={link.href}
              />
            );
          })}
        </div>
      </FadeInOnScroll>
    </section>
  );
}