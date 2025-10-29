'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Language } from '@/types';
import { content } from '@/data/content';

interface ShivajiLegacyProps {
  language: Language;
}

export default function ShivajiLegacy({ language }: ShivajiLegacyProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative py-20 bg-gradient-to-b from-sandstone-900 to-heritage-brown overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-9xl font-marathi text-heritage-gold">॥</div>
        <div className="absolute bottom-20 right-10 text-9xl font-marathi text-heritage-gold">॥</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-gold mb-4 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
            {language === 'mr' ? content.legacy.title : content.legacy.titleEn}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-heritage-gold" />
            <div className="w-3 h-3 bg-heritage-gold rotate-45" />
            <div className="w-16 h-0.5 bg-heritage-gold" />
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-md mx-auto mb-16"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-saffron-600 to-heritage-gold rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
            <div className="relative bg-heritage-brown rounded-lg p-2">
              <div className="aspect-[3/4] bg-sandstone-800 rounded-lg overflow-hidden relative">
                {!imageError ? (
                  <Image
                    src="/images/shivaji/shivaji-maharaj.jpg"
                    alt="Chhatrapati Shivaji Maharaj"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  // Fallback when image doesn't load
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-sandstone-700 to-sandstone-900">
                    <div className="text-center p-8">
                      <div className="text-8xl mb-4">⚔️</div>
                      <p className={`text-heritage-gold font-bold text-xl mb-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                        {language === 'mr' ? 'छत्रपती शिवाजी महाराज' : 'Chhatrapati Shivaji Maharaj'}
                      </p>
                      <p className="text-sandstone-400 text-sm">
                        {language === 'mr' ? '१६३०-१६८०' : '1630-1680'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quotes */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.legacy.quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-sandstone-800/50 backdrop-blur-sm p-8 rounded-lg border border-heritage-gold/20 hover:border-heritage-gold/50 transition-all duration-300 h-full">
                {/* Quote mark */}
                <div className="text-6xl text-heritage-gold/30 font-serif leading-none mb-4">"</div>
                
                <p className={`text-lg text-sandstone-100 mb-6 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                  {language === 'mr' ? quote.mr : quote.en}
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-12 h-0.5 bg-heritage-gold" />
                  <p className={`text-sm text-heritage-gold font-semibold ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                    {quote.author}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '26', label: language === 'mr' ? 'वर्षे राज्य' : 'Years of Rule' },
            { number: '350+', label: language === 'mr' ? 'किल्ले' : 'Forts' },
            { number: '1674', label: language === 'mr' ? 'राज्याभिषेक' : 'Coronation' },
            { number: '∞', label: language === 'mr' ? 'प्रेरणा' : 'Inspiration' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-heritage-gold/10 rounded-lg border border-heritage-gold/20"
            >
              <div className={`text-4xl md:text-5xl font-bold text-heritage-gold mb-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                {stat.number}
              </div>
              <div className={`text-sandstone-300 text-sm ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}