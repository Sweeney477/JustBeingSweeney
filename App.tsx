import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import PhotoMap from './components/PhotoMap';
import GalleryGrid from './components/GalleryGrid';
import ShopTeaser from './components/ShopTeaser';
import GearLocker from './components/GearLocker';
import VibeCoding from './components/VibeCoding';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Initialize theme based on preference or system
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Toggle class on body/html for Tailwind dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <HashRouter>
      <div className={`min-h-screen flex flex-col font-sans selection:bg-brand-accent selection:text-white relative`}>
        <Navbar 
          darkMode={darkMode} 
          toggleDarkMode={() => setDarkMode(!darkMode)} 
          onSearchClick={() => setSearchOpen(true)}
        />
        
        <main className="flex-grow">
          <Hero />
          <Intro />
          <PhotoMap />
          <GalleryGrid />
          <VibeCoding />
          <ShopTeaser />
          <GearLocker />
        </main>
        
        <Footer />
        
        <SearchModal 
          isOpen={searchOpen} 
          onClose={() => setSearchOpen(false)} 
        />

        {/* Project Routes rendered on top as overlays */}
        <Routes>
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;