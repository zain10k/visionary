import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, FileText, Download, Tag } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Insights() {
  const insights = [
    {
      type: 'Report',
      icon: FileText,
      title: 'The Future of Supply Chain Resilience',
      date: 'October 2024',
      description: 'How organizations can build more robust supply networks in an era of global uncertainty.',
      image: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      type: 'Case Study',
      icon: BookOpen,
      title: 'Digital Transformation in Healthcare',
      date: 'September 2024',
      description: 'A look at how a leading provider improved patient outcomes through data integration.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      type: 'Guide',
      icon: Download,
      title: '2025 Strategic Planning Framework',
      date: 'August 2024',
      description: 'A comprehensive framework for setting and achieving ambitious corporate goals.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      type: 'Event',
      icon: Calendar,
      title: 'Global Innovation Summit',
      date: 'November 15, 2024',
      description: 'Join us in London for a discussion on the next wave of technological disruption.',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Data Insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/40" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <AnimatedText>
              <p className="text-primary-400 font-bold uppercase tracking-widest text-sm mb-4">Thought Leadership</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Insights & <br /> <span className="gradient-text">Perspectives</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-xl text-slate-300 leading-relaxed">
                Our latest thinking on strategy, technology, and the changing business landscape.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Featured Insight (Hero Style) */}
      <section className="pb-12 px-4 md:px-8 lg:px-16">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden bg-navy-900 border border-slate-800 aspect-[21/9] group cursor-pointer">
             <img 
              src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Featured Insight"
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
             
             <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-3xl">
               <span className="inline-block px-4 py-1 rounded-full bg-primary-400 text-navy-950 text-sm font-bold mb-4">Featured Report</span>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The State of AI in Enterprise 2025</h2>
               <p className="text-lg text-slate-200 mb-8 line-clamp-2">
                 How artificial intelligence is reshaping operational models and creating new competitive moats for legacy incumbents.
               </p>
               <div className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-primary-400 pb-1">
                 Read Full Report <ArrowRight size={20} />
               </div>
             </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Insights Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-10">
            {insights.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedCard key={item.title} delay={index * 0.1}>
                  <div className="group flex flex-col h-full">
                    <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                         <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-sm text-white text-xs font-bold border border-white/10">
                           <Icon size={12} /> {item.type}
                         </span>
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                        <span>{item.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span>5 min read</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                        {item.description}
                      </p>
                      <div>
                        <Link to="/insights" className="inline-flex items-center gap-2 text-white font-semibold hover:text-primary-400 transition-colors">
                          Read Article <ArrowRight size={18} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-24 bg-navy-900 border-t border-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                Let's discuss how our strategic insights and consulting services can help your organization achieve its goals. Schedule a consultation to explore how we can support your growth journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-400 text-navy-950 font-bold px-8 py-4 rounded-full hover:bg-white transition-colors shadow-lg"
                >
                  Schedule a Consultation
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/capabilities"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-primary-400 font-bold px-8 py-4 rounded-full border-2 border-primary-400 hover:bg-primary-400/10 transition-all"
                >
                  Explore Our Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
