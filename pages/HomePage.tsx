import React from 'react';
import Hero from '../components/Hero';
import walkerGif from './vollty_walk_transparent_slow.gif';
import backgroundImage from './volty_sfo.jpg'; 

interface HomePageProps {
  setCurrentPage: (
    page: 'home' | 'eventi' | 'galleria' | 'chisiamo' | 'contatti' | 'ShopPage'
  ) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      
      {/* 1. SFONDO (Immagine) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(2) drop-shadow(0 0 15px #FFD700)',
          opacity: 1,
        }}
      ></div>

      {/* 2. OVERLAY SCURO (Velo) 
          MODIFICA QUI: cambiato da 'bg-black/50' a 'bg-black/80'
          Più alto è il numero (max 100), più è scuro.
      */}
      <div className="absolute inset-0 z-0 bg-black/80 pointer-events-none"></div>


      {/* --- STILI CSS --- */}
      <style>{`
        @keyframes muovi {
          0% {
            left: -300px;
            transform: scaleX(1);
          }
          50% {
            left: calc(100vw - 250px);
            transform: scaleX(1);
          }
          51% {
            transform: scaleX(-1);
          }
          100% {
            left: -300px;
            transform: scaleX(-1);
          }
        }

        .animate-walk {
          position: absolute;
          animation: muovi 10s linear infinite;
        }
      `}</style>


      {/* 3. HERO (Contenuto) */}
      <div className="relative z-10">
        <Hero setCurrentPage={setCurrentPage} />
      </div>


      {/* 4. GIF WALKER */}
      <img
        src={walkerGif}
        alt="Personaggio che cammina"
        className="absolute bottom-8 w-[250px] left-[-300px] animate-walk z-20"
      />
    </div>
  );
};

export default HomePage;