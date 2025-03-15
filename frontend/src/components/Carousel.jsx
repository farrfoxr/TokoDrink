import React, { useState, useEffect } from 'react';
import CarouselItem from './CarouselItem.jsx';
import './Carousel.css';

const promoData = [
  { id: 1, image: '/TokoDrink/bannerBackground.webp', alt: 'Promo 1' },
  { id: 2, image: '/TokoDrink/carousel2.webp', alt: 'Promo 2' },
  { id: 3, image: '/TokoDrink/carousel3.webp', alt: 'Promo 3' },
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
      <button className="carousel-control prev" onClick={prevSlide}>‹</button>
      <button className="carousel-control next" onClick={nextSlide}>›</button>
    </div>
  );
}

export default Carousel;
