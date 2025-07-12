import React from 'react';
import clsx from 'clsx';

export default function AnimatedBackground({ className }) {
  return (
    <div className={clsx("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      <div
        className="absolute top-1/4 left-0 w-64 h-64 sm:w-80 sm:h-80 bg-rose-200 dark:bg-dark-accent-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-1"
        style={{
          '--blob-x1': '30px', '--blob-y1': '-40px',
          '--blob-x2': '-20px', '--blob-y2': '30px',
          '--blob-x3': '40px', '--blob-y3': '-20px',
          '--blob-delay-1': '0s'
        }}
      ></div>
      <div
        className="absolute bottom-1/3 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-sky-200 dark:bg-dark-accent-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob-2"
        style={{
          '--blob-x1': '-25px', '--blob-y1': '35px',
          '--blob-x2': '15px', '--blob-y2': '-25px',
          '--blob-x3': '-35px', '--blob-y3': '10px',
          '--blob-delay-2': '2s'
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-100 sm:h-100 bg-emerald-200 dark:bg-green-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob-3"
        style={{
          '--blob-x1': '20px', '--blob-y1': '15px',
          '--blob-x2': '-30px', '--blob-y2': '-20px',
          '--blob-x3': '10px', '--blob-y3': '30px',
          '--blob-delay-3': '4s'
        }}
      ></div>
      
      <div
        className="absolute top-10 left-10 w-20 h-20 sm:w-28 sm:h-28 bg-purple-100 dark:bg-purple-300/20 rounded-lg opacity-40 animate-spin-fast animate-float-subtle mix-blend-overlay filter blur-lg animation-delay-1000"
        style={{ '--float-subtle-x': '8px', '--float-subtle-y': '-15px' }}
      ></div>
      
      <div
        className="absolute bottom-5 right-20 w-32 h-32 sm:w-40 sm:h-40 bg-yellow-100 dark:bg-yellow-300/20 rounded-full opacity-40 animate-spin-very-slow animate-float-reverse mix-blend-overlay filter blur-lg animation-delay-3000"
        style={{ 
          '--float-rev-x1': '-20px', '--float-rev-y1': '30px', '--float-rev-deg1': '-8deg',
          '--float-rev-x2': '18px', '--float-rev-y2': '-20px', '--float-rev-deg2': '4deg',
          '--float-rev-x3': '-28px', '--float-rev-y3': '8px', '--float-rev-deg3': '-12deg'
        }}
      ></div>
      
      <div
        className="absolute top-1/5 right-1/4 w-20 h-20 sm:w-28 sm:h-28 bg-cyan-100 dark:bg-cyan-300/20 rounded-xl opacity-40 animate-float-fast mix-blend-overlay filter blur-md animation-delay-5000"
        style={{ 
          '--float-x1': '10px', '--float-y1': '-18px', '--float-deg1': '5deg',
          '--float-x2': '-12px', '--float-y2': '10px', '--float-deg2': '-3deg',
          '--float-x3': '15px', '--float-y3': '-8px', '--float-deg3': '7deg'
        }}
      ></div>

      <div
        className="absolute top-1/3 right-[5%] w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-dark-accent-primary/20 rounded-md opacity-30 animate-spin-slow animate-float-subtle mix-blend-overlay filter blur-sm animation-delay-6500"
        style={{ '--float-subtle-x': '-7px', '--float-subtle-y': '12px' }}
      ></div>
      
      <div
        className="absolute bottom-1/4 left-[5%] w-10 h-10 sm:w-14 sm:h-14 bg-pink-100 dark:bg-dark-accent-secondary/20 rounded-lg opacity-30 animate-float-subtle-reverse mix-blend-overlay filter blur-sm animation-delay-7800"
        style={{ '--float-subtle-rev-x': '6px', '--float-subtle-rev-y': '-10px' }}
      ></div>
      
      <div
        className="absolute top-[15%] left-1/4 w-14 h-14 sm:w-18 sm:h-18 bg-teal-100 dark:bg-dark-accent-primary/20 rotate-45 opacity-30 animate-float-slow animate-spin-very-slow mix-blend-overlay filter blur-sm animation-delay-8200"
        style={{ 
          '--float-x1': '12px', '--float-y1': '20px', '--float-deg1': '8deg',
          '--float-x2': '-8px', '--float-y2': '-12px', '--float-deg2': '-4deg',
          '--float-x3': '18px', '--float-y3': '6px', '--float-deg3': '10deg'
        }}
      ></div>
      
      <div
        className="absolute bottom-[10%] left-[30%] w-8 h-8 sm:w-10 sm:h-10 bg-indigo-100 dark:bg-blue-300/20 rounded-full opacity-30 animate-float-subtle-reverse mix-blend-overlay filter blur-xs animation-delay-9500"
        style={{ '--float-subtle-rev-x': '-4px', '--float-subtle-rev-y': '8px' }}
      ></div>
      
      <div
        className="absolute top-[5%] right-[20%] w-6 h-16 sm:w-8 sm:h-20 bg-gray-200 dark:bg-dark-text-muted/10 rotate-12 opacity-20 animate-spin-fast animate-float-slow mix-blend-overlay filter blur-xs animation-delay-10800"
        style={{ 
          '--float-x1': '5px', '--float-y1': '20px', '--float-deg1': '2deg',
          '--float-x2': '-10px', '--float-y2': '-15px', '--float-deg2': '-1deg',
          '--float-x3': '8px', '--float-y3': '10px', '--float-deg3': '3deg'
        }}
      ></div>

      <div
        className="absolute bottom-[20%] right-[30%] w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-300/20 rounded-sm opacity-25 animate-float-fast animation-delay-12000"
        style={{
          '--float-x1': '-5px', '--float-y1': '-10px', '--float-deg1': '-2deg',
          '--float-x2': '5px', '--float-y2': '8px', '--float-deg2': '1deg',
          '--float-x3': '-8px', '--float-y3': '-4px', '--float-deg3': '-3deg'
        }}
      ></div>
    </div>
  );
}