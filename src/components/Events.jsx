import React, { useEffect, useState } from 'react';
import { convert } from 'xml-js';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // In a real application, this would fetch from an XML file
    const mockXmlData = `
      <events>
        <event>
          <title>Graduation Day Celebrations</title>
          <description>Annual graduation ceremony for the outgoing students of Class VIII.</description>
          <date>March 15, 2025</date>
          <image>https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80</image>
        </event>
        <event>
          <title>Wonder Kids Day Celebrations</title>
          <description>A day dedicated to showcase the talents of our kindergarten students.</description>
          <date>February 20, 2025</date>
          <image>https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80</image>
        </event>
        <event>
          <title>Republic Day Celebration</title>
          <description>Celebrating the spirit of India with cultural performances and flag hoisting ceremony.</description>
          <date>January 26, 2025</date>
          <image>https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80</image>
        </event>
      </events>
    `;

    try {
      const result = convert.xml2js(mockXmlData, { compact: true });
      setEvents(result.events.event);
    } catch (error) {
      console.error('Error parsing XML:', error);
    }
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy mb-8 text-center">Latest Events</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src={event.image._text} 
                alt={event.title._text} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{event.title._text}</h3>
                <p className="text-gray-600 mb-4">{event.description._text}</p>
                <p className="text-sm text-royal-blue font-medium">{event.date._text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;