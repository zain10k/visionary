import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Zap, TrendingUp, Target, CheckCircle, Map, DollarSign, BarChart3 } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function OperationsProcess() {
  const services = [
    {
      icon: Map,
      title: 'Process Mapping & Workflow Analysis',
      description: 'Map existing processes and workflows to identify inefficiencies and improvement opportunities.',
    },
    {
      icon: Target,
      title: 'Identifying Bottlenecks and Inefficiencies',
      description: 'Identify and analyze bottlenecks and inefficiencies that impact productivity and performance.',
    },
    {
      icon: Zap,
      title: 'Designing Lean, Efficient Processes',
      description: 'Redesign processes using lean principles to eliminate waste and improve efficiency.',
    },
    {
      icon: DollarSign,
      title: 'Cost-Reduction Strategies',
      description: 'Develop strategies to reduce operational costs while maintaining or improving quality.',
    },
    {
      icon: Settings,
      title: 'Supply Chain Optimisation',
      description: 'Optimize supply chain operations for efficiency, resilience, and cost effectiveness.',
    },
    {
      icon: TrendingUp,
      title: 'Improving Service Delivery Systems',
      description: 'Enhance service delivery systems to improve customer satisfaction and operational efficiency.',
    },
    {
      icon: BarChart3,
      title: 'Performance Measurement Models',
      description: 'Develop performance measurement frameworks with KPIs and dashboards that drive action.',
    },
    {
      icon: Target,
      title: 'Implementing SOPs (Standard Operating Procedures)',
      description: 'Develop and implement standard operating procedures to ensure consistency and quality.',
    },
  ];

  const benefits = [
    'Reduced costs through efficiency improvements',
    'Faster delivery and turnaround times',
    'Higher quality outcomes and consistency',
    'Better customer satisfaction',
    'More productive staff and reduced waste',
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Operations & Process Improvement" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-400/10 border border-primary-400/20 backdrop-blur-md mb-6">
              <Settings size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Operations & <span className="gradient-text">Process Improvement</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Operational efficiency is essential for profitability. Inefficient workflows, outdated processes and duplicated efforts waste time and money.
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
                Our Operations & Process Improvement consultancy helps organisations redesign processes, eliminate inefficiencies and operate at optimal performance. Many businesses lose up to 25% of productivity due to inefficient processes.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Whether it's slow approvals, repeated errors or miscommunication, small delays accumulate into big losses. Our consultancy helps businesses uncover these hidden issues and redesign systems for speed, accuracy and performance.
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
                Improved operations lead to:
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
                <h3 className="text-2xl font-bold text-white mb-4">The Hidden Cost of Poor Processes in Modern Businesses</h3>
                <p className="text-slate-300 leading-relaxed">
                  Many businesses lose up to 25% of productivity due to inefficient processes. Whether it's slow approvals, repeated errors or miscommunication, small delays accumulate into big losses. Our consultancy helps businesses uncover these hidden issues and redesign systems for speed, accuracy and performance.
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
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our operations and process improvement services can help your organization achieve operational excellence.
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
