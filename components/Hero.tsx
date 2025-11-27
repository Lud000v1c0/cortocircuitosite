import React from 'react';
// import { Link } from 'react-router-dom'; // Non serve se usi i button onClick

interface HeroProps {
    setCurrentPage: (page: 'home' | 'eventi' | 'galleria' | 'chisiamo' | 'contatti' | 'ShopPage') => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
    return (
        // 1. RIMOSSO IL BACKGROUND: La section ora è trasparente
        // In questo modo si vedrà l'immagine e l'overlay definiti in HomePage.
        <section className="relative h-screen flex items-center justify-center text-center">
            
            {/* 2. DEFINIZIONE ANIMAZIONE INTERNA */}
            <style>{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                .hero-content-entrance {
                    opacity: 0; /* Parte invisibile */
                    animation: fade-in-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                    animation-delay: 0.2s; /* Parte dopo un attimo */
                }
            `}</style>

            <div className="container mx-auto px-6 z-10">
                {/* 3. APPLICAZIONE CLASSE ANIMAZIONE */}
                <div className="max-w-4xl mx-auto hero-content-entrance">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
                        Feel the Current
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Creiamo esperienze indimenticabili che lasciano il segno. Energia pura, organizzazione impeccabile.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button
                            onClick={() => setCurrentPage('eventi')}
                            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                            Scopri i Nostri Eventi
                        </button>
                        <button
                            onClick={() => setCurrentPage('contatti')}
                            className="bg-gray-700 hover:bg-[#171717] text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
                            Contattaci
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;