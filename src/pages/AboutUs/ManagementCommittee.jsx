import React from 'react';
import '../PageStyles.css';

const ManagementCommittee = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Management Committee</h1>
        
        <div className="page-section">
          <p>
            IISK is governed by a Managing Committee of parents selected by the Embassy of India Riyadh. The Managing Committee lays down broad policies and guidelines of the school for its smooth functioning.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Committee Structure</h2>
          <p>
            The Management Committee consists of dedicated parents who volunteer their time and expertise to ensure the school operates efficiently and effectively. The committee members are selected based on their qualifications, experience, and commitment to educational excellence.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Responsibilities</h2>
          <div className="responsibilities-grid">
            <div className="responsibility-item">
              <h3>Policy Development</h3>
              <p>Formulating and implementing policies that guide the school's operations and academic programs.</p>
            </div>
            
            <div className="responsibility-item">
              <h3>Financial Oversight</h3>
              <p>Monitoring the school's financial health and ensuring resources are allocated efficiently.</p>
            </div>
            
            <div className="responsibility-item">
              <h3>Quality Assurance</h3>
              <p>Ensuring that the school maintains high educational standards and meets regulatory requirements.</p>
            </div>
            
            <div className="responsibility-item">
              <h3>Community Engagement</h3>
              <p>Fostering relationships with parents, the Indian community, and local authorities.</p>
            </div>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Committee Meetings</h2>
          <p>
            The Management Committee meets regularly to discuss school matters, review progress, and make decisions. Parents are encouraged to communicate their concerns and suggestions to the committee through appropriate channels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementCommittee;