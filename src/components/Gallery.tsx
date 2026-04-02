import React from 'react';
import { motion } from 'motion/react';
import { Camera, Instagram } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">L'Ambiance <span className="gold-text">Swiss Palace</span></h2>
            <p className="text-gray-400">Aperçu de notre univers chic et branché.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-gold font-bold hover:underline">
            Suivre sur Instagram <Instagram size={20} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.gallery.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-2xl overflow-hidden relative group"
            >
              <img 
                src={img} 
                alt="Swiss Palace Gallery" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
