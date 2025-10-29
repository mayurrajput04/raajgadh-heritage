'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Language } from '@/types';

interface GalleryProps {
  language: Language;
}

const galleryImages = [
  { id: 1, src: '/images/gallery/gallery-1.jpg', alt: 'Raajgadh Fort View 1', title: 'राजगड किल्ला', titleEn: 'Raajgadh Fort' },
  { id: 2, src: '/images/gallery/gallery-2.jpg', alt: 'Raajgadh Fort View 2', title: 'समाधी', titleEn: 'Samadhi' },
  { id: 3, src: '/images/gallery/gallery-3.jpg', alt: 'Raajgadh Fort View 3', title: 'नगरखाना दरवाजा', titleEn: 'Nagarkhana Darvaja' },
  { id: 4, src: '/images/gallery/gallery-4.jpg', alt: 'Raajgadh Fort View 4', title: 'महादरवाजा', titleEn: 'Maha Darwaja' },
  { id: 5, src: '/images/gallery/gallery-5.jpg', alt: 'Raajgadh Fort View 5', title: 'जगदीश्वर मंदिर', titleEn: 'jagdishwar temple' },
  { id: 6, src: '/images/gallery/gallery-6.jpg', alt: 'Raajgadh Fort View 6', title: 'टाकमक टोक', titleEn: 'Takmak Tok' },
];

export default function Gallery({ language }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="relative py-20 bg-gradient-to-b from-sandstone-900 to-heritage-brown">
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
            {language === 'mr' ? 'दृश्य संग्रह' : 'Gallery'}
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-0.5 bg-heritage-gold" />
            <div className="w-3 h-3 bg-heritage-gold rotate-45" />
            <div className="w-16 h-0.5 bg-heritage-gold" />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image.id)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-heritage-gold/20 hover:border-heritage-gold/50 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-heritage-brown via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className={`text-heritage-gold font-semibold ${language === 'mr' ? 'font-marathi' : 'font-english'}`}>
                    {language === 'mr' ? image.title : image.titleEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-heritage-gold transition-colors z-10"
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative w-full h-full max-w-6xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {galleryImages.find(img => img.id === selectedImage) && (
                  <Image
                    src={galleryImages.find(img => img.id === selectedImage)!.src}
                    alt={galleryImages.find(img => img.id === selectedImage)!.alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                )}
              </motion.div>

              {/* Navigation */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(prev => prev! > 1 ? prev! - 1 : galleryImages.length);
                  }}
                  className="bg-heritage-gold text-heritage-brown px-6 py-2 rounded-lg hover:bg-saffron-400 transition-colors"
                >
                  {language === 'mr' ? 'मागील' : 'Previous'}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(prev => prev! < galleryImages.length ? prev! + 1 : 1);
                  }}
                  className="bg-heritage-gold text-heritage-brown px-6 py-2 rounded-lg hover:bg-saffron-400 transition-colors"
                >
                  {language === 'mr' ? 'पुढील' : 'Next'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}