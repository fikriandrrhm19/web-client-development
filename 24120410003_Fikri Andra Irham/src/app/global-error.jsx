'use client';

import React, { useEffect } from 'react';
import clsx from 'clsx';
import { WifiOff, ServerCrash, Frown, BugPlay, RefreshCw } from 'lucide-react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Error Caught:", error);
  }, [error]);

  const getFriendlyErrorMessage = (err) => {
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError') || (typeof window !== 'undefined' && !navigator.onLine)) {
      return <>It seems there&apos;s a <strong>connection issue</strong>. Please check your internet and try again.</>;
    }
    if (err.message.includes('404')) {
      return <>The page you were looking for seems to have <strong>gone on an adventure</strong>. Perhaps it&apos;s been moved or doesn&apos;t exist.</>;
    }
    if (err.message.includes('CORS') || (err.message.includes('TypeError') && err.message.includes('fetch'))) {
      return <>We&apos;re having <strong>trouble loading some content</strong>. This is usually a temporary server-side issue and should resolve shortly.</>;
    }
    return <>An <strong>unexpected error occurred</strong>. I&apos;m already looking into it to get things back on track!</>;
  };

  const getErrorIcon = (err) => {
    if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError') || (typeof window !== 'undefined' && !navigator.onLine)) return <WifiOff size={64} />;
    if (err.message.includes('404')) return <Frown size={64} />;
    if (err.message.includes('CORS') || (err.message.includes('TypeError') && err.message.includes('fetch'))) return <ServerCrash size={64} />;
    return <BugPlay size={64} />;
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
              } catch (e) {
                console.error("Failed to access localStorage for theme initialization:", e);
              }
            })();
          `
        }} />
      </head>
      <body className={clsx(
        "relative min-h-screen flex flex-col items-center justify-center p-4 sm:p-8",
        "bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900 dark:to-orange-950", 
        "text-text-dark dark:text-dark-text-dark",
        "font-inter transition-colors duration-300 overflow-hidden"
      )}>
        <div className="absolute top-[10%] left-[10%] w-24 h-24 bg-red-200/10 dark:bg-red-800/10 rounded-full blur-xl animate-float-error animation-delay-1000 pointer-events-none"></div>
        <div className="absolute bottom-[15%] right-[10%] w-20 h-20 bg-orange-200/10 dark:bg-orange-800/10 rounded-lg rotate-12 blur-xl animate-float-error animation-delay-2500 pointer-events-none"></div>
        <div className="absolute top-[40%] right-[5%] w-16 h-16 bg-red-100/10 dark:bg-red-900/10 rounded-xl blur-lg animate-float-error animation-delay-500 pointer-events-none"></div>
        <div className="absolute bottom-[5%] left-[20%] w-28 h-28 bg-orange-100/10 dark:bg-orange-900/10 rounded-full blur-2xl animate-float-error animation-delay-3000 pointer-events-none"></div>

        <div className={clsx(
          "relative z-10 p-8 sm:p-12 m-4 rounded-xl shadow-2xl backdrop-blur-md",
          "border border-red-300 dark:border-red-700", 
          "bg-white/80 dark:bg-dark-card/80",
          "text-center max-w-xl w-full flex flex-col items-center"
        )}>
          <div className="mb-6 text-red-500 dark:text-red-400 animate-bounce-error">
            {getErrorIcon(error)}
          </div>

          <h2 className={clsx(
            "text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2",
            "font-poppins text-red-600 dark:text-red-400 mb-4"
          )}>
            Oops! Something went wrong.
          </h2>
          <p className="text-paragraph md:text-md-paragraph mb-6 text-text-muted dark:text-dark-text-muted">
            {getFriendlyErrorMessage(error)}
          </p>

          {process.env.NODE_ENV === 'development' && (
            <div className={clsx(
              "w-full text-left bg-gray-50 dark:bg-dark-bg-secondary p-4 rounded-md",
              "border border-gray-200 dark:border-dark-border-color",
              "text-sm text-text-dark dark:text-dark-text-muted font-mono overflow-auto max-h-40 mb-6"
            )}>
              <h4 className="font-semibold text-text-dark dark:text-dark-text-dark mb-2">Technical Details:</h4>
              <pre className="whitespace-pre-wrap break-words">{error.message}</pre>
              {error.stack && (
                <>
                  <h4 className="font-semibold text-text-dark dark:text-dark-text-dark mt-4 mb-2">Stack Trace:</h4>
                  <pre className="whitespace-pre-wrap break-words text-xs">{error.stack}</pre>
                </>
              )}
            </div>
          )}
          <button
            onClick={() => reset()}
            className={clsx(
              "group relative overflow-hidden",
              "mt-4 px-8 py-3 rounded-full font-semibold",
              "bg-accent-primary hover:bg-accent-primary-dark",
              "text-white transition-all duration-300 ease-in-out",
              "shadow-md hover:shadow-lg",
              "focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-opacity-50",
              "dark:focus:ring-dark-accent-primary dark:focus:ring-opacity-50"
            )}
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
            ></span>
            <span className="relative z-10 inline-flex items-center whitespace-nowrap">
              <RefreshCw className="w-5 h-5 mr-2" /> Try again
            </span>
          </button>
          <p className="mt-4 text-sm text-text-muted dark:text-dark-text-muted">
            If the problem persists, feel free to <strong>reach out to me directly</strong>.
          </p>
        </div>
      </body>
    </html>
  );
}
