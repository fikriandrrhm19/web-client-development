"use client";

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { FunnelIcon, CalendarDaysIcon } from '@heroicons/react/20/solid';

export default function DropdownFilter({ value, onChange, options, type, showIcon = true, className }) {
  const sortDropdownVariants = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delay: 0.1
      }
    }
  };

  const IconComponent = type === 'category' ? FunnelIcon : CalendarDaysIcon;

  return (
    <motion.div
      className={clsx("relative", className)}
      variants={sortDropdownVariants}
      initial="hidden"
      animate="visible"
    >
      <select
        value={value}
        onChange={onChange}
        className={clsx(
          "appearance-none border",
          "rounded-[50px] py-[9px] pl-[18px] pr-8",
          "text-paragraph-m font-inter",
          "focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary cursor-pointer",
          "transition-all duration-300 ease-in-out",
          "bg-white text-text-muted border-gray-300 hover:border-accent-primary hover:text-accent-primary",
          "dark:bg-dark-bg-secondary dark:text-dark-text-muted dark:border-dark-border-color dark:hover:border-dark-accent-primary dark:hover:text-dark-accent-primary"
        )}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {showIcon && (
        <IconComponent className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none dark:text-dark-text-muted" />
      )}
    </motion.div>
  );
}