import React from 'react';
import { Phone, Instagram, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function Contact({ language }) {
  return (
    <section id="contact" className="mt-20 rounded-[40px] border border-slate-200 bg-white px-6 py-12 shadow-soft sm:px-10">
      <SectionTitle 
        number="05" 
        title={language === 'fr' ? 'Contact & Réseaux' : 'Contact & Social'} 
        description={language === 'fr' ? "Contactez Silvia Pizzeria par téléphone, Instagram ou WhatsApp." : 'Reach Silvia Pizzeria by phone, Instagram or WhatsApp for orders and table requests.'} 
      />
      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-[32px] border border-slate-200 bg-italian-cream p-6">
          <div className="flex items-center gap-3 text-italian-red">
            <Phone className="h-6 w-6" />
            <span className="font-semibold">{language === 'fr' ? 'Téléphone' : 'Phone'}</span>
          </div>
          <p className="mt-4 text-lg font-semibold text-slate-900">+212 7 76 76 82 51</p>
          <a href="tel:+212776768251" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-italian-green">
            {language === 'fr' ? 'Appeler' : 'Call now'}
          </a>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-italian-cream p-6">
          <div className="flex items-center gap-3 text-italian-red">
            <Instagram className="h-6 w-6" />
            <span className="font-semibold">Instagram</span>
          </div>
          <p className="mt-4 text-lg font-semibold text-slate-900">@silvia_pizzeria_</p>
          <a href="https://instagram.com/silvia_pizzeria_" target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-italian-green">
            {language === 'fr' ? 'Suivez-nous' : 'Follow us'}
          </a>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-italian-cream p-6">
          <div className="flex items-center gap-3 text-italian-red">
            <MapPin className="h-6 w-6" />
            <span className="font-semibold">{language === 'fr' ? 'Livraison' : 'Delivery'}</span>
          </div>
          <p className="mt-4 text-lg font-semibold text-slate-900">Yassir Delivery</p>
          <p className="mt-2 text-sm text-slate-600">
            {language === 'fr' ? "Commandez via Yassir." : 'Order hot food to your door with our preferred delivery partner.'}
          </p>
        </div>
      </div>
    </section>
  );
}
