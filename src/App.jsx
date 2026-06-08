import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Instagram,
  MapPin,
  Phone,
  Sparkles,
  Ticket,
  Truck,
  Wheat,
} from 'lucide-react';
import { menuCategories, menuItems } from './menuData';

const whatsappNumber = '212776768251';

function buildWhatsAppLink(itemName) {
  const message = `Hello Silvia Pizzeria, I would like to order: ${itemName} x 1. Please confirm.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function WHATSAPP_BUTTON({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-italian-green px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-600"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </a>
  );
}

function SectionTitle({ number, title, description }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-italian-red/90">
        {number}
      </p>
      <h2 className="font-heading text-3xl font-semibold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

function MenuCard({ item }) {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
          <p className="mt-2 text-sm text-slate-600">{item.description}</p>
        </div>
        <span className="rounded-full bg-italian-cream px-3 py-1 text-sm font-semibold text-slate-900">
          {item.price} MAD
        </span>
      </div>
      <a
        href={buildWhatsAppLink(item.name)}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-italian-red px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
      >
        Order via WhatsApp
      </a>
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-italian-cream text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-italian-cream/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#home" className="font-heading text-xl font-bold text-slate-900">
            Silvia Pizzeria
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
            {['About', 'Menu', 'Why', 'Location', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-italian-red">
                {item}
              </a>
            ))}
          </nav>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-italian-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600 md:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:px-8">
        <section id="home" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-italian-red/10 px-4 py-2 text-sm font-semibold text-italian-red">
              Authentic Italian Pizza & Pasta
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Silvia Pizzeria
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Discover fresh Italian flavors by the sea in Casino plage, Témara. Enjoy warm pizzas, handcrafted pasta,
              crisp salads, and refreshing juices with friendly service from Silvia and Jalal.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-italian-red px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-red-700"
              >
                Order on WhatsApp
              </a>
              <a href="#menu" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-italian-red">
                View menu <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Location</p>
                <p className="mt-3 text-base font-semibold text-slate-900">Casino plage, 127, Témara</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Hours</p>
                <p className="mt-3 text-base font-semibold text-slate-900">Tue–Sun 12:00 PM – 12:00 AM</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[40px] bg-slate-100 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1601924582975-4e70d3ff72a8?auto=format&fit=crop&w=1000&q=80"
              alt="Pizza on table"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Sea View Dining</p>
              <h2 className="mt-2 text-2xl font-semibold">Warm flavors, chilled seaside atmosphere.</h2>
            </div>
          </div>
        </section>

        <section id="about" className="mt-20 rounded-[40px] border border-slate-200 bg-white px-6 py-12 shadow-soft sm:px-10">
          <SectionTitle
            number="01"
            title="About Silvia & Jalal"
            description="Silvia Pizzeria is a family-run restaurant where every pizza is made with fresh ingredients and every guest is welcomed like home."
          />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6 text-slate-700">
              <p>
                Silvia and Jalal opened Silvia Pizzeria to bring classic Italian comfort to Témara with a bright seaside
                atmosphere. The restaurant blends traditional recipes, local produce, and a warm dining experience.
              </p>
              <p>
                From the rolling wave views at Casino plage to the fragrant basil and melted mozzarella on every pie,
                guests can enjoy authentic dishes handcrafted with care.
              </p>
              <p>
                Whether you visit for lunch, dinner, or delivery through Yassir, Silvia and Jalal deliver fresh Italian
                moments that feel effortless and memorable.
              </p>
            </div>
            <div className="space-y-4 rounded-[32px] bg-italian-cream p-6 text-slate-900 shadow-soft">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-italian-red" />
                <span className="font-semibold">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-italian-green" />
                <span className="font-semibold">Sea View Location</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-6 w-6 text-italian-red" />
                <span className="font-semibold">Delivery with Yassir</span>
              </div>
              <div className="flex items-center gap-3">
                <Wheat className="h-6 w-6 text-italian-green" />
                <span className="font-semibold">House Specialties</span>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="mt-20">
          <SectionTitle
            number="02"
            title="Menu"
            description="Browse our pizza, pasta, salad, and beverage choices. Tap any item to order quickly through WhatsApp."
          />
          <div className="flex flex-wrap gap-3 rounded-full bg-white p-3 shadow-soft">
            {menuCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-italian-red text-white shadow-soft'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredMenu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section id="why" className="mt-20 rounded-[40px] border border-slate-200 bg-white px-6 py-12 shadow-soft sm:px-10">
          <SectionTitle
            number="03"
            title="Why choose us"
            description="Experience what makes Silvia Pizzeria a favorite destination for Italian food in Témara."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Sparkles, title: 'Fresh Ingredients', text: 'Premium mozzarella, ripe tomatoes, and fragrant herbs in each dish.' },
              { icon: MapPin, title: 'Sea View', text: 'Enjoy your meal with a beautiful ocean atmosphere by Casino plage.' },
              { icon: Ticket, title: 'Friendly Service', text: 'Silvia and Jalal welcome you with care and Italian warmth.' },
              { icon: Truck, title: 'Fast Delivery', text: 'Order via WhatsApp or Yassir and receive hot food quickly.' },
            ].map((feature) => (
              <div key={feature.title} className="rounded-[28px] border border-slate-200 bg-italian-cream p-6">
                <feature.icon className="h-6 w-6 text-italian-red" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[40px] border border-slate-200 bg-white p-6 shadow-soft sm:p-10">
            <SectionTitle
              number="04"
              title="Location & Hours"
              description="Find us at Casino plage, 127, Témara. Open Tuesday through Sunday for lunch and dinner."
            />
            <div className="overflow-hidden rounded-[28px] border border-slate-200">
              <iframe
                title="Silvia Pizzeria map"
                src="https://maps.google.com/maps?q=Casino%20plage%2C%20127%2C%20T%C3%A9mara%2C%20Morocco&output=embed"
                className="h-80 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6 rounded-[40px] border border-slate-200 bg-italian-cream p-8 shadow-soft">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-slate-900">Opening Hours</h3>
              <p className="mt-3 text-sm text-slate-700">Closed Mondays. Open every other day from noon to midnight.</p>
            </div>
            <div className="space-y-3 rounded-[28px] bg-white p-6 text-slate-700 shadow-sm">
              {[
                { day: 'Tuesday', hours: '12:00 PM – 12:00 AM' },
                { day: 'Wednesday', hours: '12:00 PM – 12:00 AM' },
                { day: 'Thursday', hours: '12:00 PM – 12:00 AM' },
                { day: 'Friday', hours: '12:00 PM – 12:00 AM' },
                { day: 'Saturday', hours: '12:00 PM – 12:00 AM' },
                { day: 'Sunday', hours: '12:00 PM – 12:00 AM' },
              ].map((entry) => (
                <div key={entry.day} className="flex items-center justify-between border-b border-slate-200 py-3 last:border-0">
                  <span className="font-medium">{entry.day}</span>
                  <span className="text-sm text-slate-600">{entry.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20 rounded-[40px] border border-slate-200 bg-white px-6 py-12 shadow-soft sm:px-10">
          <SectionTitle
            number="05"
            title="Contact & Social"
            description="Reach Silvia Pizzeria by phone, Instagram or WhatsApp for orders and table requests."
          />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-[32px] border border-slate-200 bg-italian-cream p-6">
              <div className="flex items-center gap-3 text-italian-red">
                <Phone className="h-6 w-6" />
                <span className="font-semibold">Phone</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">+212 7 76 76 82 51</p>
              <a
                href={`tel:+212776768251`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-italian-green"
              >
                Call now
              </a>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-italian-cream p-6">
              <div className="flex items-center gap-3 text-italian-red">
                <Instagram className="h-6 w-6" />
                <span className="font-semibold">Instagram</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">@silvia_pizzeria_</p>
              <a
                href="https://instagram.com/silvia_pizzeria_"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-italian-green"
              >
                Follow us
              </a>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-italian-cream p-6">
              <div className="flex items-center gap-3 text-italian-red">
                <MapPin className="h-6 w-6" />
                <span className="font-semibold">Delivery</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-slate-900">Yassir Delivery</p>
              <p className="mt-2 text-sm text-slate-600">Order hot food to your door with our preferred delivery partner.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-italian-cream py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row md:px-8">
          <p>© 2026 Silvia Pizzeria. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-700">
            <a href="#home" className="transition hover:text-italian-red">Home</a>
            <a href="#menu" className="transition hover:text-italian-red">Menu</a>
            <a href="#contact" className="transition hover:text-italian-red">Contact</a>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-italian-green text-white shadow-soft transition hover:bg-emerald-600"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7 w-7">
          <path
            fill="currentColor"
            d="M20.52 3.48A11.86 11.86 0 0 0 12.05.01 11.95 11.95 0 0 0 1.98 11.93c0 2.06.55 4.07 1.6 5.83L.18 23.75l6.17-1.61a11.89 11.89 0 0 0 5.67 1.46h.02c6.58 0 11.95-5.34 11.95-11.92a11.9 11.9 0 0 0-1.47-5.7Zm-8.72 15.24h-.01a9.75 9.75 0 0 1-4.98-1.35l-.36-.21-3.66.96.98-3.56-.23-.37a9.72 9.72 0 0 1 1.52-12.57 9.82 9.82 0 0 1 6.92-2.84h.02a9.75 9.75 0 0 1 9.74 9.76c0 5.26-4.29 9.56-9.57 9.56Zm5.4-7.86c-.29-.14-1.72-.84-1.99-.93-.27-.1-.47-.14-.67.14s-.76.93-.93 1.12c-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.42-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.14-.14.3-.34.45-.51.15-.17.2-.29.3-.48.1-.19.05-.35-.02-.49-.07-.14-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.51h-.57c-.18 0-.48.07-.73.35-.25.28-.96.93-.96 2.27s.98 2.63 1.12 2.81c.14.19 1.95 2.96 4.72 4.15.66.28 1.18.45 1.58.58.66.23 1.26.2 1.74.12.53-.09 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.33Z"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;
