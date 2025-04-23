import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
     <header className="bg-[#d9d9d9] py-6 px-6 flex justify-between items-center">
        <div className="font-bold">GOKULAKRISHNAN</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-[#767676]">
            About
          </a>
          <a href="#projects" className="hover:text-[#767676]">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#767676]">
            Contact
          </a>
        </nav>
        
     </header>
      </div>
  );
};

export default Header;