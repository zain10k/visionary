import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Landmark, Factory, HeartPulse, Smartphone, Zap, Plus } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Industries() {
  const industries = [
    {
      icon: ShoppingBag,
      title: 'Consumer Products',
      description: 'Navigating shifting consumer behaviors and supply chain complexities in Retail, Fashion, and FMCG.',
      projects: ['Supply Chain Optimization', 'Direct-to-Consumer Strategy', 'Brand Revitalization'],
      image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Landmark,
      title: 'Financial Services',
      description: 'Driving digital transformation and risk management for Banking, Insurance, and Fintech organizations.',
      projects: ['Digital Banking Transformation', 'Regulatory Compliance', 'Customer Journey Mapping'],
      image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Factory,
      title: 'Industrials',
      description: 'Enhancing operational efficiency and innovation in Manufacturing, Logistics, and Industrial Goods.',
      projects: ['Smart Factory Implementation', 'Logistics Network Design', 'Operational Excellence'],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: HeartPulse,
      title: 'Healthcare',
      description: 'Improving patient outcomes and operational performance for Pharma, MedTech, and Providers.',
      projects: ['Value-Based Care Models', 'Digital Health Strategy', 'R&D Efficiency'],
      image: 'https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Smartphone,
      title: 'Technology',
      description: 'Scaling growth and managing disruption in Software, Media, and Telecommunications.',
      projects: ['SaaS Pricing Strategy', 'Product Lifecycle Management', 'Market Expansion'],
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Energy',
      description: 'Guiding the transition to sustainable energy for Oil & Gas, Renewables, and Utility companies.',
      projects: ['Renewable Energy Transition', 'Grid Modernization', 'Sustainability Reporting'],
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
           <img 
             src="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
             alt="Industries Background" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
         </div>
         
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Deep expertise across key sectors allows us to understand your unique challenges and deliver tailored, high-impact solutions.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Industries Mosaic Grid */}
      <section className="section-padding pt-0">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <AnimatedCard key={industry.title} delay={index * 0.1}>
                  <div className="group h-full bg-navy-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col">
                    {/* Image Area */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-navy-950/60 group-hover:bg-navy-950/40 transition-colors" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                         <Icon className="text-primary-400" size={24} />
                      </div>
                    </div>
                    
                    {/* Content Area */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                      <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{industry.description}</p>
                      
                      <div className="border-t border-slate-800 pt-6 mt-auto">
                        <h4 className="text-xs font-bold text-primary-400 uppercase tracking-wider mb-3">Key Engagements</h4>
                        <ul className="space-y-2">
                          {industry.projects.map((project) => (
                            <li key={project} className="text-sm text-slate-300 flex items-start gap-2">
                              <Plus size={14} className="text-primary-400 mt-1 flex-shrink-0" />
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-slate-800">
        <div className="container-custom text-center">
          <AnimatedSection>
             <h2 className="text-3xl font-bold text-white mb-6">Don't see your industry?</h2>
             <p className="text-slate-400 max-w-2xl mx-auto mb-8">
               Our strategic frameworks are adaptable across sectors. Contact us to discuss how we can apply our expertise to your specific challenges.
             </p>
             <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary-400 font-semibold hover:text-white transition-colors"
            >
              Contact Us to Discuss
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
