
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { DetailedFeatures } from './components/DetailedFeatures';
import { Topics } from './components/Topics';
import { Footer } from './components/Footer';
import { translations } from './constants/translations';
import type { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fr');

  const handleLanguageChange = useCallback((lang: Language) => {
    setLanguage(lang);
  }, []);

  const t = translations[language];

  return (
    <div className="min-h-screen bg-[#FFFBF2] overflow-x-hidden">
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        translations={t.header}
      />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero translations={t.hero} />
        <FeatureGrid translations={t.featureGrid} />
        <DetailedFeatures translations={t.detailedFeatures} />
        <Topics translations={t.topics} />
      </main>
      <Footer translations={t.footer} />
    </div>
  );
};

export default App;
