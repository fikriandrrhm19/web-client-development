"use client";

import React from 'react';
import clsx from 'clsx';

export default function FormField({
  id,
  label,
  type = 'text',
  placeholder,
  register,
  error,
  shakeKey,
  isTextArea = false,
  rows = 5,
  className,
}) {
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={id} className="block text-h4 md:text-md-h4 lg:text-lg-h4 2xl:text-2xl-h4 font-poppins mb-2 text-text-dark dark:text-dark-text-dark">
        {label}
      </label>
      <InputComponent
        key={`${id}-${shakeKey}`}
        type={type}
        id={id}
        {...register(id)}
        placeholder={placeholder}
        rows={isTextArea ? rows : undefined}
        className={clsx(
          "mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm",
          "text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter",
          isTextArea ? "resize-none h-[150px]" : "",
          "focus:outline-none focus:border-2 focus:border-accent-primary focus:ring-1 focus:ring-accent-primary/50",
          "bg-white text-gray-700 placeholder-gray-400 border-gray-300",
          "dark:bg-dark-bg-primary dark:text-dark-text-dark dark:placeholder-dark-text-muted dark:border-dark-border-color",
          error ? 'border-red-500 animate-shake' : '',
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && (
        <p role="alert" className="mt-1 text-sm text-red-500">{error.message}</p>
      )}
    </div>
  );
}