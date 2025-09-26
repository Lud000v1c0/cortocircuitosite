import React from 'react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string, delay: string }> = ({ icon, title, description, delay }) => {
    return (
        <div 
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 hover:border-yellow-500 hover:shadow-yellow-500/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: delay }}
        >
            <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-gray-800 text-yellow-400">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    );
};

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ProductionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const ExperienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 4v4m-2-2h4M5 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
    </svg>
);


const Features: React.FC = () => {
    const features = [
        {
            icon: <LocationIcon />,
            title: "Location Esclusive",
            description: "Selezioniamo solo le location più suggestive e adatte a trasformare il tuo evento in un momento unico.",
        },
        {
            icon: <ProductionIcon />,
            title: "Produzione Impeccabile",
            description: "Dall'audio alle luci, curiamo ogni dettaglio tecnico con la massima professionalità per uno show senza eguali.",
        },
        {
            icon: <ExperienceIcon />,
            title: "Esperienze Memorabili",
            description: "Progettiamo format creativi e coinvolgenti che lasciano un'impressione duratura nei tuoi ospiti.",
        },
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white animate-fade-in" style={{ animationDelay: '0.8s' }}>Perché Scegliere Cortocircuito?</h2>
                    <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
                        Non organizziamo solo eventi. Creiamo connessioni, emozioni e ricordi.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            icon={feature.icon} 
                            title={feature.title} 
                            description={feature.description}
                            delay={`${1.2 + index * 0.2}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;