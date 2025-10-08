import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutSectionProps {
  variant: "corporate" | "christian";
}

export default function AboutSection({ variant }: AboutSectionProps) {
  const isCorporate = variant === "corporate";
  
  return (
    <section id="about" className={`py-20 ${isCorporate ? 'bg-slate-50' : 'bg-orange-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
        </div>
      </div>
    </section>
  );
}