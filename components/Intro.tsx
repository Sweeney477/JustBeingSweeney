import React from 'react';
import { Camera } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-brand-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://picsum.photos/seed/sweeneyportrait/800/1000" 
                alt="Sweeney photographer candid portrait with Nikon Z7" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black dark:text-white">
              More Than Just Photos.
            </h2>
            <div className="w-16 h-1 bg-brand-accent"></div>
            <p className="text-lg text-brand-gray dark:text-gray-300 leading-relaxed">
              Welcome to <strong>Just Being Sweeney</strong>. This site began as a challenge to capture one image every day during the month of June and has evolved into a comprehensive archive of life in Chicago. 
            </p>
            <p className="text-lg text-brand-gray dark:text-gray-300 leading-relaxed">
              Whether it's the symmetry of a skyscraper or the raw emotion of a street performer, my goal is to document the world as it happens.
            </p>

            {/* Gear Pill */}
            <div className="inline-flex items-center space-x-3 px-4 py-2 bg-gray-100 dark:bg-brand-dark rounded-full border border-gray-200 dark:border-gray-700">
              <Camera className="w-4 h-4 text-brand-accent" />
              <span className="text-sm font-medium text-brand-gray dark:text-gray-300">
                Shot on <a href="#gear" className="underline decoration-brand-accent underline-offset-2 hover:text-brand-accent">Nikon Z7</a>. Edited in Lightroom.
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Intro;