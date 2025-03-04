import React from 'react';
import '../PageStyles.css';

const SchoolUniform = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">School Uniform</h1>
        
        <div className="page-section">
          <p className="uniform-intro">
            The school insists upon proper attire of the children. Students who are not in proper uniform will be sent back home. It is compulsory for every student to wear the school identity card every day. There will be no exception to this rule.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Girls Uniform</h2>
          
          <h3>Summer:</h3>
          <ul className="uniform-list">
            <li>Navy Blue Kameez long enough to cover the knees. Side Slit of the Kameez 10 inches from knees.</li>
            <li>White Salwar and White Dupatta</li>
            <li>Black Shoes, White Socks</li>
            <li>Navy Blue Ribbon and House Badge</li>
          </ul>
          
          <h3>Winter:</h3>
          <ul className="uniform-list">
            <li>Navy Blue Sweater / Navy blue blazer</li>
          </ul>
          
          <h3>Sports / PT uniform:</h3>
          <ul className="uniform-list">
            <li>White Salwar, White Kameez, White Dupatta, & White shoes</li>
            <li>Girls will have their PT uniform for PT Days</li>
          </ul>
          
          <div className="additional-notes">
            <p>
              Girls with long hair should tie up their hair in two plaits. Open hair below the neck is not allowed. Clips / hair bands should be navy blue or black. Finger nails should be clipped short. Nail polish, henna, make – up and jewellery are not allowed.
            </p>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Boys Uniform</h2>
          
          <h3>Summer:</h3>
          <ul className="uniform-list">
            <li>White Shirt</li>
            <li>Navy Blue formal Trousers / Pants</li>
            <li>White Socks, Black formal Shoes</li>
            <li>Black Belt with small buckle if required and House Badge</li>
          </ul>
          
          <h3>Winter:</h3>
          <ul className="uniform-list">
            <li>White Shirt</li>
            <li>Navy Blue formal Trousers/Pants</li>
            <li>Navy Blue Tie</li>
            <li>Black Shoes, White Socks</li>
            <li>Navy Blue Sweaters or Navy Blue Blazers</li>
            <li>Black Belt with small buckle and House Badge</li>
          </ul>
          
          <h3>Sports / PT uniform:</h3>
          <ul className="uniform-list">
            <li>White Trousers / Pants, White Shirts, White Sports Shoes</li>
            <li>Senior Secondary, Secondary and Boys will have their PT uniform on PT days</li>
          </ul>
          
          <div className="additional-notes">
            <p>
              A Navy Blue Blazer is compulsory for all students. Low waist and skinny pants/trousers are not allowed.
            </p>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Uniform Guidelines</h2>
          <ul className="guidelines-list">
            <li>Students must wear clean and well-maintained uniforms at all times</li>
            <li>The school identity card must be worn every day without exception</li>
            <li>Students not in proper uniform will not be allowed to attend classes</li>
            <li>Parents are requested to ensure that their children follow the uniform guidelines strictly</li>
            <li>Any modification to the prescribed uniform is not permitted</li>
            <li>For special occasions or functions, students will be informed about any changes to the uniform requirements</li>
          </ul>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Uniform Suppliers</h2>
          <p>
            The school uniform can be purchased from the authorized uniform suppliers. Details of the suppliers will be provided at the time of admission or can be obtained from the school office.
          </p>
          <p className="note">
            Note: The school reserves the right to modify the uniform requirements as and when necessary. Any changes will be communicated to parents well in advance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolUniform;