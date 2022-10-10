import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <span className='logo'>*S/A*</span>
      </div>
      <ul className='nav-links'>
        <li className='nav-link'>Projects</li>
        <li className='nav-link'>About</li>
        <li className='nav-link'>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
