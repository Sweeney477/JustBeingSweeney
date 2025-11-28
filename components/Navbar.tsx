import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Moon, Sun, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, APP_NAME } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode, onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-brand-black/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <a href="#" className={`text-2xl font-serif font-bold tracking-tighter ${isScrolled ? 'text-brand-black dark:text-white' : 'text-white mix-blend-difference'}`}>
          {APP_NAME}
        </a>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a 
                href={item.href || '#'} 
                className={`flex items-center text-sm font-medium tracking-wide uppercase hover:text-brand-accent transition-colors ${isScrolled ? 'text-brand-gray dark:text-gray-300' : 'text-white mix-blend-difference'}`}
              >
                {item.label}
                {item.children && <ChevronDown className="ml-1 w-4 h-4" />}
              </a>
              
              {/* Dropdown */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-brand-dark shadow-xl rounded-sm py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.children.map((child) => (
                    <a 
                      key={child.label} 
                      href={child.href} 
                      className="block px-4 py-2 text-sm text-brand-gray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-brand-black hover:text-brand-accent"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Controls */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={onSearchClick}
            className={`hover:text-brand-accent transition-colors ${isScrolled ? 'text-brand-black dark:text-white' : 'text-white mix-blend-difference'}`}
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={toggleDarkMode}
            className={`hover:text-brand-accent transition-colors ${isScrolled ? 'text-brand-black dark:text-white' : 'text-white mix-blend-difference'}`}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <a 
            href="#book" 
            className="hidden md:inline-block px-6 py-2 bg-brand-black dark:bg-white text-white dark:text-brand-black text-xs font-bold uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            Book Me
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-brand-black dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-brand-black dark:text-white' : 'text-white mix-blend-difference'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-black shadow-xl py-6 px-6 flex flex-col space-y-4 h-screen border-t border-gray-200 dark:border-gray-800">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <a href={item.href || '#'} className="block text-xl font-serif font-bold text-brand-black dark:text-white mb-2">
                {item.label}
              </a>
              {item.children && (
                <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 flex flex-col space-y-2">
                  {item.children.map(child => (
                    <a key={child.label} href={child.href} className="text-sm text-gray-500 dark:text-gray-400">
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="#book" className="mt-8 block w-full text-center py-3 bg-brand-black dark:bg-white text-white dark:text-brand-black font-bold uppercase tracking-widest">
            Book Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;