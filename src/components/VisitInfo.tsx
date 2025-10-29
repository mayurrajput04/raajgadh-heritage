'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Navigation, Mountain } from 'lucide-react';
import { Language } from '@/types';
import { content } from '@/data/content';
import QRCodeGenerator from './QRCodeGenerator';

interface VisitInfoProps {
  language: Language;
}

export default function VisitInfo({ language }: VisitInfoProps) {
  const icons = [MapPin, Clock, Navigation, Mountain];

  // Raajgadh Fort Coordinates
  const latitude = 18.2342;
  const longitude = 73.4375;
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.123456789!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8087b80000001%3A0x123456789!2sRaigad%20Fort!5e0!3m2!1sen!2sin!4v1234567890`;

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
            {language === 'mr' ? content.visit.title : content.visit.titleEn}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-heritage-gold" />
            <div className="w-3 h-3 bg-heritage-gold rotate-45" />
            <div className="w-16 h-0.5 bg-heritage-gold" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Visit Info Cards */}
          <div className="space-y-6">
            {content.visit.info.map((item, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-sandstone-800/50 backdrop-blur-sm p-6 rounded-lg border border-heritage-gold/20 hover:border-heritage-gold/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-heritage-gold/20 rounded-full flex items-center justify-center">
                      <Icon className="text-heritage-gold" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold text-heritage-gold mb-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                        {language === 'mr' ? item.label : item.labelEn}
                      </h3>
                      <p className={`text-sandstone-200 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                        {language === 'mr' ? item.value : item.valueEn}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-video bg-sandstone-800 rounded-lg border-2 border-heritage-gold/20 overflow-hidden"
            >
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Raajgadh Fort Location"
              />
            </motion.div>

            {/* Direct Google Maps Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-heritage-gold text-heritage-brown px-6 py-3 rounded-lg font-semibold hover:bg-saffron-400 transition-colors"
              >
                <Navigation size={20} />
                <span className={language === 'mr' ? 'font-marathi' : 'font-english'}>
                  {language === 'mr' ? 'मार्गदर्शन मिळवा' : 'Get Directions'}
                </span>
              </a>
            </motion.div>
          </div>

          {/* QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <QRCodeGenerator language={language} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}