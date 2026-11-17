import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Users, TrendingUp, Lightbulb, BarChart3, Target, Mail, ArrowRight, Check } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';
import { AnimatedCard } from '@/components/AnimatedCard';
import { JobApplicationForm } from '@/components/JobApplicationForm';

export function Careers() {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('Advertising & Marketing Associate');

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsApplicationOpen(true);
  };

  const benefits = [
    {
      icon: Briefcase,
      title: 'Meaningful Work',
      description: 'Work on high-impact projects that shape the future of industries.',
    },
    {
      icon: TrendingUp,
      title: 'Accelerated Growth',
      description: 'Fast-track your career with mentorship and challenging assignments.',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a diverse team that values unique perspectives and teamwork.',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Team" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-navy-950" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join <span className="gradient-text">Visionary</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              We are looking for exceptional talent to help us solve the world's toughest business challenges. Build your legacy with us.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <a 
              href="#openings" 
              className="inline-flex items-center gap-2 bg-primary-400 text-navy-950 font-bold rounded-full px-8 py-4 hover:bg-white transition-colors"
            >
              View Open Positions
              <ArrowRight size={20} />
            </a>
          </AnimatedText>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding">
        <div className="container-custom">
           <div className="grid md:grid-cols-3 gap-8 mb-16">
             {benefits.map((benefit, index) => {
               const Icon = benefit.icon;
               return (
                 <AnimatedCard key={benefit.title} delay={index * 0.1}>
                   <div className="bg-navy-900 p-8 rounded-2xl border border-slate-800 text-center h-full">
                     <div className="w-14 h-14 rounded-full bg-navy-950 flex items-center justify-center mx-auto mb-6 border border-slate-700">
                       <Icon className="text-primary-400" size={24} />
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                     <p className="text-slate-400">{benefit.description}</p>
                   </div>
                 </AnimatedCard>
               );
             })}
           </div>
        </div>
      </section>

      {/* Job Posting */}
      <section id="openings" className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Current Opportunities</h2>
            <p className="text-slate-400 text-lg">Find your place in our growing team.</p>
          </AnimatedSection>

          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="bg-navy-900/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8 hover:border-primary-500/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8 border-b border-slate-700 pb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Advertising & Marketing Associate</h3>
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                      <span className="flex items-center gap-1"><MapPin size={16} className="text-primary-400" /> 12 Swale Close, Aveley, South Ockendon, England, RM15 4LX</span>
                      <span className="flex items-center gap-1"><Briefcase size={16} className="text-primary-400" /> Full-time</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApply('Advertising & Marketing Associate')}
                    className="inline-flex items-center justify-center gap-2 bg-primary-400 text-navy-950 font-bold rounded-lg px-6 py-3 hover:bg-white transition-colors"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                      <Target className="text-primary-200" size={20} /> Role Overview
                    </h4>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      We are seeking a strategic and hands-on Advertising & Marketing Associate to drive our campaigns. You will take the lead on client-facing projects while supporting Visionary's internal brand growth.
                    </p>
                    
                    <h4 className="font-bold text-lg mb-4 text-white">Key Responsibilities</h4>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Develop marketing strategies & campaigns',
                        'Manage paid advertising (Google/Meta)',
                        'Conduct market research & analysis',
                        'Oversee social media & content',
                        'Analyze performance & report to clients'
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                          <Check size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-white">Requirements</h4>
                    <ul className="space-y-3 mb-6">
                       {[
                        "Master's degree in relevant field",
                        'Experience in digital marketing/ads',
                        'Strong analytical & creative skills',
                        'Excellent communication skills',
                        'Proactive & organized mindset'
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                          <Check size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-primary-400/10 p-6 rounded-xl border border-primary-400/20">
                      <h4 className="font-bold text-primary-400 mb-2">Why This Role?</h4>
                      <p className="text-primary-100 text-sm mb-4">
                        Ideally positioned for someone who wants to blend strategy with execution and see the direct impact of their work on client success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="mt-8">
              <div className="bg-navy-900/50 backdrop-blur-md border border-slate-700 rounded-2xl p-8 hover:border-primary-500/50 transition-colors duration-300">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-8 border-b border-slate-700 pb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Developer Intern (Associate Level)</h3>
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-medium">
                      <span className="flex items-center gap-1"><MapPin size={16} className="text-primary-400" /> Remote / Hybrid</span>
                      <span className="flex items-center gap-1"><Briefcase size={16} className="text-primary-400" /> Internship</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleApply('Application Developer Intern')}
                    className="inline-flex items-center justify-center gap-2 bg-primary-400 text-navy-950 font-bold rounded-lg px-6 py-3 hover:bg-white transition-colors"
                  >
                    Apply Now
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                      <Target className="text-primary-400" size={20} /> Role Overview
                    </h4>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      We are looking for a motivated and detail-oriented Associate Application Developer Intern to join our development team. This role is ideal for students or early-career developers who want hands-on experience working on real projects for both internal company systems and external client applications.
                    </p>
                    
                    <h4 className="font-bold text-lg mb-4 text-white">Key Responsibilities</h4>
                    <ul className="space-y-3 mb-6">
                      {[
                        'Support development of internal applications & tools',
                        'Assist in building new product features',
                        'Participate in developing client applications',
                        'Help gather requirements & implement features',
                        'Write clean, modular, and maintainable code',
                        'Collaborate with developers & project managers'
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                          <Check size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-4 text-white">Required Skills</h4>
                    <ul className="space-y-3 mb-6">
                       {[
                        'Basic programming knowledge (JS, Python, or Java)',
                        'Web development (HTML, CSS, APIs)',
                        'Problem-solving mindset & eagerness to learn',
                        'Good communication & documentation skills',
                        'Ability to work in a collaborative team'
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                          <Check size={16} className="text-primary-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-primary-400/10 p-6 rounded-xl border border-primary-400/20">
                      <h4 className="font-bold text-primary-400 mb-2">Benefits</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        • Hands-on experience with real-world projects<br/>
                        • Mentorship from experienced developers<br/>
                        • Flexible work schedule (student-friendly)<br/>
                        • Opportunity to build a strong portfolio<br/>
                        • Potential full-time opportunity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Job Application Form Modal */}
      <JobApplicationForm
        isOpen={isApplicationOpen}
        onClose={() => setIsApplicationOpen(false)}
        position={selectedPosition}
      />
    </div>
  );
}
