import bssLogo from "@/assets/logo.png";
import JPInfra from "@/assets/JP Infra Logo.png"
import raheja from "@/assets/raheja.png"
import badshah from "@/assets/badshah.png"
import rustmojee from "@/assets/rustmojee.png"
import infinity from "@/assets/infinity.png"
import samarth from "@/assets/samarth.png"
import SkyLine from "@/assets/SkyLine.png"
import ACS from "@/assets/ACS.png"
import Gemsons from "@/assets/Gemsons.png"
import Belvalkars from "@/assets/Belvalkar.png"

const clients = [
  { name: "JP Infra", logo: JPInfra },
  { name: "Raheja", logo: raheja },
  { name: "Badshah", logo: badshah },
  { name: "Rustmojee", logo: rustmojee },
  { name: "Infinity Academy", logo: infinity },
  { name: "Samarth", logo: samarth },
  { name: "SkyLine Enterprises", logo: SkyLine },
  { name: "ACS Academy", logo: ACS },
  { name: "Gemsons", logo: Gemsons },
  { name: "Belvalkars", logo: Belvalkars },
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-semibold text-foreground">
            Our prestigious collaborations with esteemed clients reflect our commitment to excellence!
          </h3>
        </div>
      </div>

      <div className="relative">
        {/* Row 1 */}
        <div className="flex animate-marquee whitespace-nowrap mb-4">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={`r1-${i}`}
              className="inline-flex items-center justify-center mx-6 min-w-[180px] h-24 bg-card rounded-xl px-8 border border-border shadow-sm"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Row 2 - reverse direction
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 25s linear infinite reverse" }}>
          {[...clients.reverse(), ...clients, ...clients].map((client, i) => (
            <div
              key={`r2-${i}`}
              className="inline-flex items-center justify-center mx-4 min-w-[150px] h-20 bg-card rounded-lg px-6 border border-border shadow-sm"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ClientLogos;
