import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogSectionProps {
  variant: "corporate" | "christian";
}

export default function BlogSection({ variant }: BlogSectionProps) {
  const isCorporate = variant === "corporate";
  
  const articles = isCorporate ? [
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "5 Essential Emotional Intelligence Skills Every Leader Needs",
      description: "Discover the core EQ competencies that separate great leaders from good ones and learn practical ways to develop them.",
      alt: "Team meeting in modern office"
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "How to Have Difficult Conversations That Strengthen Relationships",
      description: "A step-by-step framework for navigating challenging discussions with confidence and empathy.",
      alt: "Professional coaching session"
    },
    {
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Building Resilience: Leadership Strategies for High-Pressure Environments",
      description: "Learn how to maintain peak performance while managing stress and supporting your team through challenging times.",
      alt: "Peaceful workspace representing wellness"
    }
  ] : [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Leading Like Jesus: Servant Leadership in Practice",
      description: "Explore how Christ's example provides the perfect model for effective, compassionate leadership in any context.",
      alt: "Person in prayer and reflection"
    },
    {
      image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Wisdom for Difficult Decisions: Biblical Principles for Leaders",
      description: "Discover how to apply biblical wisdom when facing tough choices and leading others through uncertainty.",
      alt: "Open Bible with leadership study materials"
    },
    {
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      title: "Building Unity in Ministry Teams: A Biblical Approach",
      description: "Learn practical strategies for creating harmony and shared purpose among diverse ministry team members.",
      alt: "Ministry team praying together"
    }
  ];
  
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-warm-gray mb-4">
            {isCorporate ? 'Leadership Insights & Resources' : 'Faith & Leadership Resources'}
          </h2>
          <p className="text-xl text-brand-gray">
            {isCorporate 
              ? 'Practical tips and strategies for developing your leadership capabilities'
              : 'Biblical wisdom and practical guidance for Christian leaders'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className={`${isCorporate ? 'bg-slate-50' : 'bg-orange-50'} rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200`}>
              <img 
                src={article.image}
                alt={article.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-warm-gray mb-3">{article.title}</h3>
                <p className="text-brand-gray mb-4">{article.description}</p>
                <a 
                  href="#" 
                  className={`${
                    isCorporate 
                      ? 'text-brand-blue hover:text-brand-amber' 
                      : 'text-sage-green hover:text-warm-orange'
                  } font-semibold transition-colors duration-200 inline-flex items-center`}
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className={`${
              isCorporate 
                ? 'border-brand-gray text-brand-gray hover:bg-brand-gray hover:text-white' 
                : 'border-sage-green text-sage-green hover:bg-sage-green hover:text-white'
            } px-6 py-3 font-semibold`}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
}
