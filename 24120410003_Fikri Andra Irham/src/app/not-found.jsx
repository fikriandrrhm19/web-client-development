import Link from 'next/link';
import clsx from 'clsx';
import { Home, SearchX } from 'lucide-react';
import Button from '@/components/elements/Button';
import AnimatedBackground from '@/components/elements/AnimatedBackground';
import PageEndWave from '@/components/layouts/PageEndWave';

export default function NotFound() {
  const notFoundBgClass = "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark-accent-primary/10 dark:via-dark-bg-primary dark:to-dark-accent-secondary/20";

  return (
    <>
      <div className={clsx(
        "relative flex flex-col items-center justify-center p-4 sm:p-8",
        "min-h-[calc(100vh-80px)]",
        notFoundBgClass,
        "text-text-dark dark:text-dark-text-dark",
        "font-inter transition-colors duration-300 overflow-hidden"
      )}>
        <AnimatedBackground className="opacity-70" />

        <div className={clsx(
          "relative z-10 p-8 sm:p-12 m-4 rounded-xl shadow-2xl backdrop-blur-md",
          "border border-border-color dark:border-dark-border-color",
          "bg-white/80 dark:bg-dark-card/80",
          "text-center max-w-xl w-full flex flex-col items-center"
        )}>
          <div className="mb-6 text-accent-primary dark:text-dark-accent-primary animate-bounce-fade">
            <SearchX size={80} />
          </div>

          <h2 className={clsx(
            "text-h2 md:text-md-h2 lg:text-lg-h2 2xl:text-2xl-h2",
            "font-poppins text-text-dark dark:text-dark-text-dark mb-4"
          )}>
            Oops! Page Not Found.
          </h2>
          <p className="text-paragraph md:text-md-paragraph mb-6 text-text-muted dark:text-dark-text-muted">
            The page you&apos;re looking for might have been moved, deleted, or never existed.
            Don&apos;t worry, you can go back to the homepage.
          </p>
          
          <Link href="/" passHref>
            <Button
              as="a"
              variant="gradient"
              shape="lg"
              className="w-fit text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m font-inter"
            >
              <Home className="h-5 w-5 mr-2" />
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
      
      <PageEndWave prevSectionBgClass="bg-pink-50 dark:bg-dark-accent-secondary/10" />
    </>
  );
}