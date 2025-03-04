import React from 'react';
import '../PageStyles.css';

const Worksheets = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Worksheets</h1>
        
        <div className="page-section">
          <p>
            The school provides worksheets for various subjects to enhance learning and practice. These worksheets are designed to reinforce classroom learning and help students develop a better understanding of the concepts taught.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Worksheet Categories</h2>
          
          <div className="worksheet-categories">
            <div className="category-card">
              <h3>Kindergarten</h3>
              <ul>
                <li>English Alphabet Recognition</li>
                <li>Number Recognition and Counting</li>
                <li>Basic Shapes and Colors</li>
                <li>Hindi Alphabet Recognition</li>
              </ul>
              <a href="#" className="btn btn-sm">View Worksheets</a>
            </div>
            
            <div className="category-card">
              <h3>Primary (Classes I-V)</h3>
              <ul>
                <li>English Grammar and Vocabulary</li>
                <li>Mathematics Problem Solving</li>
                <li>Environmental Science</li>
                <li>Hindi Language Skills</li>
                <li>Arabic Language Basics</li>
              </ul>
              <a href="#" className="btn btn-sm">View Worksheets</a>
            </div>
            
            <div className="category-card">
              <h3>Middle (Classes VI-VIII)</h3>
              <ul>
                <li>English Literature and Composition</li>
                <li>Advanced Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Language Skills</li>
              </ul>
              <a href="#" className="btn btn-sm">View Worksheets</a>
            </div>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">How to Use Worksheets</h2>
          <ol className="usage-list">
            <li>Download the worksheets for the relevant class and subject</li>
            <li>Print the worksheets for practice</li>
            <li>Complete the exercises as instructed</li>
            <li>Check your answers with the answer key provided (where available)</li>
            <li>Discuss any difficulties with your teacher</li>
          </ol>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Benefits of Worksheets</h2>
          <ul className="benefits-list">
            <li>Reinforces classroom learning</li>
            <li>Provides additional practice opportunities</li>
            <li>Helps identify areas that need improvement</li>
            <li>Develops independent learning skills</li>
            <li>Prepares students for assessments and examinations</li>
          </ul>
        </div>
        
        <div className="page-section">
          <p className="note">
            Note: New worksheets are added regularly. Please check back for updates. For any specific worksheet requests, please contact your subject teacher.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Worksheets;