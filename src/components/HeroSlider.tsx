import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import security from "@/assets/security2.jpg";
import security2 from "@/assets/security.jpg";

const slides = [
  {
    subtitle: "Let's protect your family, business, and assets.",
    title: "Integrated Physical Security",
    highlight: "& Manpower Solutions",
    description: "Understanding the need of Integrated Physical Security Solutions.",
    cta: "Our Presence",
    ctaHref: "#about",
    // Corporate security command center / control room
    bgImage:security,
  },
  {
    subtitle: "Let's protect your family, business, and assets.",
    title: "Inclusive Security Integration",
    highlight: "A Guardian for You",
    description:
      "Inclusiveness aims to eliminate barriers and offer equality to all by changing the system to accommodate the needs of everyone.",
    cta: "Know More",
    ctaHref: "#services",
    // Professional corporate / event security guards
    bgImage:
      security2,
  },
  {
    subtitle: "Let's protect your family, business, and assets.",
    title: "Intuitive App Interface",
    highlight: "Our Robust Solution",
    description: "On-the-go monitoring ensures convenience and improved system efficiency.",
    cta: "Connect for Demo?",
    ctaHref: "#contact",
    // CCTV / monitoring technology with darker ambience
    bgImage:
      "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 700);
  }, [isAnimating]);

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          {/* Security agency themed background image */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105 filter brightness-[0.35] blur-[1px]"
              style={{
                backgroundImage: `url('${slide.bgImage}')`,
              }}
            />
          </div>
          {/* Dark gradient overlay for depth and brand tint (keeps text highly readable) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,35%,4%)/0.98] via-[hsl(210,35%,6%)/0.92] to-[hsl(210,25%,10%)/0.9]" />
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Left-to-right gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(200,20%,5%)/0.8] via-transparent to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
        <div className="max-w-2xl">
          <h5
            className="text-primary text-base font-medium mb-6 transition-all duration-500"
            key={`sub-${current}`}
          >
            {slides[current].subtitle}
          </h5>
          <h1
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] mb-2"
            key={`title-${current}`}
          >
            {slides[current].title}
            <br />
            <span className="text-primary">{slides[current].highlight}</span>
          </h1>
          <p className="text-white/60 text-base mt-6 mb-10 max-w-lg leading-relaxed" key={`desc-${current}`}>
            {slides[current].description}
          </p>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 py-3 text-sm font-semibold uppercase tracking-wider"
          >
            <a href={slides[current].ctaHref}>{slides[current].cta}</a>
          </Button>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-primary text-white rounded-full transition-colors border border-white/10">
        <ChevronLeft size={22} />
      </button>
      <button onClick={next} className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-primary text-white rounded-full transition-colors border border-white/10">
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary scale-110" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Decorative vertical numbers on right side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden xl:flex flex-col gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`text-sm font-bold transition-colors ${
              i === current ? "text-primary" : "text-white/20"
            }`}
          >
            0{i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
