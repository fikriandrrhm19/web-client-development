import React from 'react';
import { ExternalLink, Github, Youtube, FileText } from 'lucide-react';
import clsx from 'clsx';

const getButtonIcon = (type) => {
  const iconClasses = "w-5 h-5 ml-2";
  switch (type) {
    case 'github':
      return <Github className={iconClasses} />;
    case 'video':
      return <Youtube className={iconClasses} />;
    case 'ppt':
      return <FileText className={iconClasses} />;
    default:
      return <ExternalLink className={iconClasses} />;
  }
};

const getButtonText = (type) => {
  switch (type) {
    case 'github':
      return 'View GitHub';
    case 'video':
      return 'Watch Demo';
    case 'ppt':
      return 'View Presentation';
    default:
      return 'View Project';
  }
};

export default function ProjectActionButton({ url, type }) {
  if (!url) return null;

  const buttonText = getButtonText(type);
  const buttonIcon = getButtonIcon(type);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center justify-center flex-grow",
        "px-4 py-3 rounded-lg transition-colors duration-200",
        type === 'github'
          ? "bg-btn-github-light text-btn-github-light-text hover:bg-gray-700 dark:bg-dark-btn-github-dark dark:text-btn-github-dark-text dark:hover:bg-btn-github-dark-hover"
          : type === 'video'
            ? "bg-btn-video-light text-btn-video-light-text hover:bg-btn-video-light-hover dark:bg-dark-btn-video-dark dark:text-btn-video-dark-text dark:hover:bg-btn-video-dark-hover"
            : type === 'ppt'
              ? "bg-btn-presentation-light text-btn-presentation-light-text hover:bg-btn-presentation-light-hover dark:bg-dark-btn-presentation-dark dark:text-btn-presentation-dark-text dark:hover:bg-btn-presentation-dark-hover"
              : "bg-accent-primary text-white hover:bg-accent-primary-dark dark:bg-dark-accent-primary dark:text-dark-bg-primary dark:hover:bg-dark-accent-primary-dark", 
        "text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m font-inter"
      )}
    >
      {buttonText}
      {buttonIcon}
    </a>
  );
}