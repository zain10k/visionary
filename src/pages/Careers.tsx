import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Users, TrendingUp, Lightbulb, BarChart3, Target, Mail, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';
import { AnimatedCard } from '@/components/AnimatedCard';

export function Careers() {
  const keyResponsibilities = [
    'Develop and implement marketing strategies, campaigns, and content for clients and the company',
    'Plan, set up, and manage client advertising campaigns (Google Ads, Meta Ads, and other paid channels)',
    'Conduct market research, competitor analysis, and audience profiling for clients',
    'Manage client social media accounts, email campaigns, and promotional content',
    'Support clients with website updates, SEO improvements, and overall digital presence',
    'Monitor and analyze campaign performance, providing actionable insights and recommendations',
    'Present campaign reports and strategy updates to clients',
    'Communicate directly with clients to understand goals, provide guidance, and ensure satisfaction',
    "Support internal marketing initiatives for Visionary's own brand and campaigns",
  ];

  const requirements = [
    "Master's degree in a relevant field",
    'Experience in advertising, digital marketing, or marketing support',
    'Strong understanding of paid ads, social media, SEO, and content marketing',
    'Excellent written and verbal communication skills',
    'Organized, proactive, and able to manage multiple projects',
    'Analytical mindset with the ability to interpret data and provide insights',
    'Confident client-facing experience',
    'Creative thinker with initiative',
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: 'Variety & Impact',
      description: 'Work on both internal and client campaigns for variety and impact',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Be part of a growing consultancy with opportunities for career growth',
    },
    {
      icon: Target,
      title: 'Strategic Role',
      description: 'Play a key role in strategy development and creative direction',
    },
    {
      icon: Users,
      title: 'Flexible Working',
      description: 'Flexible working options',
    },
    {
      icon: Lightbulb,
      title: 'Professional Development',
      description: 'Training and professional development',
    },
    {
      icon: BarChart3,
      title: 'Collaborative Team',
      description: 'Collaborative, supportive team environment',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText>
              <h1 className="mb-6 text-balance">
                Join the Visionary<span className="gradient-text"> Team</span> 
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-lg text-white mb-8 text-balance">
                We're looking for talented individuals who are passionate about making a difference. Join us in helping organisations achieve sustainable growth through strategic insight and innovative solutions.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Job Posting Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="card p-8 lg:p-10">
                {/* Job Title & Location */}
                <div className="mb-8 pb-8 border-b border-navy-700">
                  <h2 className="text-3xl font-bold mb-4">
                    <span className="gradient-text">Advertising and Marketing Associate</span>
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <MapPin className="text-primary-400" size={20} />
                      <span>London, UK</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="text-primary-400" size={20} />
                      <span>Full-time, On-site</span>
                    </div>
                  </div>
                </div>

                {/* About the Role */}
                <AnimatedSection delay={0.1}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary-200">About the Role</h3>
                    <p className="text-white leading-relaxed mb-4">
                      This is a full-time on-site role for an Advertising and Marketing Associate based in London. The Advertising and Marketing Associate will be responsible for developing and executing marketing campaigns, conducting market research, and collaborating with the sales team to enhance brand awareness and generate revenue.
                    </p>
                    <p className="text-white leading-relaxed">
                      As an Advertising & Marketing Associate, you will support Visionary's internal marketing while taking the lead on client-facing marketing projects. This role is hands-on and strategic, perfect for someone who enjoys developing campaigns, building client relationships, and delivering measurable results.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Key Responsibilities */}
                <AnimatedSection delay={0.2}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary-200">Key Responsibilities</h3>
                    <ul className="space-y-3">
                      {keyResponsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ArrowRight className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                          <span className="text-white">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>

                {/* What We're Looking For */}
                <AnimatedSection delay={0.3}>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary-200">What We're Looking For</h3>
                    <ul className="space-y-3">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ArrowRight className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                          <span className="text-white">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Join Visionary Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="mb-4 text-balance">
              Why Join <span className="gradient-text">Visionary</span>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedCard key={benefit.title} delay={index * 0.1}>
                  <div className="card text-center h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-white">{benefit.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <div className="card p-8 lg:p-10 text-center bg-gradient-to-br from-primary-500/20 to-primary-500/10 border-primary-500/30">
                <h3 className="text-2xl font-bold mb-4 text-primary-200">Ready to Apply?</h3>
                <p className="text-white mb-6 leading-relaxed">
                  If you're excited about this opportunity and believe you'd be a great fit for our team, we'd love to hear from you. Send us your application through our contact form or email us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary-200 text-navy-950 font-semibold rounded-lg px-6 py-3 hover:bg-primary-300 transition-colors"
                  >
                    Apply Now
                    <Mail size={20} />
                  </Link>
                  {/* <a
                    href="mailto:info@visionaryconsultancy.uk?subject=Application: Advertising and Marketing Associate"
                    className="inline-flex items-center justify-center gap-2 border-2 border-primary-400 text-primary-200 font-semibold rounded-lg px-6 py-3 hover:bg-primary-500/10 transition-colors"
                  >
                    Email Us
                    <ArrowRight size={20} />
                  </a> */}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

