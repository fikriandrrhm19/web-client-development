"use client";

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function TabButton({ id, name, isActive, onClick }) {
  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.button
      key={id}
      onClick={() => onClick(id)}
      variants={itemVariants}
      className={clsx(
        "text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m font-inter",
        "px-[20px] py-[9px] rounded-[50px] border",
        "transition-all duration-300 ease-in-out",
        isActive
          ? 'bg-accent-primary text-white border-accent-primary shadow-md dark:bg-dark-accent-primary dark:border-dark-accent-primary dark:text-dark-bg-primary'
          : 'bg-white text-text-muted border-gray-300 hover:border-accent-primary hover:text-accent-primary dark:bg-dark-bg-secondary dark:text-dark-text-muted dark:border-dark-border-color dark:hover:border-dark-accent-primary dark:hover:text-dark-accent-primary'
      )}
    >
      {name}
    </motion.button>
  );
}