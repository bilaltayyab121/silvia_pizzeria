import React, { useState } from 'react';

export default function MenuCard({ item, addToCart, language }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-4 top-4 rounded-lg bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-bold text-slate-900 shadow-sm">
          {item.price} MAD
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2">
            {language === 'fr' ? item.descriptionFr : item.description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-lg border border-slate-100 bg-slate-50/50 p-1">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              -
            </button>
            <span className="w-8 text-center font-semibold text-slate-900">{qty}</span>
            <button 
              onClick={() => setQty((q) => q + 1)} 
              className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              +
            </button>
          </div>

          <button
            onClick={() => {
              addToCart(item, qty);
              setQty(1);
            }}
            className="ml-auto inline-flex items-center justify-center rounded-lg bg-italian-red px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
          >
            {language === 'fr' ? 'Ajouter' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  );
}
