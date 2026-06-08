import React from 'react';

export default function Footer({ language }) {
  const links = [
    { label: language === 'fr' ? 'Accueil' : 'Home', href: '#home' },
    { label: language === 'fr' ? 'Menu' : 'Menu', href: '#menu' },
    { label: language === 'fr' ? 'Contact' : 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-200 bg-italian-cream py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row md:px-8">
        <p>© 2026 Silvia Pizzeria. {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-700">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-italian-red">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
