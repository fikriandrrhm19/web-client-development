import dynamic from 'next/dynamic';
import PageEndWave from '@/components/layouts/PageEndWave';

const ProjectsSection = dynamic(() => import('@/components/sections/projects'), { loading: () => <div className="h-screen" /> });

export const metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsSection />
      <PageEndWave prevSectionBgClass="bg-white dark:bg-dark-bg-primary" />
    </>
  );
}