import { Link } from 'react-router-dom';
import { ArrowRight, Search, TrendingUp, BarChart3, Target, CheckCircle, Users, Map, DollarSign } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function MarketResearch() {
  const services = [
    {
      icon: Users,
      title: 'Customer Research & Segmentation',
      description: 'Understand customer needs, preferences, and behaviors through primary and secondary research to identify target segments.',
    },
    {
      icon: Search,
      title: 'Competitor Analysis',
      description: 'Deep insights into competitive landscape, positioning, and strategies to identify opportunities and threats.',
    },
    {
      icon: Map,
      title: 'Market Opportunity Assessment',
      description: 'Identify and evaluate new market opportunities to drive growth and expansion.',
    },
    {
      icon: Target,
      title: 'New Market Entry Strategy',
      description: 'Develop comprehensive strategies for entering new geographic or product markets with confidence.',
    },
    {
      icon: BarChart3,
      title: 'Product Positioning & Pricing Strategy',
      description: 'Develop data-driven product positioning and pricing strategies that maximize market impact and profitability.',
    },
    {
      icon: Users,
      title: 'Customer Experience Analysis',
      description: 'Analyze customer journeys and experiences to identify improvement opportunities and enhance satisfaction.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Strategy Development',
      description: 'Develop data-driven growth strategies based on market insights and opportunities.',
    },
    {
      icon: DollarSign,
      title: 'Demand Forecasting',
      description: 'Predict future demand patterns to support strategic planning and resource allocation.',
    },
  ];

  const benefits = [
    'Identify new revenue streams',
    'Outperform competitors through strategic insights',
    'Target the right customers effectively',
    'Improve product offerings based on market data',
    'Expand safely and profitably',
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/590544/pexels-photo-590544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Market Research" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-400/10 border border-primary-400/20 backdrop-blur-md mb-6">
              <Search size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Market Research & <span className="gradient-text">Growth Consulting</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Understanding the market is key to sustainable growth. Without proper research, businesses risk launching the wrong products, targeting the wrong customers or planning misguided strategies.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Overview</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Our Market Research & Growth Consulting service offers clear insights that drive successful expansion. Businesses that rely on gut feeling often fail. We help organisations make decisions backed by evidence, customer insights and predictive analysis.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                From customer research to growth strategy development, we work with you to build research capabilities that enable data-driven decision making and identify opportunities for sustainable growth.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/30">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What We Do for Clients</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard key={service.title} delay={index * 0.1}>
                  <div className="bg-navy-950/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-primary-400/50 transition-colors h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary-400/10 flex items-center justify-center flex-shrink-0 border border-primary-400/20">
                        <Icon className="text-primary-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why This Matters</h2>
              <p className="text-lg text-slate-300 mb-6">
                Market insight enables businesses to:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-navy-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Market Research: The Backbone of Modern Business Success</h3>
                <p className="text-slate-300 leading-relaxed">
                  Businesses that rely on gut feeling often fail. We help organisations make decisions backed by evidence, customer insights and predictive analysis. Through comprehensive market research, organizations can identify opportunities, mitigate risks, and make informed strategic decisions that drive growth.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container-custom text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to Unlock Growth Opportunities?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our market research and growth consulting services can help your organization make informed strategic decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-400 text-navy-950 font-bold text-lg rounded-full px-10 py-4 hover:bg-white transition-colors shadow-lg"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 bg-transparent text-primary-400 font-bold text-lg rounded-full px-10 py-4 border-2 border-primary-400 hover:bg-primary-400/10 transition-all"
              >
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
