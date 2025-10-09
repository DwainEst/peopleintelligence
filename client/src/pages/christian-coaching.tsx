import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";

import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import enneagramLogo from "@assets/enneagram_1756979375893.webp";
import gtdLogo from "@assets/gtd_1756979375894.webp";
import insightsLogo from "@assets/Insights_1756979375894.webp";
import neurozoneLogo from "@assets/neurozone_logo_1756979375895.webp";


export default function ChristianCoaching() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroSection variant="christian" />
      


      {/* Our Story Section */}
      <section id="about" className="pt-24 pb-12 relative" style={{ backgroundColor: '#1a384c' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 sm:mb-8">
              <h2 className="text-gray-500 text-2xl sm:text-3xl uppercase font-light">
                ABOUT ME
              </h2>
            </div>
            <div className="text-left max-w-4xl mx-auto">
              <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-light mb-6">
                I'm Danelle Esterhuizen—a coach, facilitator, wife, mother of two, and committed Christian. My journey of faith and professional growth has deeply influenced how I work with people, weaving together psychological insight, coaching expertise, and Biblical wisdom.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-light mb-6">
                With a B.A. (Hons.) in Psychology and coaching qualifications since 2008, I'm also accredited in internationally recognized tools including Insights Discovery®, Enneagram, Neurozone®, and Getting Things Done®. I integrate these tools strategically to help clients deepen self-awareness, strengthen resilience, and pursue meaningful growth. After a transformative decade living and working in the UK, I returned to South Africa in 2009 with a rich, multi-disciplinary perspective that continues to enrich my practice.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-light mb-6">
                I've had the privilege of partnering with clients across the entire career spectrum—from graduates taking their first professional steps to senior leaders navigating complex decisions. My approach is both adaptable and deeply personal, grounded in curiosity, challenge, and unwavering support. I'm particularly fascinated by neuroscience and how our God-designed brain-body system empowers us to build and break habits, develop resilience, and create sustainable, life-giving patterns of living and working.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-light">
                If you'd like to have a coaching chemistry call to see if we're a good fit, <a href="#contact" className="border-b border-gray-500 hover:text-gray-500 transition-colors duration-200">please get in touch</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Strip */}
      <section className="bg-secondary-electric py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-lg leading-relaxed font-light mb-8">
            Accredited in global frameworks including Insights Discovery, Neurozone, Enneagram, and Getting Things Done® — applied where they best support your growth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="flex justify-center">
              <img 
                src={insightsLogo} 
                alt="Insights Discovery Logo" 
                className="h-12 object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={neurozoneLogo} 
                alt="Neurozone Logo" 
                className="h-12 object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={enneagramLogo} 
                alt="Enneagram Logo" 
                className="h-12 object-contain"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={gtdLogo} 
                alt="Getting Things Done Logo" 
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesSection variant="christian" />

      {/* Final Results Section */}
      <section className="py-12" style={{ backgroundColor: '#808080' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            {/* Call to Action */}
            <div id="contact" className="mb-8">
              <div className="mb-6">

                {/* Text heading */}
                <h2 className="text-black text-2xl sm:text-3xl uppercase font-light">
                  GET IN TOUCH
                </h2>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-12">
              <div className="flex flex-col items-center text-center">
                <span className="text-black mb-2 text-sm uppercase tracking-wide">Phone</span>
                <span className="text-white hover:text-gray-300 transition-colors duration-200">
                  +27 76 739 4114
                </span>
                <span className="text-sm text-white mt-1">(Phone & WhatsApp)</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-black mb-2 text-sm uppercase tracking-wide">Email</span>
                <a href="mailto:danelle@peopleintelligence.co.za" className="text-white hover:text-gray-300 transition-colors duration-200">
                  danelle@peopleintelligence.co.za
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-black mb-2 text-sm uppercase tracking-wide">Location</span>
                <span className="text-white">South Africa</span>
                <span className="text-sm text-white mt-1">(Worldwide Online)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted by Leading Organisations */}
      <section className="py-8 overflow-hidden" style={{ backgroundColor: '#1a384c' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-gray-200 leading-relaxed font-medium italic">
                "The experiences of our lives, when we let God use them, become the perfect preparation for the work He will give us to do."
              </p>
              <p className="text-gray-400 mt-2 italic">
                — Corrie ten Boom
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                Need corporate coaching? <a href="/" className="text-gray-200 hover:text-gray-400 transition-colors duration-200 border-b border-gray-200">Visit our corporate services</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer variant="christian" />
    </div>
  );
}
