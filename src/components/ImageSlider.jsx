import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

// Import slider images
import slide1 from '../assets/1.jpg';
import slide2 from '../assets/2.jpg';
import slide3 from '../assets/3.jpg';
import slide4 from '../assets/4.jpg';
import slide5 from '../assets/5.jpg';
import slide6 from '../assets/6.jpg';
import slide7 from '../assets/7.jpg';

const ImageSlider = () => {
  const [slides, setSlides] = useState([
    { id: 1, image: slide1, alt: 'School Building' },
    { id: 2, image: slide2, alt: 'Students in Classroom' },
    { id: 3, image: slide3, alt: 'School Event' },
    { id: 4, image: slide4, alt: 'School Event4' },
    { id: 5, image: slide5, alt: 'School Event5' },
    { id: 6, image: slide6, alt: 'School Event6' },
    { id: 7, image: slide7, alt: 'School Event7' }
  ]);

  useEffect(() => {
    // In a real application, you would fetch this from an XML file
    // For now, we're using the hardcoded slides
    // fetchSlidesFromXML();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;