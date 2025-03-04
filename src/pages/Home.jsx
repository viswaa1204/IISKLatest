import React from 'react';
import ImageSlider from '../components/ImageSlider';
import EventsSection from '../components/EventsSection';
import NewsSection from '../components/NewsSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <ImageSlider />
      
      <section className="welcome-section">
        <div className="container">
          <h1 className="welcome-title">Welcome to International Indian School Al-Khafji</h1>
          <div className="welcome-content">
            <p>
              The International Indian School Al-Khafji (IISK) was founded on June 02, 2005. The School aims at providing education on a no-profit, no-loss basis and educational facilities at the Pre-primary, Primary, and Middle level, primarily to Indian citizens.
            </p>
            <p>
              Our mission is to provide a superior higher studies preparation and liberal art education opportunities to young people of cultural and intellectual diversity. IISK is a school which provides equal opportunities within a dignified and supportive setting.
            </p>
          </div>
        </div>
      </section>
      
      <EventsSection />
      <NewsSection />
    </div>
  );
};

export default Home;