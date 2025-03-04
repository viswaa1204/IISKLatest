import React from 'react';
import '../PageStyles.css';

const HigherBoard = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Higher Board</h1>
        
        <div className="page-section">
          <p className="board-intro">
            The Higher Board oversees the strategic direction and governance of the International Indian School Al-Khafji. The current members of the Higher Board are:
          </p>
          
          <div className="board-members">
            <div className="board-member-card">
              <h3>Mr. Awaiz Patni</h3>
              <p className="member-title">Member HB</p>
              <p className="member-ref">vide MOFA letter No. 001-42-190135 dated 02.05.2021</p>
            </div>
            
            <div className="board-member-card">
              <h3>Mr. Irfan Said</h3>
              <p className="member-title">Member HB</p>
              <p className="member-ref">vide MOFA letter No. 01-42-077100 dated 03.12.2020</p>
            </div>
            
            <div className="board-member-card">
              <h3>Mr. Anvar Sadath</h3>
              <p className="member-title">Member HB</p>
              <p className="member-ref">vide MOFA letter No. 01-43-073006 dated 17.02.2022</p>
            </div>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Responsibilities</h2>
          <p>
            The Higher Board is responsible for:
          </p>
          <ul className="responsibilities-list">
            <li>Setting the strategic direction of the school</li>
            <li>Ensuring compliance with educational standards and regulations</li>
            <li>Overseeing financial management and resource allocation</li>
            <li>Appointing and evaluating the school leadership</li>
            <li>Representing the school in official matters</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HigherBoard;