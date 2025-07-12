"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import MiniCard from '../../MiniCard'; 

const MemoizedMiniCard = React.memo(MiniCard);

export default function MobileAccordionCategory({ category, isOpen, onToggle, items, onItemClick }) {
  const accordionContentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3, ease: "easeInOut" },
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        opacity: { duration: 0.2 },
        height: { duration: 0.3, ease: "easeInOut" }
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } }
  };

  return (
    <div className="mb-4 last:mb-0">
      <button
        onClick={() => onToggle(category.id)}
        className={clsx(
          "w-full flex justify-between items-center p-4 rounded-[10px] border",
          "text-paragraph-m font-medium",
          "hover:bg-light-bg-secondary transition-all duration-200",
          isOpen
            ? 'border-accent-primary shadow-md bg-light-card text-accent-primary dark:border-dark-accent-primary dark:bg-dark-card dark:text-dark-accent-primary'
            : 'border-border-color bg-light-card text-text-dark dark:border-dark-border-color dark:bg-dark-card dark:text-dark-text-dark dark:hover:bg-dark-bg-secondary'
        )}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${category.id}`}
      >
        <span>{category.fullName || category.name}</span>
        <ChevronDownIcon
          className={clsx(
            "h-5 w-5 ml-2 transition-transform duration-200",
            isOpen ? 'rotate-180 text-accent-primary dark:text-dark-accent-primary' : 'rotate-0 text-text-dark dark:text-dark-text-dark'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`accordion-content-${category.id}`}
            variants={accordionContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden rounded-b-lg border border-t-0"
          >
            <motion.div className="grid grid-cols-2 gap-4 p-4 bg-light-bg-primary dark:bg-dark-bg-secondary border-border-color dark:border-dark-border-color">
              {items.map((item) => (
                <motion.div key={item.id} variants={skillItemVariants}>
                  <MemoizedMiniCard
                    icon={item.icon}
                    text={item.name}
                    className="w-full h-[54px] rounded-[10px] px-4 py-2
                                 bg-light-card border border-border-color shadow-sm
                                 hover:shadow-md transition-shadow duration-300
                                 dark:bg-dark-card dark:border-dark-border-color dark:text-dark-text-dark"
                    onClick={() => onItemClick(item)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}