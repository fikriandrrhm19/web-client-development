"use client";

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Github, Linkedin, Book } from 'lucide-react';

export default function MobileNavMenu({ isOpen, navItems, isActiveLink, onLinkClick }) {
  return (
    <div
      className={clsx(
        "lg-nav:hidden",
        "flex flex-col items-center justify-start p-8 pt-0",
        "bg-light-card dark:bg-dark-bg-navbar-dark",
        "transition-all duration-300 ease-in-out",
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      )}
    >
      <ul className="flex flex-col space-y-6 w-full text-center">
        {navItems.map((item, index) => {
          const normalizedHref = item.href === '' ? '/' : `/${item.href}`;
          const isActive = isActiveLink(item.href);
          const IconComponent = item.icon;

          return (
            <li key={item.name} className="w-full">
              <Link
                href={normalizedHref}
                onClick={onLinkClick}
                className={clsx(
                  "flex items-center justify-center space-x-4 font-poppins font-medium transition duration-300 py-3 rounded-lg",
                  "w-full",
                  "text-lg sm:text-xl",
                  isActive
                    ? 'text-accent-primary font-bold bg-accent-primary/10 dark:bg-dark-accent-primary/20'
                    : 'text-text-dark hover:text-accent-primary hover:bg-light-bg-secondary dark:text-dark-text-muted dark:hover:text-dark-accent-primary dark:hover:bg-dark-bg-secondary',
                  isOpen ? `animate-fade-in` : '',
                  isOpen ? `animation-delay-${index * 100}` : '' 
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                <IconComponent className="h-7 w-7" />
                <span>{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-center space-x-6 mt-8 pt-6 border-t border-gray-200 dark:border-dark-border-color w-full">
        <a href="https://linkedin.com/in/fikriandrrhm" target="_blank" rel="noopener noreferrer"
           className="text-text-dark hover:text-accent-primary transition-colors duration-300 dark:text-dark-text-muted dark:hover:text-dark-accent-primary"
           aria-label="LinkedIn profile">
          <Linkedin className="h-7 w-7" />
        </a>
        <a href="https://github.com/fikriandrrhm" target="_blank" rel="noopener noreferrer"
           className="text-text-dark hover:text-accent-primary transition-colors duration-300 dark:text-dark-text-muted dark:hover:text-dark-accent-primary"
           aria-label="GitHub profile">
          <Github className="h-7 w-7" />
        </a>
        <a href="https://medium.com/@your_medium_username" target="_blank" rel="noopener noreferrer"
           className="text-text-dark hover:text-accent-primary transition-colors duration-300 dark:text-dark-text-muted dark:hover:text-dark-accent-primary"
           aria-label="Medium blog">
          <Book className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
}