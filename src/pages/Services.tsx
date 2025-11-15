import { ArrowRight, Cloud, Database, Shield, Brain, Users, Globe, Code, BarChart3 } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Services() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      description:
        'Modernize your infrastructure with scalable cloud solutions. Migrate, optimize, and manage your cloud environment for peak performance.',
      features: ['Cloud Migration', 'DevOps & CI/CD', 'Infrastructure as Code', 'Cloud Optimization'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description:
        'Transform your data into actionable insights. Build data-driven strategies with advanced analytics and business intelligence.',
      features: ['Data Strategy', 'Business Intelligence', 'Data Warehousing', 'Predictive Analytics'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description:
        'Protect your digital assets with comprehensive security solutions. Stay ahead of threats with proactive security measures.',
      features: ['Security Assessment', 'Threat Detection', 'Compliance', 'Identity Management'],
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description:
        'Harness the power of artificial intelligence to automate processes, improve decision-making, and create new opportunities.',
      features: ['AI Strategy', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Digital Experience',
      description:
        'Create exceptional customer experiences across all touchpoints. Design and deliver seamless digital journeys.',
      features: ['UX/UI Design', 'Customer Journey Mapping', 'Personalization', 'Omnichannel Strategy'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description:
        'Lead your organization through digital transformation with strategic planning and execution that drives real results.',
      features: ['Digital Strategy', 'Change Management', 'Process Optimization', 'Innovation Labs'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Software Development',
      description:
        'Build custom software solutions tailored to your business needs. From web applications to enterprise systems.',
      features: ['Custom Development', 'Web Applications', 'Mobile Apps', 'API Development'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: BarChart3,
      title: 'Business Consulting',
      description:
        'Strategic guidance to help you navigate challenges and seize opportunities. Make informed decisions with expert advice.',
      features: ['Strategic Planning', 'Business Process Design', 'Organizational Design', 'Performance Management'],
      color: 'from-violet-500 to-purple-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discover',
      description: 'We understand your business challenges, goals, and opportunities through comprehensive analysis.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'We design tailored solutions that align with your strategic objectives and deliver measurable value.',
    },
    {
      step: '03',
      title: 'Deliver',
      description: 'We implement solutions with precision, ensuring quality, speed, and minimal disruption to your operations.',
    },
    {
      step: '04',
      title: 'Optimize',
      description: 'We continuously monitor, optimize, and evolve solutions to ensure long-term success and ROI.',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <AnimatedText>
              <h1 className="mb-6 text-balance">
                Our <span className="gradient-text">Services</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                Comprehensive solutions designed to help you navigate complexity,
                drive innovation, and achieve sustainable growth.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard key={service.title} delay={index * 0.1}>
                  <div className="card h-full group">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-gray-600">
                          <ArrowRight size={16} className="text-primary-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-4 text-balance">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              A proven methodology to deliver exceptional results and lasting value.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedCard key={item.step} delay={index * 0.15}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-100 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

