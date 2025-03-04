import React from 'react';
import './PageStyles.css';

const Contact = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-section">
              <h2 className="section-subtitle">School Address</h2>
              <address>
                <p>International Indian School Al-Khafji</p>
                <p>P.O. Box: 207 – Al –khafji 31971</p>
                <p>Kingdom of Saudi Arabia</p>
              </address>
            </div>
            
            <div className="contact-section">
              <h2 className="section-subtitle">Contact Numbers</h2>
              <p>Telephone: 013 7662515, 013 7662511</p>
            </div>
            
            <div className="contact-section">
              <h2 className="section-subtitle">Email</h2>
              <p>School E-mail: <a href="mailto:principaliisk@gmail.com">principaliisk@gmail.com</a></p>
            </div>
            
            <div className="contact-section">
              <h2 className="section-subtitle">Office Hours</h2>
              <p>Sunday to Thursday: 7:30 AM to 1:30 PM</p>
              <p>Principal Office: 10:00 AM to 12:00 PM</p>
              <p>Cash Counter: 7:30 AM to 1:30 PM</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2 className="section-subtitle">Send us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Location Map</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI2JzI0LjAiTiA0OMKwMzAnMzYuMCJF!5e0!3m2!1sen!2ssa!4v1614567890123!5m2!1sen!2ssa" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="School Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;