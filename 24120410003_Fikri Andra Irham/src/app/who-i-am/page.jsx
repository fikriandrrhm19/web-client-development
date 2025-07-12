import dynamic from 'next/dynamic';
import WhoIAmHeroSection from '@/components/sections/who-i-am/WhoIAmHeroSection';
import PageEndWave from '@/components/layouts/PageEndWave';

const EducationSection = dynamic(() => import('@/components/sections/who-i-am/EducationSection'), { loading: () => <div className="h-screen" /> });
const WhatIDoSection = dynamic(() => import('@/components/sections/who-i-am/WhatIDoSection'), { loading: () => <div className="h-screen" /> });
const ConnectWithMeSection = dynamic(() => import('@/components/sections/who-i-am/ConnectWithMeSection'));

export const metadata = {
  title: 'About Me',
};

export default function WhoIAmPage() {
  return (
    <>
      <WhoIAmHeroSection />
      <EducationSection />
      <WhatIDoSection />
      <ConnectWithMeSection />
      <PageEndWave prevSectionBgClass="bg-white dark:bg-dark-bg-primary" />
    </>
  );
}