import React from 'react';
import clsx from 'clsx';

const CustomHamburgerIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const CustomXIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function HamburgerButton({ onClick, isOpen }) {
  return (
    <button
      className={clsx(
        "lg-nav:hidden p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2",
        "hover:bg-light-bg-secondary dark:hover:bg-dark-bg-secondary",
      )}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {isOpen ? (
        <CustomXIcon className="h-6 w-6 text-text-dark dark:text-dark-text-dark" />
      ) : (
        <CustomHamburgerIcon className="h-6 w-6 text-text-dark dark:text-dark-text-dark" />
      )}
    </button>
  );
}