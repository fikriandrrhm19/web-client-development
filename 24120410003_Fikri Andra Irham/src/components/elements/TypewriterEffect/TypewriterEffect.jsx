"use client";

import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';

const TypewriterEffect = ({ words, typingSpeed = 35, delayAfterType = 1600 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0); 
  const [blink, setBlink] = useState(true);
  const [showHighlight, setShowHighlight] = useState(false); 

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!words || words.length === 0 || !words[index]) {
      setIndex(0);
      setSubIndex(0);
      setShowHighlight(false);
      return;
    }

    const currentWord = words[index];

    if (subIndex === currentWord.length) {
      setShowHighlight(true);

      const highlightTimeout = setTimeout(() => {
        setShowHighlight(false);
      }, 300);

      const nextWordTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setSubIndex(0);
      }, delayAfterType);

      return () => {
        clearTimeout(highlightTimeout);
        clearTimeout(nextWordTimeout);
      };
    }

    const typingTimeout = setTimeout(() => {
      setSubIndex((prev) => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [subIndex, index, words, typingSpeed, delayAfterType]);

  if (!words || words.length === 0) {
    return null;
  }

  const displayWord = words[index] ? words[index].substring(0, subIndex) : '';

  return (
    <span className="font-semibold text-accent-primary dark:text-dark-accent-primary">
      <span className={clsx(
        "inline-block",
        showHighlight && 'animate-word-flash'
      )}>
        {displayWord}
      </span>
      <span className={clsx(
        "border-r-2 border-accent-primary dark:border-dark-accent-primary ml-1 align-middle",
        blink ? 'opacity-100' : 'opacity-0',
        "transition-opacity duration-300",
        "animate-cursor-pulse"
      )}>&nbsp;</span>
    </span>
  );
};

export default TypewriterEffect;