import React from 'react';
import { X, Trash2, Plus, Minus, Send } from 'lucide-react';

export default function Cart({ cart, removeFromCart, updateQty, sendOrder, language, isOpen, onClose }) {
  const total = cart.reduce((s, it) => s + it.price * it.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="text-xl font-bold text-slate-900">
            {language === 'fr' ? 'Votre Panier' : 'Your Cart'}
          </h2>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="rounded-full bg-slate-50 p-6">
                <Trash2 className="h-10 w-10 text-slate-300" />
              </div>
              <p className="mt-4 text-slate-500">
                {language === 'fr' ? 'Votre panier est vide' : 'Your cart is empty'}
              </p>
              <button 
                onClick={onClose}
                className="mt-6 font-semibold text-italian-red hover:underline"
              >
                {language === 'fr' ? 'Continuer vos achats' : 'Continue shopping'}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-slate-900">{item.name}</h4>
                      <p className="font-semibold text-slate-900">{item.price * item.quantity} MAD</p>
                    </div>
                    <p className="text-sm text-slate-500">{item.price} MAD / unit</p>
                    
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white p-1">
                        <button 
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="rounded p-1 text-slate-500 transition hover:bg-slate-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="rounded p-1 text-slate-500 transition hover:bg-slate-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-medium text-rose-500 hover:text-rose-600"
                      >
                        {language === 'fr' ? 'Supprimer' : 'Remove'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-slate-100 bg-slate-50 p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-slate-600">{language === 'fr' ? 'Total de la commande' : 'Order Total'}</span>
              <span className="text-2xl font-bold text-slate-900">{total} MAD</span>
            </div>
            <button
              onClick={sendOrder}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-italian-green py-4 text-base font-bold text-white shadow-lg transition hover:bg-emerald-600 active:scale-95"
            >
              <Send className="h-5 w-5" />
              {language === 'fr' ? 'Commander sur WhatsApp' : 'Order via WhatsApp'}
            </button>
            <p className="mt-4 text-center text-xs text-slate-500">
              {language === 'fr' 
                ? 'Vous serez redirigé vers WhatsApp pour finaliser votre commande.' 
                : 'You will be redirected to WhatsApp to finalize your order.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
