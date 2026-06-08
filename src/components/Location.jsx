import React from 'react';
import SectionTitle from './SectionTitle';

export default function Location({ language }) {
  const openingHours = [
    { day: language === 'fr' ? 'Mardi' : 'Tuesday', hours: '12:00 PM – 12:00 AM' },
    { day: language === 'fr' ? 'Mercredi' : 'Wednesday', hours: '12:00 PM – 12:00 AM' },
    { day: language === 'fr' ? 'Jeudi' : 'Thursday', hours: '12:00 PM – 12:00 AM' },
    { day: language === 'fr' ? 'Vendredi' : 'Friday', hours: '12:00 PM – 12:00 AM' },
    { day: language === 'fr' ? 'Samedi' : 'Saturday', hours: '12:00 PM – 12:00 AM' },
    { day: language === 'fr' ? 'Dimanche' : 'Sunday', hours: '12:00 PM – 12:00 AM' },
  ];

  return (
    <section
      id="location"
      className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <SectionTitle
          number="04"
          title={
            language === "fr" ? "Emplacement & Horaires" : "Location & Hours"
          }
          description={(
            language === "fr"
              ? "Nous sommes au Casino plage, 127, Témara."
              : "Find us at Casino plage, 127, Témara. Open Tuesday through Sunday for lunch and dinner."
          )}
        />
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <iframe
            title="Silvia Pizzeria map"
            src="https://maps.google.com/maps?q=Casino%20plage%2C%20127%2C%20T%C3%A9mara%2C%20Morocco&output=embed"
            className="h-80 w-full border-0"
            loading="lazy"
          />
        </div>
      </div>

      <div className="space-y-6 rounded-2xl border border-slate-200 bg-italian-cream p-8 shadow-soft">
        <div>
          <h3 className="font-heading text-2xl font-semibold text-slate-900">
            {language === "fr" ? "Horaires" : "Opening Hours"}
          </h3>
          <p className="mt-3 text-sm text-slate-700">
            {language === "fr"
              ? "Fermé le lundi."
              : "Closed Mondays. Open every other day from noon to midnight."}
          </p>
        </div>
        <div className="space-y-3 rounded-xl bg-white p-6 text-slate-700 shadow-sm">
          {openingHours.map((entry) => (
            <div
              key={entry.day}
              className="flex items-center justify-between border-b border-slate-200 py-3 last:border-0"
            >
              <span className="font-medium">{entry.day}</span>
              <span className="text-sm text-slate-600">{entry.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
