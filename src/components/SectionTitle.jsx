import React from 'react';

export default function SectionTitle({ number, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-italian-red/90">{number}</p>
      <h2 className="font-heading text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}
