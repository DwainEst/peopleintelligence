import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

// Import client logos
import africanUnionLogo from "@assets/African-union_1755615310456.webp";
import sanlamLogo from "@assets/Sanlam_1755615310458.webp";
import sarbLogo from "@assets/SARB_1755615310457.webp";
import allanGrayLogo from "@assets/AllanGray_1755615310456.webp";
import angloGoldLogo from "@assets/AngloGold_1755615310456.webp";
import feedzaiLogo from "@assets/feedzai_1755615310457.webp";
import truworthsLogo from "@assets/Truworths_1755615310459.webp";
import discoveryLogo from "@assets/discovery-vitality_1755615310457.webp";
import officeLogo from "@assets/office-logo_1755615310457.webp";
import pepsicoLogo from "@assets/pepsico_1755615310458.webp";
import philipMorrisLogo from "@assets/Philip Morris International_1755615310458.webp";
import standardBankLogo from "@assets/standard-bank_1755615310459.webp";

export default function CorporateHome() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection variant="corporate" />
      


      {/* Our Story Section */}
      <section id="about" className="pt-24 pb-0 relative" style={{ backgroundColor: '#0F3010' }}>
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
      <section className="py-12" style={{ backgroundColor: '#0F3010' }}>
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
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-12">
              <div className="flex flex-col items-center text-center">
                <span className="text-accent-gold mb-2 text-sm uppercase tracking-wide">Phone</span>
                <a href="https://wa.me/27767394114" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-accent-gold transition-colors duration-200">
                  +27 76 739 4114
                </a>
                <span className="text-sm text-gray-300 mt-1">(Phone & WhatsApp)</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-accent-gold mb-2 text-sm uppercase tracking-wide">Email</span>
                <a href="mailto:danelle@peopleintelligence.co.za" className="text-gray-200 hover:text-accent-gold transition-colors duration-200">
                  danelle@peopleintelligence.co.za
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
                <img src={africanUnionLogo} alt="African Union" className="logo-item" />
                <img src={allanGrayLogo} alt="Allan Gray" className="logo-item" />
                <img src={angloGoldLogo} alt="AngloGold Ashanti" className="logo-item" />
                <img src={discoveryLogo} alt="Discovery Vitality" className="logo-item" />
                <img src={feedzaiLogo} alt="Feedzai" className="logo-item" />
                <img src={officeLogo} alt="Microsoft Office" className="logo-item" />
                <img src={pepsicoLogo} alt="PepsiCo" className="logo-item" />
                <img src={philipMorrisLogo} alt="Philip Morris International" className="logo-item" />
                <img src={sanlamLogo} alt="Sanlam" className="logo-item" />
                <img src={sarbLogo} alt="South African Reserve Bank" className="logo-item" />
                <img src={standardBankLogo} alt="Standard Bank" className="logo-item" />
                <img src={truworthsLogo} alt="Truworths International" className="logo-item" />
                
                {/* Duplicate for seamless scroll */}
                <img src={africanUnionLogo} alt="African Union" className="logo-item" />
                <img src={allanGrayLogo} alt="Allan Gray" className="logo-item" />
                <img src={angloGoldLogo} alt="AngloGold Ashanti" className="logo-item" />
                <img src={discoveryLogo} alt="Discovery Vitality" className="logo-item" />
                <img src={feedzaiLogo} alt="Feedzai" className="logo-item" />
                <img src={officeLogo} alt="Microsoft Office" className="logo-item" />
                <img src={pepsicoLogo} alt="PepsiCo" className="logo-item" />
                <img src={philipMorrisLogo} alt="Philip Morris International" className="logo-item" />
                <img src={sanlamLogo} alt="Sanlam" className="logo-item" />
                <img src={sarbLogo} alt="South African Reserve Bank" className="logo-item" />
                <img src={standardBankLogo} alt="Standard Bank" className="logo-item" />
                <img src={truworthsLogo} alt="Truworths International" className="logo-item" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer variant="corporate" />
    </div>
  );
}
