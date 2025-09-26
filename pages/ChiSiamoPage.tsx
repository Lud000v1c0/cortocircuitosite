
import React from 'react';

const ChiSiamoPage: React.FC = () => {
    return (
        <div className="bg-black text-white min-h-screen animate-fade-in">
            <div className="container mx-auto px-6 py-32">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">La Nostra Scintilla</h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Siamo un collettivo di creativi, strategist, e tecnici uniti dalla passione per gli eventi non convenzionali. Non seguiamo le mode, le creiamo.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto bg-gray-900 p-8 md:p-12 rounded-xl border border-gray-800">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-6">La Nostra Missione</h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        Cortocircuito nasce dalla convinzione che un evento sia molto più di una semplice occasione di incontro. È una scarica di adrenalina, un'opportunità per creare connessioni profonde e un veicolo per raccontare storie memorabili. La nostra missione è trasformare ogni idea in un'esperienza elettrizzante, curando ogni singolo dettaglio con precisione maniacale e un'inesauribile carica creativa.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Sfidiamo lo status quo, esploriamo nuove tecnologie e collaboriamo con i migliori talenti per garantire che ogni nostro evento non sia solo visto, ma vissuto intensamente. Per noi, il successo si misura in emozioni, applausi e nel desiderio degli ospiti di rivivere ancora quella magia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChiSiamoPage;
