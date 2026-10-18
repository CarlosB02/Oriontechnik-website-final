'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CapabilitiesGrid from '@/components/CapabilitiesGrid';
import CertificationsBanner from '@/components/CertificationsBanner';
import NewsSection from '@/components/NewsSection';
import WhereWeAreSection from '@/components/WhereWeAreSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';

export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Header onOpenContact={() => setIsContactOpen(true)} />
      <main id="main-content">
        <Hero />
        <CapabilitiesGrid />
        <CertificationsBanner />
        <NewsSection />
        <WhereWeAreSection />
      </main>
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
