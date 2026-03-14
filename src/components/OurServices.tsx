import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GraduationCap, UserCheck, Users, Sparkles, ArrowRight } from "lucide-react";

const rotatingWords = ["Services", "Solutions"];

const services = [
  {
    icon: GraduationCap,
    title: "  Manned Guarding Services",
    description: "We provide rigorous training to ensure top-notch safety and security for client properties.",
    linkId: "armed-security-guards",
  },
  {
    icon: UserCheck,
    title: "Event Security Management",
    description: "Effective supervision ensures quality service, team morale, and client satisfaction.",
    linkId: "event-security-crowd-management",
  },
  {
    icon: Users,
    title: "Monitoring & Surveillance Services",
    description: "Our security manpower protect people, property, and assets with vigilance and discipline.",
    linkId: "corporate-commercial-security",
  },
  {
    icon: Sparkles,
    title: "VIP Protection Services",
    description: "We ensure swift, efficient deployment for seamless housekeeping services to clients.",
    linkId: "vip-escort-personal-protection",
  },
];

const OurServices = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="services" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="inline-block border-2 border-primary text-primary text-sm font-semibold px-5 py-1.5 rounded-md mb-6">
            Our Services
          </span>
        </div>

        <div className="text-center mb-10 md:mb-14 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-snug">
            Introduction to Physical Security{" "}
            <br className="sm:hidden" />
            <span className="text-primary inline-block min-w-[120px]" key={wordIndex}>
              {rotatingWords[wordIndex]}
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            We offer a comprehensive range of services tailored to meet the unique requirements. of various sectors, including corporate offices, residential complexes, healthcare facilities, educational institutions, retail environments, and event venues.
          </p>
        </div>

        {/* Service cards - flip style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group relative rounded-xl overflow-hidden cursor-pointer h-80"
            >
              {/* Front face */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-secondary/90 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 group-hover:opacity-0">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                  <svc.icon className="text-primary" size={32} style={{color:"hsl(214deg 26.9% 73.72%)"}} />
                </div>
                <h3 className="text-lg font-bold text-secondary-foreground mb-3">{svc.title}</h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>

              {/* Back face (hover) */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold text-primary-foreground mb-4">{svc.title}</h3>
                <Link to={`/services#${svc.linkId}`} className="inline-flex items-center gap-2 text-primary-foreground text-sm font-semibold border-b border-primary-foreground/50 pb-1 hover:border-primary-foreground transition-colors">
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
