import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { parseXML } from '../../utils/xmlParser';
import '../PageStyles.css';

const AnnouncementDetail = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncementDetails = async () => {
      try {
        setLoading(true);
        // Fetch announcement details from XML
        const announcementsData = await parseXML('/data/announcements.xml');
        
        if (announcementsData && announcementsData.announcements && announcementsData.announcements.announcement) {
          const announcements = Array.isArray(announcementsData.announcements.announcement) 
            ? announcementsData.announcements.announcement 
            : [announcementsData.announcements.announcement];
          
          const foundAnnouncement = announcements.find((a, index) => index + 1 === parseInt(id));
          
          if (foundAnnouncement) {
            // Fetch detailed announcement content
            const detailData = await parseXML(`/data/announcements/announcement_${id}.xml`);
            
            if (detailData && detailData.announcementDetail) {
              setAnnouncement({
                id,
                title: foundAnnouncement.text._text,
                content: detailData.announcementDetail.content._text,
                date: detailData.announcementDetail.date ? detailData.announcementDetail.date._text : 'February 2025',
                attachments: detailData.announcementDetail.attachments ? 
                  (Array.isArray(detailData.announcementDetail.attachments.attachment) 
                    ? detailData.announcementDetail.attachments.attachment.map(a => ({
                        name: a.name._text,
                        url: a.url._text
                      }))
                    : [{
                        name: detailData.announcementDetail.attachments.attachment.name._text,
                        url: detailData.announcementDetail.attachments.attachment.url._text
                      }]
                  ) : []
              });
            } else {
              // If detailed XML not found, create a basic announcement object
              setAnnouncement({
                id,
                title: foundAnnouncement.text._text,
                content: 'Detailed information about this announcement will be available soon.',
                date: 'February 2025',
                attachments: []
              });
            }
          } else {
            setError('Announcement not found');
          }
        } else {
          setError('Failed to load announcement data');
        }
      } catch (err) {
        console.error('Error fetching announcement details:', err);
        setError('Error loading announcement details. Please try again later.');
        
        // Fallback to hardcoded data for demo purposes
        if (id === '1') {
          setAnnouncement({
            id: '1',
            title: 'Admissions Open for 2025',
            content: `<p>The International Indian School Al-Khafji is pleased to announce that admissions for the academic year 2025-2026 are now open for all classes from LKG to VIII.</p>
            <p>Parents interested in enrolling their children are requested to visit the school office during working hours to collect the application form and detailed information about the admission process.</p>
            <p>The admission process includes an entrance test and an interview. Please refer to the admission guidelines for more information.</p>
            <h3>Important Dates:</h3>
            <ul>
              <li>Application Form Distribution: February 1 - March 15, 2025</li>
              <li>Entrance Test: March 20-25, 2025</li>
              <li>Results Announcement: April 1, 2025</li>
              <li>Fee Payment for Selected Candidates: April 1-10, 2025</li>
            </ul>
            <p>For any queries, please contact the school office at 013 7662515 or email at principaliisk@gmail.com.</p>`,
            date: 'January 15, 2025',
            attachments: [
              { name: 'Admission Form 2025-26.pdf', url: '#' },
              { name: 'Fee Structure 2025-26.pdf', url: '#' }
            ]
          });
        } else if (id === '2') {
          setAnnouncement({
            id: '2',
            title: 'Open House Scheduled on 23 Feb 2025',
            content: `<p>The International Indian School Al-Khafji will be hosting an Open House on February 23, 2025, from 9:00 AM to 1:00 PM.</p>
            <p>This is an excellent opportunity for parents to meet with teachers, discuss their child's progress, and view their academic work. Parents are encouraged to attend this important event to gain insights into their child's educational journey.</p>
            <h3>Schedule:</h3>
            <ul>
              <li>KG Section: 9:00 AM - 10:30 AM</li>
              <li>Primary Section (Classes I-V): 10:30 AM - 12:00 PM</li>
              <li>Middle Section (Classes VI-VIII): 12:00 PM - 1:00 PM</li>
            </ul>
            <p>Please note that attendance is mandatory for all parents. If you are unable to attend, kindly inform the class teacher in advance.</p>
            <p>For any queries, please contact the school office.</p>`,
            date: 'February 10, 2025',
            attachments: []
          });
        } else if (id === '3') {
          setAnnouncement({
            id: '3',
            title: 'New Academic Books Distribution Schedule',
            content: `<p>The distribution of new academic books for the academic year 2025-2026 will take place as per the following schedule:</p>
            <h3>Distribution Schedule:</h3>
            <table class="announcement-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LKG & UKG</td>
                  <td>March 25, 2025</td>
                  <td>8:00 AM - 11:00 AM</td>
                </tr>
                <tr>
                  <td>I & II</td>
                  <td>March 26, 2025</td>
                  <td>8:00 AM - 11:00 AM</td>
                </tr>
                <tr>
                  <td>III & IV</td>
                  <td>March 27, 2025</td>
                  <td>8:00 AM - 11:00 AM</td>
                </tr>
                <tr>
                  <td>V & VI</td>
                  <td>March 28, 2025</td>
                  <td>8:00 AM - 11:00 AM</td>
                </tr>
                <tr>
                  <td>VII & VIII</td>
                  <td>March 29, 2025</td>
                  <td>8:00 AM - 11:00 AM</td>
                </tr>
              </tbody>
            </table>
            <p>Parents are requested to collect the books as per the schedule. Please bring the fee receipt for verification.</p>
            <p>For any queries, please contact the school office.</p>`,
            date: 'February 15, 2025',
            attachments: [
              { name: 'Book List 2025-26.pdf', url: '#' }
            ]
          });
        } else if (id === '4') {
          setAnnouncement({
            id: '4',
            title: 'Parent-Teacher Meeting on 15 March 2025',
            content: `<p>A Parent-Teacher Meeting will be held on March 15, 2025, to discuss the academic progress of students and address any concerns or queries that parents may have.</p>
            <p>This meeting is an important platform for parents and teachers to collaborate for the betterment of the students. Your presence is highly valued and appreciated.</p>
            <h3>Schedule:</h3>
            <ul>
              <li>KG Section: 8:00 AM - 9:30 AM</li>
              <li>Primary Section (Classes I-V): 9:30 AM - 11:30 AM</li>
              <li>Middle Section (Classes VI-VIII): 11:30 AM - 1:30 PM</li>
            </ul>
            <p>Please note that attendance is mandatory for all parents. If you are unable to attend, kindly inform the class teacher in advance.</p>
            <p>For any queries, please contact the school office.</p>`,
            date: 'February 25, 2025',
            attachments: []
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncementDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="page-content">
        <div className="container">
          <div className="loading-indicator">Loading announcement details...</div>
        </div>
      </div>
    );
  }

  if (error || !announcement) {
    return (
      <div className="page-content">
        <div className="container">
          <div className="error-message">{error || 'Announcement not found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">{announcement.title}</h1>
        
        <div className="announcement-details">
          <div className="announcement-date">{announcement.date}</div>
          
          <div className="announcement-content" dangerouslySetInnerHTML={{ __html: announcement.content }}></div>
          
          {announcement.attachments && announcement.attachments.length > 0 && (
            <div className="announcement-attachments">
              <h3>Attachments</h3>
              <ul className="attachments-list">
                {announcement.attachments.map((attachment, index) => (
                  <li key={index}>
                    <a href={attachment.url} target="_blank" rel="noopener noreferrer">
                      {attachment.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="announcement-navigation">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDetail;