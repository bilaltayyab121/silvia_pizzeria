import React, { useState } from 'react';

export default function MenuCard({ item, addToCart, language }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
          <p className="mt-2 text-sm text-slate-600">
            {language === 'fr' ? item.descriptionFr : item.description}
          </p>
        </div>
        <span className="rounded-full bg-italian-cream px-3 py-1 text-sm font-semibold text-slate-900 whitespace-nowrap">
          {item.price} MAD
        </span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="rounded-md border border-slate-200 bg-white px-3 py-1 text-slate-700 transition hover:bg-slate-50"
          >
            -
          </button>
          <span className="w-8 text-center font-medium">{qty}</span>
          <button 
            onClick={() => setQty((q) => q + 1)} 
            className="rounded-md border border-slate-200 bg-white px-3 py-1 text-slate-700 transition hover:bg-slate-50"
          >
            +
          </button>
        </div>

        <button
          onClick={() => {
            addToCart(item, qty);
            setQty(1); // Reset qty after adding
          }}
          className="ml-auto inline-flex items-center justify-center rounded-full bg-italian-red px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
        >
          {language === 'fr' ? 'Ajouter' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
}
