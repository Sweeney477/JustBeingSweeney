import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURED_PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = FEATURED_PROJECTS.find(p => p.id === id);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) {
    return null; // Or render a 404 state
  }

  const handleClose = () => {
    navigate('/');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] bg-white dark:bg-brand-black overflow-y-auto"
      >
        {/* Navigation / Close Header */}
        <div className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
           <button 
             onClick={handleClose}
             aria-label="Back to Gallery"
             className="pointer-events-auto group flex items-center gap-3 text-white bg-black/40 hover:bg-brand-accent backdrop-blur-md border border-white/10 px-5 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-brand-accent/20 hover:scale-105"
           >
             <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
             <span className="text-sm font-bold uppercase tracking-widest">Back to Gallery</span>
           </button>
           
           <button 
             onClick={handleClose}
             aria-label="Close Project"
             className="pointer-events-auto p-3 text-white bg-black/40 hover:bg-brand-accent backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 shadow-lg hover:shadow-brand-accent/20 hover:scale-105 hover:rotate-90"
           >
             <X className="w-6 h-6" />
           </button>
        </div>

        {/* Hero Section */}
        <div className="relative h-[70vh] w-full">
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="container mx-auto"
                >
                    <span className="inline-block px-3 py-1 mb-4 border border-white/40 text-xs font-bold uppercase tracking-widest rounded-full backdrop-blur-sm">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-serif font-bold mb-4">
                        {project.title}
                    </h1>
                    
                    <div className="flex flex-wrap gap-6 text-sm font-medium text-white/80">
                        {project.year && (
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {project.year}
                            </div>
                        )}
                        {project.location && (
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {project.location}
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-16 md:py-24">
            <div className="flex flex-col lg:flex-row gap-16">
                
                {/* Description - Sticky on Desktop */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="lg:w-1/3"
                >
                    <div className="lg:sticky lg:top-32">
                        <h2 className="text-2xl font-serif font-bold text-brand-black dark:text-white mb-6">About the Project</h2>
                        <p className="text-lg text-brand-gray dark:text-gray-300 leading-relaxed font-light mb-8">
                            {project.description || "Project description coming soon."}
                        </p>
                        <div className="w-12 h-1 bg-brand-accent mb-8" />
                        
                        <div className="p-6 bg-brand-light dark:bg-brand-dark rounded-sm border border-gray-200 dark:border-gray-800">
                             <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Project Details</h3>
                             <div className="space-y-2 text-sm text-brand-black dark:text-gray-300">
                                <div className="flex justify-between">
                                    <span>Client</span>
                                    <span className="font-bold">Personal</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Camera</span>
                                    <span className="font-bold">Nikon Z7</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Lens</span>
                                    <span className="font-bold">Nikkor 24-70mm</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* Image Gallery Grid */}
                <div className="lg:w-2/3 space-y-8">
                    {project.galleryImages?.map((img, index) => (
                        <motion.div 
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800 shadow-sm"
                        >
                            <img 
                                src={img} 
                                alt={`${project.title} detail ${index + 1}`} 
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                    ))}
                    {!project.galleryImages && (
                        <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400">
                            More images coming soon.
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-100 dark:border-gray-800 py-12 text-center bg-gray-50 dark:bg-brand-dark/30">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">View Next</p>
            <button 
                onClick={handleClose}
                className="text-2xl font-serif font-bold text-brand-black dark:text-white hover:text-brand-accent transition-colors"
            >
                Back to All Galleries
            </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;