import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <Router>
      <nav className='navbar'>
        <div>
          <span className='logo'>*S/A*</span>
        </div>

        <ul className='nav-links'>
          <HashLink smooth to='#projects' className='nav-link'>
            Projects
          </HashLink>
          <HashLink smooth to='#about' className='nav-link'>
            About
          </HashLink>
          <HashLink smooth to='#contact' className='nav-link'>
            Contact
          </HashLink>
        </ul>
      </nav>
    </Router>
  );
};

export default Navbar;
