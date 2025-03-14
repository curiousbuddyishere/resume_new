import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const links = [
    { path: '/', label: 'aishere.xyz' },
    { path: '/cv', label: 'cv' },
    { path: '/projects', label: 'projects' },
    // { path: '/books', label: 'books' },
    { path: '/posts', label: 'posts' },
    // { path: '/lists', label: 'lists' },
  ];

  // Handle browser back button
  React.useEffect(() => {
    const handlePopState = () => {
      if (location.pathname !== '/') {
        navigate('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigate, location]);

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="mb-16 font-mono text-sm">
      {/* Mobile Menu Button */}
      <div className="sm:hidden mb-4">
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#4444aa] hover:text-[#6666cc]"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
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
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="sm:hidden overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-2">
              {links.map(({ path, label }, index) => (
                <motion.div
                  key={path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -2, 2, 0],
                    transition: {
                      rotate: {
                        repeat: Infinity,
                        duration: 0.5,
                        ease: "linear"
                      }
                    }
                  }}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                >
                  <Link
                    to={path}
                    className={`${
                      currentPath === path
                        ? 'bg-white text-[#000033] px-2 transition-colors duration-300'
                        : 'text-[#4444aa] hover:text-[#6666cc] transition-colors duration-300'
                    }`}
                  >
                    [{label}]
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Menu */}
      <div className="hidden sm:flex justify-start space-x-4">
        {links.map(({ path, label }, index) => (
          <motion.div
            key={path}
            whileHover={{ 
              y: -2, 
              scale: 1.1,
              rotate: [0, -2, 2, 0],
              transition: {
                rotate: {
                  repeat: Infinity,
                  duration: 0.5,
                  ease: "linear"
                }
              }
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              type: "spring",
              stiffness: 400,
              damping: 10
            }}
          >
            <Link
              to={path}
              className={`${
                currentPath === path
                  ? 'bg-white text-[#000033] px-2 transition-colors duration-300'
                  : 'text-[#4444aa] hover:text-[#6666cc] transition-colors duration-300'
              }`}
            >
              [{label}]
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;