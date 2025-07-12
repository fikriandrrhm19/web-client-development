"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';

import { education } from '@/lib/data/education';
import EducationCard from '@/components/elements/EducationCard';
import FadeInOnScroll from '@/components/elements/FadeInOnScroll';

export default function EducationSection({ className }) {
  const MARKER_SIZE = 24;
  const TIMELINE_LINE_WIDTH = 3;

  const timelineRef = useRef(null);
  const cardRefs = useRef(new Map());
  const [markerPositions, setMarkerPositions] = useState([]);

  const calculateMarkerPositions = useCallback(() => {
    if (!timelineRef.current) return;

    const timelineRect = timelineRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    const positions = education.map((edu, index) => {
      const key = edu.id || index;
      const cardElement = cardRefs.current.get(key);
      if (cardElement) {
        const cardRect = cardElement.getBoundingClientRect();

        const cardTopRelativeToDocument = cardRect.top + scrollTop;
        const timelineTopRelativeToDocument = timelineRect.top + scrollTop;

        const top = (cardTopRelativeToDocument - timelineTopRelativeToDocument);
        return top;
      }
      return null;
    });

    setMarkerPositions(positions.filter(pos => pos !== null && pos >= 0));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      calculateMarkerPositions();
    }, 100);
    return () => clearTimeout(timer);
  }, [calculateMarkerPositions]);

  useEffect(() => {
    window.addEventListener('resize', calculateMarkerPositions);
    window.addEventListener('scroll', calculateMarkerPositions, { passive: true });
    calculateMarkerPositions();
    return () => {
      window.removeEventListener('resize', calculateMarkerPositions);
      window.removeEventListener('scroll', calculateMarkerPositions);
    };
  }, [calculateMarkerPositions]);

  const GAP_X_VALUE = 'gap-x-1';

  return (
    <section
      id="education"
      className={clsx("relative z-10 px-4 sm:px-8 py-section-gap bg-white",
        "dark:bg-dark-bg-primary", className)}
    >
      <FadeInOnScroll threshold={0.2} delay={0}>
        <h2 className="text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2 font-poppins text-center text-text-dark mb-header-content dark:text-dark-text-dark">
          Education
        </h2>
      </FadeInOnScroll>

      <div ref={timelineRef} className="relative mx-auto w-full max-w-screen-xl flex justify-center">
        <div className={clsx("relative flex items-start", GAP_X_VALUE)}>

            <div className="relative h-full flex-shrink-0" style={{ width: `${MARKER_SIZE}px` }}>
                <div
                    className="absolute top-0 h-full w-[3px] bg-gray-200 dark:bg-gray-700"
                    style={{ left: `${MARKER_SIZE / 2 - TIMELINE_LINE_WIDTH / 2}px` }}
                ></div>

                {markerPositions.map((top, index) => (
                    <div
                        key={`marker-${index}`}
                        className="absolute w-6 h-6 rounded-full bg-accent-primary border-4 border-white shadow-md z-10 animate-glow dark:border-dark-bg-secondary dark:bg-dark-accent-primary"
                        style={{
                            top: `${top}px`,
                            left: `0px`
                        }}
                    ></div>
                ))}
            </div>

            <div className="space-y-12 min-w-0">
                {education.map((edu, index) => (
                    <FadeInOnScroll key={edu.id || index} threshold={0.1} delay={index * 150}>
                        <div className="w-full flex items-center justify-start">
                            <div className="w-full max-w-[902px]">
                                <EducationCard
                                    education={edu}
                                    ref={el => {
                                        const key = edu.id || index;
                                        if (el) cardRefs.current.set(key, el);
                                        else cardRefs.current.delete(key);
                                    }}
                                />
                            </div>
                        </div>
                    </FadeInOnScroll>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}