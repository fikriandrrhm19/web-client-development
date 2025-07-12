"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Home, User, Award, Briefcase, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import HamburgerButton from '@/components/elements/HamburgerButton';
import ThemeToggleButton from './ThemeToggleButton';
import DesktopNavLinks from './DesktopNavLinks';
import MobileNavMenu from './MobileNavMenu';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false);
      }
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      if (currentScrollY === 0) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const isActiveLink = useCallback((itemHref) => {
    const normalizedItemHref = itemHref === '' ? '/' : `/${itemHref}`;

    if (normalizedItemHref === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(normalizedItemHref) &&
           (pathname.length === normalizedItemHref.length || pathname.charAt(normalizedItemHref.length) === '/');
  }, [pathname]);

  const navItems = [
    { name: 'Home', icon: Home, href: '' },
    { name: 'Who I Am', icon: User, href: 'who-i-am' },
    { name: 'Certificates', icon: Award, href: 'certificates' },
    { name: 'Projects', icon: Briefcase, href: 'projects' },
    { name: 'Contact', icon: Mail, href: 'contact' },
  ];

  return (
    <nav
      ref={navRef}
      className={clsx(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50",
        "bg-light-card dark:bg-dark-bg-navbar-dark",
        "transition-all duration-300 ease-in-out",
        isVisible ? 'translate-y-[10px]' : 'translate-y-[-150%]', 
        "w-[calc(100%-20px)]",
        "max-w-[1213px]",
        "rounded-xl border-2 border-transparent",
        "shadow-lg hover:shadow-xl",
        "outline-none",
        "overflow-hidden",
        isMobileMenuOpen ? 'max-h-screen' : 'max-h-[70px]' 
      )}
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-between h-[70px] px-[20px] lg-nav:px-[35px] relative z-20">
        <div className={clsx(
            "text-accent-primary font-bold leading-none",
            "text-h1 md:text-md-h1 lg:text-lg-h1 2xl:text-2xl-h1 font-poppins"
        )}>FAI</div>

        <DesktopNavLinks navItems={navItems} isActiveLink={isActiveLink} />

        <div className="flex items-center space-x-4">
          <ThemeToggleButton />
          <HamburgerButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      <MobileNavMenu
        isOpen={isMobileMenuOpen}
        navItems={navItems}
        isActiveLink={isActiveLink}
        onLinkClick={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}