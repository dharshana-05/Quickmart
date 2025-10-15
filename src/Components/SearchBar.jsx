import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../Pages/Contexts/SearchContext';
import './SearchBar.css';

const SearchBar = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const term = e.target.value;
    setInputValue(term);
    setSearchTerm(term.toLowerCase());
    
    // Redirect to products page when searching from other pages
    if (term && !window.location.pathname.includes('/products')) {
      navigate('/products');
    }
  };

  const handleClear = () => {
    setInputValue('');
    setSearchTerm('');
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={inputValue}
        onChange={handleSearch}
        placeholder="Search products..."
        className="search-input"
      />
      {inputValue && (
        <button className="clear-search" onClick={handleClear}>
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;