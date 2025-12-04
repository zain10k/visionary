import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Recycle, Wind, Globe, CheckCircle, BarChart3, Users, Heart } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { AnimatedSection } from '@/components/AnimatedSection';
import { AnimatedText } from '@/components/AnimatedText';

export function SustainabilityStrategy() {
  const services = [
    {
      title: 'Sustainability Strategy & ESG Planning',
      icon: Leaf,
      description: 'Develop full sustainability & ESG strategies, conduct materiality assessments, build sustainability roadmaps, set measurable sustainability KPIs, and develop governance and compliance frameworks.',
      outcome: 'A clear, actionable plan that positions your organisation as a responsible and future-focused leader.',
    },
    {
      title: 'Carbon Footprint & Environmental Impact Assessments',
      icon: Recycle,
      description: 'Carbon footprint calculations, emissions reduction planning, waste and energy efficiency assessments, water usage analysis, and environmental performance reporting.',
      outcome: 'Reduced operating costs, stronger environmental reputation, and regulatory compliance.',
    },
    {
      title: 'ESG Reporting & Regulatory Compliance',
      icon: BarChart3,
      description: 'ESG reporting aligned with GRI, SASB, TCFD, sustainability disclosures and documentation, risk and governance assessments, internal ESG audits, and creation of sustainability performance dashboards.',
      outcome: 'Transparent, credible reporting that builds trust with clients, investors and regulators.',
    },
    {
      title: 'Sustainable Operations & Supply Chain Advisory',
      icon: Wind,
      description: 'Sustainable procurement strategies, supplier sustainability assessments, circular economy frameworks, operational process redesign, and resource efficiency improvement.',
      outcome: 'More efficient processes, ethical sourcing and long-term cost savings.',
    },
    {
      title: 'Sustainability Culture, Training & Engagement',
      icon: Users,
      description: 'Sustainability training workshops, leadership sustainability coaching, staff engagement campaigns, awareness programmes, and culture transformation initiatives.',
      outcome: 'A workforce that understands and actively contributes to organisational sustainability goals.',
    },
    {
      title: 'Corporate Social Responsibility (CSR) Development',
      icon: Heart,
      description: 'CSR strategy development, social value planning, community and charity partnerships, impact measurement and reporting, and ethical business framework creation.',
      outcome: 'Stronger brand image, meaningful social impact and improved stakeholder relationships.',
    },
  ];

  const benefits = [
    'Build responsible and future-proof business models',
    'Strengthen compliance and governance',
    'Enhance market reputation and client trust',
    'Reduce environmental impact',
    'Improve operational efficiency and reduce long-term costs',
    'Engage employees in meaningful cultural transformation',
    'Build sustainability-led innovation opportunities',
  ];

  return (
    <div className="relative">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Sustainability Strategy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/70 to-navy-950" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <AnimatedText>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-400/10 border border-primary-400/20 backdrop-blur-md mb-6">
              <Leaf size={16} className="text-primary-400" />
              <span className="text-sm font-medium text-primary-400 uppercase tracking-wide">Service</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sustainability Strategy & <span className="gradient-text">ESG Planning</span>
            </h1>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Sustainability is no longer a voluntary initiative — it is a strategic requirement for organisations seeking long-term growth, resilience and competitive advantage. We transform sustainability from a burden into a strategic advantage.
            </p>
          </AnimatedText>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Overview</h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Our Sustainability Services help organisations embed responsible practices into every level of their operations, ensuring they remain compliant, efficient and future-ready. We help organisations build sustainability strategies aligned with business goals and international standards.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Forward-thinking organisations are using sustainability to drive innovation, cost reduction, brand loyalty, risk management, and competitive differentiation. Companies that integrate sustainability into their business strategy not only protect their future — they strengthen it.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900/30">
        <div className="container-custom">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Services</h2>
          </AnimatedSection>
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedCard key={service.title} delay={index * 0.1}>
                  <div className="bg-navy-950/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-primary-400/50 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary-400/10 flex items-center justify-center flex-shrink-0 border border-primary-400/20">
                        <Icon className="text-primary-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                        <p className="text-slate-300 leading-relaxed mb-4">{service.description}</p>
                        <div className="bg-primary-400/10 border-l-4 border-primary-400 p-4 rounded">
                          <p className="text-sm font-semibold text-primary-400 mb-1">Client Outcome:</p>
                          <p className="text-slate-300 text-sm">{service.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">What We Can Do for You</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-navy-900/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Why Sustainability Matters</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                    <span>Customers prefer brands with ethical practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                    <span>Investors prioritise ESG performance in decision-making</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                    <span>Regulations are tightening across all industries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                    <span>Climate risks pose financial and operational threats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                    <span>Employees want workplaces committed to long-term responsibility</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container-custom text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to Build a Sustainable Future?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              We deliver practical solutions that create measurable impact. Let's discuss how our sustainability services can help your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-400 text-navy-950 font-bold text-lg rounded-full px-10 py-4 hover:bg-white transition-colors shadow-lg"
              >
                Get Started
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 bg-transparent text-primary-400 font-bold text-lg rounded-full px-10 py-4 border-2 border-primary-400 hover:bg-primary-400/10 transition-all"
              >
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
