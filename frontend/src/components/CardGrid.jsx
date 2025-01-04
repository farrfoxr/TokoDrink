import React from 'react';
import Card from './Card.jsx';
import { useAdmin } from '../AdminContext.jsx';
import './CardGrid.css';

const branchData = [
  { id: 1, name: 'Downtown Branch', location: '123 Main St', image: 'https://via.placeholder.com/200x300' },
  { id: 2, name: 'Uptown Branch', location: '456 Oak Ave', image: 'https://via.placeholder.com/200x300' },
  { id: 3, name: 'Suburban Branch', location: '789 Pine Rd', image: 'https://via.placeholder.com/200x300' },
];

function CardGrid() {
  const { isAdmin } = useAdmin();

  return (
    <div className="card-grid">
      {branchData.map(branch => (
        <Card key={branch.id} {...branch} />
      ))}
      {isAdmin && (
        <div className="card add-card">
          <div className="add-card-content">
            <h3>Add a New Location</h3>
            <p>Click to add a new branch</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardGrid;

