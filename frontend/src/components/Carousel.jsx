import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem.jsx';
import './Carousel.css';

const promoData = [
  { id: 1, image: '/bannerBackground.webp', alt: 'Promo 1' },
  { id: 2, image: 'https://via.placeholder.com/1200x400', alt: 'Promo 2' },
  { id: 3, image: 'https://via.placeholder.com/1200x400', alt: 'Promo 3' },
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % promoData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % promoData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + promoData.length) % promoData.length);
  };

  return (
    <div className="carousel">
      {promoData.map((promo, index) => (
        <CarouselItem
          key={promo.id}
          {...promo}
          isActive={index === currentSlide}
        />
      ))}
      <button className="carousel-control prev" onClick={prevSlide}>&lt;</button>
      <button className="carousel-control next" onClick={nextSlide}>&gt;</button>
    </div>
  );
}

export default Carousel;

