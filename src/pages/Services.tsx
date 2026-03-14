import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Warehouse, GraduationCap, Home, CalendarCheck, UserCheck, ArrowRight, X, CheckCircle2, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Home,
    title: "Residential Security",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    description: "Round-the-clock security services for residential societies and gated communities ensuring safety and disciplined guard presence.",
    features: ["24/7 Guard Deployment", "Visitor Management", "Patrolling", "Emergency Response"],
    detailedDescription:
      "Bharat Security Services provides professional residential security guards trained to maintain safety and discipline in housing societies and gated communities. Our personnel monitor visitor entries, conduct regular patrols, and ensure complete safety for residents. With structured shift management and supervision, we ensure constant vigilance and rapid response to any unusual situation.",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=500&fit=crop"
    ],
    highlights: [
      "Disciplined uniformed guards",
      "24/7 society protection",
      "Visitor entry monitoring",
      "Regular patrol inspections",
      "Emergency assistance",
      "Professional conduct"
    ]
  },

  {
    icon: CalendarCheck,
    title: "Event Security & Crowd Management",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    description: "Professional security management for events, exhibitions, promotions, and public gatherings.",
    features: ["Crowd Control", "Entry Management", "VIP Protection", "Event Surveillance"],
    detailedDescription:
      "Our event security team provides comprehensive protection for corporate events, exhibitions, public gatherings, and promotional programs. We manage crowd control, coordinate entry and exit points, and ensure safe movement of attendees. Our guards maintain discipline and help event organizers maintain order during large gatherings.",
    gallery: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=500&fit=crop"
    ],
    highlights: [
      "Crowd management experts",
      "Secure entry checkpoints",
      "VIP protection services",
      "Emergency response readiness",
      "Professional event coordination",
      "Trained security staff"
    ]
  },

  {
    icon: UserCheck,
    title: "VIP Escort & Personal Protection",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    description: "Professional personal protection and escort services for VIPs, celebrities, and high-profile individuals.",
    features: ["Close Protection", "Escort Service", "Threat Monitoring", "Secure Movement"],
    detailedDescription:
      "Bharat Security Services provides trained bodyguards and close protection officers for celebrities, VIPs, and high-profile individuals. Our personnel are trained in threat assessment, secure escorting, and rapid response. We ensure complete safety during public appearances, media events, and personal movements.",
    gallery: [
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop"
    ],
    highlights: [
      "Close protection specialists",
      "Professional bodyguards",
      "Discreet protection services",
      "Secure escort during events",
      "Rapid threat response",
      "Experienced personnel"
    ]
  },

  {
    icon: Shield,
    title: "Armed Security Guards",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&h=400&fit=crop",
    description: "Highly disciplined armed security guards for sensitive locations and high-risk security environments.",
    features: ["Armed Guards", "High-Risk Protection", "Radio Communication", "Strong Deterrence"],
    detailedDescription:
      "For sensitive sites and high-security environments, Bharat Security Services provides armed security guards equipped with batons, communication devices, and professional training. Their presence ensures strong deterrence against threats and maintains order in high-profile locations.",
    gallery: [
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d9?w=800&h=500&fit=crop"
    ],
    highlights: [
      "Highly trained guards",
      "Armed protection services",
      "Strong deterrent presence",
      "High-risk site protection",
      "Professional discipline",
      "24/7 monitoring"
    ]
  },

  {
    icon: Building2,
    title: "Corporate & Commercial Security",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
    description: "Security services for corporate offices, commercial spaces, exhibitions, and business premises.",
    features: ["Office Security", "Patrolling", "Access Monitoring", "Visitor Control"],
    detailedDescription:
      "Our corporate security services protect office buildings, exhibitions, and commercial establishments. Guards conduct patrols, monitor entry points, and maintain strict visitor verification procedures. This ensures a safe working environment for employees and visitors.",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=500&fit=crop"
    ],
    highlights: [
      "Corporate building protection",
      "Visitor management systems",
      "Regular security patrols",
      "Access monitoring",
      "Professional guard deployment",
      "Commercial property security"
    ]
  },

  {
    icon: Warehouse,
    title: "Security Training & Site Supervision",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    description: "Regular training, inspection, and supervision programs to maintain the highest standards of security service.",
    features: ["Guard Training", "Site Inspection", "Shift Management", "Security Briefings"],
    detailedDescription:
      "Bharat Security Services conducts regular training drills, security briefings, and site inspections. Supervisors ensure proper guard deployment and performance checks during shift changes. Continuous training ensures that all personnel maintain professional standards and readiness.",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1565891741441-64926e441838?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop"
    ],
    highlights: [
      "Professional guard training",
      "Supervisor site inspections",
      "Shift management systems",
      "Security briefings",
      "Performance monitoring",
      "Operational discipline"
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="page-hero relative overflow-hidden">
          <svg className="absolute bottom-0 left-0 w-full h-40 z-[1]" viewBox="0 0 1440 160" preserveAspectRatio="none">
            <path className="animate-[wave_6s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.08)" d="M0,64 C360,128 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,160 L0,160 Z" />
            <path className="animate-[wave_8s_ease-in-out_infinite_reverse]" fill="hsl(var(--cyan) / 0.05)" d="M0,96 C240,32 480,128 720,96 C960,64 1200,128 1440,96 L1440,160 L0,160 Z" />
            <path className="animate-[wave_10s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.03)" d="M0,128 C180,80 360,160 540,128 C720,96 900,160 1080,128 C1260,96 1380,128 1440,112 L1440,160 L0,160 Z" />
          </svg>
          <svg className="absolute top-0 left-0 w-full h-24 z-[1] rotate-180" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path className="animate-[wave_7s_ease-in-out_infinite]" fill="hsl(var(--cyan) / 0.06)" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,100 L0,100 Z" />
          </svg>
          <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[hsl(var(--cyan)/0.1)] blur-2xl animate-[float_8s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-[hsl(var(--cyan)/0.07)] blur-2xl animate-[float_10s_ease-in-out_infinite_reverse]" />
          <div className="container mx-auto relative z-10 text-center">
            <span className="section-tag">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-display text-primary-foreground mt-5 mb-3">
              Security Solutions
            </h1>
            <p className="font-body max-w-2xl mx-auto text-primary-foreground/60">
              Comprehensive security services tailored to meet diverse needs across all sectors.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-background">
          <div className="container mx-auto space-y-10">
            {services.map((service, i) => {
              const serviceId = service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
              <div
                key={service.title}
                id={serviceId}
                className="grid md:grid-cols-2 gap-8 items-center pt-20 -mt-20" // added padding to account for fixed header
              >
                <motion.div
                  className={i % 2 !== 0 ? "md:order-2" : ""}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="overflow-hidden rounded-xl shadow-md group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                </motion.div>
                <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                  <motion.h2
                    className="text-2xl font-display text-foreground mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    className="text-muted-foreground font-body leading-relaxed mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {service.description}
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {service.features.map((f) => (
                      <span key={f} className="px-3 py-1 rounded-full text-xs font-medium font-body bg-primary/5 text-primary border border-primary/15">
                        {f}
                      </span>
                    ))}
                  </motion.div>
                  <motion.button
                    onClick={() => setSelectedService(i)}
                    className="inline-flex items-center gap-2 text-sm font-semibold font-body text-primary hover:text-cyan-dark transition-colors cursor-pointer group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ x: 5 }}
                  >
                    View More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
              );
            })}
          </div>
        </section>

        {/* Full-screen Service Detail Modal */}
        <AnimatePresence>
          {selectedService !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="min-h-screen"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="fixed top-6 right-6 z-[60] w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {(() => {
                  const service = services[selectedService];
                  return (
                    <div className="container mx-auto px-4 py-16 md:py-20">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-3xl md:text-4xl font-display text-foreground">{service.title}</h2>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {service.features.map((f) => (
                              <span key={f} className="px-3 py-1 rounded-full text-xs font-medium font-body bg-primary/10 text-primary border border-primary/20">
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hero image */}
                      <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
                        <img
                          src={service.gallery[0]}
                          alt={service.title}
                          className="w-full h-64 md:h-96 object-cover"
                        />
                      </div>

                      {/* Content grid */}
                      <div className="grid md:grid-cols-3 gap-10 mb-12">
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-display text-foreground mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-primary" /> About This Service
                          </h3>
                          <p className="text-muted-foreground font-body leading-relaxed text-base">
                            {service.detailedDescription}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-display text-foreground mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" /> Key Highlights
                          </h3>
                          <ul className="space-y-3">
                            {service.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Photo gallery */}
                      <h3 className="text-xl font-display text-foreground mb-5">Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {service.gallery.map((img, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.1 }}
                            className="rounded-xl overflow-hidden shadow-md group"
                          >
                            <img
                              src={img}
                              alt={`${service.title} ${idx + 1}`}
                              className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="text-center bg-muted/50 rounded-2xl p-8 md:p-12 border border-border">
                        <h3 className="text-2xl font-display text-foreground mb-3">Interested in {service.title}?</h3>
                        <p className="text-muted-foreground font-body mb-6 max-w-lg mx-auto">
                          Contact us today for a free consultation and customized security plan tailored to your needs.
                        </p>
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold font-body hover:bg-primary/90 transition-colors"
                        >
                          Get a Free Quote <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
