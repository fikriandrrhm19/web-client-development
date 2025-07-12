"use client";

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { X } from 'lucide-react';

export default function DetailModal({ isOpen, onClose, title, icon: IconComponent, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
      modalRef.current?.focus();
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
    <div
      className={clsx(
        "fixed inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center p-4 z-[100]",
        "transition-opacity duration-300",
        {
          "opacity-100": isOpen,
          "opacity-0": !isOpen,
        }
      )}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex="-1"
        className={clsx(
          "relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-dark-bg-secondary dark:to-dark-bg-primary",
          
          "rounded-xl shadow-2xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto",
          "border border-accent-primary/30 dark:border-dark-accent-primary/30",
          "transform transition-all duration-300 ease-out",
          {
            "scale-100 opacity-100": isOpen,
            "scale-95 opacity-0": !isOpen,
          }
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text-muted dark:text-dark-text-muted hover:text-accent-primary dark:hover:text-dark-accent-primary transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center mb-6">
          <div className={clsx(
            "w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 flex-shrink-0",
            "bg-blue-50 border-accent-primary text-accent-primary",
            "dark:bg-dark-accent-primary/20 dark:border-dark-accent-primary dark:text-dark-accent-primary"
          )}>
            {IconComponent && (
              <IconComponent className="w-8 h-8 md:w-10 h-10" />
            )}
          </div>
          <h2 id="modal-title" className="ml-4 font-poppins font-bold text-xl md:text-2xl text-text-dark dark:text-dark-text-dark">
            {title}
          </h2>
        </div>

        <p className="text-paragraph md:text-md-paragraph font-inter text-text-dark dark:text-dark-text-dark leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}