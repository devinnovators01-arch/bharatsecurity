import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Heart, Eye, Target as MissionTarget } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
    { icon: ShieldCheck, title: "Professionalism", desc: "Our personnel maintain discipline, alertness, and professionalism at every security post." },

    { icon: Target, title: "Reliability", desc: "We provide dependable security services that clients can trust for safety and protection." },

    { icon: Users, title: "Training & Expertise", desc: "All security staff undergo rigorous training to handle emergencies and maintain safety standards." },

    { icon: Heart, title: "Client Commitment", desc: "We focus on delivering customized security solutions based on each client’s unique needs." },
];

const milestones = [
    { year: "1995", event: "Bharat Security Services established in India." },
    { year: "2000+", event: "Expanded security services across multiple sectors." },
    { year: "2010+", event: "Introduced advanced surveillance and monitoring solutions." },
    { year: "2020+", event: "Expanded services for corporate, residential and event security." },
    { year: "Today", event: "Trusted security partner serving businesses and communities." },
];

const About = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero */}
                <section className="page-hero relative overflow-hidden">
                    {/* Animated SVG background waves for continuity with Services page */}
                    <svg className="absolute bottom-0 left-0 w-full h-40 z-[1]" viewBox="0 0 1440 160" preserveAspectRatio="none">
                        <path className="animate-[wave_6s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.08)" d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,160 L0,160 Z" />
                        <path className="animate-[wave_8s_ease-in-out_infinite_reverse]" fill="hsl(var(--cyan) / 0.05)" d="M0,96 C240,32 480,128 720,96 C960,64 1200,128 1440,96 L1440,160 L0,160 Z" />
                        <path className="animate-[wave_10s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.03)" d="M0,128 C180,80 360,160 540,128 C720,96 900,160 1080,128 C1260,96 1380,128 1440,112 L1440,160 L0,160 Z" />
                    </svg>
                    <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[hsl(var(--cyan)/0.1)] blur-2xl animate-[float_8s_ease-in-out_infinite]" />
                    <div className="container mx-auto relative z-10 text-center">
                        <span className="section-tag">About Us</span>
                        <h1 className="text-4xl md:text-5xl font-display text-primary-foreground mt-5 mb-3">
                            Our Story of Trust
                        </h1>
                        <p className="font-body max-w-2xl mx-auto text-primary-foreground/60">
                            29+ years of unwavering commitment to safety, security, and service excellence.
                        </p>
                        <div className="flex justify-center gap-10 mt-10">
                            {[{ v: "25+", l: "Years Experience" },
                            { v: "100+", l: "Security Personnel" },
                            { v: "Multiple", l: "Industries Served" }].map(s => (
                                <div key={s.l} className="text-center">
                                    <div className="text-3xl font-display text-primary">{s.v}</div>
                                    <div className="text-sm font-body text-primary-foreground/50">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Story */}
                <section className="section-padding bg-background">
                    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop" alt="About Bharat Security Services" className="w-full h-[420px] object-cover" />
                            </div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <span className="section-tag">Our Story</span>
                            <h2 className="text-3xl font-display text-foreground mt-5 mb-2">Building Trust Since 1996</h2>
                            <div className="w-12 h-1 bg-primary rounded-full mb-5" />
                            <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                Bharat Security Services (BSS) is a professional security service provider
                                dedicated to safeguarding businesses, communities, and individuals with
                                reliable and disciplined security solutions. With a strong commitment to
                                professionalism and excellence, BSS has established itself as a trusted
                                security partner for organizations across multiple sectors.
                            </p>
                            <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                Established in 1995, Bharat Security Services provides a complete range
                                of security solutions including security planning, system analysis,
                                site assessment, and professional guarding services. The company
                                continuously improves its services by understanding client requirements
                                and delivering customized security strategies for different environments.
                            </p>
                            <p className="text-muted-foreground font-body leading-relaxed">
                                Our trained personnel serve across corporate offices, residential
                                complexes, healthcare facilities, educational institutions, retail
                                spaces, and event venues. Through rigorous training, discipline,
                                and modern security technologies, Bharat Security Services ensures
                                a safe and secure environment for every client.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="section-padding bg-muted/30">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <span className="section-tag">Our Purpose</span>
                            <h2 className="text-3xl md:text-4xl font-display text-foreground mt-5 mb-2">Vision & Mission</h2>
                            <div className="w-16 h-1 bg-primary rounded-full mx-auto" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-10">
                            {/* Vision Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group relative p-10 rounded-3xl bg-card border border-border shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <Eye className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-3xl font-display text-foreground">Our Vision</h3>
                                </div>
                                <p className="text-muted-foreground font-body text-lg leading-relaxed">
                                    To be a trusted and reliable security service provider delivering
                                    professional, disciplined, and technology-supported security solutions
                                    that ensure safety, protection, and peace of mind for organizations,
                                    communities, and individuals.
                                </p>
                            </motion.div>

                            {/* Mission Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="group relative p-10 rounded-3xl bg-card border border-border shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                        <MissionTarget className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-3xl font-display text-foreground">Our Mission</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "To provide highly trained and professional security personnel for different industries.",
                                        "To implement modern surveillance systems, biometric access control, and monitoring solutions.",
                                        "To design customized security plans according to each client's environment and requirements.",
                                        "To maintain continuous training and supervision for maintaining high security standards.",
                                        "To ensure 24/7 support and reliable protection for all clients."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors mt-2 shrink-0" />
                                            <p className="text-muted-foreground font-body text-base leading-relaxed">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="section-padding bg-background">
                    <div className="container mx-auto">
                        <div className="text-center mb-12">
                            <span className="section-tag">Our Values</span>
                            <h2 className="text-3xl font-display text-foreground mt-5 mb-2">What We Stand For</h2>
                            <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {values.map((v, i) => (
                                <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="p-6 rounded-xl bg-card border border-border shadow-sm text-center hover:shadow-md hover:border-primary/20 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <v.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="font-display text-foreground mb-2">{v.title}</h3>
                                    <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="section-padding bg-muted/30">
                    <div className="container mx-auto max-w-2xl">
                        <div className="text-center mb-12">
                            <span className="section-tag">Milestones</span>
                            <h2 className="text-3xl font-display text-foreground mt-5 mb-2">Our Journey</h2>
                            <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
                        </div>
                        <div className="space-y-5">
                            {milestones.map((m, i) => (
                                <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                    className="flex gap-5 items-start">
                                    <div className="w-16 shrink-0 text-right">
                                        <span className="text-lg font-display text-primary">{m.year}</span>
                                    </div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0" />
                                    <p className="text-foreground font-body">{m.event}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;
