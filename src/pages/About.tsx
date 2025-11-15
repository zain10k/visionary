import { Code, Package, Zap, Shield, Target, Award, Users, Globe } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results that exceed expectations.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of collaboration, working closely with clients to achieve shared goals.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace innovation and technology to solve complex challenges and create new opportunities.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with the highest standards of integrity, building trust through transparency and honesty.',
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We\'re committed to making a positive impact on our clients, communities, and the world.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We maintain the highest quality standards, ensuring every solution is robust, scalable, and reliable.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '10+', label: 'Years Experience' },
  ];

  const timeline = [
    {
      year: '2014',
      title: 'Company Founded',
      description: 'Visionary was founded with a mission to transform businesses through innovation.',
    },
    {
      year: '2017',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across multiple continents.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched comprehensive digital transformation services.',
    },
    {
      year: '2024',
      title: 'AI Innovation',
      description: 'Leading the way in AI and machine learning solutions.',
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
                About <span className="gradient-text">Visionary</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-xl text-gray-600 mb-8 text-balance">
                We're a team of passionate professionals dedicated to helping
                businesses navigate the digital landscape and achieve sustainable growth.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
                  <div className="text-primary-100">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="mb-6 text-balance">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 text-balance">
                Visionary was founded with a vision to transform how businesses
                leverage technology to achieve their goals. Over the years, we've
                grown into a trusted partner for organizations worldwide.
              </p>
            </AnimatedSection>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <AnimatedCard key={item.year} delay={index * 0.15}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-primary-100 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-600">{item.year}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-4 text-balance">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              The principles that guide everything we do and shape how we work
              with our clients and each other.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedCard key={value.title} delay={index * 0.1}>
                  <div className="card text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-primary-600" size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="mb-6 text-balance">
              Why Choose <span className="gradient-text">Visionary</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              We combine deep expertise with a passion for innovation to deliver
              solutions that make a real difference.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.1}>
              <div className="card text-center">
                <Code className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team brings years of experience across industries and
                  technologies.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="card text-center">
                <Package className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Proven Methods</h3>
                <p className="text-gray-600">
                  We use proven methodologies to ensure consistent, high-quality
                  results.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <div className="card text-center">
                <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                <p className="text-gray-600">
                  We stay ahead of trends and leverage the latest technologies
                  to solve challenges.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
}
