'use client';

import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { Language } from '@/types';

interface LanguageToggleProps {
  onLanguageChange: (lang: Language) => void;
}

export default function LanguageToggle({ onLanguageChange }: LanguageToggleProps) {
  const [language, setLanguage] = useState<Language>('mr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang: Language = language === 'mr' ? 'en' : 'mr';
    setLanguage(newLang);
    onLanguageChange(newLang);
  };

  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 bg-heritage-brown text-heritage-gold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg font-marathi">
        <Languages size={20} />
        <span className="font-semibold">मराठी</span>
      </div>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-heritage-brown text-heritage-gold px-4 py-2 rounded-full flex items-center gap-2 hover:bg-saffron-700 transition-all duration-300 shadow-lg hover:shadow-xl font-marathi"
      aria-label="Toggle Language"
    >
      <Languages size={20} />
      <span className="font-semibold">{language === 'mr' ? 'मराठी' : 'English'}</span>
    </button>
  );
}