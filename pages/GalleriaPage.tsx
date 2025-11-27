import React from 'react';
import { shopImages } from './ContentGalleryPage';

const GalleriaPage: React.FC = () => {
  // --- Impostazioni Neumorfismo (Dark Mode) ---
  const baseBgColor = '#000000ff';
  // Colori ombra rimossi perché nel tuo codice originale erano commentati nel CSS
  // const darkShadow = '#1a1c20';
  // const lightShadow = '#353535ff';
  // --- Fine Impostazioni ---

  if (shopImages.length < 10) {
    return (
      <section
        className="text-white min-h-screen flex items-center justify-center"
        style={{ backgroundColor: baseBgColor }}
      >
        <p className="text-red-500 text-center px-4">
          Errore: Sono necessarie 10 immagini nella cartella ContentShopPage.
        </p>
      </section>
    );
  }

  const imageRow1 = shopImages.slice(0, 1);
  const imageRow2 = shopImages.slice(1, 4);
  const imageRow3 = shopImages.slice(4, 6);
  const imageRow4 = shopImages.slice(6, 9);
  const imageRow5 = shopImages.slice(9, 10);

  const ImageTile = ({ src, alt }: { src: string; alt: string }) => (
    <div
      className="neumorphic-image-tile overflow-hidden rounded-xl min-w-0"
    >
      <img
        src={src}
        alt={alt}
        className="block w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );

  return (
    <section
      className="text-gray-300 min-h-screen py-20 sm:py-28 px-3 sm:px-6 lg:px-8 overflow-hidden" // Aggiunto overflow-hidden per evitare scrollbar durante l'animazione
      style={{ backgroundColor: baseBgColor }}
    >
      {/* --- STILI CSS (Neumorfismo + Animazione) --- */}
      <style>{`
        /* Definizione dell'animazione di entrata */
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px); /* Parte da 30px più in basso */
          }
          100% {
            opacity: 1;
            transform: translateY(0); /* Arriva alla posizione naturale */
          }
        }

        /* Classe da applicare agli elementi che devono animarsi */
        .animate-entrance {
          animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0; /* Inizia invisibile prima che parta l'animazione */
        }

        /* Stili Neumorfici esistenti */
        .neumorphic-image-tile {
          border-radius: 12px;
          transition: all 0.3s ease-in-out;
          /* Le ombre erano commentate nel tuo codice originale, le lascio così */
        }

        .neumorphic-image-tile:hover {
          transform: scale(1.05);
        }

        .neumorphic-inset-header {
           border-radius: 30px;
           padding: 2.5rem 1.5rem;
        }
      `}</style>

      {/* Contenitore Intestazione con animazione */}
      {/* Aggiunta la classe 'animate-entrance' */}
      <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 animate-entrance">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-3 sm:mb-4">
          Top 10 Foto
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Un assaggio dell'energia e della creatività...
        </p>
      </div>

      {/* Contenitore Griglia con animazione */}
      {/* Aggiunta la classe 'animate-entrance' e un leggero ritardo (delay) inline per un effetto a cascata */}
      <div
        className="max-w-7xl mx-auto space-y-3 sm:space-y-6 animate-entrance"
        style={{ animationDelay: '0.2s' }} // L'animazione parte 0.2s dopo l'intestazione
      >
        {/* 1 */}
        <div className="grid grid-cols-1">
          {imageRow1.map((src, i) => <ImageTile key={i} src={src} alt={`Immagine ${i+1}`} />)}
        </div>

        {/* 3 */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 auto-rows-fr">
          {imageRow2.map((src, i) => <ImageTile key={i} src={src} alt={`Immagine ${i+2}`} />)}
        </div>

        {/* 2 */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 auto-rows-fr">
          {imageRow3.map((src, i) => <ImageTile key={i} src={src} alt={`Immagine ${i+5}`} />)}
        </div>

        {/* 3 */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 auto-rows-fr">
          {imageRow4.map((src, i) => <ImageTile key={i} src={src} alt={`Immagine ${i+7}`} />)}
        </div>

        {/* 1 */}
        <div className="grid grid-cols-1">
          {imageRow5.map((src, i) => <ImageTile key={i} src={src} alt={`Immagine ${i+10}`} />)}
        </div>
      </div>
    </section>
  );
};

export default GalleriaPage;