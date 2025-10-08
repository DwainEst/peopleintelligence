import { Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  variant: "corporate" | "christian";
}

export default function TestimonialsSection({ variant }: TestimonialsSectionProps) {
  const isCorporate = variant === "corporate";
  
  const testimonials = isCorporate ? [
    {
      text: "The coaching completely transformed how I approach leadership challenges. I now have the confidence to have difficult conversations and the tools to guide my team through uncertainty with clarity and purpose.",
      name: "Sarah Johnson",
      role: "VP of Operations, Tech Company"
    },
    {
      text: "Our team dynamics shifted dramatically after the coaching program. We went from avoiding conflict to addressing issues head-on in a constructive way. The psychological safety we've built has unlocked creativity and innovation we never thought possible.",
      name: "Michael Chen", 
      role: "Director of Engineering, Financial Services"
    },
    {
      text: "The emotional intelligence workshop was a game-changer for our entire organization. Staff are more engaged, communication is clearer, and we're seeing real improvements in both employee satisfaction and business outcomes.",
      name: "Lisa Rodriguez",
      role: "HR Director, Healthcare Organization"
    }
  ] : [
    {
      text: "This coaching helped me integrate my faith with my leadership in a way that feels authentic and powerful. I'm now leading with more compassion while still maintaining the strength and vision our ministry needs.",
      name: "Pastor David Williams",
      role: "Senior Pastor, Community Church"
    },
    {
      text: "The faith-based approach to leadership development was exactly what I needed. I learned how to lead with humility while still being decisive, and how to navigate difficult situations with both wisdom and grace.", 
      name: "Rebecca Thompson",
      role: "Ministry Director, Non-Profit Organization"
    },
    {
      text: "Through this coaching, I discovered how to use conflict as an opportunity for growth rather than something to avoid. Our ministry team is now more united and effective than we've ever been.",
      name: "James Mitchell",
      role: "Youth Pastor, Faith Community Church"
    }
  ];
  
  return (
    <section className={`py-20 ${isCorporate ? 'bg-slate-50' : 'bg-orange-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <Quote className={`${isCorporate ? 'text-brand-blue' : 'text-sage-green'} text-2xl mr-4`} size={24} />
                <div className={`flex ${isCorporate ? 'text-brand-amber' : 'text-yellow-500'}`}>
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              
              <p className="text-brand-gray mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div>
                <h4 className="font-semibold text-warm-gray">{testimonial.name}</h4>
                <p className="text-brand-gray text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
