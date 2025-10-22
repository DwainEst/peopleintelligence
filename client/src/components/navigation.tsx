import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/People Intelligence logo_1754983700211.webp";

interface NavigationProps {
  variant: "corporate" | "christian";
}

export default function Navigation({ variant }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const isCorporate = variant === "corporate";
  const logoColors = isCorporate ? "text-warm-gray" : "text-warm-gray";

  // Define font styles
  const corporateFont = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const christianFont = {
    fontFamily: 'Georgia, serif',
    fontSize: '16px',
    fontWeight: 'normal',
  };

  const fontStyle = isCorporate ? corporateFont : christianFont;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-mystical-teal overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href={isCorporate ? "/" : "/christian-coaching"}>
            <div className="flex items-center cursor-pointer">
              {/* People Intelligence Logo */}
              <img
                src={logoPath}
                alt="People Intelligence Logo"
                className="h-18 w-auto"
              />
            </div>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href={isCorporate ? "/" : "/christian-coaching"}
                className="text-secondary-electric hover:text-accent-gold transition-colors duration-200 px-3 py-2 text-sm font-bold uppercase tracking-wide"
                style={fontStyle}
              >
                Home
              </a>
              <a href="#about" className="text-primary-forest hover:text-secondary-electric transition-colors duration-200 px-3 py-2 text-sm font-bold uppercase tracking-wide" style={fontStyle}>
                About
              </a>
              <a href="#services" className="text-primary-forest hover:text-secondary-electric transition-colors duration-200 px-3 py-2 text-sm font-bold uppercase tracking-wide" style={fontStyle}>
                {isCorporate ? "Services" : "Christian coaching"}
              </a>

              {!isCorporate && (
                <a
                  href="/"
                  className="text-primary-forest hover:text-secondary-electric transition-colors duration-200 px-3 py-2 text-sm font-bold uppercase tracking-wide"
                  style={fontStyle}
                >
                  Corporate Services
                </a>
              )}
              <a href="#contact" className="text-primary-forest hover:text-secondary-electric transition-colors duration-200 px-3 py-2 text-sm font-bold uppercase tracking-wide" style={fontStyle}>
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-gray hover:text-brand-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 w-full bg-white border-t border-gray-200 z-[101]">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href={isCorporate ? "/" : "/christian-coaching"}
                className="block px-3 py-2 text-brand-blue hover:text-brand-amber transition-colors duration-200 text-base font-medium"
                style={fontStyle}
              >
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-brand-gray hover:text-brand-blue transition-colors duration-200 text-base font-medium" style={fontStyle}>
                About
              </a>
              <a href="#services" className="block px-3 py-2 text-brand-gray hover:text-brand-blue transition-colors duration-200 text-base font-medium" style={fontStyle}>
                {isCorporate ? "Services" : "Christian coaching"}
              </a>

              {!isCorporate && (
                <a
                  href="/"
                  className="block px-3 py-2 text-brand-gray hover:text-brand-blue transition-colors duration-200 text-base font-medium"
                  style={fontStyle}
                >
                  Corporate Services
                </a>
              )}
              <a href="#contact" className="block px-3 py-2 text-brand-gray hover:text-brand-blue transition-colors duration-200 text-base font-medium" style={fontStyle}>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
