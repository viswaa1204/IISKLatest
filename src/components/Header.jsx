import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/IISKLogo.png';
import NewsScroller from './NewsScroller';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <Link to="/" className="logo">
              <img src={logo} alt="IISK Logo" />
              <div className="school-info">
                <h1>International Indian School Al-Khafji</h1>
                <p className="caption">"Knowledge Is Power"</p>
              </div>
            </Link>
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              
              <li className="dropdown">
                <span>About Us</span>
                <div className="dropdown-content">
                  <Link to="/about/school" onClick={() => setMobileMenuOpen(false)}>About School</Link>
                  <Link to="/about/vision-mission" onClick={() => setMobileMenuOpen(false)}>Our Vision / Mission</Link>
                  <Link to="/about/affiliation" onClick={() => setMobileMenuOpen(false)}>Affiliation & License</Link>
                  <Link to="/about/patron" onClick={() => setMobileMenuOpen(false)}>Patron</Link>
                  <Link to="/about/higher-board" onClick={() => setMobileMenuOpen(false)}>Higher Board</Link>
                  <Link to="/about/management-committee" onClick={() => setMobileMenuOpen(false)}>Management Committee</Link>
                  <Link to="/about/principal-message" onClick={() => setMobileMenuOpen(false)}>Principal Message</Link>
                </div>
              </li>
              
              <li className="dropdown">
                <span>Admission</span>
                <div className="dropdown-content">
                  <Link to="/admission" onClick={() => setMobileMenuOpen(false)}>Admission</Link>
                  <Link to="/admission/prospectus" onClick={() => setMobileMenuOpen(false)}>Prospectus</Link>
                  <Link to="/admission/fee-structure" onClick={() => setMobileMenuOpen(false)}>Fee Structure</Link>
                </div>
              </li>
              
              <li className="dropdown">
                <span>Academics</span>
                <div className="dropdown-content">
                  <Link to="/academics/school-calendar" onClick={() => setMobileMenuOpen(false)}>School Calendar</Link>
                  <Link to="/academics/curriculum" onClick={() => setMobileMenuOpen(false)}>Curriculum</Link>
                  <Link to="/academics/school-uniform" onClick={() => setMobileMenuOpen(false)}>School Uniform</Link>
                  <Link to="/academics/worksheets" onClick={() => setMobileMenuOpen(false)}>Worksheets</Link>
                  <Link to="/academics/vacations" onClick={() => setMobileMenuOpen(false)}>Vacations</Link>
                  <Link to="/academics/school-timings" onClick={() => setMobileMenuOpen(false)}>School Timings</Link>
                </div>
              </li>
              
              <li><Link to="/circulars" onClick={() => setMobileMenuOpen(false)}>Circulars</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <NewsScroller />
    </header>
  );
};

export default Header;