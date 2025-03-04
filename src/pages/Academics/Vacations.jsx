import React from 'react';
import '../PageStyles.css';

const Vacations = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Vacations</h1>
        
        <div className="page-section">
          <h2 className="section-subtitle">Vacation Schedule 2025</h2>
          
          <table className="vacation-table">
            <thead>
              <tr>
                <th>Vacation</th>
                <th>From</th>
                <th>To</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Summer Vacation</td>
                <td>July 25, 2025</td>
                <td>August 25, 2025</td>
                <td>32 days</td>
              </tr>
              <tr>
                <td>Eid Al-Adha</td>
                <td>June 15, 2025</td>
                <td>June 20, 2025</td>
                <td>6 days</td>
              </tr>
              <tr>
                <td>Saudi National Day</td>
                <td>September 23, 2025</td>
                <td>September 23, 2025</td>
                <td>1 day</td>
              </tr>
              <tr>
                <td>Mid-Term Break</td>
                <td>October 15, 2025</td>
                <td>October 19, 2025</td>
                <td>5 days</td>
              </tr>
              <tr>
                <td>Winter Vacation</td>
                <td>December 20, 2025</td>
                <td>January 5, 2026</td>
                <td>17 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Public Holidays 2025</h2>
          
          <table className="holiday-table">
            <thead>
              <tr>
                <th>Holiday</th>
                <th>Date</th>
                <th>Day</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Year's Day</td>
                <td>January 1, 2025</td>
                <td>Wednesday</td>
              </tr>
              <tr>
                <td>Republic Day (India)</td>
                <td>January 26, 2025</td>
                <td>Sunday</td>
              </tr>
              <tr>
                <td>Ramadan Start (Tentative)</td>
                <td>March 1, 2025</td>
                <td>Saturday</td>
              </tr>
              <tr>
                <td>Eid Al-Fitr (Tentative)</td>
                <td>April 1-3, 2025</td>
                <td>Tuesday-Thursday</td>
              </tr>
              <tr>
                <td>Independence Day (India)</td>
                <td>August 15, 2025</td>
                <td>Friday</td>
              </tr>
              <tr>
                <td>Saudi National Day</td>
                <td>September 23, 2025</td>
                <td>Tuesday</td>
              </tr>
              <tr>
                <td>Gandhi Jayanti</td>
                <td>October 2, 2025</td>
                <td>Thursday</td>
              </tr>
              <tr>
                <td>Eid Al-Adha (Tentative)</td>
                <td>June 15-17, 2025</td>
                <td>Sunday-Tuesday</td>
              </tr>
            </tbody>
          </table>
          
          <p className="note">
            Note: Islamic holiday dates are subject to the sighting of the moon and may vary from the dates given above.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Vacation Guidelines</h2>
          <ul className="guidelines-list">
            <li>Students are expected to complete all holiday homework assigned during vacations</li>
            <li>Parents are requested to ensure that their children return to school on the reopening day</li>
            <li>Any extension of vacation requires prior written permission from the Principal</li>
            <li>Students returning late without permission may face disciplinary action</li>
            <li>The school office will remain open during vacations (except on public holidays) for administrative work</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vacations;