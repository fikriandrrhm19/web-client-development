import dynamic from 'next/dynamic';
import PageEndWave from '@/components/layouts/PageEndWave';

const ContactSection = dynamic(() => import('@/components/sections/contact'), { loading: () => <div className="h-screen" /> });

export const metadata = {
  title: 'Contact Me',
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <PageEndWave prevSectionBgClass="bg-pink-50 dark:bg-dark-accent-secondary/10" />
    </>
  );
}