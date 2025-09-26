
import React from 'react';

const GalleryImage: React.FC<{ src: string, alt: string }> = ({ src, alt }) => (
    <div className="overflow-hidden rounded-lg group">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110" 
            loading="lazy"
        />
    </div>
);

const GalleriaPage: React.FC = () => {
    const images = Array.from({ length: 12 }, (_, i) => ({
        src: `https://picsum.photos/seed/${i+1}/600/600`,
        alt: `Immagine evento ${i+1}`
    }));

    return (
        <div className="bg-black text-white min-h-screen animate-fade-in">
            <div className="container mx-auto px-6 py-32">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Galleria</h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Un assaggio dell'energia e della creatività che portiamo in ogni nostro evento. Lasciati ispirare.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <GalleryImage key={index} src={image.src} alt={image.alt} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleriaPage;
