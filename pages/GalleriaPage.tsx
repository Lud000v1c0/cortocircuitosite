import React from 'react';
import { shopImages } from './ContentShopPage';

const GalleriaPage: React.FC = () => {
  if (shopImages.length < 10) {
    return (
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
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
    <div className="overflow-hidden rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 min-w-0">
      <img
        src={src}
        alt={alt}
        className="block w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );

  return (
    <section className="bg-black text-white min-h-screen py-20 sm:py-28 px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center mb-10 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-3 sm:mb-4">
          Galleria
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Un assaggio dell'energia e della creatività...
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-3 sm:space-y-6">
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
