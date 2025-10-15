import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">Fresh and Organic Grocery </div>
        <div className="search-container">
          <SearchBar />
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;