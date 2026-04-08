import React from 'react';
import { personalDetails } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-primary border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-muted text-sm text-center md:text-left">
                    © {new Date().getFullYear()} {personalDetails.name}. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${personalDetails.email}`} className="text-muted hover:text-accent transition-colors">
                        <Mail size={20} />
                    </a>
                    <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <Github size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
