import { Mail, Phone, MapPin } from "lucide-react";

interface ContactSectionProps {
  variant: "corporate" | "christian";
}

export default function ContactSection({ variant }: ContactSectionProps) {
  const isCorporate = variant === "corporate";
  
  return (
    <section id="contact" className={`py-20 ${isCorporate ? 'bg-slate-50' : 'bg-orange-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-warm-gray mb-8">
            Contact
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-start space-y-6 sm:space-y-0 sm:space-x-12">
            <div className="flex flex-col items-center text-center">
              <Mail className={`${isCorporate ? 'text-brand-blue' : 'text-sage-green'} mb-2`} size={24} />
              <a href="mailto:danelle@peopleintelligence.co.za" className="text-brand-gray hover:text-brand-blue transition-colors duration-200">
                danelle@peopleintelligence.co.za
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <Phone className={`${isCorporate ? 'text-brand-blue' : 'text-sage-green'} mb-2`} size={24} />
              <a href="https://wa.me/27767394114" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-blue transition-colors duration-200">
                +27 76 739 4114
              </a>
              <span className="text-sm text-brand-gray mt-1">(Phone & WhatsApp)</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className={`${isCorporate ? 'text-brand-blue' : 'text-sage-green'} mb-2`} size={24} />
              <span className="text-brand-gray">South Africa</span>
              <span className="text-sm text-brand-gray mt-1">(Worldwide Online)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}