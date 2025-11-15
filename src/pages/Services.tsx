import { ArrowRight, Users, Code, Briefcase, Package, Megaphone, ClipboardList } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function Services() {
  const services = [
    {
      icon: Users,
      title: 'People / HR',
      description:
        'Build stronger teams and develop your human resources capability. We help SMEs, startups, and public sector organisations create effective HR strategies, policies, and practices that support growth and performance.',
      features: ['HR Strategy Development', 'Recruitment & Talent Management', 'Performance Management', 'Employee Engagement'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Digital Tech',
      description:
        'Leverage digital technology to transform your operations and enhance customer experience. We help organisations adopt and integrate digital solutions that drive efficiency and growth.',
      features: ['Digital Strategy', 'Technology Implementation', 'Digital Transformation', 'System Integration'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Briefcase,
      title: 'Operations - Business Strategy & Planning',
      description:
        'Streamline your operations with tailored business strategy and planning. We help SMEs, startups, and public sector organisations develop practical strategies, optimize processes, and improve operational capability.',
      features: ['Business Strategy Development', 'Operational Planning', 'Process Optimization', 'Performance Improvement'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Package,
      title: 'Supply Chain',
      description:
        'Optimize your supply chain to reduce costs, improve efficiency, and build resilience. We provide practical consulting to help organisations manage suppliers, logistics, and inventory effectively.',
      features: ['Supply Chain Strategy', 'Supplier Management', 'Logistics Optimization', 'Inventory Management'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Megaphone,
      title: 'Marketing',
      description:
        'Develop effective marketing strategies to reach your target audience and grow your business. We help SMEs, startups, and public sector organisations create marketing plans that deliver measurable results.',
      features: ['Marketing Strategy', 'Brand Development', 'Digital Marketing', 'Market Research'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description:
        'Deliver projects successfully with expert project management support. We help organisations plan, execute, and manage projects effectively, ensuring they are completed on time and within budget.',
      features: ['Project Planning', 'Project Execution', 'Risk Management', 'Stakeholder Management'],
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Understand',
      description: 'We work closely with you to understand your unique challenges, goals, and vision through detailed consultation and analysis.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'We design tailored, practical solutions that align with your strategic objectives—no generic templates, everything customised to your needs.',
    },
    {
      step: '03',
      title: 'Implement',
      description: 'We support you through implementation, ensuring solutions are practical, achievable, and deliver measurable results for your organisation.',
    },
    {
      step: '04',
      title: 'Partner',
      description: 'We stay connected as long-term partners, supporting your growth, improvement, and success over time—not just one-off advice.',
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <AnimatedText>
              <h1 className="mb-6 text-balance">
                Our <span className="gradient-text">Services</span>
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.2}>
              <p className="text-xl text-white mb-8 text-balance">
                Tailored consulting services for SMEs, startups, and public sector organisations. We combine strategic thinking, data-led insights, and personalised support to solve real business challenges and create long-term value.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-white mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-white">
                          <ArrowRight size={16} className="text-primary-400 flex-shrink-0" />
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
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <h2 className="mb-4 text-balance">
              Our <span className="gradient-text">Approach</span>
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto text-balance">
              Our approach is rooted in practical experience, analytical expertise, and a commitment to delivering measurable results that align with your unique goals.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <AnimatedCard key={item.step} delay={index * 0.15}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary-400 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

