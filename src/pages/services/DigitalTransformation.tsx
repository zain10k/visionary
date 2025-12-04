import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Cloud, Code, Smartphone, CheckCircle, Shield, Settings, Zap } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function DigitalTransformation() {
  const services = [
    {
      icon: Globe,
      title: 'Digital Transformation Roadmap',
      description: 'Develop comprehensive digital transformation roadmaps aligned with business objectives and market opportunities.',
    },
    {
      icon: Settings,
      title: 'Technology System Selection',
      description: 'Expert guidance on technology selection, architecture, and implementation strategies that fit your needs.',
    },
    {
      icon: Zap,
      title: 'Process Automation Solutions',
      description: 'Identify and implement automation opportunities to reduce manual work and improve efficiency.',
    },
    {
      icon: Cloud,
      title: 'CRM and ERP Implementation Support',
      description: 'End-to-end support for CRM and ERP implementations, from planning to deployment and optimization.',
    },
    {
      icon: Settings,
      title: 'IT Infrastructure Review',
      description: 'Comprehensive review of IT infrastructure to identify improvements and modernization opportunities.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Data Management Planning',
      description: 'Develop cybersecurity strategies and data management frameworks to protect your organization.',
    },
    {
      icon: Code,
      title: 'Integrating Digital Tools into Operations',
      description: 'Seamlessly integrate digital tools into existing operations to enhance productivity and efficiency.',
    },
  ];

  const benefits = [
    'Operate faster and more efficiently',
    'Serve customers better with enhanced experiences',
    'Reduce manual work through automation',
    'Improve accuracy and data quality',
    'Increase overall operational efficiency',
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Digital Transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-400/10 border border-primary-400/20 backdrop-blur-md mb-6">
              <Globe size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Digital Transformation & <span className="gradient-text">Technology Consulting</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Digital transformation is no longer optional — it's essential. From automation to data systems, the right technology accelerates business performance, enhances customer experience and supports growth.
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
                Our Technology Consulting service guides organisations in selecting and implementing solutions that fit their needs. Companies that embrace technology evolve faster and stay competitive. We help clients choose the right digital tools that align with their goals.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                From digital transformation roadmaps to cybersecurity planning, we work with you to build technology capabilities that drive efficiency, enhance customer experience, and support sustainable growth.
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
                Digital transformation helps businesses:
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
                <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation: How Technology Can Rebuild Entire Organisations</h3>
                <p className="text-slate-300 leading-relaxed">
                  Companies that embrace technology evolve faster and stay competitive. We help clients choose the right digital tools that align with their goals. Through strategic technology implementation, organizations can transform their operations, enhance customer experiences, and drive sustainable growth.
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
              Ready to Transform Your Digital Operations?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our digital transformation and technology consulting services can help your organization thrive in the digital age.
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
