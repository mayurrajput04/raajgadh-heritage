'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X } from 'lucide-react';
import { Language } from '@/types';
import { content } from '@/data/content';
import { fortLocations } from '@/data/fortLocations';
import FortShowcase from './FortShowcase';


interface ExploreFortProps {
  language: Language;
}

export default function ExploreFort({ language }: ExploreFortProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const currentLocation = fortLocations.find(loc => loc.id === selectedLocation);

  return (
    <div className="relative py-20 bg-gradient-to-b from-heritage-brown to-sandstone-900">
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
            {language === 'mr' ? content.explore.title : content.explore.titleEn}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-heritage-gold" />
            <div className="w-3 h-3 bg-heritage-gold rotate-45" />
            <div className="w-16 h-0.5 bg-heritage-gold" />
          </div>
        </motion.div>

{/* Fort Showcase */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden mb-12 border-2 border-heritage-gold/30 shadow-2xl"
>
  <FortShowcase language={language} />
</motion.div>

        {/* Interactive Location Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fortLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedLocation(location.id)}
              className="group cursor-pointer"
            >
              <div className="bg-sandstone-800/50 backdrop-blur-sm p-6 rounded-lg border border-heritage-gold/20 hover:border-heritage-gold/50 transition-all duration-300 h-full hover:shadow-xl hover:shadow-heritage-gold/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-heritage-gold/20 rounded-full flex items-center justify-center group-hover:bg-heritage-gold/30 transition-colors">
                    <MapPin className="text-heritage-gold" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-heritage-gold mb-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                      {language === 'mr' ? location.name : location.nameEn}
                    </h3>
                    <p className={`text-sandstone-200 text-sm line-clamp-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                      {language === 'mr' ? location.description : location.descriptionEn}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Detail Modal */}
        <AnimatePresence>
          {currentLocation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedLocation(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-heritage-brown border-2 border-heritage-gold rounded-lg max-w-2xl w-full p-8 relative"
              >
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-4 right-4 text-heritage-gold hover:text-saffron-400 transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                    <MapPin className="text-heritage-gold" size={32} />
                  </div>
                  <h3 className={`text-3xl font-bold text-heritage-gold ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                    {language === 'mr' ? currentLocation.name : currentLocation.nameEn}
                  </h3>
                </div>

                <p className={`text-lg text-sandstone-100 leading-relaxed ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                  {language === 'mr' ? currentLocation.description : currentLocation.descriptionEn}
                </p>

                {/* Placeholder for location image */}
                <div className="mt-6 aspect-video bg-sandstone-800 rounded-lg flex items-center justify-center">
                  <p className="text-sandstone-400 text-sm">{language === 'mr' ? 'फोटो' : 'Photo'}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}