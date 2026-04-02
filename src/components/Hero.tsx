import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Utensils, Clock, MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';
import { IMAGES } from '../assets/images';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Swiss Palace Ambiance" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <span className="inline-block px-4 py-1 border border-gold text-gold text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 md:mb-8 rounded-full bg-gold/5">
            Dakar • Point E • Lounge
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-serif font-bold mb-6 md:mb-8 leading-tight tracking-tight">
            L'Élégance <br /> <span className="gold-text">Culinaire</span>
          </h1>
          <p className="text-sm md:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Le rendez-vous incontournable de Dakar pour savourer, sortir et se détendre. Cuisine du monde, ambiance chic et service d'exception.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-20">
            <a 
              href="#reservation" 
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 gold-gradient text-black font-extrabold rounded-full hover:scale-105 transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-3 text-base md:text-lg tracking-wide"
            >
              <Calendar size={20} />
              RÉSERVER UNE TABLE
            </a>
            <a 
              href="#menu" 
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white font-extrabold rounded-full hover:bg-white/15 transition-all flex items-center justify-center gap-3 text-base md:text-lg tracking-wide"
            >
              <Utensils size={20} />
              VOIR LE MENU
            </a>
          </div>
        </motion.div>

        {/* Elegant Info Display */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-4xl border-t border-white/10 pt-8 md:pt-10"
        >
          <div className="flex flex-row md:flex-col items-center justify-center gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0">
              <Clock size={18} />
            </div>
            <div className="text-left md:text-center">
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-0.5 md:mb-1">Horaires</p>
              <p className="text-xs md:text-sm font-medium text-gray-200">{RESTAURANT_INFO.hours}</p>
            </div>
          </div>
          
          <div className="flex flex-row md:flex-col items-center justify-center gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0">
              <MapPin size={18} />
            </div>
            <div className="text-left md:text-center">
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-0.5 md:mb-1">Localisation</p>
              <p className="text-xs md:text-sm font-medium text-gray-200">{RESTAURANT_INFO.address}</p>
            </div>
          </div>

          <div className="flex flex-row md:flex-col items-center justify-center gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform shrink-0">
              <Phone size={18} />
            </div>
            <div className="text-left md:text-center">
              <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-0.5 md:mb-1">Contact</p>
              <p className="text-xs md:text-sm font-medium text-gray-200 whitespace-nowrap">{RESTAURANT_INFO.phone}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
