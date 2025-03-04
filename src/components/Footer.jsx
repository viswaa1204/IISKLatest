import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/IISKLogo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="IISK Logo" />
            <div>
              <h3>International Indian School Al-Khafji</h3>
              <p>"Knowledge Is Power"</p>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/school">About Us</Link></li>
                <li><Link to="/admission">Admission</Link></li>
                <li><Link to="/academics/curriculum">Academics</Link></li>
                <li><Link to="/circulars">Circulars</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>About Us</h4>
              <ul>
                <li><Link to="/about/vision-mission">Vision & Mission</Link></li>
                <li><Link to="/about/affiliation">Affiliation & License</Link></li>
                <li><Link to="/about/patron">Patron</Link></li>
                <li><Link to="/about/higher-board">Higher Board</Link></li>
                <li><Link to="/about/management-committee">Management Committee</Link></li>
                <li><Link to="/about/principal-message">Principal Message</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Academics</h4>
              <ul>
                <li><Link to="/academics/school-calendar">School Calendar</Link></li>
                <li><Link to="/academics/curriculum">Curriculum</Link></li>
                <li><Link to="/academics/school-uniform">School Uniform</Link></li>
                <li><Link to="/academics/worksheets">Worksheets</Link></li>
                <li><Link to="/academics/vacations">Vacations</Link></li>
                <li><Link to="/academics/school-timings">School Timings</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Information</h4>
              <address>
                <p>P.O. Box: 207 – Al –khafji 31971</p>
                <p>Kingdom of Saudi Arabia</p>
                <p>Telephone: 013 7662515, 013 7662511</p>
                <p>Email: <a href="mailto:principaliisk@gmail.com">principaliisk@gmail.com</a></p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} International Indian School Al-Khafji. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;