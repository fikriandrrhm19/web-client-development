import React from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import MediumIcon from '../../../assets/icons/medium.svg';

export default function Footer({ className }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className={clsx(
        "relative w-full overflow-hidden",
        "bg-neutral-700 text-white dark:bg-dark-bg-secondary dark:text-dark-text-dark",
        className
      )}
      aria-label="Website Footer"
    >
      <div
        className={clsx(
          "relative flex flex-col justify-between z-20",
          "pt-10 pb-5",
          "max-w-7xl mx-auto w-full px-8"
        )}
      >
        <div
          className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-6"
        >
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
            <h3 className="text-card-header md:text-md-card-header lg:text-lg-card-header 2xl:text-2xl-card-header font-poppins">
              FIKRI ANDRA IRHAM.
            </h3>
            <p className="text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter leading-relaxed">
              Crafting real-world tech solutions with real impact.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="https://www.linkedin.com/in/fikriandrrhm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300
                         dark:text-dark-text-dark dark:hover:text-dark-accent-primary"
              aria-label="LinkedIn profile of Fikri Andra Irham"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="https://github.com/fikriandrrhm19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300
                         dark:text-dark-text-dark dark:hover:text-dark-accent-primary"
              aria-label="GitHub profile of Fikri Andra Irham"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://medium.com/@fikri.andrhm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors duration-300
                         dark:text-dark-text-dark dark:hover:text-dark-accent-primary"
              aria-label="Medium blog of Fikri Andra Irham"
            >
              <MediumIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <hr className="w-full border-t border-gray-500 mt-6 mb-4 dark:border-dark-border-color" />

        <div className="text-center text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip
                        font-inter text-gray-400 dark:text-dark-text-muted">
          © {currentYear} All rights reserved.
        </div>
      </div>
    </footer>
  );
}