import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Globe, TrendingUp, ShieldCheck } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Home() {
  const industries = [
    {
      title: 'Consumer & Retail',
      description: 'Reimagining customer experiences in a digital-first world.',
      link: '/industries',
      image: 'https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Financial Services',
      description: 'Navigating regulation and innovation simultaneously.',
      link: '/industries',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Technology',
      description: 'Scaling infrastructure for the next era of connectivity.',
      link: '/industries',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Healthcare',
      description: 'Optimizing care delivery through operational excellence.',
      link: '/industries',
      image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Energy & Industrials',
      description: 'Transitioning to sustainable, resilient operations.',
      link: '/industries',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Public Sector',
      description: 'Driving efficiency in mission-critical services.',
      link: '/industries',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section - Left Aligned */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Visionary Strategy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/50 to-transparent" />
        </div>

        <div className="container-custom relative z-10 pt-20 pb-12">
          <div className="max-w-3xl">
            <AnimatedText delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-400/10 border border-primary-400/20 mb-6">
                <Globe size={16} className="text-primary-400" />
                <span className="text-sm font-medium text-primary-400 tracking-wide uppercase">Global Strategic Partners</span>
              </div>
            </AnimatedText>

            <AnimatedText delay={0.2}>
              <h1 className="text-balance mb-6 text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                Strategy for the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Digital Age.</span>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.35}>
              <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-light border-l-2 border-primary-400 pl-6">
                We help forward-thinking organizations navigate complexity and build sustainable competitive advantage through data-driven insight.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 font-bold rounded-full px-8 py-4 hover:bg-primary-400 transition-colors shadow-lg"
                >
                  Start Your Journey
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/capabilities"
                  className="inline-flex items-center justify-center gap-2 text-white font-semibold text-lg px-8 py-4 hover:text-primary-400 transition-colors border-b-2 border-transparent hover:border-primary-400"
                >
                  Our Services
                  <ArrowRight size={20} />
                </Link>
              </div>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Industries Grid - Minimalist Style */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Sectors We Serve</h2>
              <div className="h-1 w-20 bg-primary-400"></div>
            </div>
            <Link 
              to="/industries" 
              className="text-primary-400 hover:text-primary-300 font-semibold flex items-center gap-2"
            >
              View All Sectors <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedCard key={industry.title} delay={index * 0.1}>
                <Link to={industry.link} className="group block h-full">
                  <div className="relative h-64 overflow-hidden rounded-t-xl">
                    <img 
                      src={industry.image} 
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/50 group-hover:bg-navy-950/30 transition-colors" />
                  </div>
                  <div className="bg-navy-900 border border-t-0 border-slate-800 p-6 rounded-b-xl group-hover:border-primary-400/50 transition-colors">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{industry.title}</h3>
                    <p className="text-slate-400 text-sm mb-4">{industry.description}</p>
                    <span className="text-primary-400 text-sm font-semibold flex items-center gap-2">
                      Learn more <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Visionary Difference */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/10 to-transparent" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              We don't just advise. <br />
              <span className="text-primary-400">We deliver results.</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  At Visionary, we believe that true transformation requires more than just a slide deck. We partner with our clients to implement rigorous, data-backed strategies that stand the test of real-world application.
                </p>
                <Link
                  to="/about"
                  className="text-white border-b border-primary-400 pb-1 hover:text-primary-400 transition-colors inline-flex items-center gap-2"
                >
                  Read Our Manifesto <ArrowRight size={16} />
                </Link>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-slate-700 pl-6 py-2">
                  <h4 className="text-white font-bold text-lg">Precision</h4>
                  <p className="text-slate-400 text-sm">Data-led insights that cut through noise.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-6 py-2">
                  <h4 className="text-white font-bold text-lg">Agility</h4>
                  <p className="text-slate-400 text-sm">Adapting to market shifts in real-time.</p>
                </div>
                <div className="border-l-2 border-slate-700 pl-6 py-2">
                  <h4 className="text-white font-bold text-lg">Impact</h4>
                  <p className="text-slate-400 text-sm">Measurable outcomes, not just outputs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container-custom text-center relative z-10">
          <AnimatedText>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to define the <span className="text-primary-400">future?</span>
            </h2>
          </AnimatedText>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-primary-400 text-navy-950 font-bold text-lg rounded-full px-10 py-4 hover:bg-white transition-colors shadow-lg"
            >
              Work With Us
            </Link>
            <Link
              to="/careers"
              className="bg-transparent text-primary-400 font-bold text-lg rounded-full px-10 py-4 border-2 border-primary-400 hover:bg-primary-400/10 hover:border-primary-400 hover:text-primary-400 transition-all duration-300"
            >
              Join The Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
