import React from 'react';

// Assicurati che il percorso dell'immagine sia corretto.
const IMAGE_URL = "Screenshot 2025-10-08 192241.jpg"; 

const ChiSiamoPage: React.FC = () => {
    return (
        <div className="bg-black text-white min-h-screen overflow-hidden">
            
            {/* --- DEFINIZIONE CSS PER L'ANIMAZIONE --- */}
            <style>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-entrance {
                    animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
                    opacity: 0; /* Invisibile finché l'animazione non parte */
                }
            `}</style>

            <div className="flex flex-col md:flex-row min-h-screen"> 
                
                {/* === COLONNA IMMAGINE (A SINISTRA) === */}
                {/* Aggiunta la classe 'animate-entrance' */}
                <div className="md:w-2/5 w-full relative overflow-hidden h-96 md:h-auto animate-entrance">
                    <img 
                        src="/components/volty.jpg"
                        alt="Volty"
                        className="object-cover h-full w-full"
                    />
                </div>

                {/* === COLONNA TESTO (A DESTRA) === */}
                {/* Aggiunta la classe 'animate-entrance' e un animationDelay di 0.2s */}
                <div 
                    className="md:w-3/5 w-full py-16 md:py-24 px-6 md:px-20 flex justify-center flex-col animate-entrance"
                    style={{ animationDelay: '0.2s' }} 
                >
                    
                    <div className="max-w-xl">
                        <h1 className="text-xl font-extrabold mb-2 text-gray-400">Born in Sicily, Shaped in Italy, Shared in the World</h1>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Can you feel the electricity in the air?</h2>
                        
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                        Born from the vision of three young minds with a clear goal: to bring Sicily back to where it belongs. After experiencing the energy of underground villages in Europe’s major capitals, after immersing ourselves in the vibrations of the biggest electronic and tech-house events, we decided to create our own spark.
                        Corto Circuito is more than just an event—it’s a movement, a wave of energy sweeping across the island to ignite a new scene. It’s the meeting point between past and future, tradition and innovation, the warm soul of Sicily and the pulsating heartbeat of international club culture.
                        We want you to be part of our community, to rediscover the thrill of nights spent around the world. Corto Circuito is music, connection, expression. It merges the passion for sound with the passion for fashion, giving you the freedom to express yourself, to be who you are, to find your circuit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChiSiamoPage;