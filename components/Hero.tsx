import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Usa questo import



interface HeroProps {
  setCurrentPage: (page: 'home' | 'eventi' | 'galleria' | 'chisiamo' | 'contatti' | 'ShopPage') => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))" }}>
            <div className="container mx-auto px-6 z-10">
                <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }} >
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
                            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
                            Contattaci
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;