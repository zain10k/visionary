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
        'Tailored guidance to navigate challenges and drive sustainable growth.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Operational Improvement',
      description:
        'Streamline operations with practical, data-driven improvements.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: BarChart3,
      title: 'Data-Led Decision Making',
      description:
        'Turn data into clear, actionable insights.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Users,
      title: 'Long-Term Partnership',
      description:
        'Support that continues beyond the first engagement.',
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
        <AnimatedText delay={0.2}>
          <h1 className="text-balance mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.14]">
            <span
              className="animated-gradient-text align-text-bottom"
              style={{
                background:
                   "linear-gradient(270deg,rgb(255, 178, 196) 0%,rgb(255, 141, 175) 40%,rgb(254, 120, 165) 100%)",
                backgroundSize: "600% 600%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "animatedGradientBluePink 6s ease-in-out infinite",
                display: "inline-block",
                lineHeight: "1.14",
                paddingBottom: "0.14em", // Give some room at the bottom
              }}
            >
              Turning Vision into Reality
            </span>
          </h1>
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

          <AnimatedText delay={0.35}>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 text-balance">
              Empowering organisations through strategic consulting and data-driven insights.
            </p>
          </AnimatedText>

          <AnimatedText delay={0.6}>
            <div className="flex flex-wrap sm:flex-row gap-7 justify-center mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary-200 text-navy-950 font-semibold rounded-lg px-6 py-3 transition-colors hover:bg-primary-400"
              >
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary inline-flex items-center gap-2 text-primary-200 border-2 border-primary-200 hover:bg-primary-200/10 transition-colors"
                style={{ borderColor: 'var(--color-primary-200, #ffc9cd)' }}
              >
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
            {/* <p className="text-lg text-white max-w-xl mx-auto text-balance">
              Practical consulting across strategy, operations, people, and data.
            </p> */}
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
              <span className="gradient-text" style={{background: "linear-gradient(90deg, #ffc9cd 0%,  #ff7ba3 120%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"}}>Our Capabilities</span>
            </h2>
            {/* <p className="text-lg text-white max-w-xl mx-auto text-balance">
              Cross-sector expertise, tailored to your context.
            </p> */}
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
              <span className="gradient-text" style={{background: "linear-gradient(90deg, #ffc9cd 0%,  #ff7ba3 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text"}}>Ready to Grow Your Organisation?</span>
            </h2>
            <p className="text-lg mb-8 text-white max-w-xl mx-auto text-balance">
              Let’s explore how we can move you forward.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-200 text-navy-950 font-semibold rounded-lg px-6 py-3 transition-colors hover:bg-primary-400"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
