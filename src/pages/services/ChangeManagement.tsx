import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Users, Target, Zap, CheckCircle, MessageSquare, GraduationCap, BarChart3 } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function ChangeManagement() {
  const services = [
    {
      icon: Target,
      title: 'Organisational Change Planning',
      description: 'Develop comprehensive change strategies and detailed implementation plans for successful transformation.',
    },
    {
      icon: Users,
      title: 'Leadership Alignment & Communication Strategy',
      description: 'Build stakeholder buy-in and manage resistance through effective communication and engagement strategies.',
    },
    {
      icon: MessageSquare,
      title: 'Stakeholder Engagement',
      description: 'Engage all stakeholders throughout the change process to ensure buy-in and minimize resistance.',
    },
    {
      icon: GraduationCap,
      title: 'Training & Support During Change',
      description: 'Provide comprehensive training and support to help teams adapt to new processes and systems.',
    },
    {
      icon: RefreshCw,
      title: 'Process Redesign',
      description: 'Redesign processes and workflows to support organizational transformation and new ways of working.',
    },
    {
      icon: BarChart3,
      title: 'Post-Change Evaluation',
      description: 'Measure and evaluate change outcomes to ensure objectives are met and identify areas for improvement.',
    },
    {
      icon: Zap,
      title: 'Cultural Transformation Programmes',
      description: 'Transform organizational culture to support new strategies and ways of working.',
    },
  ];

  const benefits = [
    'Prevents resistance and builds buy-in',
    'Aligns teams with shared vision',
    'Reduces operational disruption',
    'Ensures long-term success',
    'Minimizes change-related risks',
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Change Management" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-400/10 border border-primary-400/20 backdrop-blur-md mb-6">
              <RefreshCw size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Change Management & <span className="gradient-text">Business Transformation</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Change is challenging for any organisation. Whether it's restructuring, new leadership or shifting business models, transformation requires careful planning and expert guidance.
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
                Our Change Management service ensures that change is smooth, strategic and successful. Most transformation projects fail because people aren't properly guided. Our structured change model ensures adoption, sustainability and clarity.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We work with you to navigate complex transformations, ensuring that change initiatives deliver intended outcomes while minimizing disruption and building organizational capability for future change.
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
                Successful change:
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
                <h3 className="text-2xl font-bold text-white mb-4">Why Change Fails in Most Organisations — And How We Fix It</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Most transformation projects fail because people aren't properly guided. Our structured change model ensures adoption, sustainability and clarity. We work with you to build change management capabilities that minimize disruption and maximize success.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Through careful planning, stakeholder engagement, and continuous support, we help organizations navigate change successfully and build resilience for future transformations.
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
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our change management and business transformation services can help your organization navigate change successfully.
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
