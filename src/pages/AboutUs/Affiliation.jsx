import React from 'react';
import '../PageStyles.css';

const Affiliation = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Affiliation & License</h1>
        
        <div className="page-section">
          <div className="affiliation-box">
            <h2 className="section-subtitle">Central Board of Secondary Education Syllabus</h2>
            <p>
              Under the Supervision of Saudi Ministry of Education- License No. 75 / J. P.O. Box: 207 – Al –khafji 31971-Kingdom of Saudi Arabia.
            </p>
            <p>
              It is licensed by the Ministry of Education, Kingdom of Saudi Arabia. License No. 75/J. The school will be affiliated to the Central Board of Secondary Education (CBSE), Shiksha Kendra 2, Community Center, Preet Vihar, New Delhi, India.
            </p>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Recognition</h2>
          <p>
            The International Indian School Al-Khafji is recognized by the Ministry of Education, Kingdom of Saudi Arabia, and follows the curriculum prescribed by the Central Board of Secondary Education (CBSE), India.
          </p>
          <p>
            This dual recognition ensures that our students receive an education that meets international standards while complying with local educational requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;