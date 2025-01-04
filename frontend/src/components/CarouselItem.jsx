import React from 'react';

function CarouselItem({ image, alt, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img src={image} alt={alt} />
    </div>
  );
}

export default CarouselItem;

