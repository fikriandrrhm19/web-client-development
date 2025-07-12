// src/components/elements/Button/Button.jsx
import React from 'react';
import clsx from 'clsx';

export default function Button({
  children,
  className,
  isLoading = false,
  disabled = false,
  type = 'button',
  ...otherProps
}) {
  const isDisabled = isLoading || disabled;

  return (
    <button
      type={type}
      className={clsx(
        `
        relative overflow-hidden
        py-3 px-6 rounded-full shadow-md
        font-poppins font-medium
        transition-all duration-300 ease-in-out

        bg-accent-primary text-white
        dark:bg-dark-accent-primary dark:text-dark-bg-primary
        
        hover:shadow-lg hover:brightness-95
        hover:ring-2 hover:ring-accent-primary/50 hover:ring-offset-2
        dark:hover:ring-dark-accent-primary/50 dark:hover:ring-offset-dark-bg-primary
        
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50
        dark:focus:ring-dark-accent-primary dark:focus:ring-opacity-50
        
        group
        `,
        isDisabled && 'opacity-75 cursor-not-allowed',
        className
      )}
      disabled={isDisabled}
      {...otherProps}
    >
      <span
        className="
          absolute top-0 left-0 w-full h-full block
          bg-gradient-to-r from-transparent via-white/50 to-transparent
          dark:via-white/20
          transform -translate-x-full
          transition-transform duration-700 ease-out
          group-hover:translate-x-full
          group-hover:duration-[800ms]
          group-hover:ease-in
        "
        // Style untuk shimmer tidak berubah, sesuai permintaan
      ></span>

      <span
        className="
          relative z-10
          inline-flex items-center whitespace-nowrap
        "
      >
        {children}
      </span>
    </button>
  );
}