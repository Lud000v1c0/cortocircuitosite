import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-6 py-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Cortocircuito. Tutti i diritti riservati.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;