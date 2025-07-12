"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize } from 'lucide-react';
import clsx from 'clsx';
import ImageLightbox from '../ImageLightbox';

export default function ProjectImageDisplay({ imageUrl, title }) {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showImageLightbox, setShowImageLightbox] = useState(false);

  return (
    <>
      <div
        className="relative w-full h-[180px] rounded-lg overflow-hidden mb-4 flex items-center justify-center
                   bg-gray-100 dark:bg-gray-700 group cursor-pointer"
        onClick={() => setShowImageLightbox(true)}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={clsx(
            "object-cover transition-transform duration-200 ease-in-out",
            isImageHovered && "scale-105"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
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

      <ImageLightbox
        isOpen={showImageLightbox}
        onClose={() => setShowImageLightbox(false)}
        src={imageUrl}
        alt={`${title} - Full View`}
      />
    </>
  );
}