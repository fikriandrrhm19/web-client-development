"use client";

import React, { useMemo } from 'react';
import Tabs from '@/components/elements/Tabs';
import MiniCardWithTooltip from '@/components/elements/MiniCardWithTooltip';
import { skillCategories, skills } from '@/lib/data/skills';
import FadeInOnScroll from '@/components/elements/FadeInOnScroll';
import clsx from 'clsx';

const MemoizedMiniCardWithTooltip = React.memo(MiniCardWithTooltip);

export default function SkillsSection({ className }) {
  return (
    <section
      id="skills"
      className={clsx(
        "relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32",
        "bg-white dark:bg-dark-bg-primary",
        "pb-section-gap",
        className
      )}
    >
      <FadeInOnScroll threshold={0.2} delay={0}>
        <h2 className={clsx(
          "text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2",
          "text-center text-text-dark dark:text-dark-text-dark",
          "mb-header-content font-poppins"
        )}>
          My Skills
        </h2>
      </FadeInOnScroll>

      <div className="max-w-6xl mx-auto">
        <Tabs
          categories={skillCategories}
          defaultCategory="all"
          itemsData={skills}
          maxSelectedCategories={2}
        >
          {(activeCategories) => {
            const filteredSkills = useMemo(() => {
              if (activeCategories.includes('all') || activeCategories.length === 0) {
                return skills;
              } else {
                return skills.filter(
                  (skill) => activeCategories.includes(skill.category)
                );
              }
            }, [activeCategories]);

            return (
              <FadeInOnScroll key={JSON.stringify(activeCategories)} threshold={0.1} delay={150}>
                <div
                  className="hidden md-tab:grid
                             md-tab:grid-cols-4   xl:grid-cols-4
                             md-tab:gap-5
                             justify-items-center
                             max-w-[925px] mx-auto"
                >
                  {filteredSkills.map((skill) => (
                    <MemoizedMiniCardWithTooltip
                      key={skill.id}
                      icon={skill.icon}
                      text={skill.name}
                      description={skill.description}
                    />
                  ))}
                </div>

                <div className="md-tab:hidden">
                </div>
              </FadeInOnScroll>
            );
          }}
        </Tabs>
      </div>
    </section>
  );
}