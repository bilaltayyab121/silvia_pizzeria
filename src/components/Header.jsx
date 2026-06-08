import React from 'react';
import { ShoppingCart } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ language, setLanguage, whatsappNumber, cartCount, onCartClick }) {
  const navItems = [
    { label: 'About', href: '#about', fr: 'À propos' },
    { label: 'Menu', href: '#menu', fr: 'Menu' },
    { label: 'Why', href: '#why', fr: 'Pourquoi' },
    { label: 'Location', href: '#location', fr: 'Emplacement' },
    { label: 'Contact', href: '#contact', fr: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-italian-cream/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#home" className="font-heading text-xl font-bold text-slate-900">Silvia Pizzeria</a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="transition hover:text-italian-red"
            >
              {language === 'fr' ? item.fr : item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          
          <button 
            onClick={onCartClick}
            className="relative rounded-full border border-slate-200 bg-white p-2 text-slate-700 transition hover:bg-slate-50"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-italian-red text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank" 
            rel="noreferrer" 
            className="hidden rounded-full bg-italian-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 md:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
