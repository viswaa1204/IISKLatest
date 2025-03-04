import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseXML } from '../utils/xmlParser';
import './EventsSection.css';

// Import event images
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/flag.jpg';

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const data = await parseXML('/data/events.xml');
        
        if (data && data.events && data.events.event) {
          const eventsList = Array.isArray(data.events.event) 
            ? data.events.event 
            : [data.events.event];
          
          setEvents(eventsList.map(event => ({
            id: event.id._text,
            title: event.title._text,
            description: event.description._text,
            date: event.date._text,
            image: `/src/assets/${event.image._text}`
          })));
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        
        // Fallback to hardcoded events
        setEvents([
          {
            id: 1,
            title: 'Graduation Day Celebrations',
            description: 'Students celebrating their academic achievements during the annual graduation ceremony.',
            date: 'March 15, 2025',
            image: event1
          },
          {
            id: 2,
            title: 'Wonder Kids Day Celebrations',
            description: 'A fun-filled day celebrating the creativity and talents of our youngest students.',
            date: 'February 20, 2025',
            image: event2
          },
          {
            id: 3,
            title: 'Republic Day Celebration',
            description: 'Students and staff commemorating the Republic Day with patriotic performances.',
            date: 'January 26, 2025',
            image: event3
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Latest Events</h2>
          <div className="loading-indicator">Loading events...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="events-section">
      <div className="container">
        <h2 className="section-title">Latest Events</h2>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <Link to={`/event/${event.id}`}>
                  <img src={event.image} alt={event.title} />
                </Link>
              </div>
              <div className="event-content">
                <h3 className="event-title">
                  <Link to={`/event/${event.id}`}>{event.title}</Link>
                </h3>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-more-container">
          <Link to="/events" className="view-more-link">View More Events</Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;