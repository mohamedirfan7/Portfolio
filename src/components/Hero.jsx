import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalDetails } from '../data';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-accent font-medium text-lg mb-4">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-text via-white to-muted">
                            {personalDetails.name}
                        </span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-muted mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple to-blue-500 animate-gradient-x">
                            {personalDetails.role}
                        </span>
                    </h3>
                    <p className="text-muted text-lg mb-8 max-w-lg leading-relaxed">
                        Building responsive, scalable, and high-performance web applications with modern technologies.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/resume.pdf"
                            download="Mohamed_Irfan_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-accent text-primary font-bold rounded-full hover:bg-accent/90 transition-all flex items-center gap-2 shadow-lg shadow-accent/20"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 border border-muted text-text font-medium rounded-full hover:border-accent hover:text-accent transition-all flex items-center gap-2 cursor-pointer"
                        >
                            View Work
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href={`mailto:${personalDetails.email}`} className="text-muted hover:text-accent transition-colors">
                            <Mail size={24} />
                        </a>
                        <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                            <Github size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Animated blobs */}
                        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                        <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl shadow-accent/20 animate-float">
                            <img
                                src="/src/assets/profile.png"
                                alt="Mohamed Irfan"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
