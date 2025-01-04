import React from 'react';
import { useAdmin } from '../AdminContext.jsx';
import { useCard } from './CardContext';
import './Card.css';

function Card({ id, name, location, phone, image }) {
  const { isAdmin } = useAdmin();
  const { activeCardId, setActiveCardId, hoveredCardId, setHoveredCardId } = useCard();

  const handleCardClick = (e) => {
    e.stopPropagation();
    setActiveCardId(id);
  };

  const isActive = activeCardId === id;
  const isHovered = hoveredCardId === id;

  return (
    <div 
      className={`card ${isActive ? 'card-active' : ''} ${isHovered ? 'card-hover' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={() => setHoveredCardId(id)}
      onMouseLeave={() => setHoveredCardId(null)}
    >
      {isAdmin && (
        <div className="card-actions">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      )}
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p className="location">{location}</p>
        <p className="phone">{phone}</p>
      </div>
    </div>
  );
}

export default Card;