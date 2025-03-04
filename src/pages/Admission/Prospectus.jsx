import React from 'react';
import '../PageStyles.css';

const Prospectus = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Prospectus</h1>
        
        <div className="page-section">
          <div className="prospectus-box">
            <p>
              The school prospectus provides detailed information about the International Indian School Al-Khafji, including its vision, mission, academic programs, admission procedures, fee structure, and other important policies.
            </p>
            <p>
              To download the complete prospectus, please click on the link below:
            </p>
            <div className="download-button">
              <a href="#" className="btn btn-primary">Download Prospectus (PDF)</a>
            </div>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Highlights of the Prospectus</h2>
          <div className="highlights-grid">
            <div className="highlight-item">
              <h3>School Profile</h3>
              <p>Information about the school's history, affiliation, and facilities.</p>
            </div>
            
            <div className="highlight-item">
              <h3>Academic Programs</h3>
              <p>Details about the curriculum, subjects offered, and teaching methodology.</p>
            </div>
            
            <div className="highlight-item">
              <h3>Admission Process</h3>
              <p>Step-by-step guide to the admission procedure, eligibility criteria, and required documents.</p>
            </div>
            
            <div className="highlight-item">
              <h3>Fee Structure</h3>
              <p>Comprehensive information about tuition fees, additional charges, and payment schedules.</p>
            </div>
            
            <div className="highlight-item">
              <h3>School Rules</h3>
              <p>Guidelines regarding attendance, discipline, uniform, and other school policies.</p>
            </div>
            
            <div className="highlight-item">
              <h3>Contact Information</h3>
              <p>Details for reaching out to the school administration for queries and clarifications.</p>
            </div>
          </div>
        </div>
        
        <div className="page-section">
          <p className="note">
            For any questions regarding the prospectus or admission process, please contact the school office at 013 7662515 or email at principaliisk@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prospectus;