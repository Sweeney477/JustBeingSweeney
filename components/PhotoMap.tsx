import React, { useState } from 'react';
import { MapPin, X, ExternalLink } from 'lucide-react';
import { MAP_LOCATIONS } from '../constants';
import { PhotoLocation } from '../types';

const PhotoMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<PhotoLocation | null>(null);

  return (
    <section className="py-20 bg-brand-light dark:bg-brand-dark transition-colors duration-300 overflow-hidden" id="map">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-black dark:text-white mb-4">
          Explore Chicago Through My Lens
        </h2>
        <p className="text-brand-gray dark:text-gray-400 max-w-2xl mx-auto">
          Click the pins on the map to see the stories behind the locations.
        </p>
      </div>

      <div className="relative container mx-auto px-0 md:px-6">
        {/* Map Container */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-inner group">
          {/* Abstract Map Background - representing Chicago */}
          <div className="absolute inset-0 opacity-40 dark:opacity-20 bg-[url('https://images.unsplash.com/photo-1494522855154-9297ac14b55f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"></div>
          
          {/* Stylized Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          {/* Interactive Pins */}
          {MAP_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc)}
              className="absolute group/pin transform -translate-x-1/2 -translate-y-1/2 z-10 hover:z-20 focus:outline-none"
              style={{ top: loc.top, left: loc.left }}
              aria-label={`View photo from ${loc.title}`}
            >
              <div className="relative flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                <MapPin className={`w-8 h-8 md:w-10 md:h-10 ${activeLocation?.id === loc.id ? 'text-brand-accent fill-brand-accent' : 'text-brand-black dark:text-white fill-current'} drop-shadow-2xl filter`} />
                
                {/* Pulse effect for unselected pins */}
                {activeLocation?.id !== loc.id && (
                    <span className="absolute inset-0 rounded-full bg-brand-accent/50 animate-ping opacity-75 duration-1000 -z-10 h-full w-full"></span>
                )}

                <span className="mt-2 px-3 py-1 bg-white dark:bg-black text-xs font-bold uppercase tracking-wider rounded shadow-md opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {loc.title}
                </span>
              </div>
            </button>
          ))}

          {/* Location Detail Overlay */}
          {activeLocation && (
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 dark:bg-brand-black/95 backdrop-blur-sm p-5 rounded-lg shadow-2xl max-w-xs md:max-w-sm z-30 animate-in fade-in slide-in-from-bottom-4 duration-300 border-l-4 border-brand-accent">
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveLocation(null); }}
                className="absolute top-2 right-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                aria-label="Close details"
              >
                <X className="w-4 h-4 text-gray-500" />
              </button>
              
              <div className="flex gap-4">
                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 overflow-hidden rounded-sm bg-gray-100">
                    <img 
                    src={activeLocation.imageUrl} 
                    alt={activeLocation.title} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-lg text-brand-black dark:text-white leading-tight mb-1 truncate">
                    {activeLocation.title}
                  </h3>
                  <p className="text-sm text-brand-gray dark:text-gray-400 mb-3 line-clamp-2">
                    {activeLocation.description}
                  </p>
                  <a href={`#gallery-${activeLocation.id}`} className="inline-flex items-center text-xs font-bold text-brand-accent uppercase tracking-wider hover:underline group">
                    View Gallery <ExternalLink className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile-only horizontal scroll view */}
        <div className="md:hidden mt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 px-6">Select a Location</p>
            <div className="flex overflow-x-auto gap-4 pb-6 px-6 hide-scrollbar snap-x">
                {MAP_LOCATIONS.map(loc => (
                    <div 
                        key={loc.id} 
                        onClick={() => setActiveLocation(loc)} 
                        className={`flex-shrink-0 w-64 bg-white dark:bg-brand-dark rounded-lg p-4 shadow-md border snap-center transition-all cursor-pointer ${activeLocation?.id === loc.id ? 'border-brand-accent ring-1 ring-brand-accent' : 'border-gray-100 dark:border-gray-800'}`}
                    >
                        <div className="aspect-video w-full overflow-hidden rounded-sm mb-3">
                            <img src={loc.imageUrl} alt={loc.title} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="font-bold text-brand-black dark:text-white mb-1">{loc.title}</h3>
                        <p className="text-xs text-gray-500 line-clamp-2 mb-3">{loc.description}</p>
                        <a href={`#gallery-${loc.id}`} className="text-xs font-bold text-brand-accent uppercase flex items-center gap-1">View Photos <ExternalLink className="w-3 h-3" /></a>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoMap;