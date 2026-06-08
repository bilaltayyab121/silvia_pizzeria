import React from 'react';
import { Sparkles, MapPin, Truck, Wheat } from 'lucide-react';
import SectionTitle from './SectionTitle';

export default function About({ language }) {
  return (
    <section id="about" className="mt-20 rounded-[40px] border border-slate-200 bg-white px-6 py-12 shadow-soft sm:px-10">
      <SectionTitle
        number="01"
        title={language === 'fr' ? 'À propos de Silvia & Jalal' : 'About Silvia & Jalal'}
        description={language === 'fr' ? "Silvia Pizzeria est un restaurant familial où chaque pizza est préparée avec des ingrédients frais." : 'Silvia Pizzeria is a family-run restaurant where every pizza is made with fresh ingredients and every guest is welcomed like home.'}
      />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6 text-slate-700">
          <p>{language === 'fr' ? 'Silvia et Jalal ont ouvert Silvia Pizzeria pour apporter le confort italien classique à Témara.' : 'Silvia and Jalal opened Silvia Pizzeria to bring classic Italian comfort to Témara with a bright seaside atmosphere.'}</p>
        </div>
        <div className="space-y-4 rounded-[32px] bg-italian-cream p-6 text-slate-900 shadow-soft">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-italian-red" />
            <span className="font-semibold">{language === 'fr' ? 'Ingrédients frais' : 'Fresh Ingredients'}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-italian-green" />
            <span className="font-semibold">{language === 'fr' ? 'Vue sur la mer' : 'Sea View Location'}</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-6 w-6 text-italian-red" />
            <span className="font-semibold">{language === 'fr' ? 'Livraison avec Yassir' : 'Delivery with Yassir'}</span>
          </div>
          <div className="flex items-center gap-3">
            <Wheat className="h-6 w-6 text-italian-green" />
            <span className="font-semibold">{language === 'fr' ? 'Spécialités' : 'House Specialties'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
