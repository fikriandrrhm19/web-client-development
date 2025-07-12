"use client";

import React from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import BaseModal from '@/components/elements/BaseModal';
import FilterCategoryItem from './FilterCategoryItem';

export default function MobileFilterModal({
  isOpen,
  onClose,
  categories,
  activeCategories,
  onToggleCategory,
  onApplyFilters,
  onClearFilters,
  maxSelectedCategories,
  showWarning, 
  isShaking, 
}) {
  const warningVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        y: { duration: 0.1, ease: "easeOut" },
        opacity: { duration: 0.1, ease: "easeOut" },
      }
    },
    shake: {
      x: [0, -5, 5, -5, 5, 0], 
      transition: {
        duration: 0.4, 
        ease: "easeInOut",
        repeat: 0, 
      }
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.5, ease: "easeIn" } },
  };

  const handleApply = () => {
    onApplyFilters();
    onClose();
  };

  const handleClear = () => {
    onClearFilters();
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="Filter Categories"
    >
      <AnimatePresence>
        {showWarning && (
          <motion.div
            variants={warningVariants}
            initial="hidden"
            animate={isShaking ? "shake" : "visible"}
            exit="exit"
            className="text-center text-sm text-red-600 dark:text-red-400 mb-4"
          >
            You can select a maximum of {maxSelectedCategories} categories.
          </motion.div>
        )}
      </AnimatePresence>

      {categories.map((category) => (
        <FilterCategoryItem
          key={category.id}
          category={category}
          isSelected={activeCategories.includes(category.id)}
          onToggle={onToggleCategory}
        />
      ))}

      <div className="flex justify-end gap-3 mt-6 border-t pt-4 border-gray-200 dark:border-dark-border-color">
        <button
          onClick={handleClear}
          className={clsx(
            "px-5 py-2 rounded-full text-paragraph-m font-medium",
            "border border-red-500 text-red-600 hover:bg-red-50",
            "dark:border-red-400 dark:text-red-400 dark:hover:bg-red-950"
          )}
        >
          Clear All
        </button>
        <button
          onClick={handleApply}
          className={clsx(
            "px-5 py-2 rounded-full text-paragraph-m font-medium",
            "bg-accent-primary text-white hover:bg-accent-secondary",
            "dark:bg-dark-accent-primary dark:hover:bg-dark-accent-secondary"
          )}
        >
          Apply Filters
        </button>
      </div>
    </BaseModal>
  );
}