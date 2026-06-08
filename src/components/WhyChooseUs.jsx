import React from 'react';
import { Sparkles, MapPin, Ticket, Truck } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function WhyChooseUs({ language }) {
  const features = [
    { 
      icon: Sparkles, 
      title: language === 'fr' ? 'Ingrédients frais' : 'Fresh Ingredients', 
      text: language === 'fr' ? 'Mozzarella premium, tomates mûres.' : 'Premium mozzarella, ripe tomatoes, and fragrant herbs in each dish.' 
    },
    { 
      icon: MapPin, 
      title: language === 'fr' ? 'Vue sur la mer' : 'Sea View', 
      text: language === 'fr' ? "Profitez d'une belle ambiance océanique." : 'Enjoy your meal with a beautiful ocean atmosphere by Casino plage.' 
    },
    { 
      icon: Ticket, 
      title: language === 'fr' ? 'Service sympathique' : 'Friendly Service', 
      text: language === 'fr' ? 'Silvia et Jalal vous accueillent chaleureusement.' : 'Silvia and Jalal welcome you with care and Italian warmth.' 
    },
    { 
      icon: Truck, 
      title: language === 'fr' ? 'Livraison rapide' : 'Fast Delivery', 
      text: language === 'fr' ? 'Commandez via WhatsApp ou Yassir.' : 'Order via WhatsApp or Yassir and receive hot food quickly.' 
    },
  ];

  return (
    <section id="why" className="mt-20 rounded-[40px] border border-slate-200 bg-white px-6 py-12 shadow-soft sm:px-10">
      <SectionTitle 
        number="03" 
        title={language === 'fr' ? 'Pourquoi nous choisir' : 'Why choose us'} 
        description={language === 'fr' ? "Découvrez pourquoi Silvia Pizzeria est appréciée." : 'Experience what makes Silvia Pizzeria a favorite destination for Italian food in Témara.'} 
      />
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-[28px] border border-slate-200 bg-italian-cream p-6">
            <feature.icon className="h-6 w-6 text-italian-red" />
            <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
