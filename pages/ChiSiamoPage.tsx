import React from 'react';

// Assicurati che il percorso dell'immagine sia corretto.
// Se l'immagine è nella cartella 'public', usa solo il nome del file.
const IMAGE_URL = "Screenshot 2025-10-08 192241.jpg"; 

const ChiSiamoPage: React.FC = () => {
    return (
        // Contenitore principale con il tuo sfondo scuro e altezza minima.
        // Ho rimosso 'animate-fade-in' solo per la pulizia, puoi rimetterlo.
        <div className="bg-black text-white min-h-screen">
            
            {/* NUOVO LAYOUT: Flexbox per le due colonne
              md:flex: Imposta il layout flex solo su schermi medi e più grandi
              min-h-screen: Assicura che l'area occupi almeno l'altezza dello schermo
            */}
            <div className="flex flex-col md:flex-row min-h-screen"> 
                
                {/* === COLONNA IMMAGINE (A SINISTRA) === */}
                {/* md:w-2/5: L'immagine occupa il 40% dello spazio su desktop
                  relative: Necessario per posizionare il testo 'fivefourfive' in modo assoluto
                */}
                <div className="md:w-2/5 w-full relative overflow-hidden h-96 md:h-auto">
                    
                    <img 
                        src="/components/volty.jpg"
                        alt="Uomo con fiori, five four five"
                        // object-cover e h-full/w-full replicano l'effetto di riempimento dell'immagine
                        className="object-cover h-full w-full"
                    />
                    
                </div>

                {/* === COLONNA TESTO (A DESTRA) === */}
                {/* md:w-3/5: Il testo occupa il 60% dello spazio su desktop
                  flex-grow: Permette alla colonna di espandersi
                  py-24 px-8 md:px-20: Padding generoso per il respiro
                  flex justify-center flex-col: Centra verticalmente il blocco di testo
                */}
                <div className="md:w-3/5 w-full py-16 md:py-24 px-6 md:px-20 flex justify-center flex-col">
                    
                    {/* Blocco di testo con i tuoi stili dark/gialli */}
                    <div className="max-w-xl">
                        <h1 className="text-xl font-extrabold mb-2 text-gray-400">Born in Sicily, Shaped in Italy, Shared in the World</h1>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">Can you feel the electricity in the air?</h2>
                        
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
                        Born from the vision of three young minds with a clear goal: to bring Sicily back to where it belongs. After experiencing the energy of underground villages in Europe’s major capitals, after immersing ourselves in the vibrations of the biggest electronic and tech-house events, we decided to create our own spark.
                        Corto Circuito is more than just an event—it’s a movement, a wave of energy sweeping across the island to ignite a new scene. It’s the meeting point between past and future, tradition and innovation, the warm soul of Sicily and the pulsating heartbeat of international club culture.
                        We want you to be part of our community, to rediscover the thrill of nights spent around the world. Corto Circuito is music, connection, expression. It merges the passion for sound with the passion for fashion, giving you the freedom to express yourself, to be who you are, to find your circuit.
                                                </p>

                        {/* Puoi inserire qui la tua Missione se lo desideri, adattando il padding e il layout. */}
                        {/* <div className="mt-8 bg-gray-900 p-8 rounded-xl border border-gray-800">
                             <h2 className="text-3xl font-bold text-yellow-400 mb-4">La Nostra Missione</h2>
                             ...
                        </div>
                        */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChiSiamoPage;