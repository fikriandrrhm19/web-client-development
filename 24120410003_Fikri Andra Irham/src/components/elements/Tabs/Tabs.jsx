"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { XMarkIcon, FunnelIcon, TrashIcon } from '@heroicons/react/20/solid';

import TabButton from './TabButton';
import DropdownFilter from './DropdownFilter';
import MobileAccordionCategory from './MobileAccordionCategory';
import SkillDetailModal from '../SkillDetailModal';
import MobileFilterModal from '../MobileFilterModal';

export default function Tabs({
  categories,
  children,
  itemsData,
  isFilterButtonsOnMobile = false,
  onFilterCategoryChange,
  onSortOrderChange,
  showSortOnDesktop = false,
  maxSelectedCategories = 2,
}) {
  const [activeTabs, setActiveTabs] = useState(['all']);
  const [openCategoryAccordion, setOpenCategoryAccordion] = useState(categories.length > 0 ? categories[0].id : 'all');
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentSortOrder, setCurrentSortOrder] = useState('newest');
  const [showLimitWarning, setShowLimitWarning] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  
  const [isShaking, setIsShaking] = useState(false); 

  const [tempActiveCategories, setTempActiveCategories] = useState(activeTabs);

  useEffect(() => {
    if (onFilterCategoryChange) {
      onFilterCategoryChange(activeTabs);
    }
  }, [activeTabs, onFilterCategoryChange]);

  useEffect(() => {
    if (onSortOrderChange) {
      onSortOrderChange(currentSortOrder);
    }
  }, [currentSortOrder, onSortOrderChange]);

  useEffect(() => {
    let timer;
    if (showLimitWarning) {
      timer = setTimeout(() => {
        setShowLimitWarning(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showLimitWarning]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) { 
        setIsMobileModalOpen(false); 
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const handleTabClick = useCallback((categoryId) => {
    setActiveTabs(prevActiveTabs => {
      if (categoryId === 'all') {
        if (prevActiveTabs.length === 1 && prevActiveTabs[0] === 'all') {
          setShowLimitWarning(false); 
          setIsShaking(false);
          return prevActiveTabs;
        }
        setShowLimitWarning(false);
        setIsShaking(false);
        return ['all'];
      }

      const isCurrentlyActive = prevActiveTabs.includes(categoryId);
      let newActiveTabs;

      if (isCurrentlyActive) {
        newActiveTabs = prevActiveTabs.filter(id => id !== categoryId && id !== 'all');
        setShowLimitWarning(false);
        setIsShaking(false);
      } else {
        const tabsWithoutAll = prevActiveTabs.filter(id => id !== 'all');

        if (tabsWithoutAll.length < maxSelectedCategories) {
          newActiveTabs = [...tabsWithoutAll, categoryId];
          setShowLimitWarning(false);
          setIsShaking(false);
        } else {
          setShowLimitWarning(true); 
          setIsShaking(true); 
          return prevActiveTabs;
        }
      }

      if (newActiveTabs.length === 0) {
        return ['all'];
      }
      return newActiveTabs;
    });
  }, [maxSelectedCategories]);

  useEffect(() => {
    if (isShaking) {
      const shakeDuration = 400; 
      const timer = setTimeout(() => {
        setIsShaking(false);
      }, shakeDuration);
      return () => clearTimeout(timer);
    }
  }, [isShaking]);

  const handleClearFilters = useCallback(() => {
    setActiveTabs(['all']);
    setShowLimitWarning(false);
    setIsShaking(false);
  }, []);

  const toggleCategoryAccordion = useCallback((categoryId) => {
    setOpenCategoryAccordion(prevOpenCategory => prevOpenCategory === categoryId ? null : categoryId);
  }, []);

  const openItemModal = useCallback((item) => {
    setSelectedItem(item);
  }, []);

  const closeItemModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const handleSortOrderChange = useCallback((e) => {
    const newOrder = e.target.value;
    setCurrentSortOrder(newOrder);
  }, []);

  const openMobileModal = useCallback(() => {
    setTempActiveCategories(activeTabs);
    setShowLimitWarning(false);
    setIsShaking(false);
    setIsMobileModalOpen(true);
  }, [activeTabs]);

  const closeMobileModal = useCallback(() => {
    setIsMobileModalOpen(false);
  }, []);

  const handleToggleMobileCategory = useCallback((categoryId) => {
    setTempActiveCategories(prevTempActiveTabs => {
      if (categoryId === 'all') {
        if (prevTempActiveTabs.length === 1 && prevTempActiveTabs[0] === 'all') {
          setShowLimitWarning(false);
          setIsShaking(false);
          return prevTempActiveTabs;
        }
        setShowLimitWarning(false);
        setIsShaking(false);
        return ['all'];
      }

      const isCurrentlyActive = prevTempActiveTabs.includes(categoryId);
      let newTempActiveTabs;

      if (isCurrentlyActive) {
        newTempActiveTabs = prevTempActiveTabs.filter(id => id !== categoryId && id !== 'all');
        setShowLimitWarning(false);
        setIsShaking(false);
      } else {
        const tabsWithoutAll = prevTempActiveTabs.filter(id => id !== 'all');
        if (tabsWithoutAll.length < maxSelectedCategories) {
          newTempActiveTabs = [...tabsWithoutAll, categoryId];
          setShowLimitWarning(false);
          setIsShaking(false);
        } else {
          setShowLimitWarning(true);
          setIsShaking(true);
          return prevTempActiveTabs;
        }
      }

      if (newTempActiveTabs.length === 0) {
        return ['all'];
      }
      return newTempActiveTabs;
    });
  }, [maxSelectedCategories]);

  const handleApplyMobileFilters = useCallback(() => {
    setActiveTabs(tempActiveCategories);
    setIsMobileModalOpen(false);
    setShowLimitWarning(false);
    setIsShaking(false);
  }, [tempActiveCategories]);

  const handleClearMobileFilters = useCallback(() => {
    setActiveTabs(['all']);
    setTempActiveCategories(['all']);
    setShowLimitWarning(false);
    setIsShaking(false);
    setIsMobileModalOpen(false);
  }, []);

  const filteredAccordionItems = useMemo(() => {
    if (!itemsData) return [];
    return itemsData.filter((item) => openCategoryAccordion === 'all' || item.category === openCategoryAccordion);
  }, [itemsData, openCategoryAccordion]);

  const categoryOptions = useMemo(() => categories.map(cat => ({
    value: cat.id,
    label: cat.fullName || cat.name
  })), [categories]);

  const sortOptions = useMemo(() => [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
  ], []);

  const isFilterActive = activeTabs.length > 1 || (activeTabs.length === 1 && activeTabs[0] !== 'all');

  const clearButtonVariants = {
    hidden: { y: 5, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delay: 0.1
      }
    },
    exit: { y: 5, opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
    hover: {
      backgroundColor: isFilterActive ? 'rgba(255, 0, 0, 0.05)' : undefined,
      transition: { duration: 0.1 }
    }
  };

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

  return (
    <div className="w-full">
      <div className="hidden xl-tab:flex flex-col md:flex-row justify-center items-center gap-[15px] mb-[30px]">
        <motion.div
          className="flex flex-wrap justify-center gap-[15px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <TabButton
              key={category.id}
              id={category.id}
              name={category.name}
              isActive={activeTabs.includes(category.id)}
              onClick={handleTabClick}
            />
          ))}
        </motion.div>

        {showSortOnDesktop && (
          <DropdownFilter
            value={currentSortOrder}
            onChange={handleSortOrderChange}
            options={sortOptions}
            type="sort"
            className="ml-4"
          />
        )}

        <AnimatePresence mode="wait">
          <motion.button
            key="clear-filters-button"
            onClick={handleClearFilters}
            className={clsx(
              "ml-4 px-[18px] py-[9px] rounded-[50px] border flex items-center justify-center gap-1",
              "transition-colors duration-300 ease-in-out",
              isFilterActive
                ? "bg-white text-red-600 border-red-500 hover:bg-red-50 dark:bg-dark-bg-secondary dark:text-red-400 dark:border-red-400 dark:hover:bg-red-950"
                : "bg-white text-gray-400 border-gray-300 cursor-not-allowed dark:bg-dark-bg-secondary dark:text-dark-text-muted dark:border-dark-border-color"
            )}
            disabled={!isFilterActive}
            variants={clearButtonVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={isFilterActive ? "hover" : ""}
          >
            <span>Clear</span> 
            <TrashIcon className="h-4 w-4" />
          </motion.button>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showLimitWarning && (
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

      <div className="hidden md-tab:flex xl-tab:hidden justify-center items-center gap-[15px] mb-[30px]">
        <DropdownFilter
          value={activeTabs[0] || 'all'}
          onChange={handleTabClick}
          options={categoryOptions}
          type="category"
        />

        {showSortOnDesktop && (
          <DropdownFilter
            value={currentSortOrder}
            onChange={handleSortOrderChange}
            options={sortOptions}
            type="sort"
          />
        )}
      </div>

      <div className="md-tab:hidden mt-4">
        {isFilterButtonsOnMobile ? (
          <div className="flex justify-center gap-3 px-4 sm:px-0 mb-6">
            <button
              onClick={openMobileModal}
              className={clsx(
                "flex items-center px-[18px] py-[9px] rounded-[50px] border gap-1",
                "bg-white text-text-dark border-gray-300 hover:border-accent-primary hover:text-accent-primary",
                "dark:bg-dark-bg-secondary dark:text-dark-text-dark dark:border-dark-border-color dark:hover:border-dark-accent-primary dark:hover:text-dark-accent-primary"
              )}
            >
              <FunnelIcon className="h-4 w-4" />
              Filter Categories
            </button>
            <DropdownFilter
              value={currentSortOrder}
              onChange={handleSortOrderChange}
              options={sortOptions}
              type="sort"
            />
          </div>
        ) : (
          categories.map((category) => (
            <MobileAccordionCategory
              key={category.id}
              category={category}
              isOpen={openCategoryAccordion === category.id}
              onToggle={toggleCategoryAccordion}
              items={itemsData ? itemsData.filter(item => category.id === 'all' || item.category === openCategoryAccordion) : []}
              onItemClick={openItemModal}
            />
          ))
        )}
      </div>

      <div className="w-full">
        {children(activeTabs, currentSortOrder)}
      </div>

      <MobileFilterModal
        isOpen={isMobileModalOpen}
        onClose={closeMobileModal}
        categories={categories}
        activeCategories={tempActiveCategories}
        onToggleCategory={handleToggleMobileCategory}
        onApplyFilters={handleApplyMobileFilters}
        onClearFilters={handleClearMobileFilters}
        maxSelectedCategories={maxSelectedCategories}
        showWarning={showLimitWarning}
        isShaking={isShaking}
      />

      <SkillDetailModal
        isOpen={!!selectedItem}
        onClose={closeItemModal}
        skill={selectedItem}
      />
    </div>
  );
}