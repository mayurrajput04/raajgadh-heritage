'use client';

import { Heart, Github, Mail } from 'lucide-react';
import { Language } from '@/types';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-heritage-brown border-t-2 border-heritage-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className={`text-xl font-bold text-heritage-gold mb-4 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? 'राजगड बद्दल' : 'About Raajgadh'}
            </h3>
            <p className={`text-sandstone-300 text-sm ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' 
                ? 'छत्रपती शिवाजी महाराजांच्या स्वराज्याची राजधानी राजगड याच्या इतिहासाचे संरक्षण करणारी वेबसाइट.'
                : 'A website dedicated to preserving the history of Raajgadh, the capital of Chhatrapati Shivaji Maharaj\'s Swarajya.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold text-heritage-gold mb-4 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? 'महत्वाचे दुवे' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {[
                { mr: 'इतिहास', en: 'History' },
                { mr: 'वारसा', en: 'Legacy' },
                { mr: 'शोध', en: 'Explore' },
                { mr: 'भेट द्या', en: 'Visit' },
              ].map((link, index) => (
                <li key={index}>
                  <a href={`#${link.en.toLowerCase()}`} className={`text-sandstone-300 hover:text-heritage-gold transition-colors ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                    {language === 'mr' ? link.mr : link.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`text-xl font-bold text-heritage-gold mb-4 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? 'संपर्क' : 'Contact'}
            </h3>
            <div className="space-y-3">
              <a href="mailto:mr235159@gmail.com" className="flex items-center gap-2 text-sandstone-300 hover:text-heritage-gold transition-colors">
                <Mail size={18} />
                <span className="text-sm">info@raajgadh.com</span>
              </a>
              <a href="https://github.com/mayurrajput04" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sandstone-300 hover:text-heritage-gold transition-colors">
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-heritage-gold/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-sandstone-400 text-sm flex items-center gap-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? 'महाराष्ट्राच्या वारशासाठी' : 'Made with'}
              <Heart className="text-saffron-500 fill-current" size={16} />
              {language === 'mr' ? 'बनवले' : 'for Maharashtra\'s heritage'}
            </p>
            <p className="text-sandstone-400 text-sm">
              © {currentYear} Raajgadh Heritage. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}