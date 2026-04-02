import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black text-center">
      <div className="max-w-7xl mx-auto">
        <span className="text-xl md:text-2xl font-serif font-bold gold-text tracking-tighter mb-4 block">SWISS PALACE</span>
        <p className="text-gray-500 text-sm mb-8">© {new Date().getFullYear()} Swiss Palace Dakar. Tous droits réservés.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          <a href="#" className="hover:text-gold transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-gold transition-colors">Politique de Confidentialité</a>
          <a href="#" className="hover:text-gold transition-colors">SEO par Agence Digitale</a>
        </div>
      </div>
    </footer>
  );
};
