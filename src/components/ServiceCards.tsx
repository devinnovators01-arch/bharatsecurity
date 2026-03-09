import { Shield, Calendar, UserCheck, Truck, ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Shield,
    title: "Manned Guarding",
    description: "Professional and trained security personnel for on-site guarding.",
  },
  {
    num: "02",
    icon: Calendar,
    title: "Event Security Management",
    description: "Tailored security planning and execution for events of all sizes.",
  },
  {
    num: "03",
    icon: UserCheck,
    title: "Surveillance & Monitoring",
    description: "Advanced CCTV and real-time monitoring for round-the-clock security.",
  },
  {
    num: "04",
    icon: Truck,
    title: "VIP Protection Services",
    description: "Discreet and professional close protection for VIPs.",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-0 bg-background relative -mt-1">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((svc) => (
            <div
              key={svc.num}
              className="group relative bg-card border border-border/70 p-8 hover:bg-card/95 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Large faded number */}
              <span className="absolute top-4 right-6 text-6xl font-black text-muted/40 select-none leading-none transition-transform transition-colors duration-300 ease-out group-hover:translate-y-1 group-hover:text-primary/30">
                {svc.num}
              </span>

              {/* Circular icon */}
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6 transform transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-primary/40">
                <svc.icon className="text-primary-foreground transition-transform duration-300 ease-out group-hover:-rotate-3" size={32} />
              </div>

              <h3 className="text-base font-bold text-foreground mb-3 leading-snug">
                {svc.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {svc.description}
              </p>

              {/* Arrow circle button */}
              <a
                href="#services"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-all duration-300 ease-out transform group-hover:translate-x-1 group-hover:bg-primary/90 group-hover:shadow-md group-hover:shadow-primary/40"
              >
                <ArrowUpRight className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
