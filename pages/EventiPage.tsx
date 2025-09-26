
import React from 'react';

const EventiPage: React.FC = () => {
    return (
        <div className="bg-black text-white min-h-screen animate-fade-in">
            <div className="container mx-auto px-6 py-32 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">I Nostri Eventi</h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                    Dalle convention aziendali ai lanci di prodotto, dai concerti privati alle celebrazioni esclusive, progettiamo e realizziamo eventi che superano ogni aspettativa. Scopri cosa possiamo creare per te.
                </p>
                {/* Placeholder content */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Corporate & MICE</h3>
                        <p className="text-gray-400">Meeting, congressi, fiere e team building. Soluzioni innovative per comunicare i valori del tuo brand e motivare il tuo team.</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Eventi Privati</h3>
                        <p className="text-gray-400">Feste esclusive, anniversari e matrimoni non convenzionali. Rendiamo ogni momento privato un ricordo indimenticabile.</p>
                    </div>
                     <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Lanci di Prodotto</h3>
                        <p className="text-gray-400">Creiamo suspense, emozione e un'eco mediatica potente per presentare al mondo le tue novità con un evento d'impatto.</p>
                    </div>
                     <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                        <h3 className="text-2xl font-bold text-yellow-400 mb-2">Live Entertainment</h3>
                        <p className="text-gray-400">Concerti, DJ set, performance artistiche. Curiamo la direzione artistica e tecnica per show che lasciano il segno.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventiPage;
