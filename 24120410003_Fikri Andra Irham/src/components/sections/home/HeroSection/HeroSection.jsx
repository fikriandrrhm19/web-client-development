"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Card from '@/components/elements/Card';
import Button from '@/components/elements/Button';
import TypewriterEffect from '@/components/elements/TypewriterEffect';
import CurvedDivider from '@/components/elements/CurvedDivider';
import { Share as ShareIcon, ArrowDown, MoreHorizontal, Github, Linkedin } from 'lucide-react';
import MediumIcon from '../../../../assets/icons/medium.svg';
import clsx from 'clsx';
import AnimatedBackground from '@/components/elements/AnimatedBackground';

const roles = [
  'Technical Support Engineer',
  'Linux & Cloud Enthusiast',
  'Information Systems Student',
  'DevOps Enthusiast',
  'Problem Solver',
  'Documentation Writer',
  'Design Enthusiast',
];

export default function HeroSection({ className }) {
  const [isMobileImageLoaded, setIsMobileImageLoaded] = useState(false);
  const [isDesktopImageLoaded, setIsDesktopImageLoaded] = useState(false);
  useEffect(() => {
  }, []);

  return (
    <section
      id="home"
      className={clsx(
        "relative z-10 flex flex-col items-center justify-center pt-24 pb-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32",
        "min-h-[calc(100vh-80px)]",
        "bg-gradient-to-br from-blue-100 to-purple-100 dark:bg-gradient-to-br dark:from-dark-accent-primary/10 dark:via-dark-bg-primary dark:to-dark-accent-secondary/20",
        "overflow-hidden",
        className
      )}
    >
      <AnimatedBackground />

      <Card
        className={clsx("relative z-30 w-full p-8 md:p-12 lg:p-16",
                   "bg-light-card bg-opacity-80 border-border-color shadow-lg rounded-xl overflow-hidden",
                   "dark:bg-dark-card dark:bg-opacity-80", "dark:border-dark-border-color",
                   "max-w-[1063px] min-h-[451px] flex flex-col justify-center items-center"
                   )}
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:hidden flex items-center justify-center mb-8">
            <div className={clsx(
                "absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full z-0",
                "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/20 to-blue-300/10",
                "dark:from-dark-accent-primary/20 dark:to-accent-secondary/20",
                "filter blur-lg"
            )}></div>
            <Image
                src="/images/hero.webp"
                alt="Fikri Andra Irham"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                className={clsx(
                    "z-10 rounded-full",
                    "transition-opacity duration-500 ease-in",
                    isMobileImageLoaded ? "opacity-100" : "opacity-0"
                )}
                priority={true}
                onLoad={() => setIsMobileImageLoaded(true)}
            />
        </div>

        <div className="w-full flex flex-col items-center md:grid md:grid-cols-3 md:gap-x-4 md:items-center">
            <div className="md:col-span-2 text-center md:text-left pt-10 pb-10 flex flex-col justify-between h-full z-20">
                <div>
                    <h1 className="font-poppins font-bold text-text-dark dark:text-dark-text-dark leading-tight mb-4">
                        <span className="text-h2 md:text-md-h2 lg:text-lg-h2
                        2xl:text-2xl-h2">Hi everyone,</span> <br />
                        <span className="text-h1 md:text-md-h1 lg:text-lg-h1 2xl:text-2xl-h1">I'm <span className="text-accent-primary dark:text-dark-accent-primary">Fikri Andra Irham</span></span>
                    </h1>
                    <p className="text-h3 md:text-md-h3 lg:text-lg-h3 2xl:text-2xl-h3 text-text-muted dark:text-dark-text-muted mb-6">
                        <TypewriterEffect words={roles} className="text-h3 sm:text-h3 lg:text-lg-h3 2xl:text-2xl-h3" />
                    </p>
                </div>
                <div>
                    <div className="flex justify-center md:justify-start items-center space-x-[12px] mb-8">
                        <a href="https://www.linkedin.com/in/fikriandrrhm" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent-primary transition-colors duration-300 dark:text-dark-text-muted dark:hover:text-dark-accent-primary">
                            <Linkedin className="h-[26px] w-[26px]" />
                        </a>
                        <a href="https://github.com/fikriandrrhm19" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent-primary transition-colors duration-300 dark:text-dark-text-muted dark:hover:text-dark-accent-primary">
                            <Github className="h-[26px] w-[26px]" />
                        </a>
                        <a href="https://medium.com/@fikri.andrhm" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent-primary transition-colors duration-300 dark:text-dark-text-muted dark:hover:text-dark-accent-primary">
                            <MediumIcon className="h-[26px] w-[26px]" />
                        </a>
                        <a href="/who-i-am#connect-with-me" className="text-text-dark hover:text-accent-primary transition-colors duration-300 flex items-center space-x-1 dark:text-dark-text-muted dark:hover:text-dark-accent-primary">
                            <MoreHorizontal className="h-[26px] w-[26px]" />
                            <span className="text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m">More</span>
                        </a>
                    </div>
                    <Button onClick={() => window.open('https://portfolio.s3-id-jkt-1.kilatstorage.id/CV-Fikri%20Andra%20Irham.pdf', '_blank')}
                    className="text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m flex items-center space-x-2 w-fit mx-auto md:mx-0
                    bg-accent-primary text-white hover:bg-accent-primary-dark dark:bg-dark-accent-primary dark:hover:bg-dark-accent-primary-dark">
                        <ShareIcon className="h-5 w-5" />
                        <span>View Resume/CV</span>
                    </Button>
                </div>
            </div>

            <div className="hidden md:block absolute bottom-0 right-5 w-[480px] h-[480px] flex items-center justify-center overflow-hidden z-20">
            <div className={clsx(
              "absolute w-[328px] h-[328px] rounded-full z-0 top-[80px]",
              "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-primary/20 to-blue-300/10 right-20",
              "dark:from-dark-accent-primary/20 dark:to-accent-secondary/20",
              "filter blur-lg"
            )}></div>
            <Image
                src="/images/hero.webp"
                alt="Fikri Andra Irham"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                className={clsx(
                    "z-10",
                    "transition-opacity duration-500 ease-in",
                    isDesktopImageLoaded ? "opacity-100" : "opacity-0"
                )}
                priority={true}
                onLoad={() => setIsDesktopImageLoaded(true)} 
            />
            </div>
        </div>
      </Card>

      <div className="absolute bottom-10 left-0 right-0 mx-auto w-12 h-12 flex items-center justify-center z-40">
        <a href="#about" className="block text-accent-primary animate-bounce-fade dark:text-dark-accent-primary">
           <ArrowDown className="h-10 w-10 sm:h-12 sm:w-12" />
        </a>
      </div>

      <CurvedDivider className="text-light-bg-white dark:text-dark-bg-primary" />
    </section>
  );
}