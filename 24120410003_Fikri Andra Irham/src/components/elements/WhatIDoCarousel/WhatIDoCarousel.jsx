"use client";

import React, { useRef, useEffect, useState, useCallback } from 'react';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

import WhatIDoCard from '@/components/elements/WhatIDoCard';
import SlideHint from '@/components/elements/SlideHint';

const Slider = dynamic(() => import('react-slick'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-48 text-text-muted dark:text-dark-text-muted">
      Loading content...
    </div>
  ),
});

const getSlidesToShowBasedOnWidth = (width = typeof window !== 'undefined' ? window.innerWidth : 1024) => {
  if (width < 640) return 1;
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 2;
};

export default function WhatIDoCarousel({ data, sectionRef }) {
  const sliderRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [showSlideMoreHint, setShowSlideMoreHint] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [hasHintBeenShownAutomatically, setHasHintBeenShownAutomatically] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSlidesToShow, setActiveSlidesToShow] = useState(getSlidesToShowBasedOnWidth());

  const hideHintTimeoutRef = useRef(null);
  const autoShowHintTimeoutRef = useRef(null);

  const clearHintTimer = useCallback(() => {
    if (hideHintTimeoutRef.current) {
      clearTimeout(hideHintTimeoutRef.current);
      hideHintTimeoutRef.current = null;
    }
  }, []);

  const displayHint = useCallback(() => {
    if (!hasUserInteracted) {
      setShowSlideMoreHint(true);
      clearHintTimer();
      hideHintTimeoutRef.current = setTimeout(() => {
        setShowSlideMoreHint(false);
      }, 3000);
    }
  }, [hasUserInteracted, clearHintTimer]);

  useEffect(() => {
    setIsClient(true);
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
      clearHintTimer();
      if (autoShowHintTimeoutRef.current) {
        clearTimeout(autoShowHintTimeoutRef.current);
      }
    };
  }, [clearHintTimer]);

  useEffect(() => {
    const shouldObserve = isClient && sectionRef.current && isMobile && 
                         !hasHintBeenShownAutomatically && !hasUserInteracted && 
                         data && data.length > activeSlidesToShow;

    if (!shouldObserve) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasHintBeenShownAutomatically && !hasUserInteracted) {
          autoShowHintTimeoutRef.current = setTimeout(() => {
            displayHint();
            setHasHintBeenShownAutomatically(true);
          }, 1000);
        } else if (!entry.isIntersecting) {
            if (autoShowHintTimeoutRef.current) {
              clearTimeout(autoShowHintTimeoutRef.current);
              autoShowHintTimeoutRef.current = null;
            }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2,
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isClient, isMobile, hasHintBeenShownAutomatically, hasUserInteracted, displayHint, data, sectionRef, activeSlidesToShow]);

  useEffect(() => {
    const updateSlidesToShow = () => {
      setActiveSlidesToShow(getSlidesToShowBasedOnWidth());
    };

    if (isClient) {
      updateSlidesToShow();
      window.addEventListener('resize', updateSlidesToShow);
    }

    return () => {
      if (isClient) {
        window.removeEventListener('resize', updateSlidesToShow);
      }
    };
  }, [isClient]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlideIndex(newIndex);
      if (!hasUserInteracted) {
        setShowSlideMoreHint(false);
        setHasUserInteracted(true);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 7000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 7000,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 7000,
          pauseOnHover: true,
        }
      }
    ],
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      clearHintTimer();
      if (isClient && data && data.length > getSlidesToShowBasedOnWidth() && !hasUserInteracted) {
        setShowSlideMoreHint(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      if (showSlideMoreHint) {
        hideHintTimeoutRef.current = setTimeout(() => {
          setShowSlideMoreHint(false);
        }, 1500);
      }
    }
  };

  return (
    <div className="relative mx-auto max-w-screen-lg">
      {isClient && Array.isArray(data) && data.length > 0 ? (
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Slider ref={sliderRef} {...settings}>
            {data.map((item, index) => (
              <div key={item.id} className="p-2">
                <WhatIDoCard
                  data={item}
                  isActive={
                    isClient && index >= currentSlideIndex && index < currentSlideIndex + activeSlidesToShow
                  }
                />
              </div>
            ))}
          </Slider>

          {isClient && (data && data.length > getSlidesToShowBasedOnWidth()) && (
            <SlideHint show={showSlideMoreHint} />
          )}
        </div>
      ) : (
        <div className="text-center text-text-muted dark:text-dark-text-muted mt-8">
          {isClient && (!data || data.length === 0) ? (
            "No services or skills to display yet. Please add content to 'whatIDo' data."
          ) : (
            "Preparing content..."
          )}
        </div>
      )}
    </div>
  );
}