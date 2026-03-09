import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import bssLogo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Services", href: "#services" },
  { label: "Our Portfolio", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
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
    <header className="w-full fixed top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-end py-2 gap-8">
          <a href="mailto:info@sentinelguard.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Mail size={14} className="text-primary" /> Email: info@bharatsecurity.in
          </a>
          <a href="tel:+18001230012" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Headphones size={14} className="text-primary" /> Call: +91-9876543210
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`} style={{ backgroundColor: "hsl(0deg 0% 100% / 72%)"}}>
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <div className="flex items-center gap-3">
              <img
                src={bssLogo}
                alt="BSS Bharat Security Services logo"
                className="h-10 w-auto md:h-12 object-contain drop-shadow-sm"
              />
              <span className="text-base md:text-lg font-semibold tracking-wide text-foreground">
                Bharat Security
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium px-4 py-2 transition-colors ${
                    i === 0
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
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 font-medium">
              Get in Touch
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
                <Button className="w-full bg-primary text-primary-foreground rounded-md">
                  Get in Touch
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
