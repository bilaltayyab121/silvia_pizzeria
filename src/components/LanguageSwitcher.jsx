import React from 'react';

export default function LanguageSwitcher({ language, setLanguage }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
          language === 'en' 
            ? 'bg-italian-red text-white shadow-sm' 
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
          language === 'fr' 
            ? 'bg-italian-red text-white shadow-sm' 
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        FR
      </button>
    </div>
  );
}
