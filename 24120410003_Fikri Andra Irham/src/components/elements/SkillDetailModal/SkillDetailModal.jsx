"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function SkillDetailModal({ isOpen, onClose, skill }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  if (!isOpen || !skill) {
    return null;
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  const modalVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { y: "100%", opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && ( 
        <motion.div
          className={clsx(
            "fixed inset-0 z-[1000] flex items-end justify-center p-4",
            "md:items-center md:p-8",
            "bg-black bg-opacity-50"
          )}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className={clsx(
              "w-full max-w-md rounded-lg shadow-xl p-6 relative",
              "transform origin-bottom md:origin-center",
              "bg-white dark:bg-dark-card"
            )}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className={clsx(
                "absolute top-3 right-3 p-1 rounded-full shadow-sm",
                "bg-gray-100 hover:bg-gray-200 text-text-dark",
                "dark:bg-dark-bg-secondary dark:hover:bg-dark-bg-secondary-hover dark:text-dark-text-dark",
                "focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 dark:focus:ring-dark-accent-primary"
              )}
              aria-label="Close modal"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="flex flex-col items-center text-center mb-4">
              {skill.icon && <skill.icon className="h-12 w-12 text-accent-primary dark:text-dark-accent-primary mb-3" />}
              <h3 className="text-card-header md:text-md-card-header lg:text-lg-card-header 2xl:text-2xl-card-header font-poppins font-bold
                             text-text-dark dark:text-dark-text-dark">
                {skill.name}
              </h3>
            </div>
            {skill.description && (
              <p className="text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter leading-relaxed
                            text-text-muted dark:text-dark-text-muted">
                {skill.description}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}