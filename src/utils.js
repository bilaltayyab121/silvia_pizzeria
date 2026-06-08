export function buildWhatsAppLinkFromCart(cart, language = 'en', whatsappNumber) {
  const lines = cart.map((it) => `${it.quantity} x ${it.name} - ${it.price * it.quantity} MAD`);
  const total = cart.reduce((s, it) => s + it.price * it.quantity, 0);
  const intro = language === 'fr' ? 'Bonjour Silvia Pizzeria, je souhaite commander:' : 'Hello Silvia Pizzeria, I would like to order:';
  const totalLabel = language === 'fr' ? 'Total' : 'Total';
  const message = `${intro}\n${lines.join('\n')}\n${totalLabel}: ${total} MAD`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
