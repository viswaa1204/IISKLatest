import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { parseXML } from '../utils/xmlParser';
import './NewsScroller.css';

const NewsScroller = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const scrollerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        const data = await parseXML('/data/announcements.xml');
        
        if (data && data.announcements && data.announcements.announcement) {
          const announcementsList = Array.isArray(data.announcements.announcement) 
            ? data.announcements.announcement 
            : [data.announcements.announcement];
          
          setAnnouncements(announcementsList.map((announcement, index) => ({
            id: index + 1,
            text: announcement.text._text
          })));
        }
      } catch (error) {
        console.error('Error fetching announcements:', error);
        
        // Fallback to hardcoded announcements
        setAnnouncements([
          { id: 1, text: 'Admissions Open for 2025' },
          { id: 2, text: 'Open House Scheduled on 23 Feb 2025' },
          { id: 3, text: 'New Academic Books Distribution Schedule' },
          { id: 4, text: 'Parent-Teacher Meeting on 15 March 2025' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  if (loading || announcements.length === 0) {
    return (
      <div className="news-scroller">
        <div className="scroller-label">ANNOUNCEMENTS:</div>
        <div className="scroller-content">
          <span className="announcement-item">Loading announcements...</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`news-scroller ${isPaused ? 'paused' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={scrollerRef}
    >
      <div className="scroller-label">ANNOUNCEMENTS:</div>
      <div className="scroller-content">
        {announcements.map((announcement) => (
          <span key={announcement.id} className="announcement-item">
            <Link to={`/announcement/${announcement.id}`} className="announcement-link">
              {announcement.text}
            </Link>
            <span className="separator">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsScroller;