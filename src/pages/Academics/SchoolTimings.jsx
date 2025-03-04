import React from 'react';
import '../PageStyles.css';

const SchoolTimings = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">School Timings</h1>
        
        <div className="page-section">
          <div className="timings-box">
            <h2 className="section-subtitle">School Timing</h2>
            
            <table className="timings-table">
              <tbody>
                <tr>
                  <td>KG</td>
                  <td>07:30 a.m. to 12:00 noon</td>
                </tr>
                <tr>
                  <td>I to VIII</td>
                  <td>07:30 a.m. to 01:30 p.m.</td>
                </tr>
                <tr>
                  <td>Cash Counter</td>
                  <td>07:30 a.m. to 01:30 p.m.</td>
                </tr>
                <tr>
                  <td>Principal Office</td>
                  <td>10:00 a.m. to 12:00 noon</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Bell Schedule</h2>
          
          <div className="schedule-container">
            <div className="schedule-box">
              <h3>Kindergarten (LKG & UKG)</h3>
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Morning Assembly</td>
                    <td>07:30 - 07:45</td>
                  </tr>
                  <tr>
                    <td>1st Period</td>
                    <td>07:45 - 08:25</td>
                  </tr>
                  <tr>
                    <td>2nd Period</td>
                    <td>08:25 - 09:05</td>
                  </tr>
                  <tr>
                    <td>Break</td>
                    <td>09:05 - 09:25</td>
                  </tr>
                  <tr>
                    <td>3rd Period</td>
                    <td>09:25 - 10:05</td>
                  </tr>
                  <tr>
                    <td>4th Period</td>
                    <td>10:05 - 10:45</td>
                  </tr>
                  <tr>
                    <td>5th Period</td>
                    <td>10:45 - 11:25</td>
                  </tr>
                  <tr>
                    <td>6th Period</td>
                    <td>11:25 - 12:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="schedule-box">
              <h3>Primary & Middle (I to VIII)</h3>
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Morning Assembly</td>
                    <td>07:30 - 07:45</td>
                  </tr>
                  <tr>
                    <td>1st Period</td>
                    <td>07:45 - 08:25</td>
                  </tr>
                  <tr>
                    <td>2nd Period</td>
                    <td>08:25 - 09:05</td>
                  </tr>
                  <tr>
                    <td>3rd Period</td>
                    <td>09:05 - 09:45</td>
                  </tr>
                  <tr>
                    <td>Break</td>
                    <td>09:45 - 10:05</td>
                  </tr>
                  <tr>
                    <td>4th Period</td>
                    <td>10:05 - 10:45</td>
                  </tr>
                  <tr>
                    <td>5th Period</td>
                    <td>10:45 - 11:25</td>
                  </tr>
                  <tr>
                    <td>6th Period</td>
                    <td>11:25 - 12:05</td>
                  </tr>
                  <tr>
                    <td>Break</td>
                    <td>12:05 - 12:15</td>
                  </tr>
                  <tr>
                    <td>7th Period</td>
                    <td>12:15 - 12:55</td>
                  </tr>
                  <tr>
                    <td>8th Period</td>
                    <td>12:55 - 01:30</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Important Guidelines</h2>
          <ul className="guidelines-list">
            <li>Students should arrive at school at least 10 minutes before the morning assembly</li>
            <li>Late arrivals must report to the school office before joining their classes</li>
            <li>Students are not allowed to leave the school premises during school hours without permission</li>
            <li>Parents should pick up their children promptly at dismissal time</li>
            <li>The school gates will be closed 15 minutes after dismissal time</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchoolTimings;