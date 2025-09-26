
import React from 'react';

const ContattiPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real application, you would handle form submission here.
        alert('Grazie per averci contattato! Ti risponderemo il prima possibile.');
        (e.target as HTMLFormElement).reset();
    };
    return (
        <div className="bg-black text-white min-h-screen animate-fade-in">
            <div className="container mx-auto px-6 py-32">
                 <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Mettiamoci in Contatto</h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                        Hai un'idea che ha bisogno di una scintilla? Raccontaci il tuo progetto. Siamo pronti ad accendere la miccia.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800">
                     <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-400 text-sm font-bold mb-2">Nome</label>
                            <input type="text" id="name" name="name" required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-400 text-sm font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500" />
                        </div>
                         <div className="mb-8">
                            <label htmlFor="message" className="block text-gray-400 text-sm font-bold mb-2">Il tuo Messaggio</label>
                            <textarea id="message" name="message" rows={5} required className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-500"></textarea>
                        </div>
                        <div className="text-center">
                             <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg shadow-yellow-500/20">
                                Invia Messaggio
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContattiPage;
