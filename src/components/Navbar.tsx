import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 py-4 px-6 md:px-12 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-secondary font-bold text-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Orlando's Portfolio
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1, color: '#64ffda' }}
              whileTap={{ scale: 0.95 }}
              className="text-quaternary hover:text-secondary transition-colors"
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-quaternary focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 h-screen w-3/4 bg-primary shadow-lg md:hidden"
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <div className="absolute top-6 right-6">
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-quaternary focus:outline-none"
            >
              <FiX size={24} />
            </motion.button>
          </div>
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ x: 10, color: '#64ffda' }}
                className="text-quaternary hover:text-secondary transition-colors text-xl"
              >
                <a 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;