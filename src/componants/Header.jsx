import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { HashLink } from 'react-router-hash-link'; // eslint-disable-line no-unused-vars

const Header = () => {
  return (
    <div>
     <header className="bg-[#d9d9d9] py-6 px-6 flex justify-between items-center sticky top-0 z-50 shadow-sm">
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
        
     </header>
      </div>
  );
};

export default Header;