import React, { createContext, useContext, useState } from 'react';

const CardContext = createContext(null);

export function CardProvider({ children }) {
  const [activeCardId, setActiveCardId] = useState(null);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const value = {
    activeCardId,
    setActiveCardId,
    hoveredCardId,
    setHoveredCardId,
    currentPage,
    setCurrentPage
  };

  return (
    <CardContext.Provider value={value}>
      {children}
    </CardContext.Provider>
  );
}

export function useCard() {
  const context = useContext(CardContext);
  if (context === undefined || context === null) {
    throw new Error('useCard must be used within a CardProvider');
  }
  return context;
}