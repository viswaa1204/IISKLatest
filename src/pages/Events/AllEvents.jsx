import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseXML } from '../../utils/xmlParser';
import '../PageStyles.css';
import './AllEvents.css';

// Import event images
import event1 from '../../assets/event1.jpg';
import event2 from '../../assets/event2.jpg';
import event3 from '../../assets/event3.jpg';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          
          // Add more events for demonstration purposes
          const additionalEvents = [
            {
              id: 4,
              title: 'Annual Science Exhibition',
              description: 'Students showcasing their innovative science projects and experiments.',
              date: 'April 5, 2025',
              image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              id: 5,
              title: 'Cultural Day Celebration',
              description: 'A day dedicated to celebrating the diverse cultural heritage of our students.',
              date: 'May 10, 2025',
              image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              id: 6,
              title: 'Mathematics Olympiad',
              description: 'Inter-school mathematics competition to promote mathematical skills and logical thinking.',
              date: 'June 15, 2025',
              image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              id: 7,
              title: 'Annual Sports Meet',
              description: 'Annual sports competition featuring various athletic events and team sports.',
              date: 'February 5, 2025',
              image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              id: 8,
              title: 'Art and Craft Exhibition',
              description: 'Exhibition showcasing the artistic talents and creative skills of our students.',
              date: 'March 20, 2025',
              image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
          ];
          
          setEvents(prevEvents => [...prevEvents, ...additionalEvents]);
        } else {
          setError('Failed to load events data');
        }
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Error loading events. Please try again later.');
        
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
          },
          {
            id: 4,
            title: 'Annual Science Exhibition',
            description: 'Students showcasing their innovative science projects and experiments.',
            date: 'April 5, 2025',
            image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 5,
            title: 'Cultural Day Celebration',
            description: 'A day dedicated to celebrating the diverse cultural heritage of our students.',
            date: 'May 10, 2025',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 6,
            title: 'Mathematics Olympiad',
            description: 'Inter-school mathematics competition to promote mathematical skills and logical thinking.',
            date: 'June 15, 2025',
            image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 7,
            title: 'Annual Sports Meet',
            description: 'Annual sports competition featuring various athletic events and team sports.',
            date: 'February 5, 2025',
            image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          },
          {
            id: 8,
            title: 'Art and Craft Exhibition',
            description: 'Exhibition showcasing the artistic talents and creative skills of our students.',
            date: 'March 20, 2025',
            image: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
      <div className="page-content">
        <div className="container">
          <h1 className="page-title">School Events</h1>
          <div className="loading-indicator">Loading events...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-content">
        <div className="container">
          <h1 className="page-title">School Events</h1>
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  // Sort events by date (most recent first)
  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">School Events</h1>
        
        <div className="page-section">
          <p className="events-intro">
            International Indian School Al-Khafji organizes various events throughout the academic year to promote holistic development of students. These events include cultural programs, sports competitions, academic competitions, and celebrations of important days.
          </p>
          
          <div className="events-filter">
            <h3>All Events</h3>
          </div>
          
          <div className="all-events-grid">
            {sortedEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <Link to={`/event/${event.id}`}>
                    <img 
                      src={event.image.startsWith('http') ? event.image : event.image} 
                      alt={event.title} 
                    />
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
        </div>
      </div>
    </div>
  );
};

export default AllEvents;