import React, { useMemo, useState } from 'react';
import MenuCard from './MenuCard';

export default function Menu({ categories, items, addToCart, language }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = useMemo(() => {
    if (activeCategory === 'All') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [activeCategory, items]);

  return (
    <section id="menu" className="mt-20">
      <div className="flex flex-wrap gap-3 rounded-full bg-white p-3 shadow-soft">
        {categories.map((category) => (
          <button
            key={category.en}
            type="button"
            onClick={() => setActiveCategory(category.en)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category.en
                ? 'bg-italian-red text-white shadow-soft'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {language === 'fr' ? category.fr : category.en}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredMenu.map((item) => (
          <MenuCard key={item.id} item={item} addToCart={addToCart} language={language} />
        ))}
      </div>
    </section>
  );
}
