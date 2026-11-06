import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import { CALENDLY_URL, EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

import Footer from "@/components/footer";

// Import client logos
import africanUnionLogo from "@/assets/client-african-union.webp";
import sanlamLogo from "@/assets/client-sanlam.webp";
import sarbLogo from "@/assets/client-sarb.webp";
import allanGrayLogo from "@/assets/client-allangray.webp";
import angloGoldLogo from "@/assets/client-anglogold.webp";
import feedzaiLogo from "@/assets/client-feedzai.webp";
import truworthsLogo from "@/assets/client-truworths.webp";
import discoveryLogo from "@/assets/client-discovery-vitality.webp";
import officeLogo from "@/assets/client-office-logo.webp";
import pepsicoLogo from "@/assets/client-pepsico.webp";
import philipMorrisLogo from "@/assets/client-philip-morris-international.webp";
import standardBankLogo from "@/assets/client-standard-bank.webp";

// Intrinsic sizes (px) let the browser reserve space before each logo loads
const clientLogos = [
  { src: africanUnionLogo, alt: "African Union", w: 232, h: 80 },
  { src: allanGrayLogo, alt: "Allan Gray", w: 260, h: 80 },
  { src: angloGoldLogo, alt: "AngloGold Ashanti", w: 265, h: 80 },
  { src: discoveryLogo, alt: "Discovery Vitality", w: 154, h: 80 },
  { src: feedzaiLogo, alt: "Feedzai", w: 256, h: 80 },
  { src: officeLogo, alt: "Microsoft Office", w: 320, h: 45 },
  { src: pepsicoLogo, alt: "PepsiCo", w: 320, h: 74 },
  { src: philipMorrisLogo, alt: "Philip Morris International", w: 320, h: 78 },
  { src: sanlamLogo, alt: "Sanlam", w: 320, h: 70 },
  { src: sarbLogo, alt: "South African Reserve Bank", w: 142, h: 80 },
  { src: standardBankLogo, alt: "Standard Bank", w: 314, h: 80 },
  { src: truworthsLogo, alt: "Truworths International", w: 243, h: 80 },
];

export default function CorporateHome() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection variant="corporate" />
      


      {/* Our Story Section */}
      <section id="about" className="pt-24 pb-0 relative bg-[#0F3010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 font-light max-w-4xl mx-auto mb-8">
              Beneath every forest lies mycelium—a hidden network that has thrived since creation by adapting to change. Though unseen, it builds resilience and connection, producing the visible results we know as mushrooms.
            </p>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-8 leading-tight">
              Human potential is no different. Our neural pathways must evolve to meet new challenges.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-200 font-light max-w-4xl mx-auto">
              Rewiring these pathways builds resilience, sparks innovation, strengthens relationships, and increase productivity across all areas of life.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection variant="corporate" />

      {/* Final Results Section */}
      <section className="py-12 bg-[#0F3010]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto font-light mb-12">
              Mycelium networks and diverse mushrooms create thriving forests. When you develop both robust neural pathways and clear expression of your unique professional potential, you don't just advance your career—you become 
              <span className="text-accent-gold font-semibold"> indispensable</span> to your organisation and industry.
            </p>
            
            {/* Call to Action */}
            <div id="contact" className="mb-8">
              <div className="mb-6">

                {/* Text heading */}
                <h2 className="text-accent-gold text-2xl sm:text-3xl uppercase font-light">
                  GET IN TOUCH
                </h2>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-md bg-accent-gold text-[#152A38] font-medium uppercase tracking-wide hover:bg-white transition-colors duration-200"
              >
                Book a free chemistry call
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-12">
              <div className="flex flex-col items-center text-center">
                <span className="text-accent-gold mb-2 text-sm uppercase tracking-wide">Phone</span>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-accent-gold transition-colors duration-200">
                  {PHONE_DISPLAY}
                </a>
                <span className="text-sm text-gray-300 mt-1">
                  <a href={PHONE_TEL} className="underline underline-offset-4 hover:text-accent-gold">Call</a> or <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent-gold">WhatsApp</a>
                </span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-accent-gold mb-2 text-sm uppercase tracking-wide">Email</span>
                <a href={`mailto:${EMAIL}`} className="text-gray-200 hover:text-accent-gold transition-colors duration-200">
                  {EMAIL}
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-accent-gold mb-2 text-sm uppercase tracking-wide">Location</span>
                <span className="text-gray-200">South Africa</span>
                <span className="text-sm text-gray-300 mt-1">(Worldwide Online)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted by Leading Organisations */}
      <section className="bg-accent-gold py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-700 font-medium mb-6">Trusted by Leading Organisations</p>
          
          {/* Scrolling Logos */}
          <div className="relative">
            <div className="logo-scroll">
              <div className="logo-track">
                {[...clientLogos, ...clientLogos].map((logo, i) => (
                  <img
                    key={i}
                    src={logo.src}
                    alt={i < clientLogos.length ? logo.alt : ""}
                    aria-hidden={i >= clientLogos.length || undefined}
                    width={logo.w}
                    height={logo.h}
                    decoding="async"
                    className="logo-item"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer variant="corporate" />
    </div>
  );
}
