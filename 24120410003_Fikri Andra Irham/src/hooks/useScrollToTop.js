import { useState, useEffect, useCallback } from 'react';

export function useScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const [scrollThreshold, setScrollThreshold] = useState(0);

  useEffect(() => {
    const calculateThreshold = () => {
      setScrollThreshold(window.innerHeight * 0.5);
    };

    calculateThreshold();

    window.addEventListener('resize', calculateThreshold);

    return () => {
      window.removeEventListener('resize', calculateThreshold);
    };
  }, []);

  const handleScroll = useCallback(() => {
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollThreshold]);

  useEffect(() => {
    if (scrollThreshold > 0) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, scrollThreshold]); 

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return { isVisible, scrollToTop };
}