import React, { useState } from 'react';
import { Star, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

export const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bonjour Swiss Palace, je souhaite réserver une table :\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nDate: ${formData.date}\nHeure: ${formData.time}\nPersonnes: ${formData.guests}`;
    window.open(`https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="reservation" className="py-24 px-6 bg-dark-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Réservez votre <span className="gold-text">Expérience</span></h2>
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            Évitez l'attente et assurez-vous une place dans le lounge le plus prisé du Point E. Idéal pour vos dîners entre amis, anniversaires ou soirées foot.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Star size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Ambiance Premium</h4>
                <p className="text-gray-400 text-sm">Un cadre moderne et chaleureux pour toutes vos occasions.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg">Ouvert Tard</h4>
                <p className="text-gray-400 text-sm">Nous vous accueillons jusqu'à 04h00 du matin tous les jours.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 md:p-12 rounded-3xl border-gold/20">
          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Nom complet</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all text-sm"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Téléphone</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all text-sm"
                  placeholder="+221 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all text-sm"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Heure</label>
                <input 
                  type="time" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all text-sm"
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                />
              </div>
              <div className="space-y-2 col-span-2 md:col-span-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Personnes</label>
                <select 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-gold outline-none transition-all text-sm"
                  value={formData.guests}
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                >
                  {[1,2,3,4,5,6,7,8,10].map(n => <option key={n} value={n} className="bg-black">{n} Personnes</option>)}
                  <option value="10+" className="bg-black">10+ Personnes</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 gold-gradient text-black font-extrabold rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-gold/20 text-sm tracking-widest"
            >
              CONFIRMER LA RÉSERVATION
            </button>
            <p className="text-center text-[10px] text-gray-500 uppercase tracking-widest">Confirmation instantanée via WhatsApp</p>
          </form>
        </div>
      </div>
    </section>
  );
};
