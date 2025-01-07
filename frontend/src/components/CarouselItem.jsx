import React from 'react';

function CarouselItem({ image, alt, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <div className="carousel-item-background" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="carousel-item-content">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}

export default CarouselItem;

