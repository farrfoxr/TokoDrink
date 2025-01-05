import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useAdmin } from '../AdminContext.jsx';
import { useCard } from './CardContext';
import { branchData } from './branchData';
import './CardGrid.css';

function CardGrid() {
  const { isAdmin } = useAdmin();
  const { currentPage, setCurrentPage, activeCardId, setActiveCardId, hoveredCardId } = useCard();
  const [isMobile, setIsMobile] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width >= 1200) {
        setCardsPerPage(5);
      } else if (width >= 992) {
        setCardsPerPage(4);
      } else if (width >= 768) {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(branchData.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = isMobile ? branchData : branchData.slice(startIndex, endIndex);

  const showNextButton = !isMobile && currentPage < totalPages;
  const showPrevButton = !isMobile && currentPage > 1;
  const showAddCard = isAdmin && currentPage === totalPages && currentCards.length < cardsPerPage;

  const emptySlots = !isMobile && currentPage === totalPages ? 
    cardsPerPage - currentCards.length : 
    0;

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest('.card')) {
        setActiveCardId(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setActiveCardId]);

  return (
    <div className={`grid-container ${isMobile ? 'mobile' : ''}`}>
      <div className={`backdrop ${activeCardId || hoveredCardId ? 'active' : ''}`}></div>
      <div className="grid-wrapper">
        {showPrevButton && (
          <button 
            className="nav-button"
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            ←
          </button>
        )}
        
        <div className={`card-grid ${isMobile ? 'mobile' : ''}`}>
          {currentCards.map(branch => (
            <Card key={branch.id} {...branch} />
          ))}
          {showAddCard && (
            <div className="card add-card">
              <div className="add-card-content">
                <h3>Add a New Location</h3>
                <p>Click to add a new branch</p>
              </div>
            </div>
          )}
          {[...Array(emptySlots)].map((_, index) => (
            <div key={`empty-${index}`} className="card invisible" />
          ))}
        </div>

        {showNextButton && (
          <button 
            className="nav-button"
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}

export default CardGrid;