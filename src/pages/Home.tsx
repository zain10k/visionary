import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Target, Users, TrendingUp } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Digital Transformation',
      description:
        'Accelerate your business with cutting-edge digital solutions that drive growth and innovation.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Strategic Consulting',
      description:
        'Expert guidance to help you navigate complex challenges and achieve your business objectives.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Innovation & Technology',
      description:
        'Leverage the latest technologies to transform your operations and enhance customer experience.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      description:
        'Data-driven insights and solutions to scale your business and maximize profitability.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const capabilities = [
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions for modern businesses',
    },
    {
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security',
    },
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence',
    },
    {
      title: 'Digital Experience',
      description: 'Create exceptional customer experiences',
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center section-padding">
        <div className="container-custom text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              Welcome to the future of business
            </div>
          </AnimatedText>

          <AnimatedText delay={0.2}>
            <h1 className="text-balance mb-6">
              Transforming{' '}
              <span className="gradient-text">Businesses</span> Through
              <br /> Innovation & Technology
            </h1>
          </AnimatedText>

          <AnimatedText delay={0.4}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 text-balance">
              We help organizations embrace change, unlock new opportunities, and
              create lasting value for all stakeholders.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary inline-flex items-center gap-2">
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary inline-flex items-center gap-2">
                Get in Touch
                <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedText>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-balance mb-4">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Comprehensive solutions to help you navigate the digital landscape
              and achieve sustainable growth.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedCard key={feature.title} delay={index * 0.1}>
                  <div className="card h-full flex flex-col group">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 flex-grow">{feature.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-balance mb-4">
              Our <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Expertise across a wide range of technologies and industries to
              meet your unique business needs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <AnimatedCard key={capability.title} delay={index * 0.08}>
                <div className="card group cursor-pointer">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6 text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto text-balance">
              Let's discuss how we can help you achieve your goals and unlock new
              opportunities.
            </p>
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-50 inline-flex items-center gap-2">
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
