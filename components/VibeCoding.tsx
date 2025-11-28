import React from 'react';
import { Github, ExternalLink, Code2, Sparkles, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { VIBE_CODING_PROJECTS } from '../constants';

const VibeCoding: React.FC = () => {
  return (
    <section id="vibe-coding" className="py-24 bg-gray-50 dark:bg-brand-dark/50 transition-colors duration-300 relative overflow-hidden border-t border-gray-100 dark:border-gray-800">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* Decorative Blur Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-brand-accent border border-blue-100 dark:border-blue-800 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              <Code2 className="w-3 h-3" />
              <span>Experimental & AI</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-black dark:text-white mb-4">
              Vibe Coding
            </h2>
            <p className="text-lg text-brand-gray dark:text-gray-400 leading-relaxed font-light">
              Where visual art meets artificial intelligence. Exploring generative design, automation, and the future of creativity through code.
            </p>
          </div>
          <div className="hidden md:block text-gray-200 dark:text-gray-800">
            <Terminal className="w-16 h-16 opacity-50" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIBE_CODING_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-brand-black rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-brand-accent/50 dark:hover:border-brand-accent/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                <div className="absolute inset-0 bg-brand-accent/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Tech Icon Overlay */}
                <div className="absolute top-4 right-4 z-20">
                   <div className="p-2 bg-white/90 dark:bg-black/80 backdrop-blur-sm rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                     <Cpu className="w-4 h-4 text-brand-accent" />
                   </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-brand-black dark:text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Footer Links */}
                <div className="flex items-center gap-5 pt-5 border-t border-gray-100 dark:border-gray-800">
                  {project.demoUrl ? (
                    <a href={project.demoUrl} className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-black dark:text-white hover:text-brand-accent transition-colors">
                      <ExternalLink className="w-3.5 h-3.5 mr-2" /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 cursor-not-allowed">
                       <ExternalLink className="w-3.5 h-3.5 mr-2" /> Private Demo
                    </span>
                  )}
                  
                  {project.repoUrl && (
                    <a href={project.repoUrl} className="flex items-center text-xs font-bold uppercase tracking-widest text-brand-black dark:text-white hover:text-brand-accent transition-colors">
                      <Github className="w-3.5 h-3.5 mr-2" /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeCoding;