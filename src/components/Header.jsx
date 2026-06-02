import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        when: 'afterChildren',
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.08,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#f5f5f5]/85 backdrop-blur-md py-4 px-6 flex flex-col md:flex-row md:justify-between md:items-center sticky top-0 z-50 border-b border-gray-200/50 shadow-sm"
    >
      <div className="flex justify-between items-center w-full md:w-auto">
        <Link to="/" onClick={closeMenu} className="font-extrabold tracking-wider text-xl text-gray-900 hover:opacity-80 transition-opacity">
          GOKULAKRISHNAN
        </Link>
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-800 hover:text-gray-600 focus:outline-none p-1"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
        <HashLink to="/#about" className="hover:text-gray-950 transition-colors">
          About
        </HashLink>
        <HashLink to="/#projects" className="hover:text-gray-950 transition-colors">
          Projects
        </HashLink>
        <HashLink to="/#contact" className="hover:text-gray-950 transition-colors">
          Contact
        </HashLink>
        <Link to="/blog" className="hover:text-gray-950 transition-colors">
          Blog
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden w-full overflow-hidden flex flex-col mt-4 space-y-4 pb-4 border-t border-gray-200/60 pt-4 text-gray-600 font-medium"
          >
            <motion.div variants={linkVariants}>
              <HashLink to="/#about" onClick={closeMenu} className="block hover:text-gray-950 transition-colors py-1">
                About
              </HashLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <HashLink to="/#projects" onClick={closeMenu} className="block hover:text-gray-950 transition-colors py-1">
                Projects
              </HashLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <HashLink to="/#contact" onClick={closeMenu} className="block hover:text-gray-950 transition-colors py-1">
                Contact
              </HashLink>
            </motion.div>
            <motion.div variants={linkVariants}>
              <Link to="/blog" onClick={closeMenu} className="block hover:text-gray-950 transition-colors py-1">
                Blog
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;