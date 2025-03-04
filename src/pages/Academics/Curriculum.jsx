import React from 'react';
import '../PageStyles.css';

const Curriculum = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Curriculum</h1>
        
        <div className="page-section">
          <p>
            IIS Khafji follows the CBSE syllabus in the following subjects:
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Kindergarten Level</h2>
          <ul className="curriculum-list">
            <li>English</li>
            <li>Number work</li>
            <li>Nursery Rhymes</li>
            <li>Hindi</li>
            <li>General Knowledge</li>
            <li>Creative Activities</li>
            <li>Physical Education</li>
          </ul>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Primary & Middle Level</h2>
          <ul className="curriculum-list">
            <li>English</li>
            <li>Hindi</li>
            <li>Arabic/ Urdu / Malayalam / Telugu / Kannada/Tamil</li>
            <li>Mathematics</li>
            <li>Environmental Science</li>
            <li>Science</li>
            <li>Social Science</li>
            <li>Computer Studies</li>
            <li>Health & Physical education</li>
            <li>Arts & Crafts</li>
            <li>Saudi Arabian Culture & Islamic Studies</li>
            <li>Value Education</li>
            <li>Art of Healthy & Productive Living</li>
          </ul>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Language</h2>
          <ul className="language-list">
            <li>English is the medium of instruction</li>
            <li>Arabic and Hindi are taught as compulsory languages from class I.</li>
            <li>Arabic, Urdu, Malayalam, Telugu Kannada and Tamil have been introduced as "third languages" from Class III.</li>
            <li>New admissions in Class VII or VIII can opt for a third language other than those offered at school.</li>
          </ul>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Co-Curricular Activities</h2>
          <p>
            All activities in the school are organized house wise. The four houses are Ruby, Sapphire, Emerald and Topaz. Sports, Games, Cultural and Literary Activities are organized regularly.
          </p>
          
          <div className="houses-grid">
            <div className="house ruby">
              <h3>Ruby House</h3>
              <p>Color: Red</p>
            </div>
            
            <div className="house sapphire">
              <h3>Sapphire House</h3>
              <p>Color: Blue</p>
            </div>
            
            <div className="house emerald">
              <h3>Emerald House</h3>
              <p>Color: Green</p>
            </div>
            
            <div className="house topaz">
              <h3>Topaz House</h3>
              <p>Color: Yellow</p>
            </div>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Assessment System</h2>
          <p>
            The school follows the Continuous and Comprehensive Evaluation (CCE) system as prescribed by CBSE. This includes:
          </p>
          <ul className="assessment-list">
            <li>Formative Assessments: Regular classroom assessments, projects, and activities</li>
            <li>Summative Assessments: End-of-term examinations</li>
            <li>Co-Scholastic Assessments: Evaluation of life skills, attitudes, values, and co-curricular activities</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;