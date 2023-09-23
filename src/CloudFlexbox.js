import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CloudFlexbox.css';

function CloudFlexbox({ items, heading }) {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowCarousel(window.innerWidth <= 700);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`cloud-container ${showCarousel ? 'carousel-container' : ''}`}>
      <h2 className="cloud-heading">{heading}</h2>
      {showCarousel ? (
        <Carousel>
          {items.map((item, index) => (
            <div key={index} className="carousel-item">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <p>{item.techstack}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        items.map((item, index) => (
          <div key={index} className="flex-item">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p>{item.techstack}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CloudFlexbox;


