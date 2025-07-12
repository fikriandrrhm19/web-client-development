import dynamic from 'next/dynamic';
import PageEndWave from '@/components/layouts/PageEndWave';

const CertificatesSection = dynamic(() => import('@/components/sections/certificates'), { loading: () => <div className="h-screen" /> });

export const metadata = {
  title: 'Certificates',
};

export default function CertificatesPage() {
  return (
    <>
      <CertificatesSection />
      <PageEndWave prevSectionBgClass="bg-white dark:bg-dark-bg-primary" />
    </>
  );
}