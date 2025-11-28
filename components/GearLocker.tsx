import React from 'react';
import { GEAR_LIST } from '../constants';

const GearLocker: React.FC = () => {
  return (
    <section id="gear" className="py-20 bg-white dark:bg-brand-black border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-black dark:text-white mb-4 md:mb-0">
            What's in My Bag?
          </h2>
          <a href="#full-gear" className="text-sm font-bold text-brand-accent uppercase tracking-widest hover:underline">
            See Full Gear List &rarr;
          </a>
        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-12">
          {GEAR_LIST.map((gear) => (
            <div key={gear.name} className="flex flex-col items-center text-center group cursor-pointer w-full md:w-auto">
              <div className="w-24 h-24 bg-gray-50 dark:bg-brand-dark rounded-full flex items-center justify-center mb-4 text-brand-gray dark:text-gray-400 group-hover:text-brand-accent group-hover:scale-110 transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {gear.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-black dark:text-white">{gear.name}</h3>
              <p className="text-sm text-gray-500">{gear.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearLocker;