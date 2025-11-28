import React, { useState, useRef, useEffect } from 'react';
import { X, Search, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchPortfolio } from '../services/geminiService';
import { SearchResult } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) {
      // Reset state on close
      setQuery('');
      setResult(null);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResult(null);
    
    // Call Gemini API
    const searchResult = await searchPortfolio(query);
    
    setResult(searchResult);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-white dark:bg-brand-dark w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-gray dark:text-gray-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-accent" />
              Ask the Archive
            </h3>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Input */}
          <form onSubmit={handleSearch} className="p-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input 
                ref={inputRef}
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about Chicago, architecture, or my gear..." 
                className="w-full bg-gray-50 dark:bg-black border-2 border-transparent focus:border-brand-accent rounded-lg py-4 pl-14 pr-4 text-xl text-brand-black dark:text-white placeholder-gray-400 focus:outline-none transition-colors"
              />
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-500 text-center">
              Powered by Google Gemini AI
            </div>
          </form>

          {/* Results Area */}
          <div className="min-h-[150px] bg-gray-50 dark:bg-black/50 p-6 border-t border-gray-100 dark:border-gray-800">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                <Loader2 className="w-8 h-8 animate-spin mb-2 text-brand-accent" />
                <p className="text-sm animate-pulse">Searching the portfolio...</p>
              </div>
            ) : result ? (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="text-lg text-brand-black dark:text-gray-200 leading-relaxed mb-6">
                  {result.text}
                </p>
                {result.relatedLinks.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Suggested Galleries</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.relatedLinks.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.url}
                          onClick={onClose}
                          className="px-4 py-2 bg-white dark:bg-brand-dark border border-gray-200 dark:border-gray-700 rounded text-sm font-medium hover:border-brand-accent hover:text-brand-accent transition-colors text-brand-black dark:text-white"
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400 text-sm">
                Try searching for "photos of the Loop", "night photography", or "what camera do you use?"
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchModal;