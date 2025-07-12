"use client";

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { CheckCircle, XCircle, X } from 'lucide-react';

export default function StatusMessageModal({ isOpen, message, type, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen && !modalRef.current) return null;

  const isSuccess = type === 'success';

  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center z-[9999]",
        "bg-black bg-opacity-50 backdrop-blur-sm",
        "transition-opacity duration-300 ease-out",
        {
          "opacity-100 pointer-events-auto": isOpen,
          "opacity-0 pointer-events-none": !isOpen,
        }
      )}
    >
      <div
        ref={modalRef}
        className={clsx(
          "relative p-8 rounded-lg shadow-2xl max-w-sm w-full mx-4",
          "transform transition-all duration-300 ease-out",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0",
          "dark:border dark:border-dark-border-color",

          isSuccess
            ? "bg-white dark:bg-dark-card border border-green-500"
            : "bg-white dark:bg-dark-card border border-red-500",
        )}
        aria-modal="true"
        role="dialog"
      >
        <button
          onClick={onClose}
          className={clsx(
            "absolute top-3 right-3 p-1 rounded-full",
            "text-gray-500 dark:text-gray-400",
            "bg-gray-100 dark:bg-dark-bg-secondary",
            "hover:bg-gray-200 dark:hover:bg-dark-bg-secondary-hover",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 dark:focus:ring-dark-accent-primary"
          )}
          aria-label="Close message"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center mb-4">
          {isSuccess ? (
            <CheckCircle className="w-12 h-12 text-green-500" />
          ) : (
            <XCircle className="w-12 h-12 text-red-500" />
          )}
        </div>

        <p className={clsx(
          "text-center text-lg font-medium",
          "text-text-dark dark:text-dark-text-dark"
        )}>
          {message}
        </p>
      </div>
    </div>
  );
}