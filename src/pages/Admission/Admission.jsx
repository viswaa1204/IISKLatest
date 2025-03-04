import React from 'react';
import '../PageStyles.css';

const Admission = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Admission</h1>
        
        <div className="page-section">
          <p>
            Admissions are restricted to Indians nationals between the ages of three and half years to thirteen years; the lowest class for admission is LKG. Admissions are granted on the basis of performance in the admission Test and the availability of seats. The entrance test paper will be based on the syllabus of the preceding class to which admission is sought.
          </p>
          <p>
            All admissions depend upon the availability of seats in the respective classes.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Subject for Admission Test</h2>
          <table className="admission-table">
            <tbody>
              <tr>
                <td>LKG</td>
                <td>Informal interview</td>
              </tr>
              <tr>
                <td>UKG</td>
                <td>English, Maths and EVS</td>
              </tr>
              <tr>
                <td>Class I & II</td>
                <td>English, Maths and EVS</td>
              </tr>
              <tr>
                <td>Class IV to VIII</td>
                <td>English, Maths, Science, Hindi</td>
              </tr>
            </tbody>
          </table>
          <p className="note">
            (Entrance examination portions will be based on the previous class syllabus)
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Age Limit at the time of admission</h2>
          <table className="admission-table">
            <tbody>
              <tr>
                <td>LKG</td>
                <td>3 years and 6 months as on 31st March of the same year</td>
              </tr>
              <tr>
                <td>UKG</td>
                <td>4 years and 6 months as on 31st March of the same year</td>
              </tr>
              <tr>
                <td>Grade I</td>
                <td>5 years and 6 months as on 31st March of the same year</td>
              </tr>
              <tr>
                <td>Grade II</td>
                <td>6 years and 6 months as on 31st March of the same year</td>
              </tr>
            </tbody>
          </table>
          <p>
            No relaxation of age will be granted at the entry level for the minimum age limit.
          </p>
          <p>
            In the upper age limit, Special relaxation up to a maximum 90 days may be considered by the Principal in case of children who have checkered growth, disability or under growth due to long illness or any other medical reasons. Medical report supporting such cases is to be submitted at the time of admission.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Registration</h2>
          <p className="highlight">
            "SUBMISSSION OF APPLICATION WILL NOT GUARANTEE ADMISSION"
          </p>
          
          <h3>The documents required at the time of interview are as under:</h3>
          <ul className="document-list">
            <li>Application form duly filled.</li>
            <li>Original Passport of the child for verification</li>
            <li>Passport copies (first page only) of father, mother & child with each application.</li>
            <li>Photocopies of Iqama (Father, Mother & Child) in single page with each application</li>
            <li>Photocopy of the Vaccination Card of the child</li>
            <li>MOI print-out (Absheer copy) showing iqama expiry date- Father & Child</li>
            <li>Two recent pass size photographs</li>
            <li>Original Transfer Certificate for admission from UKG and above</li>
          </ul>
          
          <p>
            All admissions will be subject to approval from the MOE and Local Government Authorities.
          </p>
          <p>
            At the time of registration non refundable registration fee of Sr. 100/- is to be paid along with the admission test fee Sr. 100/-.
          </p>
          <p>
            Incase the candidate does not report even for a single day after the payment of the fees, and claim for the refund, only the development fund will be refunded and not the April fee paid.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Admission Test</h2>
          <ul className="admission-test-list">
            <li>Admission to LKG will be strictly on the basis of age criteria and an informal interview</li>
            <li>Admission to Classes from UKG onwards will be granted only through an Admission Test and submission of original transfer certificate(TC) duly attested by the District Education Officer in case of non CBSE school. If a student qualified in admission test and does not submit original TC at the time of admission he/ she will not be allowed to take admission.</li>
            <li>Transfer from other International School under the Patronage of Embassy of India will be given preference on subject to availability of seats.</li>
          </ul>
          
          <p className="important-note">
            Children on Visit Visa are not considered for admission in the school.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admission;