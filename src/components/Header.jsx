import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Instagram, Facebook, Globe, MessageSquare, ChevronRight } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ language, setLanguage, cartCount, onCartClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'About', href: '#about', fr: 'À propos' },
    { label: 'Menu', href: '#menu', fr: 'Menu' },
    { label: 'Why', href: '#why', fr: 'Pourquoi nous' },
    { label: 'Location', href: '#location', fr: 'Emplacement' },
    { label: 'Contact', href: '#contact', fr: 'Contact' },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-italian-cream/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#home" className="font-heading text-xl font-bold text-slate-900 transition hover:text-italian-red">
            Silvia Pizzeria
          </a>

          {/* Desktop Navigation */}
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

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
            </div>
            
            <button 
              onClick={onCartClick}
              className="relative rounded-lg border border-slate-200 bg-white p-2.5 text-slate-700 transition hover:bg-slate-50 hover:shadow-sm"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-italian-red text-[10px] font-bold text-white ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={toggleMobileMenu}
              className="rounded-lg p-2.5 text-slate-700 transition hover:bg-slate-100 md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} 
          onClick={toggleMobileMenu}
        />

        {/* Sidebar Panel */}
        <div 
          className={`absolute top-0 right-0 flex h-full w-[280px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header of Sidebar */}
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <span className="font-heading text-lg font-bold text-slate-900">Silvia Pizzeria</span>
            <button 
              onClick={toggleMobileMenu}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Body of Sidebar */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                <p className="px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">Navigation</p>
                {navItems.map((item) => (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    onClick={toggleMobileMenu}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-semibold text-slate-700 transition hover:bg-italian-cream hover:text-italian-red"
                  >
                    {language === 'fr' ? item.fr : item.label}
                    <ChevronRight className="h-4 w-4 text-slate-300" />
                  </a>
                ))}
              </nav>

              {/* Language Switcher */}
              <div className="px-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                  <Globe className="h-3 w-3" /> {language === 'fr' ? 'Langue' : 'Language'}
                </p>
                <div className="inline-block scale-110 origin-left">
                  <LanguageSwitcher language={language} setLanguage={setLanguage} />
                </div>
              </div>

              {/* Contact Information */}
              <div className="px-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                  <MessageSquare className="h-3 w-3" /> Contact & Social
                </p>
                <div className="space-y-4">
                  <a href="tel:+212776768251" className="flex items-center gap-3 text-sm font-medium text-slate-600 hover:text-italian-red transition-colors">
                    <div className="rounded-lg bg-slate-50 p-2">
                      <Phone className="h-4 w-4" />
                    </div>
                    +212 7 76 76 82 51
                  </a>
                  <div className="flex gap-3">
                    <a href="https://instagram.com/silvia_pizzeria_" className="rounded-lg bg-slate-50 p-3 text-slate-400 hover:bg-italian-cream hover:text-italian-red transition-all">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://facebook.com/profile.php?id=61550896487838&mibextid=ZbWKwL" className="rounded-lg bg-slate-50 p-3 text-slate-400 hover:bg-italian-cream hover:text-italian-red transition-all">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Footer of Sidebar */}
          <div className="border-t border-slate-100 p-6 bg-slate-50/50">
            <a 
              href="https://wa.me/212776768251"
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-italian-green py-4 text-sm font-bold text-white shadow-md transition hover:bg-emerald-600 active:scale-[0.98]"
            >
              <MessageSquare className="h-4 w-4" />
              {language === 'fr' ? 'Commander sur WhatsApp' : 'Order on WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
