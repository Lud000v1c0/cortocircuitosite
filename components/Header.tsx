import React, { useState } from 'react';
import { Page } from '../App';
import logoSrc from './CORTO_CIRCUITO.png';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { page: 'home', label: 'Home' },
        { page: 'eventi', label: 'Event' },
        { page: 'galleria', label: 'Gallery' },
        { page: 'chisiamo', label: 'About Us' },
        { page: 'contatti', label: 'Contact' },
    ];

    return (
        <header className="absolute top-0 left-0 right-0 z-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="container mx-auto px-6 py-4 relative flex items-center justify-between">
                {/* --- Logo --- */}
                <button onClick={() => setCurrentPage('home')} className="focus:outline-none transition-transform transform hover:scale-105">
                    <img src={logoSrc} alt="Cortocircuito Logo" width="200" className="h-10" />
                </button>

                {/* --- Navbar Desktop (centrata) --- */}
                <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
                    {navLinks.map(({ page, label }) => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page as Page)}
                            className={`transition-colors ${
                                currentPage === page ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                {/* --- Pulsante Shop Desktop --- */}
                <button
                    onClick={() => setCurrentPage('ShopPage')}
                    className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                >
                    Shop
                </button>

                {/* --- Pulsante Hamburger Mobile --- */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-300 hover:text-yellow-400 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isMobileMenuOpen
                                        ? 'M6 18L18 6M6 6l12 12'
                                        : 'M4 6h16M4 12h16m-4 6h10'
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* --- Menu a Tendina Mobile --- */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-4 bg-[#171717] bg-opacity-99 rounded-lg shadow-lg mx-4 p-4 animate-slide-down">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        {navLinks.map(({ page, label }) => (
                            <button
                                key={page}
                                onClick={() => {
                                    setCurrentPage(page as Page);
                                    setMobileMenuOpen(false);
                                }}
                                className={`transition-colors text-lg w-full py-2 ${
                                    currentPage === page
                                        ? 'text-yellow-400 font-bold'
                                        : 'text-gray-300 hover:text-yellow-400'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                        <button
                            onClick={() => {
                                setCurrentPage('ShopPage');
                                setMobileMenuOpen(false);
                            }}
                            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 mt-2"
                        >
                            Shop
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
