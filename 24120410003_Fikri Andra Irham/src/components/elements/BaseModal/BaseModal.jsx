"use client";

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/20/solid';

export default function BaseModal({
  isOpen,
  onClose,
  title,
  children,
  className,
  overlayClassName,
  hideCloseButton = false,
  disableOverlayClick = false,
}) {
  const modalRef = useRef(null);

  const modalVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: "0%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, y: "100%", transition: { duration: 0.3 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      setTimeout(() => modalRef.current?.focus(), 100); 
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={clsx(
            "fixed inset-0 z-[100] flex items-end justify-center",
            "bg-black/60 dark:bg-black/70",
            overlayClassName
          )}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
          onClick={disableOverlayClick ? undefined : onClose}
        >
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabIndex="-1"
            className={clsx(
              "relative w-full max-w-md h-[80%] rounded-t-2xl shadow-xl p-6 flex flex-col",
              "bg-white dark:bg-dark-bg-secondary", 
              className
            )}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200 dark:border-dark-border-color">
              <h3 id="modal-title" className="text-h4 md:text-md-h4 lg:text-lg-h4 font-poppins text-text-dark dark:text-dark-text-dark">
                {title}
              </h3>
              {!hideCloseButton && (
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-text-muted hover:bg-gray-100 dark:text-dark-text-muted dark:hover:bg-dark-bg-primary"
                  aria-label="Close modal"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              )}
            </div>

            <div className="flex-grow overflow-y-auto pr-2">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}