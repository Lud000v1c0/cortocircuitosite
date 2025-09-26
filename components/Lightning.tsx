import React, { useState, useEffect } from 'react';

const generateBoltPath = (width: number, height: number): string => {
    // Consenti ai fulmini di iniziare da qualsiasi punto lungo la parte superiore per una maggiore diffusione
    const startX = width * Math.random();
    let path = `M ${startX} 0`;
    let currentY = 0;
    let currentX = startX;

    while (currentY < height) {
        const segmentLength = 20 + Math.random() * 30;
        currentY += segmentLength;
        // Aumenta la diffusione orizzontale per un aspetto più frastagliato
        const newX = currentX + (Math.random() - 0.5) * 80;
        path += ` L ${newX} ${currentY}`;

        // Aumenta la possibilità e la diffusione delle biforcazioni
        if (Math.random() > 0.7 && currentY < height * 0.8) {
            const forkX = newX + (Math.random() - 0.5) * 150;
            const forkY = currentY + 50 + Math.random() * 50;
            path += ` M ${newX} ${currentY} L ${forkX} ${forkY}`;
        }
        currentX = newX;
    }
    return path;
};

const Lightning: React.FC = () => {
    const [bolts, setBolts] = useState<string[]>([]);
    const [flash, setFlash] = useState(false);

    useEffect(() => {
        const createBolts = () => {
            const { innerWidth, innerHeight } = window;
            const newBolts = Array.from({ length: 1 + Math.floor(Math.random() * 2) }, () =>
                generateBoltPath(innerWidth, innerHeight)
            );
            setBolts(newBolts);
            setFlash(true);
            setTimeout(() => setFlash(false), 150);
        };
        
        createBolts();
        const interval = setInterval(createBolts, 400 + Math.random() * 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 bg-black z-50 overflow-hidden">
            {flash && <div className="absolute inset-0 animate-lightning-flash" style={{ backgroundColor: 'rgba(255, 251, 235, 0.8)' }} />}
            <svg width="100%" height="100%" className="absolute inset-0">
                {bolts.map((path, index) => (
                    <path
                        key={index}
                        d={path}
                        stroke="rgba(255, 255, 224, 0.9)"
                        strokeWidth="1"
                        fill="none"
                        className="animate-bolt-flicker"
                        style={{
                           filter: 'blur(1px)',
                           animationDelay: `${Math.random() * 50}ms`,
                        }}
                    />
                ))}
                 {bolts.map((path, index) => (
                    <path
                        key={`glow-${index}`}
                        d={path}
                        stroke="#fde047"
                        strokeWidth="5"
                        fill="none"
                        className="animate-bolt-flicker"
                        style={{ 
                            filter: 'blur(10px)',
                            animationDelay: `${Math.random() * 50}ms`,
                         }}
                    />
                ))}
            </svg>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 text-lg animate-pulse font-mono">
                Initializing...
            </div>
        </div>
    );
};

export default Lightning;