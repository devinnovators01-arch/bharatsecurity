import { Shield, Phone, Mail, MapPin } from "lucide-react";
import bssLogo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-10 md:mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img
                src={bssLogo}
                alt="BSS Bharat Security Services logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
              <span className="text-lg md:text-xl font-semibold tracking-wide">Bharat Security</span>
            </a>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed max-w-sm">
              Protecting what matters most with integrity, expertise, and unwavering dedication since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              {["Home", "About Us", "Our Services", "Gallery", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors py-1 block">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              {["Manned Guarding", "Event Security", "Surveillance & Monitoring", "VIP Protection"].map((s) => (
                <li key={s}><a href="#" className="hover:text-primary transition-colors py-1 block">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">2nd Floor, Indira Apartment, Above TVS Showroom, Paud Phata, Pune</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+919284902530" className="hover:text-primary transition-colors">+91 9284902530</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@bharatsecurity.in" className="hover:text-primary transition-colors">info@bharatsecurity.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} Bharat Security Services. All rights reserved | Designed by <a href="#" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary transition-all duration-300 border-b border-transparent hover:border-primary font-medium">DigitalPriorities</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
