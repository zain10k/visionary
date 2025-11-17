import { Heart, Zap, Shield, Users, Globe, Settings, Briefcase, BarChart3, DollarSign, Repeat } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Client-Centred Excellence',
      description: 'Client needs first, always. Impact over jargon.',
    },
    {
      icon: Shield,
      title: 'Integrity & Professionalism',
      description: 'Ethical, honest, and accountable in every engagement.',
    },
    {
      icon: Zap,
      title: 'Innovation & Forward Thinking',
      description: 'Creative, data-led solutions for modern challenges.',
    },
    {
      icon: Users,
      title: 'Collaboration & Partnership',
      description: 'Partnerships built on trust and clear communication.',
    },
    {
      icon: Globe,
      title: 'Impact & Sustainability',
      description: 'Value that lasts—for organisations and communities.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Settings,
      title: 'Tailored, Practical Solutions',
      description: 'No templates. Everything is built for your goals.',
    },
    {
      icon: Briefcase,
      title: 'Expertise Across SMEs, Startups & Public Sector',
      description: 'Experience across SMEs, startups, and the public sector.',
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Decision Making',
      description: 'Clear insights that inform smart decisions.',
    },
    {
      icon: DollarSign,
      title: 'Affordable Consultancy Designed for Small Organisations',
      description: 'Flexible, transparent pricing for smaller organisations.',
    },
    {
      icon: Repeat,
      title: 'Long-Term Partnership, Not One-Off Advice',
      description: 'A partner for the long term, not a one-off.',
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
          <div className="max-w-2xl mx-auto text-center">
            <AnimatedText>
              <h1 className="mb-6 text-balance">
                About <span className="gradient-text">Visionary</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-lg text-white mb-4 text-balance">
                We’re a UK-based consultancy helping organisations grow through strategy, operations, and data.  Practical, analytical, and outcome-focused—tailored to your goals. Partnership over transactions. Progress over promises.

              </p>
            </AnimatedText>
            {/* <AnimatedText delay={0.3}>
              <p className="text-lg text-white mb-4 text-center">
                Practical, analytical, and outcome-focused—tailored to your goals. Partnership over transactions. Progress over promises.
              </p>
            </AnimatedText> */}
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
               <span className="gradient-text" style={{background: "linear-gradient(90deg, #ffc9cd 0%,  #ff7ba3 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"}}>Our Vision & Mission</span>
            </h2>
          </AnimatedSection>
          
          <div className="max-w-4xl mx-auto space-y-9">
            <AnimatedSection>
              <div className="card p-8">
                <h2 className="mb-2 text-2xl font-bold">
                  <span className="gradient-text" style={{background: "linear-gradient(90deg, #ffc9cd 0%,  #ff7ba3 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"}}>Vision</span>
                </h2>
                <p className="text-base text-white italic leading-relaxed">
                  "Empower organisations with strategy and insight to achieve sustainable growth."
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-8">
                <h2 className="mb-2 text-2xl font-bold">
                  <span className="gradient-text" style={{background: "linear-gradient(90deg, #ffc9cd 0%,  #ff7ba3 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"}}>Mission</span>
                </h2>
                <p className="text-base text-white italic leading-relaxed">
                  "Deliver results-driven consulting that improves performance and builds capability."
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
              Why Choose <span className="gradient-text">Visionary</span><span className="text-primary-400">?</span>
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
