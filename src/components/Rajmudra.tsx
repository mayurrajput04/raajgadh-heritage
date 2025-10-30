'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Language } from '@/types';

interface RajmudraProps {
  language: Language;
}

export default function Rajmudra({ language }: RajmudraProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative py-20 bg-gradient-to-b from-heritage-brown to-sandstone-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `radial-gradient(circle, #FFD700 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
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
            {language === 'mr' ? 'राजमुद्रा' : 'Royal Seal (Rajmudra)'}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-heritage-gold" />
            <div className="w-3 h-3 bg-heritage-gold rotate-45" />
            <div className="w-16 h-0.5 bg-heritage-gold" />
          </div>
          <p className={`text-sandstone-300 mt-6 max-w-3xl mx-auto text-lg ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
            {language === 'mr' 
              ? 'छत्रपती शिवाजी महाराजांची अधिकृत राजमुद्रा'
              : 'The official royal seal of Chhatrapati Shivaji Maharaj'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Rajmudra Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-saffron-600 via-heritage-gold to-saffron-600 rounded-lg blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000 animate-glow"></div>
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-heritage-brown to-sandstone-900 rounded-lg p-4 border-4 border-heritage-gold">
                <div className="aspect-square bg-white rounded-lg overflow-hidden relative">
                  {!imageError ? (
                    <Image
                      src="/images/rajmudra/rajmudra.jpg"
                      alt="Rajmudra - Royal Seal of Chhatrapati Shivaji Maharaj"
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    // Fallback
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-saffron-100 to-heritage-gold/20">
                      <div className="text-center p-8">
                        <div className="text-8xl mb-4">🕉️</div>
                        <p className={`text-heritage-brown font-bold text-xl mb-2 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                          {language === 'mr' ? 'राजमुद्रा' : 'Rajmudra'}
                        </p>
                        <p className="text-sandstone-700 text-sm font-marathi">
                          शिवाजी राजे
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Sanskrit Shloka */}
            <div className="bg-sandstone-800/50 backdrop-blur-sm p-8 rounded-lg border border-heritage-gold/20">
              <h3 className={`text-2xl font-bold text-heritage-gold mb-4 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                {language === 'mr' ? 'संस्कृत श्लोक' : 'Sanskrit Verse'}
              </h3>
              <p className="text-xl text-sandstone-100 font-marathi leading-relaxed mb-4">
                प्रतिपच्चंद्रलेखेव वर्धिष्णुर्विश्ववंदिता । <br />
               शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते ।।
              </p>
              <div className="w-full h-px bg-heritage-gold/30 my-4"></div>
              <p className={`text-lg text-sandstone-200 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                {language === 'mr' 
                  ? '"प्रतिपदेच्या चंद्रकलेप्रमाणे प्रतिदिवस वृद्धिंगत होणारी, जगाला वंदनीय असणारी शाहपुत्र शिवाजीची ही मुद्रा मांगल्यासाठी शोभत आहे."'
                  : '"Growing like the crescent moon and worshipped by the world, this seal of Shivaji, son of Shahaji, shines for the welfare of all."'}
              </p>
            </div>

            {/* Meaning */}
            <div className="bg-sandstone-800/50 backdrop-blur-sm p-8 rounded-lg border border-heritage-gold/20">
              <h3 className={`text-2xl font-bold text-heritage-gold mb-4 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                {language === 'mr' ? 'राजमुद्रेचे महत्त्व' : 'Significance of Rajmudra'}
              </h3>
              <ul className={`space-y-3 text-sandstone-200 ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                <li className="flex items-start gap-3">
                  <span className="text-heritage-gold text-xl">•</span>
                  <span>{language === 'mr' 
                    ? 'सर्व अधिकृत शाही आदेश आणि पत्रे या राजमुद्रेने सिद्ध केले जात'
                    : 'All official royal orders and letters were authenticated with this seal'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-heritage-gold text-xl">•</span>
                  <span>{language === 'mr' 
                    ? 'संस्कृत भाषेत रचलेली ही राजमुद्रा शिवाजी महाराजांच्या विद्वत्तेची साक्ष देते'
                    : 'This Sanskrit seal reflects Shivaji Maharaj\'s scholarship'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-heritage-gold text-xl">•</span>
                  <span>{language === 'mr' 
                    ? 'मराठा साम्राज्याची स्वतंत्र ओळख या राजमुद्रेत दिसून येते'
                    : 'The independent identity of Maratha Empire is evident in this seal'}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-heritage-gold text-xl">•</span>
                  <span>{language === 'mr' 
                    ? 'सर्व जनतेच्या कल्याणाची भावना या श्लोकात व्यक्त झाली आहे'
                    : 'The welfare of all people is expressed in this verse'}</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}