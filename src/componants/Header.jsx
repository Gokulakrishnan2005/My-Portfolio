import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#d9d9d9] py-6 px-6 flex justify-between items-center sticky top-0 z-50 shadow-sm"
    >
      <div className="font-bold">GOKULAKRISHNAN</div>
      <nav className="hidden md:flex space-x-8">
        <HashLink to="/#about" className="hover:text-[#767676]">
          About
        </HashLink>
        <HashLink to="/#projects" className="hover:text-[#767676]">
          Projects
        </HashLink>
        <HashLink to="/#contact" className="hover:text-[#767676]">
          Contact
        </HashLink>
        <Link to="/blog" className="hover:text-[#767676]">
          Blog
        </Link>
      </nav>
    </motion.header>
  );
};

export default Header;