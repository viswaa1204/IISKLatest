import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { parseXML } from '../../utils/xmlParser';
import '../PageStyles.css';
import './NewsDetail.css';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        setLoading(true);
        // Fetch news details from XML
        const newsData = await parseXML('/data/news.xml');
        
        if (newsData && newsData.news && newsData.news.item) {
          const newsItems = Array.isArray(newsData.news.item) 
            ? newsData.news.item 
            : [newsData.news.item];
          
          const foundNews = newsItems.find(n => n.id._text === id);
          
          if (foundNews) {
            // Fetch detailed news content
            try {
              const detailData = await parseXML(`/data/news/news_${id}.xml`);
              
              if (detailData && detailData.newsDetail) {
                setNews({
                  id: foundNews.id._text,
                  title: foundNews.title._text,
                  shortDescription: foundNews.description._text,
                  fullContent: detailData.newsDetail.content._text,
                  date: foundNews.date._text,
                  author: detailData.newsDetail.author ? detailData.newsDetail.author._text : 'School Admin',
                  image: detailData.newsDetail.image ? detailData.newsDetail.image._text : null
                });
              } else {
                // If detailed XML not found, create a basic news object
                setNews({
                  id: foundNews.id._text,
                  title: foundNews.title._text,
                  shortDescription: foundNews.description._text,
                  fullContent: foundNews.description._text,
                  date: foundNews.date._text,
                  author: 'School Admin',
                  image: null
                });
              }
            } catch (detailErr) {
              console.error('Error fetching detailed news:', detailErr);
              // If detailed XML fetch fails, use the basic news data
              setNews({
                id: foundNews.id._text,
                title: foundNews.title._text,
                shortDescription: foundNews.description._text,
                fullContent: foundNews.description._text,
                date: foundNews.date._text,
                author: 'School Admin',
                image: null
              });
            }
            
            // Set related news (excluding current news)
            const otherNews = newsItems
              .filter(n => n.id._text !== id)
              .slice(0, 3)
              .map(n => ({
                id: n.id._text,
                title: n.title._text,
                description: n.description._text,
                date: n.date._text
              }));
            
            setRelatedNews(otherNews);
          } else {
            setError('News not found');
          }
        } else {
          setError('Failed to load news data');
        }
      } catch (err) {
        console.error('Error fetching news details:', err);
        setError('Error loading news details. Please try again later.');
        
        // Fallback to hardcoded data for demo purposes
        if (id === '1') {
          setNews({
            id: '1',
            title: 'Annual Sports Day Announced',
            shortDescription: 'The annual sports day will be held on April 10, 2025. All students are encouraged to participate.',
            fullContent: `<p>The International Indian School Al-Khafji is pleased to announce that the Annual Sports Day for the academic year 2024-2025 will be held on April 10, 2025, at the school grounds.</p>
            <p>The event will showcase various athletic competitions, team sports, and physical fitness demonstrations by our students. All students are encouraged to participate in the events of their choice.</p>
            <h3>Schedule of Events:</h3>
            <ul>
              <li>8:00 AM - Opening Ceremony and March Past</li>
              <li>9:00 AM - Track Events (Running Races)</li>
              <li>11:00 AM - Field Events (Long Jump, Shot Put, etc.)</li>
              <li>12:30 PM - Team Sports Finals</li>
              <li>2:00 PM - Prize Distribution and Closing Ceremony</li>
            </ul>
            <p>Parents are cordially invited to attend the event and encourage their children. Refreshments will be provided for all participants and guests.</p>
            <p>For more information, please contact the Physical Education Department.</p>`,
            date: 'January 15, 2025',
            author: 'Sports Department',
            image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          });
          
          setRelatedNews([
            {
              id: '2',
              title: 'Science Exhibition Winners',
              description: 'Congratulations to all the winners of the Inter-School Science Exhibition held last week.',
              date: 'February 5, 2025'
            },
            {
              id: '3',
              title: 'Parent-Teacher Meeting',
              description: 'The next parent-teacher meeting is scheduled for March 1, 2025. All parents are requested to attend.',
              date: 'February 20, 2025'
            },
            {
              id: '4',
              title: 'New Library Books Arrived',
              description: 'Our school library has been enriched with 500 new books covering various subjects and interests.',
              date: 'January 30, 2025'
            }
          ]);
        } else if (id === '2') {
          setNews({
            id: '2',
            title: 'Science Exhibition Winners',
            shortDescription: 'Congratulations to all the winners of the Inter-School Science Exhibition held last week.',
            fullContent: `<p>The International Indian School Al-Khafji is proud to announce the winners of the Inter-School Science Exhibition that was held from January 25-27, 2025.</p>
            <p>The exhibition saw participation from 15 schools across the region, with over 200 projects showcasing innovative scientific concepts and solutions to real-world problems.</p>
            <h3>Winners:</h3>
            <h4>Junior Category (Classes I-V):</h4>
            <ul>
              <li>First Prize: Aisha Khan and Team (Class V) - "Solar-Powered Water Purifier"</li>
              <li>Second Prize: Rahul Sharma (Class IV) - "Eco-Friendly Waste Management System"</li>
              <li>Third Prize: Fatima Ali and Team (Class V) - "Smart Irrigation System"</li>
            </ul>
            <h4>Middle Category (Classes VI-VIII):</h4>
            <ul>
              <li>First Prize: Mohammed Hassan and Team (Class VIII) - "AI-Based Traffic Management System"</li>
              <li>Second Prize: Priya Patel (Class VII) - "Biodegradable Plastic Alternative"</li>
              <li>Third Prize: Ahmed Siddiqui and Team (Class VI) - "Renewable Energy Solutions"</li>
            </ul>
            <p>The school also won the "Best School Participation" award for the third consecutive year.</p>
            <p>We extend our heartfelt congratulations to all the winners and participants for their hard work and innovative ideas. Special thanks to the Science Department for organizing this successful event.</p>`,
            date: 'February 5, 2025',
            author: 'Science Department',
            image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          });
          
          setRelatedNews([
            {
              id: '1',
              title: 'Annual Sports Day Announced',
              description: 'The annual sports day will be held on April 10, 2025. All students are encouraged to participate.',
              date: 'January 15, 2025'
            },
            {
              id: '3',
              title: 'Parent-Teacher Meeting',
              description: 'The next parent-teacher meeting is scheduled for March 1, 2025. All parents are requested to attend.',
              date: 'February 20, 2025'
            },
            {
              id: '4',
              title: 'New Library Books Arrived',
              description: 'Our school library has been enriched with 500 new books covering various subjects and interests.',
              date: 'January 30, 2025'
            }
          ]);
        } else if (id === '3') {
          setNews({
            id: '3',
            title: 'Parent-Teacher Meeting',
            shortDescription: 'The next parent-teacher meeting is scheduled for March 1, 2025. All parents are requested to attend.',
            fullContent: `<p>The International Indian School Al-Khafji will be conducting a Parent-Teacher Meeting on March 1, 2025, to discuss the academic progress of students and address any concerns or queries that parents may have.</p>
            <p>This meeting is an important platform for parents and teachers to collaborate for the betterment of the students. Your presence is highly valued and appreciated.</p>
            <h3>Schedule:</h3>
            <table class="news-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Time</th>
                  <th>Venue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LKG & UKG</td>
                  <td>8:00 AM - 9:30 AM</td>
                  <td>KG Block</td>
                </tr>
                <tr>
                  <td>I & II</td>
                  <td>9:30 AM - 11:00 AM</td>
                  <td>Primary Block</td>
                </tr>
                <tr>
                  <td>III, IV & V</td>
                  <td>11:00 AM - 12:30 PM</td>
                  <td>Primary Block</td>
                </tr>
                <tr>
                  <td>VI, VII & VIII</td>
                  <td>12:30 PM - 2:00 PM</td>
                  <td>Middle Block</td>
                </tr>
              </tbody>
            </table>
            <h3>Important Points:</h3>
            <ul>
              <li>Please arrive on time as per the schedule.</li>
              <li>Bring your child's school diary for reference.</li>
              <li>The meeting will focus on the academic progress and overall development of your child.</li>
              <li>Limited time will be available with each teacher, so please be concise with your queries.</li>
            </ul>
            <p>For any queries regarding the Parent-Teacher Meeting, please contact the school office.</p>`,
            date: 'February 20, 2025',
            author: 'Academic Department',
            image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          });
          
          setRelatedNews([
            {
              id: '1',
              title: 'Annual Sports Day Announced',
              description: 'The annual sports day will be held on April 10, 2025. All students are encouraged to participate.',
              date: 'January 15, 2025'
            },
            {
              id: '2',
              title: 'Science Exhibition Winners',
              description: 'Congratulations to all the winners of the Inter-School Science Exhibition held last week.',
              date: 'February 5, 2025'
            },
            {
              id: '4',
              title: 'New Library Books Arrived',
              description: 'Our school library has been enriched with 500 new books covering various subjects and interests.',
              date: 'January 30, 2025'
            }
          ]);
        } else if (id === '4') {
          setNews({
            id: '4',
            title: 'New Library Books Arrived',
            shortDescription: 'Our school library has been enriched with 500 new books covering various subjects and interests.',
            fullContent: `<p>The International Indian School Al-Khafji is pleased to announce that our school library has been enriched with 500 new books covering various subjects and interests.</p>
            <p>The new collection includes reference books, fiction, non-fiction, encyclopedias, and educational resources that will enhance the learning experience of our students and support their academic pursuits.</p>
            <h3>Highlights of the New Collection:</h3>
            <ul>
              <li>100+ Science and Mathematics reference books</li>
              <li>150+ Fiction books for all age groups</li>
              <li>75+ Books on History and Geography</li>
              <li>50+ Books on Technology and Computers</li>
              <li>30+ Encyclopedias and General Knowledge books</li>
              <li>95+ Books on Language and Literature</li>
            </ul>
            <p>The library will be open for students to explore the new collection from February 1, 2025. Students are encouraged to make the most of this valuable resource.</p>
            <h3>Library Timings:</h3>
            <ul>
              <li>Monday to Thursday: 8:00 AM - 1:00 PM</li>
              <li>Saturday: 9:00 AM - 12:00 PM</li>
            </ul>
            <p>We extend our gratitude to the School Management Committee for their continuous support in enhancing the educational resources of our school.</p>`,
            date: 'January 30, 2025',
            author: 'Library Department',
            image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
          });
          
          setRelatedNews([
            {
              id: '1',
              title: 'Annual Sports Day Announced',
              description: 'The annual sports day will be held on April 10, 2025. All students are encouraged to participate.',
              date: 'January 15, 2025'
            },
            {
              id: '2',
              title: 'Science Exhibition Winners',
              description: 'Congratulations to all the winners of the Inter-School Science Exhibition held last week.',
              date: 'February 5, 2025'
            },
            {
              id: '3',
              title: 'Parent-Teacher Meeting',
              description: 'The next parent-teacher meeting is scheduled for March 1, 2025. All parents are requested to attend.',
              date: 'February 20, 2025'
            }
          ]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="page-content">
        <div className="container">
          <div className="loading-indicator">Loading news details...</div>
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className="page-content">
        <div className="container">
          <div className="error-message">{error || 'News not found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">{news.title}</h1>
        
        <div className="news-details">
          <div className="news-meta">
            <span className="news-date">{news.date}</span>
            <span className="news-author">By: {news.author}</span>
          </div>
          
          {news.image && (
            <div className="news-image-container">
              <img src={news.image} alt={news.title} className="news-image" />
            </div>
          )}
          
          <div className="news-content" dangerouslySetInnerHTML={{ __html: news.fullContent }}></div>
          
          <div className="news-navigation">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
        
        {relatedNews.length > 0 && (
          <div className="related-news">
            <h2 className="section-subtitle">Related News</h2>
            <div className="related-news-grid">
              {relatedNews.map(item => (
                <div key={item.id} className="related-news-item">
                  <h3 className="related-news-title">
                    <Link to={`/news/${item.id}`}>{item.title}</Link>
                  </h3>
                  <p className="related-news-date">{item.date}</p>
                  <p className="related-news-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;