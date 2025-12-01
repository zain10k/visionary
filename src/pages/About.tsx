import { Heart, Zap, Shield, Users, Globe, Settings, Briefcase, BarChart3, DollarSign, Repeat, CheckCircle } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centred',
      description: 'We place your needs at the core of every strategy. No cookie-cutter solutions, just impact.',
    },
    {
      icon: Shield,
      title: 'Integrity First',
      description: 'We operate with absolute transparency and accountability in every engagement.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We bring creative, data-led thinking to solve modern business challenges.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build relationships based on trust, collaboration, and shared success.',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section - Centered Full Width */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Our Team" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-sm font-medium text-white uppercase tracking-wide">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Defining the Future of <span className="gradient-text">Consulting.</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
              Visionary was founded on a simple belief: that true growth comes from the intersection of strategic clarity and operational excellence. We are a team of problem solvers, data scientists, and strategists dedicated to your success.
            </p>
          </AnimatedText>
        </div>
      </section>

      {/* Mission Statement - Full Width Image Background */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Office Architecture" 
            className="w-full h-full object-cover opacity-0 fixed-background"
          />
          {/* Fully transparent to let stars show through */}
          <div className="absolute inset-0" style={{ background: "transparent" }} />
        </div>
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-light">
              "To empower organisations with strategic clarity and operational excellence, building <span className="text-primary-400 font-medium">sustainable, profitable businesses</span> for the future."
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {['Strategy', 'Innovation', 'Growth', 'Sustainability'].map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full border border-slate-700 text-slate-300 text-sm uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Values</h2>
              <div className="h-1 w-20 bg-primary-400"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedCard key={value.title} delay={index * 0.1}>
                  <div className="bg-navy-950/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-primary-400/50 transition-colors h-full group">
                    <div className="w-12 h-12 rounded-lg bg-navy-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-700">
                      <Icon className="text-primary-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Split Feature List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection className="order-2 lg:order-1">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Choose Visionary?</h2>
               <div className="space-y-6">
                 {[
                   { title: 'Tailored Solutions', desc: 'No templates. We build strategies around your specific context.' },
                   { title: 'Cross-Sector Expertise', desc: 'Insights from Retail, Finance, Tech, and the Public Sector.' },
                   { title: 'Data-Driven Decisions', desc: 'We replace guesswork with rigorous analysis.' },
                   { title: 'Measurable ROI', desc: 'Focused on delivering tangible value and profit improvement.' },
                   { title: 'Long-Term Partnership', desc: 'We are partners in your journey, not just one-off advisors.' }
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4">
                     <CheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                     <div>
                       <h4 className="text-lg font-bold text-white">{item.title}</h4>
                       <p className="text-slate-400">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </AnimatedSection>
             
             <AnimatedSection delay={0.2} className="order-1 lg:order-2 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-square">
                   <img 
                    src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Partnership" 
                    className="w-full h-full object-cover" 
                   />
                   <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply" />
                </div>
             </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
