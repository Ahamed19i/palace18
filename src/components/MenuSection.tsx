import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO, MENU_CATEGORIES } from '../constants';
import { cn } from '../lib/utils';

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  return (
    <section id="menu" className="py-24 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Notre <span className="gold-text">Carte</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Une fusion de saveurs libanaises et internationales préparées avec passion par nos chefs.</p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto md:justify-center gap-4 mb-12 pb-4 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-8 py-3 rounded-full text-xs font-bold transition-all border whitespace-nowrap tracking-widest",
                activeCategory === cat.id 
                  ? "gold-gradient text-black border-gold shadow-lg shadow-gold/20" 
                  : "bg-white/5 text-gray-400 border-white/10 hover:border-gold/50"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {MENU_CATEGORIES.find(c => c.id === activeCategory)?.items.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-effect rounded-3xl overflow-hidden group hover:border-gold/30 transition-all flex flex-col"
              >
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                    <span className="text-gold font-bold text-sm font-serif">{item.price}</span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{item.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">{item.description}</p>
                  <button 
                    onClick={() => window.open(`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(`Bonjour, je souhaite commander : ${item.name}`)}`, '_blank')}
                    className="w-full py-3 border border-gold/30 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-black transition-all"
                  >
                    Commander
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <a 
            href={RESTAURANT_INFO.whatsapp} 
            className="inline-flex items-center gap-2 text-gold font-bold hover:underline"
          >
            Commander via WhatsApp <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
