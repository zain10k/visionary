import { Heart, Zap, Shield, Users, Globe, Settings, Briefcase, BarChart3, DollarSign, Repeat } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centred Excellence',
      description: 'We prioritise the needs, goals, and success of every client, delivering tailored solutions that make a measurable difference.',
    },
    {
      icon: Shield,
      title: 'Integrity & Professionalism',
      description: 'We uphold the highest standards of ethics, honesty, and accountability in every engagement.',
    },
    {
      icon: Zap,
      title: 'Innovation & Forward Thinking',
      description: 'We embrace creativity, technology, and data-driven methodologies to solve complex challenges with modern, effective solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration & Partnership',
      description: 'We work closely with clients and stakeholders, fostering strong relationships built on trust, communication, and shared success.',
    },
    {
      icon: Globe,
      title: 'Impact & Sustainability',
      description: 'We aim to create value that lasts—strengthening organisations, communities, and the wider economy.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Settings,
      title: 'Tailored, Practical Solutions',
      description: 'We don\'t use generic templates. Every recommendation is customised to your goals and your industry.',
    },
    {
      icon: Briefcase,
      title: 'Expertise Across SMEs, Startups & Public Sector',
      description: 'We understand the unique challenges faced by diverse organisations and adapt our approach accordingly.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decision Making',
      description: 'Our insights, dashboards, and reports help you make smart, evidence-based business decisions.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Consultancy Designed for Small Organisations',
      description: 'We offer flexible packages and transparent pricing to ensure accessibility without compromising quality.',
    },
    {
      icon: Repeat,
      title: 'Long-Term Partnership, Not One-Off Advice',
      description: 'We stay connected—supporting your growth, improvement, and success over the long term.',
    },
  ];

  // const stats = [
  //   { value: '500+', label: 'Projects Delivered' },
  //   { value: '200+', label: 'Happy Clients' },
  //   { value: '10+', label: 'Years Experience' },
  // ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <AnimatedText>
              <h1 className="mb-6 text-balance">
                About <span className="gradient-text">Visionary</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-xl text-white mb-4 text-balance">
                Visionary Management Consultants Ltd is a UK-based consulting firm dedicated to supporting SMEs, startups, and public sector organisations with strategic insight, operational improvement, and data-led decision-making. We help organisations overcome challenges, streamline operations, enhance financial health, and build long-term resilience.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <p className="text-lg text-white mb-4 text-balance">
                Our approach is rooted in practical experience, analytical expertise, and a commitment to delivering measurable results. Whether supporting early-stage businesses, growing SMEs, or public bodies seeking efficiency, we provide tailored consulting solutions that align with each client's unique goals and vision.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <p className="text-lg text-white mb-8 text-balance">
                <span className="text-white">
                  At Visionary Management Consultants, we believe in building strong partnerships, driving continuous improvement, and empowering organisations to reach their full potential.
                </span>
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="section-padding bg-primary-500/20 text-primary-400">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-400">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* Vision & Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-6">
            <h2 className="mb-4 text-balance">
              Our <span className="gradient-text">Vision & Mission</span>
            </h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto space-y-9">
            <AnimatedSection>
              <div className="card p-8">
                <h2 className="mb-2 text-2xl font-bold">
                  <span className="gradient-text">Vision</span>
                </h2>
                <p className="text-lg text-white italic leading-relaxed">
                  "To empower businesses with strategic guidance, data-driven insights, and innovative consulting solutions that enable them to operate at their best, achieve sustainable growth, and deliver meaningful impact within their communities."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-8">
                <h2 className="mb-2 text-2xl font-bold">
                  <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-lg text-white italic leading-relaxed">
                  "To deliver high-quality, results-driven consulting services that help SMEs, public sector organisations, and startups improve performance, strengthen operational capability, and achieve sustainable growth. We combine data-led insights, strategic thinking, and personalised support to solve real business challenges and create long-term value."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-4 text-balance">
              Core <span className="gradient-text">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedCard key={value.title} delay={index * 0.1}>
                  <div className="card text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-white">{value.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="mb-6 text-balance">
              Why Choose <span className="gradient-text">Visionary Management Consultants Ltd</span>?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedCard key={item.title} delay={index * 0.1}>
                  <div className="card text-center h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary-400" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white">{item.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
