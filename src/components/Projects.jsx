import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="text-muted mt-4 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my skills and experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-primary rounded-lg text-accent">
                                        <Folder size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.link} className="text-muted hover:text-accent transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.link} className="text-muted hover:text-accent transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-medium px-3 py-1 bg-primary rounded-full text-muted border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
