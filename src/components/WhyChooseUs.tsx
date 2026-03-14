import { useState, useEffect } from "react";
import { CheckSquare, GraduationCap, RotateCcw, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const rotatingWords = ["Exceptional Features", "Unwavering Integrity", "Unrivaled Quality"];

// Professional security-themed image (corporate / event / surveillance vibe)
const whyChooseUsImage =
  "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600";

const features = [
  { icon: CheckSquare, title: "HighlyTrained Professionals", description: "Our security guards undergo rigorous training in physical security, conflict resolution, and customer service, ensuring they are prepared to handle any situation." },
  { icon: GraduationCap, title: "25/7 Availability", description: "Guards are available around the clock, providing reliable security at any time of day or night." },
  { icon: RotateCcw, title: "Access Control and Visitor Management", description: "Guards monitor and regulate entry and exit points, verifying visitor identities and maintaining visitor logs." },
  { icon: Settings, title: "Emergency Response and Incident Reporting", description: "In case of emergencies, our guards are trained to respond swiftly and professionally, providing incident reports and notifying relevant authorities when necessary." },
];

const WhyChooseUs = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="why-us" className="py-12 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block border-2 border-primary text-primary text-sm font-semibold px-5 py-1.5 rounded-md mb-6">
              Why Choose Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
              We Protect with Excellence and
            </h2>
            <div className="h-8 md:h-10 overflow-hidden mb-6">
              <span
                key={wordIndex}
                className="block text-xl md:text-2xl font-bold text-primary animate-fade-in"
              >
                {rotatingWords[wordIndex]}
              </span>
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed text-sm md:text-base">Choosing BSS means entrusting your security to a dedicated, experienced, and dependable team.
Our commitment to proactive protection, continuous improvement, and client satisfaction makes us the preferred choice for organizations and individuals seeking comprehensive security solutions.
            </p>

            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 font-medium mb-10">
              <a href="#about">View All</a>
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{f.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image placeholder */}
          <div className="relative mt-4 md:mt-0">
            <div className="rounded-2xl h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden border border-border bg-muted relative">
              <img
                src={whyChooseUsImage}
                alt="Professional security team and monitoring"
                className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-[0.55]"
                loading="lazy"
              />
              {/* Readability overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(220,25%,8%)/0.75] via-[hsl(220,25%,8%)/0.25] to-transparent" />
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-4 py-2 border border-border shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Trusted protection for corporate & event security
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-20 h-20 opacity-15" style={{
              backgroundImage: "radial-gradient(circle, hsl(187 100% 37%) 2px, transparent 2px)",
              backgroundSize: "10px 10px",
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
