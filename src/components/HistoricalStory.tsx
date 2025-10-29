'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Language } from '@/types';
import { content } from '@/data/content';
import { timelineEvents } from '@/data/timeline';

interface HistoricalStoryProps {
  language: Language;
}

export default function HistoricalStory({ language }: HistoricalStoryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative py-20 bg-gradient-to-b from-heritage-brown to-sandstone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-heritage-gold mb-4 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
            {language === 'mr' ? content.story.title : content.story.titleEn}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-heritage-gold" />
            <div className="w-3 h-3 bg-heritage-gold rotate-45" />
            <div className="w-16 h-0.5 bg-heritage-gold" />
          </div>
        </motion.div>

        {/* Story Paragraphs */}
        <div className="space-y-12 mb-20">
          {content.story.paragraphs.map((para, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <p className={`text-lg md:text-xl text-sandstone-100 leading-relaxed text-center ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                {language === 'mr' ? para.mr : para.en}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <h3 className={`text-3xl md:text-4xl font-bold text-heritage-gold text-center mb-12 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
            {language === 'mr' ? 'ऐतिहासिक वेळापत्रक' : 'Historical Timeline'}
          </h3>
          
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-heritage-gold/30 hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-sandstone-800/50 backdrop-blur-sm p-6 rounded-lg border border-heritage-gold/20 hover:border-heritage-gold/50 transition-all duration-300">
                    <h4 className={`text-2xl font-bold text-saffron-400 mb-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                      {language === 'mr' ? event.title : event.titleEn}
                    </h4>
                    <p className={`text-sandstone-200 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                      {language === 'mr' ? event.description : event.descriptionEn}
                    </p>
                  </div>
                </div>

                {/* Year badge */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 bg-heritage-gold rounded-full flex items-center justify-center shadow-lg border-4 border-heritage-brown animate-glow">
                    <span className={`text-2xl font-bold text-heritage-brown ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}