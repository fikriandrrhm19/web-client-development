"use client";

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ScrollToTopButton from '@/components/elements/ScrollToTopButton';

export default function MainLayout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />

      <main className="relative overflow-hidden">
        {children}
      </main>

      <Footer />

      <ScrollToTopButton />
    </ThemeProvider>
  );
}