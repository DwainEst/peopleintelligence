import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import myceliumImage from "@assets/mycelium2_1755598996880.jpg";
import lighthouseImage from "@assets/Gemini_Generated_Image_vegiozvegiozvegi_1756988868227.png";
import logoPath from "@assets/new logo for website_1756732910464.png";

interface HeroSectionProps {
  variant: "corporate" | "christian";
}

export default function HeroSection({ variant }: HeroSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isCorporate = variant === "corporate";
  
  return (
    <section id="home" className="text-white relative aspect-video flex flex-col overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: `url(${isCorporate ? myceliumImage : lighthouseImage})`,
          backgroundPosition: 'center center',
          transform: 'scale(1)',
          filter: isCorporate ? 'contrast(1.3) saturate(1.4) brightness(1.1)' : 'none',
          willChange: 'transform'
        }}
      >
        <link rel="preload" as="image" href={isCorporate ? myceliumImage : lighthouseImage} />
      </div>
      {isCorporate && <div className="absolute inset-0 bg-black bg-opacity-50" />}
      
      {/* Navigation integrated into hero */}
      <nav className="relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <Link href={isCorporate ? "/" : "/christian-coaching"}>
              <div className="flex items-center cursor-pointer">
                <img 
                  src={logoPath} 
                  alt="People Intelligence Logo" 
                  className="h-16 sm:h-20 lg:h-24 w-auto mt-3 sm:mt-6"
                />
              </div>
            </Link>
            
            <div className="hidden md:block flex-1">
              <div className={`flex items-baseline space-x-6 ${isCorporate ? 'justify-end' : 'justify-end'}`}>
                <a 
                  href={isCorporate ? "/" : "/christian-coaching"}
                  className={`text-white ${isCorporate ? 'hover:text-accent-gold' : 'hover:text-gray-500'} transition-colors duration-200 text-sm font-medium uppercase tracking-wide ${isCorporate ? 'px-3 py-2' : 'pl-3 pr-0 py-2'}`}
                >
                  Home
                </a>
                <a href="#about" className={`text-white ${isCorporate ? 'hover:text-accent-gold' : 'hover:text-gray-500'} transition-colors duration-200 text-sm font-medium uppercase tracking-wide ${isCorporate ? 'px-3 py-2' : 'pl-3 pr-0 py-2'}`}>
                  About
                </a>
                <a href="#services" className={`text-white ${isCorporate ? 'hover:text-accent-gold' : 'hover:text-gray-500'} transition-colors duration-200 text-sm font-medium uppercase tracking-wide ${isCorporate ? 'px-3 py-2' : 'pl-3 pr-0 py-2'}`}>
                  {isCorporate ? "Services" : "Christian coaching"}
                </a>

                <a href="#contact" className={`text-white ${isCorporate ? 'hover:text-accent-gold' : 'hover:text-gray-500'} transition-colors duration-200 text-sm font-medium uppercase tracking-wide ${isCorporate ? 'px-3 py-2' : 'pl-3 pr-0 py-2'}`}>
                  Contact
                </a>
              </div>
            </div>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className={`text-white ${isCorporate ? 'hover:text-secondary-electric' : 'hover:text-gray-500'} bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 z-50">
              <div className={`px-4 pt-4 pb-6 space-y-2 ${isCorporate ? 'bg-black/90' : 'bg-white/95'} backdrop-blur-md border-t border-gray-600`}>
                <a 
                  href={isCorporate ? "/" : "/christian-coaching"}
                  className={`block px-4 py-4 ${isCorporate ? 'text-white hover:text-accent-gold hover:bg-accent-gold/10' : 'text-gray-900 hover:text-gray-700 hover:bg-gray-100/50'} transition-all duration-200 text-lg font-medium rounded-lg`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className={`block px-4 py-4 ${isCorporate ? 'text-white hover:text-accent-gold hover:bg-accent-gold/10' : 'text-gray-900 hover:text-gray-700 hover:bg-gray-100/50'} transition-all duration-200 text-lg font-medium rounded-lg`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className={`block px-4 py-4 ${isCorporate ? 'text-white hover:text-accent-gold hover:bg-accent-gold/10' : 'text-gray-900 hover:text-gray-700 hover:bg-gray-100/50'} transition-all duration-200 text-lg font-medium rounded-lg`}
                  onClick={() => setIsOpen(false)}
                >
                  {isCorporate ? "Services" : "Christian coaching"}
                </a>
                <a 
                  href="#contact" 
                  className={`block px-4 py-4 ${isCorporate ? 'text-white hover:text-accent-gold hover:bg-accent-gold/10' : 'text-gray-900 hover:text-gray-700 hover:bg-gray-100/50'} transition-all duration-200 text-lg font-medium rounded-lg`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-6 sm:px-8 lg:px-12 py-24 sm:py-16 min-h-[calc(100vh-80px)] sm:min-h-0">
        <div className="text-center w-full max-w-6xl mx-auto">
          {isCorporate ? (
            <div className="space-y-6">
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-tight sm:leading-relaxed text-white font-medium tracking-wide">
                Pathways to potential are not about striving harder, but about cultivating resilience, relationships, and awareness that make performance sustainable in every area of life.
              </p>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight sm:leading-relaxed text-white font-medium tracking-wide">
                We have an anchor that keeps the soul<br className="hidden sm:block" /><span className="sm:hidden"> </span>steadfast and sure while the billows roll
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 italic font-semibold">
                — Priscilla J. Owens (1882)
              </p>
            </div>
          )}
        </div>
      </div>
      

    </section>
  );
}
