import React from 'react';
import { motion } from 'framer-motion';
import { personalDetails, education } from '../data';
import { GraduationCap, MapPin, Calendar, Globe } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-text mb-6">Professional Summary</h3>
                            <p className="text-muted leading-relaxed mb-6">
                                {personalDetails.about}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-3 text-muted">
                                    <MapPin className="text-accent" size={20} />
                                    <span>{personalDetails.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted">
                                    <Calendar className="text-accent" size={20} />
                                    <span>{personalDetails.experience} Experience</span>
                                </div>
                                <div className="flex items-center gap-3 text-muted">
                                    <Globe className="text-accent" size={20} />
                                    <span>Available for Remote</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary p-8 rounded-2xl border border-white/5 shadow-lg">
                            <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                                <GraduationCap className="text-accent" />
                                Education
                            </h3>

                            <div className="relative pl-6 border-l-2 border-accent/20">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
                                <h4 className="text-lg font-bold text-text">{education.degree}</h4>
                                <p className="text-accent mb-2">{education.college}</p>
                                <span className="text-sm text-muted bg-secondary px-3 py-1 rounded-full inline-block">
                                    {education.period}
                                </span>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-text mb-4">Languages</h3>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-secondary rounded-lg text-muted text-sm border border-white/5">Tamil (Native)</span>
                                    <span className="px-4 py-2 bg-secondary rounded-lg text-muted text-sm border border-white/5">English (Professional)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
