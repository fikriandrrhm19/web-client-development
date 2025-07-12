"use client";

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import clsx from 'clsx';
import { X as CloseIcon } from 'lucide-react';

export default function ImageLightbox({ isOpen, onClose, src, alt }) {
  const lightboxContentRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e) => {
      if (isOpen && lightboxContentRef.current && !lightboxContentRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; 
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset'; 
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className={clsx(
        "fixed inset-0 flex items-center justify-center z-50 p-4",
        "transition-opacity duration-300 ease-in-out",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.2)' }}
    >
      <div
        ref={lightboxContentRef}
        className="relative bg-white dark:bg-dark-card rounded-lg shadow-xl overflow-hidden"
        style={{ maxWidth: '80vw', maxHeight: '80vh', width: 'auto', height: 'auto' }}
      >
        <Image
          src={src}
          alt={alt}
          width={1200} 
          height={800} 
          className="object-contain w-full h-full"
          priority={true}
          sizes="80vw"
        />

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 rounded-full p-2
                     hover:bg-opacity-100 dark:hover:bg-opacity-100 transition-colors duration-200 shadow-md"
          aria-label="Close full image preview"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
      </div>
    </div>,
    document.body
  );
}