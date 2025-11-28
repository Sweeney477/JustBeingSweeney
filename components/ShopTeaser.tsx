import React from 'react';

const ShopTeaser: React.FC = () => {
  return (
    <section className="py-24 bg-brand-light dark:bg-brand-dark transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black dark:text-white mb-4">
            Bring Chicago Home.
          </h2>
          <p className="text-brand-gray dark:text-gray-400 max-w-xl mx-auto">
            Museum-quality prints, canvas, and metal wall art available for your home or office.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group bg-white dark:bg-brand-black p-4 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-square bg-gray-100 mb-4 overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/print${item}/500/500`} 
                  alt="Framed print mockup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black dark:text-white">
                  Limited
                </div>
              </div>
              <h3 className="text-lg font-bold text-brand-black dark:text-white">Chicago Series No. {item}</h3>
              <p className="text-sm text-gray-500 mb-4">Fine Art Paper, Framed</p>
              <span className="text-brand-accent font-medium">From $120</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
            <button className="px-10 py-4 bg-brand-black dark:bg-white text-white dark:text-brand-black font-bold uppercase tracking-widest hover:opacity-80 transition-opacity">
                Visit the Print Shop
            </button>
        </div>
      </div>
    </section>
  );
};

export default ShopTeaser;