
import React, { useState, useEffect } from 'react';
import Lightning from './components/Lightning';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EventiPage from './pages/EventiPage';
import GalleriaPage from './pages/GalleriaPage';
import ChiSiamoPage from './pages/ChiSiamoPage';
import ContattiPage from './pages/ContattiPage';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';


export type Page = 'home' | 'eventi' | 'galleria' | 'chisiamo' | 'contatti' | 'ShopPage';

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState<Page>('home');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2800); // Duration of the lightning animation

        return () => clearTimeout(timer);
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage setCurrentPage={setCurrentPage} />;
            case 'eventi':
                return <EventiPage />;
            case 'galleria':
                return <GalleriaPage />;
            case 'chisiamo':
                return <ChiSiamoPage />;
            case 'contatti':
                return <ContattiPage />;
            case 'ShopPage': 
                return <ShopPage />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} />;
        }
    };

    return (
        <>
            {loading && <Lightning />}
            <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                <div className="relative z-10 min-h-screen text-white font-sans overflow-x-hidden flex flex-col">
                    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <main className="flex-grow">
                        {renderPage()}
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default App;
