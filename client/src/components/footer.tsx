import { Link } from "wouter";
import logoPath from "@assets/new logo for website_1756732910464.webp";
import comensaLogo from "@assets/comensa_1756977321299.webp";

interface FooterProps {
  variant: "corporate" | "christian";
}

export default function Footer({ variant }: FooterProps) {
  const isCorporate = variant === "corporate";
  
  return (
    <footer className="text-white py-6 bg-secondary-electric tracking-tight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section - Always Centered */}
        <div className="text-center mb-6">
          <a href={isCorporate ? "/" : "/christian-coaching"}>
            <img 
              src={logoPath} 
              alt="People Intelligence Logo" 
              className="h-16 w-auto mx-auto cursor-pointer mb-4"
            />
          </a>
          <div className="text-center">
            <p className="text-xs text-white mb-2 uppercase tracking-wide">Member of</p>
            <img 
              src={comensaLogo} 
              alt="COMENSA - Coaches and Mentors of South Africa" 
              className="h-6 w-auto mx-auto object-contain"
            />
          </div>
        </div>
        
        {/* Content Grid - Center Aligned */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-8 lg:gap-12 text-center max-w-4xl mx-auto">
          
          {isCorporate && (
            <div className="text-center">
              <h4 className="text-sm font-normal mb-2 uppercase">Services</h4>
              <ul className="space-y-1">
                <li>
                  <a href="#services" className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight">
                    One-on-One Coaching
                  </a>
                </li>
                <li>
                  <a href="#team-group-coaching" className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight">
                    Team & Group Coaching
                  </a>
                </li>
                <li>
                  <a href="#facilitation-training" className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight">
                    Facilitation & Training
                  </a>
                </li>
                <li>
                  <Link href="/christian-coaching" className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight">
                    Christian Coaching
                  </Link>
                </li>
              </ul>
            </div>
          )}
          
          <div className="text-center">
            <h4 className="text-sm font-normal mb-2 uppercase">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <a href={isCorporate ? "/" : "/christian-coaching"} className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight">
                  {isCorporate ? "Services" : "Christian Coaching"}
                </a>
              </li>
              {!isCorporate && (
                <li>
                  <a 
                    href="/"
                    className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight"
                  >
                    Corporate Services
                  </a>
                </li>
              )}
              <li>
                <a href="#contact" className="text-xs text-gray-300 hover:text-white transition-colors duration-200 tracking-tight">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-4 pt-4 text-center">
          <p className="text-xs text-gray-300 tracking-tight">
            © 2025 People Intelligence. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
