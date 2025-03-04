import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseXML } from '../utils/xmlParser';
import './NewsSection.css';

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await parseXML('/data/news.xml');
        
        if (data && data.news && data.news.item) {
          const newsList = Array.isArray(data.news.item) 
            ? data.news.item 
            : [data.news.item];
          
          setNews(newsList.map(item => ({
            id: item.id._text,
            title: item.title._text,
            description: item.description._text,
            date: item.date._text
          })));
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        
        // Fallback to hardcoded news
        setNews([
          {
            id: 1,
            title: 'Annual Sports Day Announced',
            description: 'The annual sports day will be held on April 10, 2025. All students are encouraged to participate.',
            date: 'January 15, 2025'
          },
          {
            id: 2,
            title: 'Science Exhibition Winners',
            description: 'Congratulations to all the winners of the Inter-School Science Exhibition held last week.',
            date: 'February 5, 2025'
          },
          {
            id: 3,
            title: 'Parent-Teacher Meeting',
            description: 'The next parent-teacher meeting is scheduled for March 1, 2025. All parents are requested to attend.',
            date: 'February 20, 2025'
          },
          {
            id: 4,
            title: 'New Library Books Arrived',
            description: 'Our school library has been enriched with 500 new books covering various subjects and interests.',
            date: 'January 30, 2025'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Latest School News</h2>
          <div className="loading-indicator">Loading news...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">Latest School News</h2>
        <div className="news-grid">
          {news.map(item => (
            <div key={item.id} className="news-card">
              <h3 className="news-title">
                <Link to={`/news/${item.id}`}>{item.title}</Link>
              </h3>
              <p className="news-date">{item.date}</p>
              <p className="news-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;