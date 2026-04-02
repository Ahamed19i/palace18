import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { ReservationForm } from './components/ReservationForm';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton, MobileStickyCTA } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <MenuSection />
      <ReservationForm />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </div>
  );
}
