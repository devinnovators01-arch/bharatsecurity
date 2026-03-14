import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import bssLogo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50 flex flex-col">
      {/* Top contact bar */}
      <div className="bg-background border-b border-border hidden sm:block">
        <div className="container mx-auto px-4 flex items-center justify-end py-2 gap-4 md:gap-8 text-xs md:text-sm">
          <a href="mailto:info@bharatsecurity.in" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail size={14} className="text-primary hidden md:block" />
            <span className="truncate max-w-[150px] md:max-w-none">info@bharatsecurity.in</span>
          </a>
          <a href="tel:+919284902530" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Headphones size={14} className="text-primary hidden md:block" />
            <span className="whitespace-nowrap">+91-9284902530</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`} style={{ backgroundColor: "hsl(0deg 0% 100% / 72%)" }}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 mr-4">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={bssLogo}
                alt="BSS Bharat Security Services logo"
                className="h-8 md:h-10 lg:h-12 w-auto object-contain drop-shadow-sm"
              />
              <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide text-foreground line-clamp-1">
                Bharat Security Services
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium px-4 py-2 transition-colors ${i === 0
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 font-medium">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <ul className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button asChild className="w-full bg-primary text-primary-foreground rounded-md">
                  <a href="/contact" onClick={() => setMobileOpen(false)}>Get in Touch</a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
