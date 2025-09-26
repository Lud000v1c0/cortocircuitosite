import React from 'react';
import Hero from '../components/Hero';

interface HomePageProps {
  setCurrentPage: (page: 'home' | 'eventi' | 'galleria' | 'chisiamo' | 'contatti' | 'ShopPage') => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div>
      <Hero setCurrentPage={setCurrentPage} />
      {/* Qui puoi aggiungere altri componenti della home (sezioni, cards, ecc.) */}
    </div>
  );
};

export default HomePage;
