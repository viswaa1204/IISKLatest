import React from 'react';
import '../PageStyles.css';

const VisionMission = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Our Vision & Mission</h1>
        
        <div className="page-section">
          <h2 className="section-subtitle">Vision</h2>
          <div className="vision-box">
            <p>A vision to build and win the world of success.</p>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Mission</h2>
          <div className="mission-box">
            <p>
              Our mission is to provide a superior higher studies preparation and liberal art education opportunities to young people of cultural and intellectual diversity. IISK is a school which provides equal opportunities within a dignified and supportive setting, promotes the academic, artistic, moral character, as well as leadership qualities, along with physical and emotional development of all students, so that they can pursue excellence in their lives and career, and play effective roles in their families and communities.
            </p>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Our Core Values</h2>
          <ul className="values-list">
            <li>Excellence in education</li>
            <li>Respect for diversity</li>
            <li>Character development</li>
            <li>Community engagement</li>
            <li>Continuous improvement</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;