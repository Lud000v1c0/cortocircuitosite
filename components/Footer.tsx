import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black border-t border-gray-800">
            <div className="container mx-auto px-6 py-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} Cortocircuito. Tutti i diritti riservati.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://www.instagram.com/cortocircuito__event?utm_source=ig_web_button_share_sheet&igsh=MW52bXo5aThienRqOQ==" className="hover:text-white transition-colors">Instagram</a>
                    <a href="https://chat.whatsapp.com/IQCjiG3kWTX8XCB4cOopnE?mode=wwc" className="hover:text-white transition-colors">WhatsApp</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;