import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { personalDetails } from '../data';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || SERVICE_ID === 'YOUR_SERVICE_ID') {
            toast.error('Email service not configured. Please add your actual EmailJS keys to the .env file.');
            setIsSending(false);
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                toast.success('Message sent successfully!');
                e.target.reset();
            }, (error) => {
                toast.error('Failed to send message. Please check your console for details.');
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-20 bg-secondary/30">
            <Toaster position="bottom-right" />
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                    <p className="text-muted mt-4 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-text mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary rounded-lg text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-text">Email</h4>
                                    <a href={`mailto:${personalDetails.email}`} className="text-muted hover:text-accent transition-colors">
                                        {personalDetails.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary rounded-lg text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-text">Phone</h4>
                                    <a href={`tel:${personalDetails.phone}`} className="text-muted hover:text-accent transition-colors">
                                        {personalDetails.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary rounded-lg text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-text">Location</h4>
                                    <p className="text-muted">
                                        {personalDetails.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-primary p-8 rounded-2xl border border-white/5 shadow-lg"
                    >
                        <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Name</label>
                                <input
                                    name="user_name"
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg focus:outline-none focus:border-accent text-text transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Email</label>
                                <input
                                    name="user_email"
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg focus:outline-none focus:border-accent text-text transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-secondary border border-white/10 rounded-lg focus:outline-none focus:border-accent text-text transition-colors resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSending ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
