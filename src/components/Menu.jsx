import React, { useMemo, useState } from 'react';
import { Search, X } from "lucide-react";
import MenuCard from './MenuCard';

export default function Menu({ categories, items, addToCart, language }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.descriptionFr &&
          item.descriptionFr.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, items]);

  return (
    <section id="menu" className="mt-12">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 rounded-2xl bg-white p-2 shadow-sm border border-slate-100">
          {categories.map((category) => (
            <button
              key={category.en}
              type="button"
              onClick={() => setActiveCategory(category.en)}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition-all ${
                activeCategory === category.en
                  ? "bg-italian-red text-white shadow-md"
                  : "bg-transparent text-slate-600 hover:bg-slate-50"
              }`}
            >
              {language === "fr" ? category.fr : category.en}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === "fr"
                ? "Rechercher un plat..."
                : "Search for a dish..."
            }
            className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-11 text-sm font-medium text-slate-900 outline-none transition focus:border-italian-red focus:ring-4 focus:ring-italian-red/5 shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {filteredMenu.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredMenu.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              addToCart={addToCart}
              language={language}
            />
          ))}
        </div>
      ) : (
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <div className="rounded-full bg-slate-50 p-6">
            <Search className="h-10 w-10 text-slate-300" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">
            {language === "fr" ? "Aucun résultat trouvé" : "No results found"}
          </h3>
          <p className="mt-2 text-slate-500">
            {language === "fr"
              ? "Essayez d'ajuster votre recherche ou changez de catégorie."
              : "Try adjusting your search or switching categories."}
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
            }}
            className="mt-6 font-bold text-italian-red hover:underline"
          >
            {language === "fr" ? "Tout afficher" : "Show all items"}
          </button>
        </div>
      )}
    </section>
  );
}
