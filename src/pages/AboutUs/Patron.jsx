import React from 'react';
import '../PageStyles.css';

const Patron = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Patron</h1>
        
        <div className="page-section">
          <div className="patron-box">
            <h2 className="section-subtitle">School Patron</h2>
            <p>
              The Ambassador of India is the Patron of the School.
            </p>
          </div>
        </div>
        
        <div className="page-section">
          <p>
            As the Patron of the International Indian School Al-Khafji, the Ambassador of India provides guidance and support to ensure that the school maintains high educational standards and promotes Indian cultural values while respecting the local customs and regulations of the Kingdom of Saudi Arabia.
          </p>
          <p>
            The patronage of the Ambassador of India underscores the importance of the school in fostering educational and cultural ties between India and Saudi Arabia, and in providing quality education to the Indian community in Al-Khafji.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patron;