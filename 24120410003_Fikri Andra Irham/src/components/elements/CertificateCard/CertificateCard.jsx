"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Award, Link as LinkIcon, CalendarDays, Maximize } from 'lucide-react';

import { formatDate } from '@/utils/dateUtils';
import ImageLightbox from '../ImageLightbox';

export default function CertificateCard({ certificate, className }) {
  const { title, issuer, issueDate, endDate, credentialId, description, certificateUrl, image } = certificate;
  const [showLightbox, setShowLightbox] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);

  const formattedIssueDate = formatDate(issueDate);
  const formattedEndDate = endDate ? formatDate(endDate) : '';

  return (
    <div
      className={clsx(
        "bg-white border border-gray-200 shadow-lg rounded-xl p-6 flex flex-col items-start",
        "dark:bg-dark-card dark:border-dark-border-color dark:shadow-none",
        "hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out",
        "dark:hover:shadow-lg dark:hover:scale-[1.01]",
        "w-full max-w-[340px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[395px]",
        "min-h-[480px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[535px]",
        className
      )}
    >
      <div
        className="relative w-full h-[130px] rounded-lg overflow-hidden mb-4 flex items-center justify-center
                      bg-gray-100 dark:bg-gray-700 cursor-pointer group"
        onClick={() => setShowLightbox(true)}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <Image
          src={image} 
          alt={title}
          fill
          className={clsx(
            "object-cover transition-transform duration-200 ease-in-out",
            isImageHovered && "scale-105"
          )}
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className={clsx(
            "absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-200",
            "group-hover:bg-opacity-30"
        )}>
            <Maximize className={clsx(
                "text-white opacity-0 transition-opacity duration-200",
                "group-hover:opacity-100"
            )} size={32} />
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-start">
        <h3 className="text-card-header md:text-md-card-header lg:text-lg-card-header 2xl:text-2xl-card-header font-poppins leading-tight mb-3
                       text-text-dark dark:text-dark-text-dark">
          {title}
        </h3>
        <div className="flex items-center text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter mb-3 w-full flex-wrap">
          <span className="inline-block px-3 py-1 rounded-md mr-2 font-medium flex-shrink-0
                           text-accent-primary border border-gray-300 dark:text-dark-accent-primary dark:border-dark-border-color">
            {issuer}
          </span>
          <div className="flex items-center gap-x-[5px]">
            <CalendarDays className="w-4 h-4 mr-1 text-text-muted flex-shrink-0 dark:text-dark-text-muted" />
            <span className="text-text-muted dark:text-dark-text-muted">
              {formattedIssueDate} {formattedEndDate ? `- ${formattedEndDate}` : ''}
            </span>
          </div>
        </div>
        <p className="text-paragraph md:text-md-paragraph lg:text-lg-paragraph 2xl:text-2xl-paragraph font-inter leading-relaxed mb-3
                      text-text-light dark:text-dark-text-dark">
          {description}
        </p>
        <div className="flex-grow"></div>
      </div>

      {credentialId && (
        <div className="flex items-center text-tooltip md:text-md-tooltip lg:text-lg-tooltip 2xl:text-2xl-tooltip font-inter mb-3
                        text-text-muted dark:text-dark-text-muted">
          <Award className="w-4 h-4 mr-2 flex-shrink-0" />
          <span>Credential ID: {credentialId}</span>
        </div>
      )}

      {certificateUrl && (
        <a
          href={certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full
                     bg-accent-primary text-white text-paragraph-m md:text-md-paragraph-m lg:text-lg-paragraph-m 2xl:text-2xl-paragraph-m font-inter
                     px-4 py-3 rounded-lg hover:bg-accent-primary-dark transition-colors duration-200
                     dark:bg-dark-accent-primary dark:text-dark-bg-primary dark:hover:bg-dark-accent-primary-dark"
        >
          View Certificate
          <LinkIcon className="w-5 h-5 ml-2" />
        </a>
      )}

      <ImageLightbox
        isOpen={showLightbox}
        onClose={() => setShowLightbox(false)}
        src={image}
        alt={`${title} - Full View`}
      />
    </div>
  );
}