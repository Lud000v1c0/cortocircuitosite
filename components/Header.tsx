import React from 'react';
import { Page } from '../App';
import logoSrc from './CORTO_CIRCUITO.png';


interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const navLinks = [
        { page: 'home', label: 'Home' },
        { page: 'eventi', label: 'Eventi' },
        { page: 'galleria', label: 'Galleria' },
        { page: 'chisiamo', label: 'Chi Siamo' },
        { page: 'contatti', label: 'Contatti' },
    ];

    return (
        <header className="absolute top-0 left-0 right-0 z-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <button onClick={() => setCurrentPage('home')} className="focus:outline-none transition-transform transform hover:scale-105">
                        <img src={logoSrc} alt="Cortocircuito Logo" width='200' className="h-10" />
                    </button>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(({ page, label }) => (
                            <button 
                                key={page}
                                onClick={() => setCurrentPage(page as Page)} 
                                className={`transition-colors ${currentPage === page ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`}
                            >
                                {label}
                            </button>
                        ))}
                    </nav>
                     <button onClick={() => setCurrentPage('ShopPage')} className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105">
                        Shop
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

