'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MapPin, X, Map } from 'lucide-react';
import { Language } from '@/types';
import { content } from '@/data/content';
import { fortLocations } from '@/data/fortLocations';
import FortShowcase from './FortShowcase';

interface ExploreFortProps {
  language: Language;
}

// Component for individual location card with image error handling
function LocationCard({ location, language, onClick }: { 
  location: typeof fortLocations[0], 
  language: Language,
  onClick: () => void 
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="bg-sandstone-800/50 backdrop-blur-sm rounded-lg border border-heritage-gold/20 hover:border-heritage-gold/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-heritage-gold/20">
        {/* Location Image */}
        <div className="aspect-video relative bg-sandstone-900 overflow-hidden">
          {!imageError ? (
            <>
              <Image
                src={`/images/locations/${location.id}.jpg`}
                alt={language === 'mr' ? location.name : location.nameEn}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
                onError={() => setImageError(true)}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown via-heritage-brown/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </>
          ) : (
            // Fallback when image doesn't load
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sandstone-800 to-sandstone-900">
              <div className="text-center p-4">
                <div className="text-6xl mb-2">🏰</div>
                <p className={`text-heritage-gold font-semibold text-sm ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                  {language === 'mr' ? location.name : location.nameEn}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Location Info */}
        <div className="p-6">
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
      </div>
    </div>
  );
}

export default function ExploreFort({ language }: ExploreFortProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [mapError, setMapError] = useState(false);
  const [modalImageError, setModalImageError] = useState(false);

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

        {/* Fort Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-sandstone-800/50 backdrop-blur-sm p-8 rounded-lg border border-heritage-gold/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-2xl md:text-3xl font-bold text-heritage-gold ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                {language === 'mr' ? 'किल्ल्याचा नकाशा' : 'Fort Map'}
              </h3>
              <button
                onClick={() => setShowMap(!showMap)}
                className="flex items-center gap-2 bg-heritage-gold text-heritage-brown px-4 py-2 rounded-lg hover:bg-saffron-400 transition-colors"
              >
                <Map size={20} />
                <span className={`font-semibold ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                  {showMap ? (language === 'mr' ? 'नकाशा लपवा' : 'Hide Map') : (language === 'mr' ? 'नकाशा पहा' : 'View Map')}
                </span>
              </button>
            </div>

            <AnimatePresence>
              {showMap && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-sandstone-900 rounded-lg overflow-hidden border-2 border-heritage-gold/30 relative">
                    {!mapError ? (
                      <Image
                        src="/images/fort-map/rajgad-map.jpg"
                        alt="Rajgad Fort Map"
                        fill
                        className="object-contain bg-white"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        onError={() => setMapError(true)}
                      />
                    ) : (
                      // Fallback if map not available
                      <div className="absolute inset-0 flex items-center justify-center bg-sandstone-800">
                        <div className="text-center p-8">
                          <Map className="text-heritage-gold mx-auto mb-4" size={64} />
                          <p className={`text-heritage-gold text-lg ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                            {language === 'mr' ? 'किल्ल्याचा नकाशा' : 'Fort Layout Map'}
                          </p>
                          <p className="text-sandstone-400 text-sm mt-2">
                            {language === 'mr' ? 'नकाशा लवकरच येईल' : 'Map coming soon'}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <p className={`text-sandstone-300 text-sm mt-4 text-center ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                    {language === 'mr' 
                      ? 'स्रोत: विकिपीडिया | राजगड किल्ल्याचा संरचनात्मक नकाशा'
                      : 'Source: Wikipedia | Structural map of Rajgad Fort'}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Interactive Location Grid */}
        <div>
          <h3 className={`text-3xl font-bold text-heritage-gold text-center mb-8 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
            {language === 'mr' ? 'किल्ल्यावरील महत्त्वाची ठिकाणे' : 'Important Locations on Fort'}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fortLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <LocationCard
                  location={location}
                  language={language}
                  onClick={() => {
                    setSelectedLocation(location.id);
                    setModalImageError(false); // Reset modal image error
                  }}
                />
              </motion.div>
            ))}
          </div>
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
                className="bg-heritage-brown border-2 border-heritage-gold rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
              >
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="absolute top-4 right-4 text-heritage-gold hover:text-saffron-400 transition-colors z-10"
                >
                  <X size={24} />
                </button>

                {/* Location Image in Modal */}
                <div className="aspect-video bg-sandstone-900 rounded-lg overflow-hidden mb-6 relative">
                  {!modalImageError ? (
                    <Image
                      src={`/images/locations/${currentLocation.id}.jpg`}
                      alt={language === 'mr' ? currentLocation.name : currentLocation.nameEn}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                      onError={() => setModalImageError(true)}
                    />
                  ) : (
                    // Fallback in modal
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sandstone-800 to-sandstone-900">
                      <div className="text-center p-8">
                        <div className="text-8xl mb-4">🏰</div>
                        <p className={`text-heritage-gold text-xl ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                          {language === 'mr' ? currentLocation.name : currentLocation.nameEn}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}