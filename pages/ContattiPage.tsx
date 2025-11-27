import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// Sostituisci con il tuo username Instagram reale (senza @)
const INSTAGRAM_USERNAME = "cortocircuito__event"; 

const ContattiPage: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("Funzionalità email simulata");
    };

    return (
        <div className="bg-black text-white min-h-screen animate-fade-in">
            <div className="container mx-auto px-6 py-32">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Mettiamoci in Contatto</h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Hai un'idea che ha bisogno di una scintilla? Raccontaci il tuo progetto.
                    </p>
                </div>
                
                {/* MODIFICA QUI:
                    1. Ho rimosso 'grid' e 'grid-cols...'
                    2. Ho aggiunto 'flex justify-center items-center' per centrare il contenuto
                */}
                <div className="flex justify-center items-center w-full">
                    
                    {/* MODIFICA QUI:
                        1. Ho rimosso 'lg:col-span-1'
                        2. Ho aggiunto 'w-full max-w-md' per limitare la larghezza del box 
                           (così non diventa gigante su desktop)
                    */}
                    <div className="w-full max-w-md flex flex-col gap-6">
                        
                        {/* CARD INSTAGRAM DM */}
                        <div className="p-8 rounded-2xl bg-black flex flex-col items-center justify-center text-center h-full
                                        shadow-[-8px_-8px_16px_rgba(255,255,255,0.125),_8px_8px_16px_rgba(23,23,23,0.75),inset_-8px_-8px_16px_rgba(23,23,23,1),_inset_8px_8px_16px_rgba(255,255,255,0.125)]">
                            
                            {/* Icona Instagram Sfumata */}
                            <div className="mb-6 p-4 rounded-full bg-[#171717] shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.5),_inset_4px_4px_8px_rgba(255,255,255,0.05)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="url(#ig-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <defs>
                                        <linearGradient id="ig-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                                            <stop stopColor="#f09433" offset="0%" />
                                            <stop stopColor="#e6683c" offset="25%" />
                                            <stop stopColor="#dc2743" offset="50%" />
                                            <stop stopColor="#cc2366" offset="75%" />
                                            <stop stopColor="#bc1888" offset="100%" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Scrivici in DM</h3>
                            <p className="text-gray-400 mb-8 text-sm">
                                Clicca qui sotto per aprire direttamente la chat con noi.
                            </p>

                            <a 
                                href={`https://ig.me/m/${INSTAGRAM_USERNAME}`}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full bg-[#171717] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out
                                           border border-transparent hover:border-pink-500/50
                                           shadow-[-8px_-8px_16px_rgba(255,255,255,0.05),_8px_8px_16px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(255,255,255,0.05),_5px_5px_10px_rgba(0,0,0,0.5)]
                                           active:scale-95 active:shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.5),_inset_4px_4px_8px_rgba(255,255,255,0.05)]"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                                    Apri Instagram
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContattiPage;