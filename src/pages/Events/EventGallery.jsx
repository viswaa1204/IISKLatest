import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { parseXML } from '../../utils/xmlParser';
import '../PageStyles.css';
import './EventGallery.css';

// Import event images
import event1 from '../../assets/event1.jpg';
import event2 from '../../assets/event2.jpg';
import event3 from '../../assets/event3.jpg';

const eventImages = {
  'event1.jpg': event1,
  'event2.jpg': event2,
  'event3.jpg': event3
};

const EventGallery = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mediaItems, setMediaItems] = useState({ photos: [], videos: [] });
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentMediaType, setCurrentMediaType] = useState('photos');

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        setLoading(true);
        const eventData = await parseXML('/data/events.xml');
        
        if (eventData && eventData.events && eventData.events.event) {
          const events = Array.isArray(eventData.events.event) 
            ? eventData.events.event 
            : [eventData.events.event];
          
          const foundEvent = events.find(e => e.id._text === id);
          
          if (foundEvent) {
            // Get the correct image path
            const imagePath = foundEvent.image._text;
            const eventImage = eventImages[imagePath] || imagePath;

            const eventDetails = {
              id: foundEvent.id._text,
              title: foundEvent.title._text,
              description: foundEvent.description._text,
              date: foundEvent.date._text,
              image: eventImage
            };

            // Extract photos and videos from gallery
            if (foundEvent.gallery) {
              const photos = Array.isArray(foundEvent.gallery.photos.photo)
                ? foundEvent.gallery.photos.photo
                : [foundEvent.gallery.photos.photo];

              const videos = Array.isArray(foundEvent.gallery.videos.video)
                ? foundEvent.gallery.videos.video
                : [foundEvent.gallery.videos.video];

              setMediaItems({
                photos: photos.map(photo => ({
                  url: photo.url._text,
                  caption: photo.caption._text
                })),
                videos: videos.map(video => ({
                  url: video.url._text,
                  title: video.title._text,
                  description: video.description._text,
                  thumbnail: video.thumbnail._text
                }))
              });
            }

            setEvent(eventDetails);
          } else {
            setError('Event not found');
          }
        } else {
          setError('Failed to load event data');
        }
      } catch (err) {
        console.error('Error fetching event details:', err);
        setError('Error loading event details. Please try again later.');

        // Fallback data for demo purposes
        if (id === '1') {
          setEvent({
            id: '1',
            title: 'Graduation Day Celebrations',
            description: 'Students celebrating their academic achievements during the annual graduation ceremony.',
            date: 'March 15, 2025',
            image: event1
          });
          setMediaItems({
            photos: [
              {
                url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1',
                caption: 'Students receiving their certificates'
              },
              {
                url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
                caption: 'Principal addressing the gathering'
              },
              {
                url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f',
                caption: 'Group photo of graduating class'
              },
              {
                url: 'https://images.unsplash.com/photo-1560523159-4a9692d222f9',
                caption: 'Cultural performance by students'
              }
            ],
            videos: [
              {
                url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                title: 'Graduation Ceremony Highlights',
                description: 'Watch the highlights of our graduation ceremony including speeches and performances.',
                thumbnail: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1'
              }
            ]
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  const openSlideshow = (index, mediaType) => {
    setCurrentSlideIndex(index);
    setCurrentMediaType(mediaType);
    setShowSlideshow(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSlideshow = () => {
    setShowSlideshow(false);
    document.body.style.overflow = 'auto';
  };

  const goToNextSlide = (e) => {
    e.stopPropagation();
    const maxIndex = currentMediaType === 'photos' 
      ? mediaItems.photos.length - 1 
      : mediaItems.videos.length - 1;
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
  };

  const goToPrevSlide = (e) => {
    e.stopPropagation();
    const maxIndex = currentMediaType === 'photos' 
      ? mediaItems.photos.length - 1 
      : mediaItems.videos.length - 1;
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + (maxIndex + 1)) % (maxIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showSlideshow) return;
      
      if (e.key === 'Escape') {
        closeSlideshow();
      } else if (e.key === 'ArrowRight') {
        const maxIndex = currentMediaType === 'photos' 
          ? mediaItems.photos.length - 1 
          : mediaItems.videos.length - 1;
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
      } else if (e.key === 'ArrowLeft') {
        const maxIndex = currentMediaType === 'photos' 
          ? mediaItems.photos.length - 1 
          : mediaItems.videos.length - 1;
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + (maxIndex + 1)) % (maxIndex + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [showSlideshow, currentMediaType, mediaItems]);

  if (loading) {
    return (
      <div className="page-content">
        <div className="container">
          <div className="loading-indicator">Loading event details...</div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="page-content">
        <div className="container">
          <div className="error-message">{error || 'Event not found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">{event.title}</h1>
        
        <div className="event-details">
          <div className="event-header">
            <img 
              src={event.image} 
              alt={event.title} 
              className="event-main-image" 
              onClick={() => openSlideshow(0, 'photos')}
            />
            <div className="event-info">
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
          
          <div className="page-section">
            <h2 className="section-subtitle">Event Gallery</h2>
            <p className="gallery-instruction">Click on any image to view in full size</p>
            
            <div className="gallery-grid">
              {mediaItems.photos.map((photo, index) => (
                <div key={`photo-${index}`} className="gallery-item" onClick={() => openSlideshow(index, 'photos')}>
                  <img src={photo.url} alt={photo.caption} className="gallery-image" />
                  <p className="gallery-caption">{photo.caption}</p>
                </div>
              ))}
            </div>

            {mediaItems.videos.length > 0 && (
              <>
                <h2 className="section-subtitle">Event Videos</h2>
                <div className="video-grid">
                  {mediaItems.videos.map((video, index) => (
                    <div key={`video-${index}`} className="video-item">
                      <div className="video-thumbnail" onClick={() => openSlideshow(index, 'videos')}>
                        <img src={video.thumbnail} alt={video.title} />
                        <div className="play-button">▶</div>
                      </div>
                      <h3 className="video-title">{video.title}</h3>
                      <p className="video-description">{video.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Slideshow Modal */}
      {showSlideshow && (
        <div className="slideshow-modal" onClick={closeSlideshow}>
          <div className="slideshow-content">
            <button className="slideshow-close" onClick={closeSlideshow}>&times;</button>
            <button className="slideshow-nav prev" onClick={goToPrevSlide}>&#10094;</button>
            <div className="slideshow-image-container">
              {currentMediaType === 'photos' ? (
                <>
                  <img 
                    src={mediaItems.photos[currentSlideIndex].url} 
                    alt={mediaItems.photos[currentSlideIndex].caption} 
                    className="slideshow-image" 
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="slideshow-caption">
                    {mediaItems.photos[currentSlideIndex].caption}
                  </div>
                </>
              ) : (
                <div className="video-container" onClick={(e) => e.stopPropagation()}>
                  <iframe
                    src={mediaItems.videos[currentSlideIndex].url}
                    title={mediaItems.videos[currentSlideIndex].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="video-info">
                    <h3>{mediaItems.videos[currentSlideIndex].title}</h3>
                    <p>{mediaItems.videos[currentSlideIndex].description}</p>
                  </div>
                </div>
              )}
            </div>
            <button className="slideshow-nav next" onClick={goToNextSlide}>&#10095;</button>
            <div className="slideshow-counter">
              {currentSlideIndex + 1} / {currentMediaType === 'photos' ? mediaItems.photos.length : mediaItems.videos.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventGallery;