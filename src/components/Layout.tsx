import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import { Logo } from './Logo';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    {
      label: 'Capabilities',
      path: '/capabilities',
      dropdown: [
        { label: 'Sustainability & ESG', path: '/services/sustainability-strategy' },
        { label: 'Marketing Consultancy', path: '/services/marketing-consultancy' },
        { label: 'Change Management', path: '/services/change-management' },
        { label: 'Digital Transformation', path: '/services/digital-transformation' },
        { label: 'Market Research & Growth', path: '/services/market-research' },
        { label: 'HR & People Development', path: '/services/hr-people-development' },
        { label: 'Operations & Process', path: '/services/operations-process' },
        { label: 'Strategy & Planning', path: '/services/strategy-business-planning' },
      ]
    },
    {
      label: 'Industries',
      path: '/industries',
      dropdown: [
        { label: 'Consumer Products', path: '/industries' },
        { label: 'Financial Services', path: '/industries' },
        { label: 'Industrials', path: '/industries' },
        { label: 'Healthcare', path: '/industries' },
        { label: 'Technology', path: '/industries' },
        { label: 'Energy', path: '/industries' },
      ]
    },
    { label: 'Insights', path: '/insights' },
    { label: 'Careers', path: '/careers' },
    { label: 'About', path: '/about' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 font-sans text-slate-50 selection:bg-primary-500/30">
      <ParticleBackground />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group z-50 relative">
              <Logo variant="dark" className="h-20 w-auto group-hover:scale-105 transition-transform duration-300" />
              <span className="hidden lg:block text-xl font-bold tracking-tight text-white group-hover:text-primary-400 transition-colors">
                Visionary Management Consultants
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-primary-400 ${
                      location.pathname === item.path ? 'text-primary-400' : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                      <div className="bg-navy-900 border border-white/10 rounded-xl p-2 shadow-xl backdrop-blur-xl">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            onClick={scrollToTop}
                            className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 bg-primary-400 text-navy-950 text-sm font-bold px-5 py-2.5 rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,201,205,0.3)]"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-primary-400 transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-navy-950 pt-24 px-6 pb-10 overflow-y-auto lg:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        scrollToTop();
                      }}
                      className="text-2xl font-bold text-white block mb-4"
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.path}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              scrollToTop();
                            }}
                            className="text-lg text-slate-400 hover:text-primary-400"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollToTop();
                  }}
                  className="mt-4 w-full bg-primary-400 text-navy-950 text-center font-bold py-4 rounded-xl"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="border-t border-white/5 mt-auto pt-16 pb-8">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 max-w-md">
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 mb-6">
                <Logo variant="dark" className="h-14 w-auto" />
                <span className="text-xl font-bold text-primary-400">Visionary Management Consultants</span>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-8">
                Global consultancy delivering strategic clarity and operational excellence for the accelerated future. We help leaders build sustainable, profitable businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-primary-400 mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Contact', 'Locations'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-primary-400 mb-6">Insights</h4>
              <ul className="space-y-4">
                {['Articles', 'Case Studies', 'Events', 'Resources'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; 2025 Visionary Management Consultants Ltd. All rights reserved.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
