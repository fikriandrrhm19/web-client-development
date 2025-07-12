"use client";

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function DesktopNavLinks({ navItems, isActiveLink }) {
  return (
    <ul className="hidden lg-nav:flex flex-1 justify-center space-x-[5px] items-center h-full">
      {navItems.map((item) => {
        const normalizedHref = item.href === '' ? '/' : `/${item.href}`;
        const isActive = isActiveLink(item.href);
        const IconComponent = item.icon;

        return (
          <li key={item.name}>
            <Link
              href={normalizedHref}
              className={clsx(
                "flex items-center space-x-[5px] py-2 px-4 rounded-md",
                "font-inter font-normal transition duration-300",
                "text-paragraph md:textd-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter",
                isActive
                  ? 'text-accent-primary font-bold bg-accent-primary/10 dark:bg-dark-accent-primary/20'
                  : 'text-text-dark hover:text-accent-primary hover:bg-light-bg-secondary dark:text-dark-text-muted dark:hover:text-dark-accent-primary dark:hover:bg-dark-bg-secondary'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <IconComponent className="h-6 w-6" />
              <span>{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}