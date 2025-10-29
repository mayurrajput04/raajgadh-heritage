'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Language } from '@/types';
import { content } from '@/data/content';

interface HeroProps {
  language: Language;
}

export default function HeroSimple({ language }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-gradient-dawn">
      {/* Background with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-heritage-brown/30 to-heritage-brown" />
        
        {/* Static decorative pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-heritage-gold rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-heritage-gold rounded-full" />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-heritage-gold rounded-full" />
          <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-heritage-gold rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-heritage-gold rounded-full" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6"
        >
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-heritage-gold drop-shadow-2xl ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
            {language === 'mr' ? content.hero.title : content.hero.titleEn}
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`text-xl md:text-2xl lg:text-3xl text-sandstone-100 max-w-3xl mx-auto ${language === 'mr' ? 'font-marathi' : 'font-english'}`}
          >
            {language === 'mr' ? content.hero.subtitle : content.hero.subtitleEn}
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <div className="w-20 h-0.5 bg-heritage-gold" />
            <div className="w-3 h-3 bg-heritage-gold rotate-45" />
            <div className="w-20 h-0.5 bg-heritage-gold" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-10"
        >
          <div className="flex flex-col items-center gap-2 text-heritage-gold">
            <span className={`text-sm ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? 'खाली स्क्रोल करा' : 'Scroll Down'}
            </span>
            <div className="w-6 h-10 border-2 border-heritage-gold rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-heritage-gold rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}