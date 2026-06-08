import React from 'react';
import { Phone, Instagram, MapPin, Facebook, Mail } from "lucide-react";
import SectionTitle from './SectionTitle';

// TikTok icon is not available in some versions of lucide-react, so we'll use a custom SVG or similar
const TikTokIcon = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Contact({ language }) {
  const contactInfo = [
    {
      icon: Phone,
      title: language === "fr" ? "Téléphone" : "Phone",
      value: "+212 7 76 76 82 51",
      link: "tel:+212776768251",
      label: language === "fr" ? "Appeler" : "Call now",
    },
    {
      icon: Mail,
      title: "Email",
      value: "da.silvia.pizzeria@gmail.com",
      link: "mailto:da.silvia.pizzeria@gmail.com",
      label: language === "fr" ? "Envoyer un mail" : "Send email",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@silvia_pizzeria_",
      link: "https://instagram.com/silvia_pizzeria_",
      label: language === "fr" ? "Suivez-nous" : "Follow us",
    },
    {
      icon: Facebook,
      title: "Facebook",
      value: "Silvia Pizzeria",
      link: "https://www.facebook.com/profile.php?id=61550896487838&mibextid=ZbWKwL",
      label: language === "fr" ? "Aimez notre page" : "Like our page",
    },
    {
      icon: TikTokIcon,
      title: "TikTok",
      value: "@silvia.pizzeria",
      link: "https://www.tiktok.com/@silvia.pizzeria",
      label: language === "fr" ? "Regardez nos vidéos" : "Watch our videos",
    },
    {
      icon: MapPin,
      title: language === "fr" ? "Livraison" : "Delivery",
      value: "Yassir Delivery",
      link: "#",
      label: language === "fr" ? "Commander sur Yassir" : "Order on Yassir",
    },
  ];

  return (
    <section id="contact" className="rounded-[40px] border border-slate-200 bg-white px-6 py-10 shadow-soft sm:px-10">
      <SectionTitle
        number="05"
        title={language === "fr" ? "Contact & Réseaux" : "Contact & Social"}
        description={
          language === "fr"
            ? "Contactez Silvia Pizzeria par téléphone, email ou suivez-nous sur les réseaux sociaux."
            : "Reach Silvia Pizzeria by phone, email, or follow us on our social media channels."
        }
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col rounded-[32px] border border-slate-100 bg-italian-cream/50 p-6 transition hover:bg-italian-cream hover:shadow-sm"
          >
            <div className="flex items-center gap-3 text-italian-red">
              <item.icon className="h-6 w-6" />
              <span className="font-bold uppercase tracking-wider text-xs">
                {item.title}
              </span>
            </div>
            <p className="mt-4 text-base font-semibold text-slate-900 break-words">
              {item.value}
            </p>
            <a
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel={item.link.startsWith("http") ? "noreferrer" : ""}
              className="mt-auto pt-4 inline-flex items-center gap-2 text-sm font-bold text-italian-green hover:underline"
            >
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
