'use client';

import { motion } from 'framer-motion';
import { Language } from '@/types';

interface FortIllustrationProps {
  language: Language;
}

export default function FortIllustration({ language }: FortIllustrationProps) {
  return (
    <div className="w-full h-full bg-gradient-to-b from-sandstone-800 to-sandstone-900 flex items-center justify-center relative overflow-hidden">
      {/* Sun/Moon */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 right-20 w-24 h-24 bg-heritage-gold rounded-full shadow-2xl"
        style={{ boxShadow: '0 0 60px rgba(255, 215, 0, 0.5)' }}
      />

      {/* Mountains/Hills Background */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 400" className="w-full">
          <motion.path
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ duration: 1 }}
            d="M0,300 Q300,200 600,250 T1200,280 L1200,400 L0,400 Z"
            fill="#5D4E37"
          />
          <motion.path
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            d="M0,320 Q400,240 800,290 T1200,310 L1200,400 L0,400 Z"
            fill="#726656"
          />
        </svg>
      </div>

      {/* Fort Structure */}
      <div className="relative z-10">
        {/* Base */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Main Fort Body */}
          <div className="relative w-96 h-64 bg-gradient-to-b from-sandstone-600 to-sandstone-700 rounded-t-lg border-4 border-heritage-gold/30">
            {/* Battlements */}
            <div className="absolute -top-4 left-0 right-0 flex justify-around">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="w-10 h-8 bg-sandstone-600 border-2 border-heritage-gold/20"
                />
              ))}
            </div>

            {/* Central Tower */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-24 h-40 bg-gradient-to-b from-sandstone-500 to-sandstone-600 border-4 border-heritage-gold/30 rounded-t-lg"
            >
              {/* Flag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2"
              >
                <div className="w-1 h-16 bg-heritage-gold" />
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-0 left-1 w-12 h-8 bg-saffron-500 rounded-r"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)'
                  }}
                />
              </motion.div>

              {/* Tower Windows */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 w-6 h-8 bg-sandstone-900 rounded-t-lg" />
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-6 h-8 bg-sandstone-900 rounded-t-lg" />
            </motion.div>

            {/* Side Towers */}
            {[-1, 1].map((side, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + idx * 0.2 }}
                className="absolute top-0 w-16 h-32 bg-gradient-to-b from-sandstone-500 to-sandstone-600 border-4 border-heritage-gold/30 rounded-t-lg"
                style={{ [side > 0 ? 'right' : 'left']: '-20px' }}
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-6 bg-sandstone-900 rounded-t-lg" />
              </motion.div>
            ))}

            {/* Main Gate */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-32 bg-sandstone-900 rounded-t-xl border-4 border-heritage-bronze"
            >
              {/* Gate details */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-heritage-gold rounded-full" />
            </motion.div>

            {/* Windows */}
            {[
              { top: '30%', left: '25%' },
              { top: '30%', right: '25%' },
              { top: '50%', left: '15%' },
              { top: '50%', right: '15%' },
            ].map((pos, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 + idx * 0.1 }}
                className="absolute w-4 h-6 bg-sandstone-900 rounded-t-lg"
                style={pos}
              />
            ))}
          </div>

          {/* Fort Name Plaque */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-heritage-gold px-8 py-3 rounded-lg border-4 border-heritage-bronze shadow-xl"
          >
            <p className={`text-heritage-brown font-bold text-xl ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
              {language === 'mr' ? 'राजगड' : 'Raajgadh'}
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-heritage-gold rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
      >
        <p className={`text-heritage-gold text-sm ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
          {language === 'mr' ? 'राजगड किल्ल्याचे दृश्य' : 'Raajgadh Fort Illustration'}
        </p>
      </motion.div>
    </div>
  );
}