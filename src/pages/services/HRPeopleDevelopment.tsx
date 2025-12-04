import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, Target, Heart, CheckCircle, Briefcase, Building2, MessageSquare, BarChart3 } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function HRPeopleDevelopment() {
  const services = [
    {
      icon: Briefcase,
      title: 'HR Policy Development',
      description: 'Develop comprehensive HR policies that align with business objectives and legal requirements.',
    },
    {
      icon: BarChart3,
      title: 'Performance Management Systems',
      description: 'Design and implement performance management systems that drive engagement and results.',
    },
    {
      icon: Users,
      title: 'Recruitment & Talent Strategy',
      description: 'Develop talent acquisition strategies to attract, recruit, and retain top talent.',
    },
    {
      icon: GraduationCap,
      title: 'Leadership Development Programmes',
      description: 'Build leadership capabilities at all levels to drive organizational success.',
    },
    {
      icon: Heart,
      title: 'Employee Engagement Improvement',
      description: 'Develop strategies and initiatives to improve employee engagement and satisfaction.',
    },
    {
      icon: Building2,
      title: 'Job Roles & Organisational Structure Design',
      description: 'Design organizational structures and job roles that support business objectives and efficiency.',
    },
    {
      icon: Target,
      title: 'Culture Analysis & Culture-Building Initiatives',
      description: 'Analyze organizational culture and develop initiatives to build desired cultural attributes.',
    },
    {
      icon: MessageSquare,
      title: 'Conflict Resolution & Employee Relations',
      description: 'Develop frameworks and processes for managing conflicts and employee relations effectively.',
    },
  ];

  const benefits = [
    'Higher staff retention and reduced turnover',
    'Fewer conflicts and improved workplace harmony',
    'Better teamwork and collaboration',
    'Strong leadership pipelines for future growth',
    'Increased productivity and performance',
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="HR & People Development" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-400/10 border border-primary-400/20 backdrop-blur-md mb-6">
              <Users size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              HR & <span className="gradient-text">People Development</span> Consulting
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              People are the foundation of any successful organisation. HR challenges — poor communication, high turnover, lack of leadership, unclear policies — can damage performance.
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
                Our HR & People Development service builds strong organisational cultures where staff feel valued, supported and equipped to excel. Employees who feel supported and motivated give significantly better performance.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our HR consulting helps organisations create policies and leadership practices that nurture talent, build trust and encourage excellence. We work with you to build people capabilities that drive engagement, performance, and organizational success.
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
                Good HR practices lead to:
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
                <h3 className="text-2xl font-bold text-white mb-4">Why Employee Engagement is the Secret to Long-Term Business Success</h3>
                <p className="text-slate-300 leading-relaxed">
                  Employees who feel supported and motivated give significantly better performance. Our HR consulting helps organisations create policies and leadership practices that nurture talent, build trust and encourage excellence. Through effective people development, organizations can build high-performing teams that drive sustainable success.
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
              Ready to Develop Your People?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how our HR and people development consulting services can help your organization build high-performing teams.
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
