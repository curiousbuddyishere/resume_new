import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/posts', label: 'Blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-netflix bg-netflix-black/90' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-netflix-red text-2xl font-bold tracking-wider">
              AISHERE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`netflix-nav-link text-sm font-medium ${
                  currentPath === path ? 'text-netflix-white' : 'text-netflix-muted'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-netflix-white hover:text-netflix-muted transition-colors">
              <Search size={20} />
            </button>
            <button className="text-netflix-white hover:text-netflix-muted transition-colors">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center">
              <User size={16} className="text-netflix-white" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-netflix-white hover:text-netflix-muted transition-colors"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-netflix-black/95 backdrop-blur-md"
            >
              <div className="px-4 py-6 space-y-4">
                {links.map(({ path, label }, index) => (
                  <motion.div
                    key={path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={path}
                      className={`block text-lg font-medium transition-colors ${
                        currentPath === path
                          ? 'text-netflix-white'
                          : 'text-netflix-muted hover:text-netflix-white'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 border-t border-netflix-gray">
                  <div className="flex items-center space-x-4">
                    <button className="text-netflix-muted hover:text-netflix-white transition-colors">
                      <Search size={20} />
                    </button>
                    <button className="text-netflix-muted hover:text-netflix-white transition-colors">
                      <Bell size={20} />
                    </button>
                    <div className="w-8 h-8 bg-netflix-red rounded flex items-center justify-center">
                      <User size={16} className="text-netflix-white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;