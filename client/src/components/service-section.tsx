import collageImage from "@assets/collage_1755600187940.jpg";
import mushroomImage from "@assets/picsar-DE20dY6R9Vk-unsplash_1755609198002.jpg";
import mushroomClusterImage from "@assets/phoenix-han-ARCaazwh4xw-unsplash_1755609264082.jpg";
import facilitationImage from "@assets/AdobeStock_535833932_1755609472878.jpeg";
import forestPhoto from "@assets/rae-galatas-EZjtqTaGF3w-unsplash_1756975833248.jpg";
import enneagramLogo from "@assets/enneagram_1756975870832.png";
import gtdLogo from "@assets/gtd_1756975870832.png";
import insightsLogo from "@assets/Insights_1756975870832.png";
import neurozoneLogo from "@assets/neurozone_logo_1756975870833.png";

interface ServicesSectionProps {
  variant: "corporate" | "christian";
}

export default function ServicesSection({ variant }: ServicesSectionProps) {
  const isCorporate = variant === "corporate";
  
  const services = isCorporate ? [
    {
      title: "One-on-One Coaching",
      description: "One-on-one coaching provides personalized development through confidential, focused sessions designed around your specific professional goals and challenges. Whether you're navigating career transitions, enhancing performance, building new capabilities, or overcoming obstacles, this individualized approach accelerates your growth and success.",
      bgColor: "bg-accent-gold",
      textColor: "text-white"
    },
    {
      title: "Team Coaching & Group Coaching", 
      description: "Team coaching focuses on improving how an intact work team collaborates and achieves shared objectives by optimising collective performance and enhancing team dynamics. Group coaching brings together individuals from different teams to accelerate personal and professional development through peer learning and shared experiences. Both follow a structured approach.",
      bgColor: "bg-primary-forest",
      textColor: "text-white"
    },
    {
      title: "Facilitation & Training",
      description: "Facilitation is a process by which participants discover learning insights through questions, discussion, collaboration and application. It is flexible and adaptable. Training delivers structured, instructor-led programs with defined curricula focused on acquiring specific skills and knowledge, featuring clear objectives, assessments, and expert content delivery.",
      bgColor: "bg-secondary-electric", 
      textColor: "text-white"
    }
  ] : [
    {
      title: "Faith-Based Leadership Coaching",
      description: "Personal coaching that integrates biblical wisdom with leadership development for authentic, purpose-driven leadership.",
      bgColor: "bg-accent-gold",
      textColor: "text-white"
    },
    {
      title: "Ministry Team Development",
      description: "Strengthen ministry teams through improved communication, conflict resolution, and collaborative leadership.",
      bgColor: "bg-primary-forest",
      textColor: "text-white"
    },
    {
      title: "Christian Leadership Workshops", 
      description: "Faith-integrated workshops on servant leadership, emotional intelligence, and leading with spiritual maturity.",
      bgColor: "bg-secondary-electric",
      textColor: "text-white"
    }
  ];
  
  return (
    <section id="services" className="pt-20 pb-0" style={{ backgroundColor: isCorporate ? '#0F3010' : '#1a384c' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="mb-6">
            {/* Text heading */}
            <h2 className={`${isCorporate ? 'text-accent-gold' : 'text-gray-500'} text-3xl uppercase font-light`}>
              {isCorporate ? "PATHWAYS TO GROWTH" : "WHY CHRISTIAN COACHING?"}
            </h2>
          </div>
        </div>
      </div>

      {!isCorporate && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center">
            <div className="text-left max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-gray-200 font-light mb-6">
                During my own developmental journey, there were moments when I needed more than just an objective, listening ear. I longed for a coach who shared my faith—someone who could remind me of Biblical truths and help me navigate what it means to live in the world but not be of it (1 Peter 2:11), particularly in workplace and societal contexts.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 font-light mb-6">
                The Christian worldview is inherently counter-cultural, and it's not always easy for others to understand. Yet it profoundly shapes how we see life—our priorities, values, and the decisions we make every day.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 font-light mb-6">
                Christian coaching acknowledges God's sovereignty over all things. While we're called to be proactive in building new habits, breaking unhelpful patterns, making plans, and pursuing growth, we also trust that "no purpose of His can be thwarted" (Job 42:2). This approach holds the vital tension between personal responsibility and God's ultimate authority.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 font-light mb-6">
                Faith influences every area of our lives: work, family, leadership, conflict resolution, forgiveness, growth, and calling. Christian coaching provides a safe space to explore these dimensions with someone who understands that faith isn't compartmentalized from life—it's woven through the very heart of it.
              </p>
              <p className="text-lg leading-relaxed text-gray-200 font-light">
                If you're seeking coaching that honours both your faith and your growth, I'd love to <a href="#contact" className={`border-b ${isCorporate ? 'border-accent-gold hover:text-accent-gold' : 'border-gray-500 hover:text-gray-500'} transition-colors duration-200`}>explore how we might work together</a>.
              </p>
            </div>
          </div>
        </div>
      )}
      
      {isCorporate && (
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Row 1: Photo + One-on-One Coaching */}
          <div className="relative min-h-[300px] overflow-hidden order-1">
            <img 
              src={mushroomImage} 
              alt="Single mushroom emerging from moss - representing individual growth" 
              className="absolute inset-0 w-full h-full object-cover scale-150 object-center"
            />
          </div>
          <div className={`${services[0].bgColor} p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:shadow-xl order-2`}>
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-light ${services[0].textColor} mb-4 sm:mb-6 leading-tight`}>
              {services[0].title}
            </h3>
            <p className={`${services[0].textColor} text-base sm:text-lg leading-relaxed font-light opacity-90`}>
              {services[0].description} <a href="#contact" className="border-b border-primary-forest hover:text-primary-forest transition-colors duration-200">Schedule a chemistry call.</a>
            </p>
          </div>

          {/* Row 2: Team Coaching & Development + Photo */}
          <div id="team-group-coaching" className={`${services[1].bgColor} p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:shadow-xl order-4 lg:order-3`}>
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-light ${services[1].textColor} mb-4 sm:mb-6 leading-tight`}>
              {services[1].title}
            </h3>
            <p className={`${services[1].textColor} text-base sm:text-lg leading-relaxed font-light opacity-90`}>
              {services[1].description} <a href="#contact" className={`border-b ${isCorporate ? 'border-accent-gold hover:text-accent-gold' : 'border-gray-500 hover:text-gray-500'} transition-colors duration-200`}>Let's discuss your needs and objectives.</a>
            </p>
          </div>
          <div className="relative min-h-[300px] overflow-hidden order-3 lg:order-4">
            <img 
              src={mushroomClusterImage} 
              alt="Multiple mushrooms growing together - representing team collaboration" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Row 3: Photo + Facilitation & Training */}
          <div className="relative min-h-[300px] overflow-hidden order-5">
            <img 
              src={facilitationImage} 
              alt="Training and facilitation environment - representing skill development" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div id="facilitation-training" className={`${services[2].bgColor} p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:shadow-xl order-6`}>
            <h3 className={`text-xl sm:text-2xl lg:text-3xl font-light ${services[2].textColor} mb-4 sm:mb-6 leading-tight`}>
              {services[2].title}
            </h3>
            <p className={`${services[2].textColor} text-base sm:text-lg leading-relaxed font-light opacity-90`}>
              {services[2].description} <a href="#contact" className={`border-b ${isCorporate ? 'border-accent-gold hover:text-accent-gold' : 'border-gray-500 hover:text-gray-500'} transition-colors duration-200`}>Get in touch.</a>
            </p>
          </div>

          {/* Row 4: Accreditation Block + Forest Photo */}
          <div className="bg-black p-6 sm:p-8 lg:p-12 transition-all duration-300 hover:shadow-xl order-8 lg:order-7">
            <p className="text-white text-base sm:text-lg leading-relaxed font-light mb-6 sm:mb-8">
              Accredited in global frameworks including Insights Discovery, Neurozone, Enneagram, and Getting Things Done® — applied where they best support your growth.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 items-center">
              <div>
                <img 
                  src={insightsLogo} 
                  alt="Insights Discovery Logo" 
                  className="h-8 sm:h-12 object-contain filter brightness-0 invert mx-auto"
                />
              </div>
              <div>
                <img 
                  src={neurozoneLogo} 
                  alt="Neurozone Logo" 
                  className="h-12 sm:h-20 object-contain mx-auto"
                />
              </div>
              <div>
                <img 
                  src={enneagramLogo} 
                  alt="Enneagram Logo" 
                  className="h-8 sm:h-12 object-contain mx-auto"
                />
              </div>
              <div>
                <img 
                  src={gtdLogo} 
                  alt="Getting Things Done Logo" 
                  className="h-6 sm:h-10 object-contain mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden order-7 lg:order-8">
            <img 
              src={forestPhoto} 
              alt="Forest moss and mushrooms - representing natural growth frameworks" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
