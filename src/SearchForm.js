// src/SearchForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <form>
      <label>
        Buscar:
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
        />
      </label>
    </form>
  );
};

export default SearchForm;
