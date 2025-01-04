import React from 'react';
import { useAdmin } from '../AdminContext.jsx';
import './Card.css';

function Card({ name, location, image }) {
  const { isAdmin } = useAdmin();

  return (
    <div className="card">
      {isAdmin && (
        <div className="card-actions">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      )}
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Card;

