import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

export const WhatsAppButton = () => {
  return (
    <a 
      href={RESTAURANT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 md:bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
    >
      <MessageCircle size={28} className="md:hidden" />
      <MessageCircle size={32} className="hidden md:block" />
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl hidden md:block">
        Besoin d'aide ? Discutons !
      </span>
    </a>
  );
};

export const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full p-4 z-40 bg-black/80 backdrop-blur-lg border-t border-white/10">
      <a 
        href="#reservation" 
        className="w-full py-4 gold-gradient text-black font-extrabold rounded-2xl text-center shadow-2xl flex items-center justify-center gap-2 text-sm tracking-widest"
      >
        <Calendar size={18} /> RÉSERVER MAINTENANT
      </a>
    </div>
  );
};
