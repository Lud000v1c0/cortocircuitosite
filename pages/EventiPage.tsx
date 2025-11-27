import React, { useEffect, useState } from 'react';

interface EventPoster {
    id: number;
    title: string;
    location: string;
    time: string;
    imageUrl: string;
}

const EventiPage: React.FC = () => {
    const [events, setEvents] = useState<EventPoster[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                setLoading(true);
                setError(null);

                // PATH CORRETTO (ora funziona): /pages/events
                const modules = import.meta.glob('/pages/events/**/*', { eager: true });
                console.log("DEBUG: Modules imported by Vite:", modules);

                const loadedEvents: EventPoster[] = [];

                const eventDirectories: { [key: string]: any } = {};
                for (const path in modules) {
                    const parts = path.split('/');
                    if (parts.length < 2) continue;

                    const eventFolderName = parts[parts.length - 2];
                    if (!eventDirectories[eventFolderName]) {
                        eventDirectories[eventFolderName] = [];
                    }
                    eventDirectories[eventFolderName].push({ path, module: modules[path] });
                }

                for (const folderName in eventDirectories) {
                    console.log("DEBUG: Processing folder name:", folderName);

                    // 1. NUOVA REGEX AGGIORNATA
                    // Cerca: ID spazio Titolo = Luogo spazio DATA(gg-mm-aaaa) spazio ORA(hh_mm)
                    const match = folderName.match(/^(\d+)\s+(.*?)\s+=\s+(.*?)\s+(\d{2}-\d{2}-\d{4})\s+(\d{2}_\d{2})$/);

                    if (match) {
                        const id = parseInt(match[1]);
                        const title = match[2].trim();
                        const location = match[3].trim();
                        
                        // 2. GESTIONE DATA E ORA
                        const rawDate = match[4]; // Prende "19-01-2025"
                        const rawTime = match[5]; // Prende "21_00"

                        // Converte i trattini in slash per l'estetica: "19-01-2025" -> "19/01/2025"
                        const formattedDate = rawDate.replace(/-/g, '/');
                        
                        // Converte l'underscore in due punti: "21_00" -> "21:00"
                        const formattedTime = rawTime.replace('_', ':');

                        // Unisce tutto in un'unica stringa per la UI
                        // Risultato finale: "19/01/2025 alle 21:00" (o togli 'alle' se preferisci solo spazio)
                        const timeDisplay = `${formattedDate} dalle ${formattedTime}`;

                        const imageModule = eventDirectories[folderName].find(
                            (item: any) =>
                                item.path.endsWith('.jpg') ||
                                item.path.endsWith('.jpeg') ||
                                item.path.endsWith('.png') ||
                                item.path.endsWith('.gif') ||
                                item.path.endsWith('.webp') ||
                                item.path.endsWith('.gif')
                        );

                        if (imageModule) {
                            loadedEvents.push({
                                id,
                                title,
                                location,
                                time: timeDisplay, // Qui passiamo la stringa combinata
                                imageUrl: imageModule.module.default,
                            });
                        } else {
                            console.warn(`WARN: No image found for event folder: ${folderName}`);
                        }
                    } else {
                        console.warn(`WARN: Folder name did not match pattern: ${folderName}`);
                        // Questo log è cruciale se non funziona, ti dirà perché la regex fallisce
                        console.log("Regex attempted:", /^(\d+)\s+(.*?)\s+=\s+(.*?)\s+(\d{2}_\d{2})$/);
                    }
                }

                loadedEvents.sort((a, b) => b.id - a.id);
                setEvents(loadedEvents);
            } catch (err) {
                console.error("ERROR: Failed to load events:", err);
                setError("Impossibile caricare gli eventi. Riprova più tardi.");
            } finally {
                setLoading(false);
            }
        };

        loadEvents();
    }, []);

    if (loading) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <p className="text-xl">Caricamento eventi...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-black text-white min-h-screen flex items-center justify-center">
                <p className="text-xl text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen animate-fade-in">
            <div className="container mx-auto px-6 py-16 md:py-32 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">I Nostri Eventi</h1>
                 <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16">
                    {/* Dalle convention aziendali ai lanci di prodotto, dai concerti privati alle celebrazioni esclusive, progettiamo e realizziamo eventi che superano ogni aspettativa. Scopri cosa possiamo creare per te. */}
                 </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-black p-4 rounded-lg  flex flex-col items-center">
                            <img
                                src={event.imageUrl}
                                alt={`Locandina di ${event.title}`}
                                className="w-full h-auto object-cover rounded-md mb-4 shadow-lg"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = 'https://via.placeholder.com/400x600?text=Immagine+non+trovata';
                                    console.error(`ERROR: Failed to load image for event "${event.title}". URL: ${event.imageUrl}`);
                                }}
                            />
                            <h3 className="text-2xl font-bold text-yellow-400 mb-2">{event.title}</h3>
                            <p className="text-gray-400 text-center mb-1">
                                <span className="font-semibold">Dove:</span> {event.location}
                            </p>
                            <p className="text-gray-400 text-center">
                                <span className="font-semibold">Quando:</span> {event.time}
                            </p>
                        </div>
                    ))}
                </div>

                {events.length === 0 && !loading && (
                    <p className="text-gray-500 mt-10">Nessun evento disponibile al momento.</p>
                )}
            </div>
        </div>
    );
};

export default EventiPage;