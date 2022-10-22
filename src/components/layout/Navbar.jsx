import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -105;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <Router>
      <nav className='navbar'>
        <div>
          <HashLink smooth scroll={(el) => scrollWithOffset(el)} to='#' className='logo'>
            *S/A*
          </HashLink>
        </div>

        <ul className='nav-links'>
          <HashLink smooth scroll={(el) => scrollWithOffset(el)} to='#projects' className='nav-link'>
            Projects
          </HashLink>
          <HashLink smooth scroll={(el) => scrollWithOffset(el)} to='#about' className='nav-link'>
            About
          </HashLink>
          <HashLink smooth scroll={(el) => scrollWithOffset(el)} to='#contact' className='nav-link'>
            Contact
          </HashLink>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
