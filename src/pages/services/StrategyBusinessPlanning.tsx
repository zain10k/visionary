import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Target, TrendingUp, Map, CheckCircle, BarChart3, Users, Eye } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function StrategyBusinessPlanning() {
  const services = [
    {
      icon: BarChart3,
      title: 'Conduct Full Organisational Analysis',
      description: 'Comprehensive analysis of strengths, weaknesses, risks, and opportunities to inform strategic planning.',
    },
    {
      icon: Users,
      title: 'Facilitate Strategic Workshops with Leadership Teams',
      description: 'Engage leadership teams in strategic planning workshops to align vision and priorities.',
    },
    {
      icon: Map,
      title: 'Develop Long-Term Business Plans',
      description: 'Create detailed 1, 3, and 5-year business plans that guide organizational direction and resource allocation.',
    },
    {
      icon: Target,
      title: 'Create Market-Entry Strategies',
      description: 'Develop comprehensive strategies for entering new products or regions with confidence.',
    },
    {
      icon: TrendingUp,
      title: 'Build Growth Strategies with Measurable KPIs',
      description: 'Develop growth strategies with clear KPIs and measurement frameworks for success.',
    },
    {
      icon: Eye,
      title: 'Provide Competitive and Industry Analysis',
      description: 'Analyze competitive landscape and industry trends to inform strategic decisions.',
    },
    {
      icon: Layers,
      title: 'Help Define Mission, Vision and Values',
      description: 'Define organizational mission, vision, and values that guide decision-making and culture.',
    },
    {
      icon: BarChart3,
      title: 'Support Implementation and Quarterly Reviews',
      description: 'Provide ongoing support for strategy implementation and regular reviews to ensure progress.',
    },
  ];

  const benefits = [
    'Grows faster through clear direction',
    'Uses resources more effectively',
    'Makes informed decisions based on data',
    'Handles uncertainty better with strategic planning',
    'Aligns teams with a shared vision',
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Strategy & Business Planning" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-400/10 border border-primary-400/20 backdrop-blur-md mb-6">
              <Layers size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Strategy & <span className="gradient-text">Business Planning</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A strong strategy provides the roadmap for growth, competitive positioning and long-term sustainability. Many organisations operate reactively, without a structured plan, which leads to wasted resources and unclear direction.
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
                Our Strategy & Business Planning service helps organisations create clear, actionable and evidence-based strategies that guide every major decision. A strategy acts as a blueprint — identifying core priorities, aligning people, and guiding decisions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Without strategy, growth becomes accidental instead of intentional. With our structured planning process, we help businesses turn goals into systems and actions that deliver measurable results.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/30">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">What We Do for You</h2>
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
                A business with a structured strategy:
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
                <h3 className="text-2xl font-bold text-white mb-4">Why Most Businesses Fail Without a Clear Strategy</h3>
                <p className="text-slate-300 leading-relaxed">
                  In today's competitive landscape, businesses lose opportunities not because of lack of talent but because of lack of direction. A strategy acts as a blueprint — identifying core priorities, aligning people, and guiding decisions. Without strategy, growth becomes accidental instead of intentional. With our structured planning process, we help businesses turn goals into systems and actions that deliver measurable results.
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
              Ready to Define Your Strategic Path?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our strategy and business planning services can help your organization achieve its goals.
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
