import { CheckCircle } from "lucide-react";

// Six about-section images – add your own URLs in this list
const aboutImages: string[] = ["https://content.jdmagicbox.com/v2/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-godown-z7nyd9gnw4.jpg", "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234812/IMG_20210211_112643_qjvibg.jpg", "https://content.jdmagicbox.com/comp/pune/d8/020pxx20.xx20.180922110026.e2d8/catalogue/bharat-security-services-pimpri-pune-security-services-for-atm-i10o9gsen1.jpg", "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234790/IMG-20230506-WA0020_1_z0s92z.jpg", "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234810/IMG_5359_hizset.jpg", "https://res.cloudinary.com/dmqie3tyb/image/upload/v1764234790/IMG_20220210_224501_po7tmk.jpg"];

const tags = ["Close Protection", "Physical Security", "Event Security", "Corporate Security", "Housekeeping", "Risk Assessment"];

const AboutSection = () => {

  return (
    <section id="about" className="py-12 md:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left - Image collage */}
          <div className="relative">
            {/* Decorative dot pattern behind and to the left */}
            <div className="absolute -left-8 top-1/4 w-20 h-32 opacity-20 z-0" style={{
              backgroundImage: "radial-gradient(circle, hsl(187 100% 37%) 2px, transparent 2px)",
              backgroundSize: "10px 10px",
            }} />
            <div className="absolute left-16 bottom-0 w-16 h-20 opacity-15 z-0" style={{
              backgroundImage: "radial-gradient(circle, hsl(187 100% 37%) 2px, transparent 2px)",
              backgroundSize: "10px 10px",
            }} />

            {/* Image collage grid */}
            <div className="relative z-10">
              {/* Top banner */}
              <div className="bg-primary text-primary-foreground rounded-t-lg px-6 py-3 text-center">
                <p className="text-xs tracking-wider uppercase font-semibold">Glimpse of Our Legacy</p>
                <p className="text-sm font-bold">Dedicated to Excellence in Security</p>
              </div>
              {/* Photo grid */}
              <div className="grid grid-cols-3 gap-1">
                {aboutImages.map((src, index) => (
                  <div
                    key={index}
                    className="relative aspect-square overflow-hidden rounded-md bg-muted"
                  >
                    {src ? (
                      <img
                        src={src}
                        alt={`About photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-secondary/30">
                        <span className="text-muted-foreground/30 text-xs">
                          Photo {index + 1}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative curved shape on far left */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-16 h-64 bg-background rounded-full hidden lg:block" />
          </div>

          {/* Right - Content */}
          <div>
            {/* About Us badge */}
            <span className="inline-block border-2 border-primary text-primary text-sm font-semibold px-5 py-1.5 rounded-md mb-6">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Legacy of Protection
            </h2>

            {/* Quote */}
            <div className="mb-6 bg-primary/5 border-l-4 border-primary p-4 md:p-6 rounded-r-md">
              <span className="block text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 italic">
                &quot;Safety is not just our duty, it&apos;s our pride.&quot;
              </span>
              <span className="block text-primary font-semibold tracking-wide text-sm md:text-base">
                Trust. Discipline. Dedication.
              </span>
            </div>

            <div className="w-16 h-1 bg-primary mb-6" />

            <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                Bharat Security Services is a Mumbai (India) based security service providing company dedicated to the provision of excellent security services. We are capable of dealing with all your security needs. and offers complete range, planning, system analysis and design as well as exécutive services. The Company was established in the Year 1995 and within a short span its name is listed among the reputed Security Service Providing Companies in India, Continuous improvements and understanding the needs of the clients has been our upmost priorities which is one of the key element behind company's Success.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
              The Quallity of Training we provide to our security personnel, designing and executing works as per client's need makes Bharat Security Ser vice a uniquely experienced company.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span key={tag} className="flex items-center gap-2 bg-muted text-foreground text-sm font-medium px-4 py-2 rounded-md border border-border">
                  <CheckCircle size={14} className="text-primary" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
