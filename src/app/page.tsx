'use client';

import { useState } from 'react';
import { Language } from '@/types';
import ErrorBoundary from '@/components/ErrorBoundary';
import ScrollProgress from '@/components/ScrollProgress';
import LanguageToggle from '@/components/LanguageToggle';
import Hero from '@/components/Hero';
import HistoricalStory from '@/components/HistoricalStory';
import ShivajiLegacy from '@/components/ShivajiLegacy';
import Rajmudra from '@/components/Rajmudra';
import ExploreFort from '@/components/ExploreFort';
import Gallery from '@/components/Gallery';
import VisitInfo from '@/components/VisitInfo';
import Footer from '@/components/Footer';

export default function Home() {
  const [language, setLanguage] = useState<Language>('mr');

  return (
    <ErrorBoundary>
      <main className="relative min-h-screen">
        <ScrollProgress />
        <LanguageToggle onLanguageChange={setLanguage} />
        
        <Hero language={language} />
        <HistoricalStory language={language} />
        <ShivajiLegacy language={language} />
        <Rajmudra language={language} />
        <ExploreFort language={language} />
        <Gallery language={language} />
        <VisitInfo language={language} />
        <Footer language={language} />
      </main>
    </ErrorBoundary>
  );
}