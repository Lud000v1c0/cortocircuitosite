/// <reference types="vite/client" />
import React, { useState, useEffect } from "react";

// Tipi
type ShirtItem = {
  id: number;
  title: string;
  price: string;
  images: string[];
};

type CartItem = {
  id: number;
  title: string;
  size: string;
  image: string;
  quantity: number;
};

// ============================================================================
// COMPONENTE: CartSidebar (Invariato, ma non verrà mai aperto)
// ============================================================================
type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onIncrease: (id: number, size: string) => void;
  onDecrease: (id: number, size: string) => void;
};

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  items,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Chiudi carrello"
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-neutral-900 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-neutral-700">
          <h2 className="text-xl font-bold text-yellow-400">Il Tuo Carrello</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-800 transition-colors"
            aria-label="Chiudi"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto">
          {items.length > 0 ? (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={`${item.id}-${item.size}`}
                  className="flex items-center space-x-4 p-2 bg-neutral-800 rounded-lg text-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-grow">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">
                      Taglia: {item.size}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onDecrease(item.id, item.size)}
                      className="w-7 h-7 flex items-center justify-center bg-neutral-700 rounded-full hover:bg-neutral-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-bold w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onIncrease(item.id, item.size)}
                      className="w-7 h-7 flex items-center justify-center bg-neutral-700 rounded-full hover:bg-neutral-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 text-center mt-8">
              Il carrello è vuoto.
            </p>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-neutral-700">
            <button className="w-full py-3 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors">
              Procedi al Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPALE: ShopPage
// ============================================================================
const ShopPage: React.FC = () => {
  const [shirts, setShirts] = useState<ShirtItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const images = import.meta.glob("/pages/shirts/*/*.jpg", {
      eager: true,
    }) as Record<string, { default: string }>;

    const folders: Record<string, string[]> = {};
    Object.entries(images).forEach(([path, mod]) => {
      const folder = path.split("/shirts/")[1].split("/")[0];
      if (!folders[folder]) folders[folder] = [];
      folders[folder].push(mod.default);
    });

    const generatedShirts = Object.entries(folders)
      .flatMap(([folder, imgs]) => {
        // Regex: 'ID NOME $PREZZO' -> es: '1 maglia nera $25'
        const match = folder.match(/^(\d+)\s+(.+?)\s*\$(\d+)$/);

        if (!match) {
          console.warn(
            `Folder name "${folder}" non valido.`
          );
          return [];
        }

        const rawId = match[1];
        const rawTitle = match[2];
        const rawPrice = match[3];

        const id = parseInt(rawId, 10);
        const title = rawTitle.trim().replace(/\b\w/g, (l) => l.toUpperCase());
        const price = `${rawPrice.trim()},00 €`;

        return [{ id, title, price, images: imgs.sort() }];
      })
      .sort((a, b) => a.id - b.id);

    setShirts(generatedShirts);
  }, []);

  // --- Funzioni Carrello (Rimangono definite ma inutilizzate per ora) ---
  const handleIncreaseQuantity = (id: number, size: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number, size: string) => {
    setCart((prevCart) => {
      const targetItem = prevCart.find(
        (item) => item.id === id && item.size === size
      );
      if (targetItem && targetItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter(
          (item) => !(item.id === id && item.size === size)
        );
      }
    });
  };

  const totalItemsInCart = cart.reduce((sum, item) => sum + item.quantity, 0);

  // --- Card prodotto (MODIFICATA: Rimosso bottone e logica taglie) ---
  const ProductCard: React.FC<{ shirt: ShirtItem }> = ({ shirt }) => {
    const { title, price, images } = shirt;
    const [hovered, setHovered] = useState(false);

    // Non ci sono più stati per showSizes o handler per aggiungere al carrello

    return (
      <div
        className="group relative bg-neutral-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="aspect-square w-full overflow-hidden rounded-t-2xl">
          <img
            src={hovered && images[1] ? images[1] : images[0]}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-4 flex flex-col items-center text-center space-y-2 relative pb-6">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="text-yellow-400 font-medium">{price}</p>
          
          {/* QUI C'ERA IL BOTTONE "AGGIUNGI AL CARRELLO". È STATO RIMOSSO. */}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black text-white min-h-screen py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
          Il Nostro Shop
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Scopri tutte le nostre magliette esclusive — design unici, qualità
          top.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 animate-fade-in">
        {shirts.length > 0 ? (
          shirts.map((shirt) => <ProductCard key={shirt.id} shirt={shirt} />)
        ) : (
          <p className="col-span-full text-center text-gray-400">
            Caricamento articoli...
          </p>
        )}
      </div>

      {/* Badge carrello: Appare solo se cart.length > 0.
          Poiché non c'è tasto per aggiungere, questo rimarrà nascosto. */}
      {cart.length > 0 && (
        <button
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 bg-yellow-400 text-black rounded-full shadow-xl px-5 py-3 font-semibold hover:scale-105 transition-transform"
          aria-label="Apri carrello"
        >
          🛍️ {totalItemsInCart}{" "}
          {totalItemsInCart === 1 ? "articolo" : "articoli"} nel carrello
        </button>
      )}

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onIncrease={handleIncreaseQuantity}
        onDecrease={handleDecreaseQuantity}
      />
    </section>
  );
};

export default ShopPage;