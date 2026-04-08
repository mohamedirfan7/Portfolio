import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="text-muted mt-4 max-w-2xl mx-auto">
                        My technical toolkit that I use to bring ideas to life.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-secondary p-6 rounded-xl border border-white/5 hover:border-accent/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <h3 className="text-lg font-medium text-text group-hover:text-accent transition-colors text-center relative z-10">
                                {skill}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
