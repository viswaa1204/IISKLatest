import React from 'react';
import '../PageStyles.css';
import principalImage from '../../assets/principal.jpg';

const PrincipalMessage = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Principal's Message</h1>
        
        <div className="principal-message">
          <div className="principal-image">
            <img src={principalImage} alt="School Principal" />
            <h3>ABC</h3>
            <p>Principal, IISK</p>
          </div>
          
          <div className="message-content">
            <p>
              Dear Parents and Students,
            </p>
            <p>
              It gives me immense pleasure to welcome you to the International Indian School Al-Khafji. As the Principal, I am proud to lead an institution that is committed to providing quality education and holistic development to our students.
            </p>
            <p>
              At IISK, we believe that education is not just about academic excellence but also about nurturing well-rounded individuals who are prepared to face the challenges of the future. Our dedicated faculty works tirelessly to create a learning environment that encourages curiosity, critical thinking, and creativity.
            </p>
            <p>
              We are committed to instilling values of respect, responsibility, and resilience in our students. We believe that these values, combined with academic knowledge, will help our students become responsible global citizens who can make positive contributions to society.
            </p>
            <p>
              I encourage parents to be active partners in their child's education. Your involvement and support are crucial for the success of our educational programs. Together, we can create a nurturing environment where every child can reach their full potential.
            </p>
            <p>
              I look forward to working with you to make IISK a center of educational excellence and a place where students love to learn and grow.
            </p>
            <p>
              Warm regards,
            </p>
            <p>
              <strong>ABC</strong><br />
              Principal<br />
              International Indian School Al-Khafji
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;