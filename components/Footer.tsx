import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';
import { APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Newsletter */}
        <div className="max-w-4xl mx-auto bg-brand-dark p-8 md:p-12 rounded-sm border border-gray-800 mb-20 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">The Weekly Frame.</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Join 1,000+ others. Get one high-res wallpaper and the story behind my favorite shot of the week.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="bg-brand-black border border-gray-700 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent w-full"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="bg-brand-black border border-gray-700 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent w-full"
            />
            <button className="bg-white text-brand-black font-bold uppercase tracking-widest px-8 py-3 hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-xl font-serif font-bold mb-4">{APP_NAME}</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Documenting life in Chicago through architecture, street, and visual storytelling.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-6">Explore</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Galleries</a></li>
              <li><a href="#" className="hover:text-white">The June Project</a></li>
              <li><a href="#" className="hover:text-white">Interactive Map</a></li>
              <li><a href="#" className="hover:text-white">Shop Prints</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-6">Information</h5>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">About Me</a></li>
              <li><a href="#" className="hover:text-white">My Gear</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs text-gray-400 mb-6">Connect</h5>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2025 {APP_NAME}. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;