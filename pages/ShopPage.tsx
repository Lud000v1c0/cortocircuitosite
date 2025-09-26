import React from 'react';
// Importa l'array di immagini dal file index della cartella
import { shopImages } from './ContentShopPage';

const ShopPage: React.FC = () => {
    // Aggiungiamo un controllo per assicurarci di avere esattamente 10 immagini
    if (shopImages.length < 10) {
        return (
            <section className="bg-black text-white min-h-screen flex items-center justify-center">
                <p className="text-red-500">Errore: Sono necessarie 10 immagini nella cartella ContentShopPage.</p>
            </section>
        );
    }

    // Dividiamo l'array di immagini in sezioni per il layout
    const imageRow1 = shopImages.slice(0, 1); // La prima immagine
    const imageRow2 = shopImages.slice(1, 4); // Le successive 3
    const imageRow3 = shopImages.slice(4, 6); // Le successive 2
    const imageRow4 = shopImages.slice(6, 9); // Le successive 3
    const imageRow5 = shopImages.slice(9, 10); // L'ultima immagine

    // Componente riutilizzabile per un'immagine con effetto hover
    const ImageTile = ({ src, alt }: { src: string; alt: string }) => (
        <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
        </div>
    );

    return (
        <section className="bg-black text-white min-h-screen py-28 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto text-center mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4">
                    Il Nostro Shop
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                    Benvenuto nella sezione shop! Dai un'occhiata ai nostri prodotti esclusivi.
                </p>
            </div>

            {/* Contenitore della griglia delle immagini */}
            <div className="max-w-7xl mx-auto space-y-4 md:space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                
                {/* Riga 1: 1 immagine grande */}
                {imageRow1.map((src, index) => <ImageTile key="row1-0" src={src} alt={`Prodotto ${index + 1}`} />)}

                {/* Riga 2: 3 immagini */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {imageRow2.map((src, index) => <ImageTile key={`row2-${index}`} src={src} alt={`Prodotto ${index + 2}`} />)}
                </div>

                {/* Riga 3: 2 immagini */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {imageRow3.map((src, index) => <ImageTile key={`row3-${index}`} src={src} alt={`Prodotto ${index + 5}`} />)}
                </div>

                {/* Riga 4: 3 immagini */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                    {imageRow4.map((src, index) => <ImageTile key={`row4-${index}`} src={src} alt={`Prodotto ${index + 7}`} />)}
                </div>

                {/* Riga 5: 1 immagine grande */}
                {imageRow5.map((src, index) => <ImageTile key="row5-0" src={src} alt={`Prodotto ${index + 10}`} />)}

            </div>
        </section>
    );
};

export default ShopPage;