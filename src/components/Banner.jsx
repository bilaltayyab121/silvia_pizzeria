import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Banner({ language }) {
  const pizzaImage = "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=80";

  return (
    <section
      id="home"
      className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
    >
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-lg bg-italian-red/10 px-4 py-2 text-sm font-semibold text-italian-red">
          {language === "fr"
            ? "Authentique Pizza & Pâtes Italiennes"
            : "Authentic Italian Pizza & Pasta"}
        </p>
        <h1 className="font-heading text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          Silvia Pizzeria
        </h1>
        <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          {language === "fr"
            ? "Découvrez des saveurs italiennes fraîches au bord de la mer à Casino plage, Témara. Chaque plat est préparé avec amour par Silvia & Jalal."
            : "Discover fresh Italian flavors by the sea in Casino plage, Témara. Every dish is prepared with love by Silvia & Jalal."}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#menu"
            className="inline-flex items-center justify-center rounded-xl bg-italian-red px-8 py-4 text-sm font-semibold text-white shadow-soft transition hover:bg-red-700 active:scale-95"
          >
            {language === "fr" ? "Voir le menu" : "View menu"}
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-italian-red"
          >
            {language === "fr" ? "À propos de nous" : "About us"}{" "}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {language === "fr" ? "Emplacement" : "Location"}
            </p>
            <p className="mt-3 text-base font-semibold text-slate-900">
              Casino plage, 127, Témara
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              {language === "fr" ? "Horaires" : "Hours"}
            </p>
            <p className="mt-3 text-base font-semibold text-slate-900">
              {language === "fr"
                ? "Mar–Dim 12h00 – 00h00"
                : "Tue–Sun 12:00 PM – 12:00 AM"}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] overflow-hidden rounded-2xl bg-slate-100 shadow-soft lg:h-[500px]">
        <img
          src={pizzaImage}
          alt="Fresh Italian Pizza"
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-8 text-white">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-200">
            {language === "fr" ? "Vue sur la mer" : "Sea View Dining"}
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            {language === "fr"
              ? "Saveurs chaudes, ambiance marine."
              : "Warm flavors, chilled seaside atmosphere."}
          </h2>
        </div>
      </div>
    </section>
  );
}
