"use client";

import React from 'react'; 
import clsx from 'clsx';

import ProjectImageDisplay from '../ProjectImageDisplay';
import ProjectDetails from '../ProjectDetails';
import ProjectActionButton from '../ProjectActionButton';

export default function ProjectCard({ project, className }) {
  const { title, issuer, date, dateDisplay, description, techStacks, projectUrl, githubUrl, videoUrl, pptUrl, image } = project;

  const links = [
    { url: projectUrl, type: 'project' },
    { url: videoUrl, type: 'video' },
    { url: pptUrl, type: 'ppt' },
    { url: githubUrl, type: 'github' },
  ].filter(link => link.url);

  return (
    <div
      className={clsx(
        "bg-white border border-gray-200 shadow-lg rounded-xl p-6 flex flex-col items-start",
        "dark:bg-dark-card dark:border-dark-border-color dark:shadow-none",
        "hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out",
        "dark:hover:shadow-lg dark:hover:scale-[1.01]",
        "relative group",
        className
      )}
    >
      <div className="absolute inset-0 rounded-xl pointer-events-none z-10">
        <div className={clsx(
            "absolute inset-0 opacity-0 transition-opacity duration-300 rounded-xl",
            "bg-accent-primary group-hover:opacity-10",
            "dark:bg-dark-accent-primary dark:text-dark-bg-primary dark:group-hover:opacity-10"
          )}
          style={{ filter: 'blur(10px)' }}
        ></div>
        <div className="absolute inset-[1px] bg-white rounded-xl dark:bg-dark-card"></div>
      </div>

      <div className="relative z-20 w-full h-full flex flex-col">
        <ProjectImageDisplay imageUrl={image} title={title} />

        <ProjectDetails 
          title={title} 
          issuer={issuer} 
          date={date} 
          dateDisplay={dateDisplay} 
          description={description} 
          techStacks={techStacks} 
        />

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 w-full mt-auto">
          {links.map((link, index) => (
            <ProjectActionButton key={index} url={link.url} type={link.type} />
          ))}
        </div>
      </div>
    </div>
  );
}