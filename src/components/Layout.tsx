import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Info, Briefcase, Mail } from 'lucide-react';
import { ParticleBackground } from './ParticleBackground';
import { Logo } from './Logo';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/services', label: 'Services', icon: Briefcase },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-navy-950">
      <ParticleBackground />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy-950/90 backdrop-blur-md">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-3">
                <Logo variant="dark" className="h-18 lg:h-20 w-auto group-hover:scale-105 transition-transform" />
                <span className="hidden sm:block text-lg lg:text-xl font-semibold tracking-wide text-primary-200 group-hover:text-primary-400 transition-colors">
                  Visionary Management Consultants
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={scrollToTop}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive(item.path)
                          ? 'bg-primary-500/20 text-[#ffc9cd] font-semibold'
                          : 'text-[#ffc9cd] hover:bg-primary-500/10 hover:text-white'
                      }`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-primary-400 hover:text-primary-300 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy-900 border-t border-navy-800"
            >
              <ul className="container-custom py-4 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          scrollToTop();
                        }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                          isActive(item.path)
                            ? 'bg-primary-500/20 text-[#ffc9cd] font-semibold'
                            : 'text-[#ffc9cd] hover:bg-primary-500/10 hover:text-white'
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16 lg:pt-20 relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-transparent border-t border-navy-800 mt-auto">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Logo variant="dark" className="h-12 lg:h-14 w-auto" />
                <span className="text-base lg:text-lg font-semibold text-primary-200">
                  Visionary Management Consultants
                </span>
              </div>
              <p className="text-white text-sm">
                UK-based consulting firm supporting SMEs, startups, and public sector organisations with strategic insight, operational improvement, and data-led decision-making.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary-200">Company</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>
                  <Link
                    to="/about"
                    onClick={scrollToTop}
                    className="hover:text-primary-200 transition-colors underline underline-offset-4 decoration-white hover:decoration-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={scrollToTop}
                    className="hover:text-primary-200 transition-colors underline underline-offset-4 decoration-white hover:decoration-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    onClick={scrollToTop}
                    className="hover:text-primary-200 transition-colors underline underline-offset-4 decoration-white hover:decoration-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary-200">Services</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>People / HR</li>
                <li>Digital Tech</li>
                <li>Operations & Strategy</li>
                <li>Supply Chain</li>
                <li>Marketing</li>
                <li>Project Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary-200">Connect</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-navy-700 text-center text-sm text-primary-200">
            <p> 2025 Visionary Management Consultants Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
