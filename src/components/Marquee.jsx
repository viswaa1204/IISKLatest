import React, { useEffect, useState } from 'react';
import { convert } from 'xml-js';

const Marquee = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // In a real application, this would fetch from an XML file
    const mockXmlData = `
      <announcements>
        <item>Admissions Open for 2025</item>
        <item>Open House Scheduled on 23 Feb 2025</item>
        <item>New Academic Books Distribution Schedule</item>
      </announcements>
    `;

    try {
      const result = convert.xml2js(mockXmlData, { compact: true });
      const items = Array.isArray(result.announcements.item) 
        ? result.announcements.item.map(item => item._text)
        : [result.announcements.item._text];
      setAnnouncements(items);
    } catch (error) {
      console.error('Error parsing XML:', error);
    }
  }, []);

  return (
    <div className="marquee">
      <div className="marquee-content">
        {announcements.map((announcement, index) => (
          <span key={index} className="mx-8">{announcement}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;