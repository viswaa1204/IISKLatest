import React, { useState, useEffect } from 'react';
import { parseXML } from '../utils/xmlParser';
import './PageStyles.css';

const Circulars = () => {
  const [circulars, setCirculars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCirculars = async () => {
      try {
        setLoading(true);
        const data = await parseXML('/data/circulars.xml');
        
        if (data && data.circulars && data.circulars.circular) {
          const circularsList = Array.isArray(data.circulars.circular) 
            ? data.circulars.circular 
            : [data.circulars.circular];
          
          setCirculars(circularsList.map(circular => ({
            id: circular.id._text,
            title: circular.title._text,
            date: circular.date._text,
            description: circular.description._text,
            attachment: circular.attachment ? {
              name: circular.attachment.name._text,
              url: circular.attachment.url._text
            } : null
          })));
        } else {
          setError('Failed to load circulars data');
        }
      } catch (err) {
        console.error('Error fetching circulars:', err);
        setError('Error loading circulars. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCirculars();
  }, []);

  if (loading) {
    return (
      <div className="page-content">
        <div className="container">
          <h1 className="page-title">Circulars</h1>
          <div className="loading-indicator">Loading circulars...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-content">
        <div className="container">
          <h1 className="page-title">Circulars</h1>
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Circulars</h1>
        
        <div className="page-section">
          <p className="circulars-intro">
            This page contains important circulars and announcements from the school administration. Please check regularly for updates.
          </p>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Latest Circulars</h2>
          
          <div className="circulars-list">
            {circulars.map(circular => (
              <div key={circular.id} className="circular-item">
                <div className="circular-date">{circular.date}</div>
                <div className="circular-content">
                  <h3>{circular.title}</h3>
                  <p>{circular.description}</p>
                  {circular.attachment && (
                    <a href={circular.attachment.url} className="circular-link">
                      Download {circular.attachment.name}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="page-section">
          <h2 className="section-subtitle">Circular Archives</h2>
          
          <div className="archive-links">
            <a href="#" className="archive-link">2024-2025 Circulars</a>
            <a href="#" className="archive-link">2023-2024 Circulars</a>
            <a href="#" className="archive-link">2022-2023 Circulars</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circulars;