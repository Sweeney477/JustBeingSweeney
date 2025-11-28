import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FEATURED_PROJECTS } from '../constants';
import { Project } from '../types';

const GalleryGrid: React.FC = () => {
  return (
    <section id="galleries" className="py-20 bg-white dark:bg-brand-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-black dark:text-white">
            Featured Collections
          </h2>
          <a href="#all-projects" className="hidden md:inline-block text-sm font-bold uppercase tracking-widest text-brand-gray dark:text-gray-400 hover:text-brand-accent transition-colors">
            View All Projects
          </a>
        </div>

        {/* CSS Grid / Masonry-ish Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          
          {/* Print Shop CTA Tile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-brand-light dark:bg-brand-dark flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-brand-accent transition-colors cursor-pointer md:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold text-brand-black dark:text-white mb-2">
              Own a Print
            </h3>
            <p className="text-sm text-brand-gray dark:text-gray-400 mb-6">
              Limited edition fine art prints available.
            </p>
            <span className="px-6 py-2 bg-brand-black dark:bg-white text-white dark:text-brand-black text-xs font-bold uppercase tracking-widest group-hover:bg-brand-accent group-hover:text-white transition-colors">
              Visit Shop
            </span>
          </motion.div>
        </div>
        
         <div className="mt-8 text-center md:hidden">
            <a href="#all-projects" className="text-sm font-bold uppercase tracking-widest text-brand-gray dark:text-gray-400 hover:text-brand-accent transition-colors">
                View All Projects
            </a>
         </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Determine span based on size prop for masonry effect
  const spanClass = 
    project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
    project.size === 'tall' ? 'md:row-span-2' : 
    '';

  return (
    <motion.div 
      className={`relative group overflow-hidden block bg-gray-200 dark:bg-gray-800 ${spanClass}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/project/${project.id}`} className="block w-full h-full relative">
        <img 
          src={project.imageUrl} 
          alt={`Cover for ${project.title}`} 
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
        />
        
        {/* Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-8">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            {project.category}
          </span>
          <h3 className="text-white text-2xl font-serif font-bold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};

export default GalleryGrid;