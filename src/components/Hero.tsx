'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Language } from '@/types';
import { content } from '@/data/content';

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 30 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${3 + Math.random() * 2}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background Image Layer - Z-0 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/fort-hero.jpg"
          alt="Raajgadh Fort"
          fill
          priority
          quality={90}
          className="object-cover"
        />
      </div>

      {/* Dark Overlay - Z-1 */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-heritage-brown/70 to-heritage-brown/90" />

      {/* Particles Layer - Z-2 */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-[2] pointer-events-none"
      >
        <div className="absolute inset-0 opacity-30">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-heritage-gold rounded-full animate-float"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content Layer - Z-10 */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-6 max-w-5xl"
        >
          <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-heritage-gold drop-shadow-2xl ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
            {language === 'mr' ? content.hero.title : content.hero.titleEn}
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-white drop-shadow-lg max-w-3xl mx-auto ${language === 'mr' ? 'font-marathi' : 'font-english'}`}
          >
            {language === 'mr' ? content.hero.subtitle : content.hero.subtitleEn}
          </motion.p>

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
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
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