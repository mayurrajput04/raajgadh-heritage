'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Language } from '@/types';

interface FortShowcaseProps {
  language: Language;
}

const fortImages = [
  {
    src: '/images/gallery/gallery-1.jpg',
    title: 'राजगड किल्ला',
    titleEn: 'Raajgadh Fort',
    description: 'मुख्य किल्ल्याचे दृश्य',
    descriptionEn: 'Main fort view'
  },
  {
    src: '/images/gallery/gallery-2.jpg',
    title: 'समाधी',
    titleEn: 'Samadhi',
    description: 'सर्वोच्च बुरुज',
    descriptionEn: 'Highest bastion'
  },
  {
    src: '/images/gallery/gallery-3.jpg',
    title: 'नगरखाना दरवाजा',
    titleEn: 'Nagarkhana Darvaja',
    description: 'पवित्र मंदिर',
    descriptionEn: ''
  },
  {
    src: '/images/timeline/event-1.jpg',
    title: 'ऐतिहासिक दृश्य',
    titleEn: 'Historical View',
    description: 'राजगडाचा इतिहास',
    descriptionEn: 'History of Raajgadh'
  },
];

export default function FortShowcase({ language }: FortShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fortImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + fortImages.length) % fortImages.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % fortImages.length);
  };

  const currentImage = fortImages[currentIndex];

  return (
    <div className="w-full h-full bg-gradient-to-b from-sandstone-800 to-sandstone-900 relative overflow-hidden">
      {/* Main Image Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={currentImage.src}
            alt={language === 'mr' ? currentImage.title : currentImage.titleEn}
            fill
            className="object-cover"
            sizes="100vw"
            priority={currentIndex === 0}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown via-heritage-brown/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
        {/* Top Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-start"
        >
          <div className="bg-heritage-brown/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-heritage-gold/30">
            <p className={`text-heritage-gold text-sm ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? 'राजगड किल्ल्याचे दृश्य' : 'Raajgadh Fort Views'}
            </p>
          </div>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="bg-heritage-brown/80 backdrop-blur-sm p-3 rounded-lg border border-heritage-gold/30 hover:bg-heritage-brown transition-colors"
          >
            <Maximize2 className="text-heritage-gold" size={20} />
          </button>
        </motion.div>

        {/* Bottom Info */}
        <div>
          {/* Image Info */}
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h3 className={`text-3xl md:text-4xl font-bold text-heritage-gold mb-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? currentImage.title : currentImage.titleEn}
            </h3>
            <p className={`text-lg text-sandstone-200 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? currentImage.description : currentImage.descriptionEn}
            </p>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={goToPrevious}
                className="bg-heritage-gold/20 backdrop-blur-sm p-3 rounded-full border border-heritage-gold/30 hover:bg-heritage-gold/30 transition-colors"
              >
                <ChevronLeft className="text-heritage-gold" size={24} />
              </button>
              <button
                onClick={goToNext}
                className="bg-heritage-gold/20 backdrop-blur-sm p-3 rounded-full border border-heritage-gold/30 hover:bg-heritage-gold/30 transition-colors"
              >
                <ChevronRight className="text-heritage-gold" size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {fortImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-heritage-gold'
                      : 'w-2 bg-heritage-gold/30 hover:bg-heritage-gold/50'
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="bg-heritage-brown/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-heritage-gold/30">
              <p className="text-heritage-gold text-sm font-mono">
                {currentIndex + 1} / {fortImages.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-heritage-gold to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-heritage-gold to-transparent opacity-50" />
    </div>
  );
}