import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, TrendingUp, BarChart3 } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Home() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Insight',
      description:
        'Expert guidance tailored for SMEs, startups, and public sector organisations to navigate challenges and achieve sustainable growth.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Operational Improvement',
      description:
        'Streamline your operations and enhance efficiency with practical, data-driven solutions designed for your unique needs.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Data-Led Decision Making',
      description:
        'Transform your data into actionable insights with dashboards and reports that help you make smart, evidence-based decisions.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Long-Term Partnership',
      description:
        'We stay connected—supporting your growth, improvement, and success over the long term, not just one-off advice.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const capabilities = [
    {
      title: 'People / HR',
      description: 'Build stronger teams and develop your human resources capability',
    },
    {
      title: 'Digital Tech',
      description: 'Leverage digital technology to transform your operations',
    },
    {
      title: 'Operations & Strategy',
      description: 'Tailored business strategy and planning for sustainable growth',
    },
    {
      title: 'Supply Chain',
      description: 'Optimize your supply chain to reduce costs and improve efficiency',
    },
    {
      title: 'Marketing',
      description: 'Develop effective marketing strategies to reach your target audience',
    },
    {
      title: 'Project Management',
      description: 'Deliver projects successfully with expert project management support',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-16 md:pt-16 md:pb-24">
        <div className="container-custom text-center">
        <AnimatedText delay={0.3}>
          <p className="text-xl md:text-3xl font-medium mb-8 bold">
            <span
              className="animated-gradient-text"
              style={{
                background:
                  "linear-gradient(270deg, #3b82f6 0%, #8b5cf6 30%, #ec4899 70%, #f59e42 100%)",
                backgroundSize: "600% 600%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "animatedGradientBluePink 6s ease-in-out infinite",
                display: "inline-block",
              }}
            >
              Turning Vision into Reality
            </span>
          </p>
          <style>
            {`
            @keyframes animatedGradientBluePink {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            `}
          </style>
        </AnimatedText>

          {/* <AnimatedText>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 text-sm font-semibold mb-6">
              <Sparkles size={16} />
              UK-Based Consulting for SMEs, Startups & Public Sector
            </div>
          </AnimatedText> */}

          <AnimatedText delay={0.2}>
            <h1 className="text-balance mb-4">
              Empowering{' '}
              <span className="gradient-text">Organisations</span> Through
              <br /> Strategic Consulting & Data-Driven Insights
            </h1>
          </AnimatedText>

          
          <AnimatedText delay={0.4}>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 text-balance">
              Visionary Management Consultants Ltd supports SMEs, startups, and public sector organisations with strategic insight, operational improvement, and data-led decision-making to help you achieve sustainable growth.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
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
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-balance mb-4">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto text-balance">
              Tailored consulting solutions designed specifically for SMEs, startups, and public sector organisations to help you overcome challenges and achieve your goals.
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
                    <p className="text-white flex-grow">{feature.description}</p>
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
            <p className="text-lg text-white max-w-2xl mx-auto text-balance">
              Practical consulting expertise across diverse sectors, with solutions customised to your industry, size, and specific challenges.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <AnimatedCard key={capability.title} delay={index * 0.08}>
                <div className="card group cursor-pointer">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-white">{capability.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-primary-400">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6 text-balance font-bold">
              <span className="text-pink-400">Ready to Grow Your Organisation?</span>
            </h2>
            <p className="text-xl mb-8 text-white max-w-2xl mx-auto text-balance">
              Let's discuss how our tailored consulting services can help you overcome challenges, improve performance, and achieve sustainable growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-lg
                         bg-gradient-to-r from-primary-400 via-primary-500 to-pink-400
                         text-white shadow-xl hover:scale-105 focus:ring-4 focus:ring-primary-300 transition-all duration-200 btn
                         animate-gradient"
              style={{
                backgroundSize: "200% 200%",
                backgroundPosition: "0% 50%",
                animation: "gradientMove 3s ease-in-out infinite"
              }}
            >
              Start a Conversation
              <ArrowRight size={22} className="ml-1 transition-transform duration-200 group-hover:translate-x-1 text-white" />
            </Link>
            <style>
              {`
                @keyframes gradientMove {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
              `}
            </style>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
