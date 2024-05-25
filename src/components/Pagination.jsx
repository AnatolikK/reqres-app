import React from 'react';

const Pagination = ({ currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div>
      <button onClick={handlePrevious} disabled={currentPage === 1}>Предыдущая</button>
      <span>{currentPage}</span>
      <button onClick={handleNext}>Следующая</button>
    </div>
  );
};

export default Pagination;
