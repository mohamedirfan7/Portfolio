import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/20 -translate-x-1/2"></div>

                            <div className={`md:flex items-center justify-between gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-secondary border-2 border-accent rounded-full flex items-center justify-center -translate-x-[11px] md:-translate-x-1/2 z-10">
                                    <Briefcase size={14} className="text-accent" />
                                </div>

                                <div className="md:w-1/2 mb-8 md:mb-0"></div>

                                <div className="md:w-1/2 bg-primary p-6 rounded-2xl border border-white/5 shadow-lg hover:border-accent/30 transition-all duration-300">
                                    <div className="flex flex-wrap justify-between items-start mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                                            <p className="text-accent font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-xs font-medium px-3 py-1 bg-secondary rounded-full text-muted border border-white/5">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="text-muted text-sm flex items-start gap-2">
                                                <span className="text-accent mt-1.5">•</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
