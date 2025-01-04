import React from 'react';
import { useAdmin } from '../AdminContext.jsx';
import './Navbar.css';

function Navbar() {
  const { isAdmin, setIsAdmin } = useAdmin();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Logo</div>
      <ul className="navbar-links">
        <li><a href="#" onClick={() => scrollToSection('top')}>Home</a></li>
        <li><a href="#" onClick={() => scrollToSection('locations')}>Our Locations</a></li>
        <li><a href="#" onClick={() => scrollToSection('promos')}>Promos</a></li>
        <li><a href="#" onClick={() => scrollToSection('footer')}>Contact Us</a></li>
      </ul>
      <button onClick={() => setIsAdmin(!isAdmin)} className="admin-toggle">
        {isAdmin ? 'Exit Admin' : 'Admin Mode'}
      </button>
    </nav>
  );
}

export default Navbar;

