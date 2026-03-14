import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Form submitted');
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="page-hero relative overflow-hidden text-center flex flex-col items-center justify-center">
                    <svg className="absolute bottom-0 left-0 w-full h-40 z-[1]" viewBox="0 0 1440 160" preserveAspectRatio="none">
                        <path className="animate-[wave_6s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.08)" d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,160 L0,160 Z" />
                        <path className="animate-[wave_8s_ease-in-out_infinite_reverse]" fill="hsl(var(--cyan) / 0.05)" d="M0,96 C240,32 480,128 720,96 C960,64 1200,128 1440,96 L1440,160 L0,160 Z" />
                        <path className="animate-[wave_10s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.03)" d="M0,128 C180,80 360,160 540,128 C720,96 900,160 1080,128 C1260,96 1380,128 1440,112 L1440,160 L0,160 Z" />
                    </svg>
                    <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[hsl(var(--cyan)/0.1)] blur-2xl animate-[float_8s_ease-in-out_infinite]" />

                    <div className="container relative z-10 px-4">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                            <span className="section-tag mb-4">Support & Inquiry</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white tracking-wider mb-4">CONTACT US</h1>
                            <p className="max-w-xl mx-auto text-xl font-body text-cyan-light font-medium tracking-wide">
                                We're here to answer any questions you may have about our security services.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Content - 2 Column Layout without Box */}
                <section className="section-padding bg-background relative z-10 py-12 md:py-24">
                    <div className="container px-4 md:px-8 max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                            {/* Left Column: Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col justify-center"
                            >
                                <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-cyan/10 text-cyan text-sm font-bold font-body uppercase tracking-widest mb-6 w-fit border border-cyan/20">
                                    Contact Us
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4 md:mb-6 leading-tight">
                                    Feel Free to Get in Touch
                                </h2>
                                <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-10">
                                    Have questions or need assistance? Feel free to get in touch with us. We're here to help!
                                </p>

                                <div className="space-y-8">
                                    {/* Call Anytime */}
                                    <div>
                                        <h4 className="font-body text-foreground font-semibold mb-4 text-lg">Call Anytime</h4>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-4 group">
                                                <div className="w-10 h-10 rounded-full bg-cyan/10 text-cyan flex items-center justify-center group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <a href="tel:+919284902530" className="font-body text-muted-foreground hover:text-cyan transition-colors">+91 9284902530</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <h4 className="font-body text-foreground font-semibold mb-4 text-lg">Send Email</h4>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-4 group">
                                                <div className="w-10 h-10 rounded-full bg-cyan/10 text-cyan flex items-center justify-center group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <a href="mailto:security.sainik02@gmail.com" className="font-body text-muted-foreground hover:text-cyan transition-colors">security.bharatsecurity@gmail.com</a>
                                            </div>
                                            <div className="flex items-center gap-4 group">
                                                <div className="w-10 h-10 rounded-full bg-cyan/10 text-cyan flex items-center justify-center group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                                                    <Mail className="w-4 h-4" />
                                                </div>
                                                <a href="mailto:info@sainiksecurity.in" className="font-body text-muted-foreground hover:text-cyan transition-colors">info@bharatsecurity.in</a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <h4 className="font-body text-foreground font-semibold mb-4 text-lg">Our Location</h4>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-4 group">
                                                <div className="w-10 h-10 rounded-full bg-cyan/10 text-cyan flex items-center justify-center shrink-0 group-hover:bg-cyan group-hover:text-white transition-colors duration-300">
                                                    <MapPin className="w-4 h-4" />
                                                </div>
                                                <span className="font-body text-muted-foreground group-hover:text-cyan transition-colors">
                                                    2nd Floor, Indira Apartment, Above TVS Showroom, Paud Phata, Pune
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Column: Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <form onSubmit={handleSubmit} className="bg-muted/30 p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-[2rem] h-full flex flex-col justify-center">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="font-body text-sm font-semibold text-foreground">First Name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                placeholder="First Name"
                                                className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan transition-all"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="font-body text-sm font-semibold text-foreground">Last Name</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                placeholder="Last Name"
                                                className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        <label htmlFor="email" className="font-body text-sm font-semibold text-foreground">Email <span className="text-red-500">*</span></label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email Address"
                                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2 mb-6">
                                        <label htmlFor="subject" className="font-body text-sm font-semibold text-foreground">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="Subject"
                                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan transition-all"
                                        />
                                    </div>

                                    <div className="space-y-2 mb-8">
                                        <label htmlFor="message" className="font-body text-sm font-semibold text-foreground">Your Message <span className="text-red-500">*</span></label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            placeholder="Your Message"
                                            className="w-full bg-background border border-border rounded-xl px-4 py-3 font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan transition-all resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="group flex items-center justify-center gap-2 bg-cyan text-white font-body font-bold uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-cyan-light hover:shadow-lg hover:shadow-cyan/30 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto self-start"
                                    >
                                        <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                        Submit Form
                                    </button>
                                </form>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
