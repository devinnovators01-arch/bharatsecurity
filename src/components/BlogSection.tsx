import { useState, useEffect, useMemo } from "react";
import { Quote, Star } from "lucide-react";

const rotatingWords = ["Trusted Clients", "Corporate Partners", "Secure Communities"];

const testimonials = [
  {
    name: "Rajesh Sharma",
    company: "Corporate Park",
    role: "Facility Manager, Corporate Park",
    rating: 5,
    quote:
      "Bharat Security Services has been instrumental in maintaining a secure and welcoming environment across our campus. Their guards are disciplined, proactive, and highly professional.",
  },
  {
    name: "Anita Desai",
    company: "Elite Events",
    role: "Event Director, Elite Events",
    rating: 5,
    quote:
      "From VIP entry management to crowd control, the team handled every detail with precision. Their presence allowed us to focus entirely on the success of our event.",
  },
  {
    name: "Vikram Patil",
    company: "National Bank",
    role: "Branch Head, National Bank",
    rating: 5,
    quote:
      "The cash management and ATM security solutions provided by Bharat Security Services have significantly improved our overall risk posture and peace of mind.",
  },
];

const ClientTestimonials = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const active = useMemo(() => testimonials[testimonialIndex], [testimonialIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <span className="inline-block border-2 border-primary text-primary text-sm font-semibold px-5 py-1.5 rounded-md mb-6">
            Client Testimonials
          </span>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Voices of{" "}
            <span className="text-primary" key={wordIndex}>
              {rotatingWords[wordIndex]}
            </span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-sm leading-relaxed">
            Hear from organizations and leaders who trust Bharat Security Services to protect their people,
            assets, and events with unwavering commitment and professionalism.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Subtle decorative blobs */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
          <div className="pointer-events-none absolute -bottom-12 -right-10 w-48 h-48 bg-primary/10 blur-3xl rounded-full" />

          <div
            key={testimonialIndex}
            className="group relative overflow-hidden bg-card/90 border border-border rounded-2xl p-8 md:p-10 shadow-sm transition-all duration-500 animate-in fade-in slide-in-from-bottom-3"
          >
            {/* Top gradient shine */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent" />

            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-4 min-w-0">
                {/* Avatar (initials) */}
                <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-semibold">
                  {active.name
                    .split(" ")
                    .slice(0, 2)
                    .map((p) => p[0])
                    .join("")
                    .toUpperCase()}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {active.name}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground truncate">
                      {active.company}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {active.role}
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 shrink-0" aria-label={`${active.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < active.rating ? "text-primary fill-primary" : "text-muted-foreground/30"}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/70 relative">
              <Quote className="absolute -top-3 left-0 text-primary/30" size={28} />
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                {active.quote}
              </p>
            </div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === testimonialIndex ? "bg-primary w-6" : "bg-muted hover:bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
