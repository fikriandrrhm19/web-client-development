import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/home/HeroSection';
import PageEndWave from '@/components/layouts/PageEndWave';

const AboutMeSection = dynamic(() => import('@/components/sections/home/AboutMeSection'), { loading: () => <div className="h-screen" /> });
const SkillsSection = dynamic(() => import('@/components/sections/home/SkillsSection'), { loading: () => <div className="h-screen" /> });
const ExperienceSection = dynamic(() => import('@/components/sections/home/ExperienceSection'), { loading: () => <div className="h-screen" /> });
const ContactCTASection = dynamic(() => import('@/components/sections/home/ContactCTASection'));

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-light-bg-primary dark:bg-dark-bg-primary">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ContactCTASection />
      <ExperienceSection />
      <PageEndWave prevSectionBgClass="bg-white dark:bg-dark-bg-primary" />
    </div>
  );
}