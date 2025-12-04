import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Megaphone, RefreshCw, Globe, Search, Users, Settings, Layers } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Capabilities() {
  const capabilities = [
    {
      id: 'sustainability-strategy',
      icon: Leaf,
      title: 'Sustainability Strategy & ESG Planning',
      subtitle: 'Resilient Future',
      description: 'Build a responsible business that delivers long-term value. We integrate ESG principles into core strategy for lasting impact and sustainable growth.',
      features: ['ESG Strategy Development', 'Sustainability Roadmaps', 'ESG Reporting & Compliance', 'Sustainable Operations Planning'],
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'marketing-consultancy',
      icon: Megaphone,
      title: 'Marketing Consultancy',
      subtitle: 'Brand Growth',
      description: 'Drive brand growth and market presence. We help organizations develop and execute marketing strategies that engage customers and drive measurable business results.',
      features: ['Marketing Strategy', 'Brand Positioning', 'Digital Marketing', 'Marketing Analytics'],
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'change-management',
      icon: RefreshCw,
      title: 'Change Management & Business Transformation',
      subtitle: 'Navigate Transformation',
      description: 'Navigate transformation with confidence. We help organizations successfully manage change and transform their operations, culture, and capabilities for sustainable growth.',
      features: ['Change Strategy & Planning', 'Stakeholder Engagement', 'Organizational Transformation', 'Change Readiness Assessment'],
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'digital-transformation',
      icon: Globe,
      title: 'Digital Transformation & Technology Consulting',
      subtitle: 'Embrace Transformation',
      description: 'Embrace transformation with confidence. Technology is the driver of value. We guide you through digital transformation to improve efficiency, enhance customer experience, and drive innovation.',
      features: ['Digital Strategy', 'Technology Consulting', 'Digital Platform Development', 'IT Modernization'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'market-research',
      icon: Search,
      title: 'Market Research & Growth Consulting',
      subtitle: 'Unlock Growth',
      description: 'Unlock growth opportunities. We help organizations understand markets, customers, and competitors to develop data-driven growth strategies that drive sustainable expansion.',
      features: ['Market Analysis', 'Competitive Intelligence', 'Customer Research', 'Growth Strategy Development'],
      image: 'https://images.pexels.com/photos/590544/pexels-photo-590544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'hr-people-development',
      icon: Users,
      title: 'HR & People Development Consulting',
      subtitle: 'Build Your Greatest Asset',
      description: 'Build your greatest asset. We help organizations develop their people, build capabilities, and create cultures that drive performance and engagement.',
      features: ['Talent Strategy', 'Organizational Development', 'Learning & Development', 'Performance Management'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'operations-process',
      icon: Settings,
      title: 'Operations & Process Improvement',
      subtitle: 'Operational Excellence',
      description: 'Optimize operations for excellence. We help organizations streamline processes, eliminate waste, and build operational capabilities that drive efficiency and customer satisfaction.',
      features: ['Process Optimization', 'Operational Excellence', 'Supply Chain Optimization', 'Performance Management'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 'strategy-business-planning',
      icon: Layers,
      title: 'Strategy & Business Planning',
      subtitle: 'Define Your Path',
      description: 'Define your path forward. We help organizations develop strategic plans and business plans that align with objectives, leverage opportunities, and drive sustainable growth.',
      features: ['Strategic Planning', 'Business Planning', 'Market Strategy', 'Strategic Execution'],
      image: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=800'
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
                          to={`/services/${cap.id}`} 
                          className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-400 transition-colors border-b border-transparent hover:border-primary-400 pb-1"
                        >
                          Learn More About {cap.title}
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
              className="inline-flex items-center gap-2 bg-primary-400 text-navy-950 font-bold text-lg rounded-full px-10 py-4 hover:bg-white transition-colors shadow-lg"
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
