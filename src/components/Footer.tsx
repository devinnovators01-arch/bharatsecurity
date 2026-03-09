import { Shield, Phone, Mail, MapPin } from "lucide-react";
import bssLogo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img
                src={bssLogo}
                alt="BSS Bharat Security Services logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-xl font-semibold tracking-wide">Bharat Security</span>
            </a>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Protecting what matters most with integrity, expertise, and unwavering dedication since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              {["Home", "About Us", "Our Services", "Portfolio", "Contact"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/60">
              {["Professional Guards", "Event Security", "Shield Advisory", "Cash Management", "Facility Management"].map((s) => (
                <li key={s}><a href="#" className="hover:text-primary transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/60">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                123 Security Avenue, Suite 400, New York, NY 10001
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                1800 123 0012
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                info@sentinelguard.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center text-sm text-secondary-foreground/40">
          © {new Date().getFullYear()} Bharat Security Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
