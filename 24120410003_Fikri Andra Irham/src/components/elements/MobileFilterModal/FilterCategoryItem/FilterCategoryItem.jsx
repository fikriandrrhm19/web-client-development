"use client";

import React from 'react';
import clsx from 'clsx';

export default function FilterCategoryItem({ category, isSelected, onToggle }) {
  return (
    <label
      key={category.id}
      className={clsx(
        "flex items-center p-3 rounded-lg cursor-pointer mb-2",
        "hover:bg-gray-50 dark:hover:bg-dark-bg-primary",
        isSelected ? "bg-blue-50 dark:bg-dark-accent-primary/20" : ""
      )}
    >
      <input
        type="checkbox"
        value={category.id}
        checked={isSelected}
        onChange={() => onToggle(category.id)}
        className={clsx(
          "form-checkbox h-5 w-5 text-accent-primary rounded",
          "focus:ring-accent-primary dark:focus:ring-dark-accent-primary",
          "dark:bg-dark-bg-primary dark:border-dark-border-color",
          isSelected ? "checked:bg-accent-primary dark:checked:bg-dark-accent-primary" : ""
        )}
      />
      <span className="ml-3 text-text-dark dark:text-dark-text-dark text-paragraph-m">
        {category.fullName || category.name}
      </span>
    </label>
  );
}