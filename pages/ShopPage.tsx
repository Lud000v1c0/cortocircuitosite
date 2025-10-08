/// <reference types="vite/client" />
import React, { useState, useEffect } from "react";

// 🔹 Tipizzazione articolo
type ShirtItem = {
  id: number;
  title: string;
  price: string;
  images: string[];
};

const ShopPage: React.FC = () => {
  const [shirts, setShirts] = useState<ShirtItem[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  // 🔹 Caricamento dinamico immagini
  useEffect(() => {
    // import.meta.glob permette di importare automaticamente tutte le immagini in una cartella (Vite)
    const images = import.meta.glob("/pages/shirts/*/*.jpg", { eager: true }) as Record<
      string,
      { default: string }
    >;

    // Raggruppa immagini per cartella
    const folders: Record<string, string[]> = {};
    Object.entries(images).forEach(([path, mod]) => {
      const folder = path.split("/shirts/")[1].split("/")[0];
      if (!folders[folder]) folders[folder] = [];
      folders[folder].push(mod.default);
    });

    // Crea lista articoli
    const generatedShirts = Object.entries(folders).map(([folder, imgs], i) => ({
      id: i + 1,
      title: folder.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      price: `${35 + i * 2},00 €`, // prezzo generico (puoi personalizzarlo)
      images: imgs.sort(), // front/back
    }));

    setShirts(generatedShirts);
  }, []);

  const handleAddToCart = (title: string) => {
    setCart((prev) => [...prev, title]);
    alert(`${title} è stata aggiunta al carrello 🛒`);
  };

  const ProductCard: React.FC<{ title: string; price: string; images: string[] }> = ({
    title,
    price,
    images,
  }) => {
    const [hovered, setHovered] = useState(false);
    const toggleImage = () => setHovered((prev) => !prev);

    return (
      <div
        className="group relative bg-neutral-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={toggleImage}
      >
        {/* Immagine */}
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={hovered ? images[1] : images[0]}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-500"
            loading="lazy"
          />
        </div>

        {/* Dettagli */}
        <div className="p-4 flex flex-col items-center text-center space-y-2">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <p className="text-yellow-400 font-medium">{price}</p>

          <button
            onClick={() => handleAddToCart(title)}
            className="mt-2 px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold transition-all duration-300 hover:bg-yellow-300 active:scale-95"
          >
            Aggiungi al carrello
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-black text-white min-h-screen py-28 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="container mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
          Il Nostro Shop
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Scopri tutte le nostre magliette esclusive — design unici, qualità top.
        </p>
      </div>

      {/* Griglia dinamica */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-fade-in">
        {shirts.length > 0 ? (
          shirts.map((shirt) => (
            <ProductCard
              key={shirt.id}
              title={shirt.title}
              price={shirt.price}
              images={shirt.images}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">Caricamento articoli...</p>
        )}
      </div>

      {/* Carrello */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-yellow-400 text-black rounded-full shadow-xl px-5 py-3 font-semibold">
          🛍️ {cart.length} {cart.length === 1 ? "articolo" : "articoli"} nel carrello
        </div>
      )}
    </section>
  );
};

export default ShopPage;
