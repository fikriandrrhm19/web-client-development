import { useState, useEffect, useMemo } from 'react';
import { certificates } from '@/lib/data/certificates';

export default function useCertificateFilters(initialCertificates = certificates) {
  const [activeCategories, setActiveCategories] = useState(['all']);
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    if (activeCategories.length === 0) {
      setActiveCategories(['all']);
    }
  }, [activeCategories]);

  const filteredAndSortedCertificates = useMemo(() => {
    let filtered = initialCertificates;

    if (!activeCategories.includes('all') && activeCategories.length > 0) {
      filtered = filtered.filter((cert) => activeCategories.includes(cert.category));
    }

    if (sortOrder !== 'default') {
      filtered = [...filtered].sort((a, b) => {
        const dateA = new Date(a.issueDate);
        const dateB = new Date(b.issueDate);
        if (sortOrder === 'newest') {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      });
    }

    return filtered;
  }, [activeCategories, sortOrder, initialCertificates]);

  const handleClearFilters = () => {
    setActiveCategories(['all']);
  };

  return {
    activeCategories,
    sortOrder,
    filteredAndSortedCertificates,
    setActiveCategories,
    setSortOrder,
    handleClearFilters,
  };
}
