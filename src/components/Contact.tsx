import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_INFO } from '../constants';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-dark-card">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-serif font-bold mb-8">Nous <span className="gold-text">Trouver</span></h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="text-gold shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">Adresse</h4>
                <p className="text-gray-400">{RESTAURANT_INFO.address}</p>
                <p className="text-gray-500 text-sm mt-1">Quartier Fann – Point E – Amitié</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Phone className="text-gold shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">Téléphone</h4>
                <p className="text-gray-400">{RESTAURANT_INFO.phone}</p>
                <p className="text-gray-500 text-sm mt-1">Appel direct ou WhatsApp</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Clock className="text-gold shrink-0" size={24} />
              <div>
                <h4 className="font-bold mb-1">Horaires</h4>
                <p className="text-gray-400">{RESTAURANT_INFO.hours}</p>
                <p className="text-gold text-sm font-bold mt-1 uppercase tracking-widest">Ouvert tard à Dakar 🔥</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="h-[400px] rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.2123456789!2d-17.4589!3d14.6937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzM3LjMiTiAxN8KwMjcnMzIuMCJX!5e0!3m2!1sfr!2ssn!4v1234567890" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
