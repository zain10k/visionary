import { Link } from 'react-router-dom';
import { ArrowRight, Megaphone, Target, TrendingUp, BarChart3, CheckCircle, Users, Search, FileText } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function MarketingConsultancy() {
  const services = [
    {
      icon: Target,
      title: 'Marketing Strategy & Planning',
      description: 'Develop comprehensive marketing strategies that align with business objectives and drive measurable growth.',
    },
    {
      icon: Megaphone,
      title: 'Brand Development & Positioning',
      description: 'Define and strengthen your brand positioning to stand out in competitive markets and build lasting customer relationships.',
    },
    {
      icon: Users,
      title: 'Social Media Strategy',
      description: 'Create effective social media strategies that engage audiences and build brand awareness across platforms.',
    },
    {
      icon: Search,
      title: 'Digital Marketing Strategy',
      description: 'Leverage SEO, email marketing, and PPC advisory to reach and convert your target audience effectively.',
    },
    {
      icon: FileText,
      title: 'Content Planning & Messaging',
      description: 'Develop compelling content strategies and messaging that resonates with your target customers.',
    },
    {
      icon: Users,
      title: 'Customer Targeting & Segmentation',
      description: 'Identify and target the right customer segments to maximize marketing ROI and customer acquisition.',
    },
    {
      icon: BarChart3,
      title: 'Competitor Audits',
      description: 'Analyze competitor strategies to identify opportunities and differentiate your brand in the market.',
    },
    {
      icon: TrendingUp,
      title: 'Campaign Planning & Measurement',
      description: 'Plan and execute marketing campaigns with clear KPIs and measurement frameworks for success.',
    },
  ];

  const benefits = [
    'Increase visibility and brand awareness',
    'Attract the right customers',
    'Build trust and credibility',
    'Strengthen brand positioning',
    'Grow revenue through effective marketing',
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Marketing Consultancy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-400/10 border border-primary-400/20 backdrop-blur-md mb-6">
              <Megaphone size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="gradient-text">Marketing</span> Consultancy
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Marketing is at the heart of business growth. In a competitive world, a strong brand and clear messaging determine whether a business is noticed or ignored.
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
                Our Marketing Consultancy service helps organisations build powerful brands, reach new customers and accelerate growth. Marketing isn't only about posting content — it's about creating a system that consistently attracts the right audience.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Strategic marketing helps businesses increase visibility, attract customers, build trust, strengthen their brand, and grow revenue. We help you create a comprehensive marketing strategy that drives measurable results.
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
                Strategic marketing helps businesses:
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
                <h3 className="text-2xl font-bold text-white mb-4">Why Marketing Strategy Matters More Than Just Social Media Posts</h3>
                <p className="text-slate-300 leading-relaxed">
                  Marketing isn't only about posting content — it's about creating a system that consistently attracts the right audience. A comprehensive marketing strategy ensures every touchpoint works together to build your brand and drive growth.
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
              Ready to Elevate Your Marketing?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our marketing consultancy services can help your organisation build a stronger brand and drive growth.
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
