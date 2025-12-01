import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Globe, Lightbulb, TrendingUp, Leaf } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Capabilities() {
  const capabilities = [
    {
      id: 'strategy',
      icon: Layers,
      title: 'Strategy',
      subtitle: 'Define Your Path',
      description: 'We help organizations identify their unique advantages and chart a course for sustainable growth. Our approach combines rigorous analysis with creative foresight.',
      features: ['Corporate Strategy', 'Business Unit Strategy', 'Go-to-Market Planning', 'M&A Support'],
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'digital',
      icon: Globe,
      title: 'Digital',
      subtitle: 'Embrace Transformation',
      description: 'Technology is no longer just an enabler; it is the driver of value. We guide you through digital transformation to improve efficiency and customer experience.',
      features: ['Digital Strategy', 'Technology Implementation', 'Digital Customer Experience', 'IT Modernization'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'analytics',
      icon: Lightbulb,
      title: 'Analytics',
      subtitle: 'Power of Data',
      description: 'Turn vast amounts of data into actionable insights. We help you leverage advanced analytics and AI to make informed, profitable decisions.',
      features: ['Data Strategy', 'Predictive Analytics', 'Performance Measurement', 'AI Integration'],
      image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'growth',
      icon: TrendingUp,
      title: 'Growth',
      subtitle: 'Unlock Potential',
      description: 'Unlock new revenue streams and optimize existing ones. We focus on the commercial levers that drive top-line performance.',
      features: ['Revenue Growth Management', 'Sales Effectiveness', 'Pricing Strategy', 'Innovation Pipeline'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'sustainability',
      icon: Leaf,
      title: 'Sustainability',
      subtitle: 'Resilient Future',
      description: 'Build a responsible business that delivers long-term value. We integrate ESG principles into core strategy for lasting impact.',
      features: ['ESG Strategy', 'Sustainable Operations', 'Social Impact', 'Circular Economy'],
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Capabilities Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our <span className="gradient-text">Capabilities</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive suite of services designed to navigate complexity. From strategy to execution, we are your partners in growth.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Alternating Feature Sections */}
      <div className="space-y-0">
        {capabilities.map((cap, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={cap.id} className="py-24 border-t border-white/5">
              <div className="container-custom">
                <div className={`flex flex-col lg:flex-row gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Text Content */}
                  <div className="flex-1">
                    <AnimatedSection>
                      <div className="flex items-center gap-3 mb-4">
                        <cap.icon className="text-primary-400" size={28} />
                        <span className="text-primary-400 font-bold uppercase tracking-wider text-sm">{cap.subtitle}</span>
                      </div>
                      <h2 className="text-4xl font-bold text-white mb-6">{cap.title}</h2>
                      <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        {cap.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {cap.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                            <span className="text-sm text-white font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8">
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-400 transition-colors border-b border-transparent hover:border-primary-400 pb-1"
                        >
                          Discuss {cap.title} Needs
                          <ArrowRight size={18} />
                        </Link>
                      </div>
                    </AnimatedSection>
                  </div>

                  {/* Image */}
                  <div className="flex-1 w-full">
                    <AnimatedSection delay={0.2}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                        <img 
                          src={cap.image} 
                          alt={cap.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors" />
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container-custom text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-600 font-bold rounded-full px-8 py-4 hover:bg-slate-100 transition-colors shadow-lg"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
