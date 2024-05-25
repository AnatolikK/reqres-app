// src/components/Filters.js
import React from 'react';

const Filters = ({ onFilter }) => {
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div>
      <select onChange={handleFilterChange}>
        <option value="all">Все ID</option>
        <option value="even">Четные ID</option>
        <option value="odd">Нечетные ID</option>
      </select>
    </div>
  );
};

export default Filters;
