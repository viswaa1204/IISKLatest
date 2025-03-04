import React from 'react';
import '../PageStyles.css';

const SchoolCalendar = () => {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">School Calendar</h1>
        
        <div className="page-section">
          <div className="calendar-box">
            <p>
              The school calendar provides information about important dates, events, examinations, and holidays for the academic year 2025-2026.
            </p>
            <p>
              To download the complete school calendar, please click on the link below:
            </p>
            <div className="download-button">
              <a href="#" className="btn btn-primary">Download School Calendar 2025-2026 (PDF)</a>
            </div>
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Academic Terms</h2>
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Term</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First Term</td>
                <td>April 2025 - July 2025</td>
              </tr>
              <tr>
                <td>Second Term</td>
                <td>August 2025 - November 2025</td>
              </tr>
              <tr>
                <td>Third Term</td>
                <td>December 2025 - March 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Key Dates</h2>
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New Academic Year Begins</td>
                <td>April 1, 2025</td>
              </tr>
              <tr>
                <td>First Term Examinations</td>
                <td>July 10-20, 2025</td>
              </tr>
              <tr>
                <td>Summer Vacation</td>
                <td>July 25 - August 25, 2025</td>
              </tr>
              <tr>
                <td>Second Term Examinations</td>
                <td>November 15-25, 2025</td>
              </tr>
              <tr>
                <td>Winter Vacation</td>
                <td>December 20, 2025 - January 5, 2026</td>
              </tr>
              <tr>
                <td>Annual Examinations</td>
                <td>March 1-15, 2026</td>
              </tr>
              <tr>
                <td>Result Declaration</td>
                <td>March 25, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Important School Events</h2>
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annual Sports Day</td>
                <td>October 15, 2025</td>
              </tr>
              <tr>
                <td>Science Exhibition</td>
                <td>November 10, 2025</td>
              </tr>
              <tr>
                <td>Cultural Festival</td>
                <td>February 15, 2026</td>
              </tr>
              <tr>
                <td>Graduation Ceremony</td>
                <td>March 20, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="page-section">
          <p className="note">
            Note: The school calendar is subject to change. Any modifications will be communicated to parents and students through circulars and the school website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolCalendar;