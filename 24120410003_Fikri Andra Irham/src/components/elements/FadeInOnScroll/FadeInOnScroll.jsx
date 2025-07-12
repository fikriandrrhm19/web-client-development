"use client";

import React, { useState, useEffect } from 'react'; 
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

export default function FadeInOnScroll({ children, threshold = 0.1, triggerOnce = true, delay = 0, className }) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView && !shouldAnimate) {
      const timeout = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [inView, shouldAnimate, delay]); 

  return (
    <div
      ref={ref}
      className={clsx(
        `transition-all duration-700 ease-out overflow-visible`,
        shouldAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className
      )}
    >
      {children}
    </div>
  );
}