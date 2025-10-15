import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../Data/Products';
import { CartContext } from './Contexts/CartContext';
import './Categories.css';

const Categories = () => {
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState({ show: false, productName: '' });

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification({ show: true, productName: product.name });
    setTimeout(() => setNotification({ show: false, productName: '' }), 3000);
  };

  return (
    <div className="categories-page">
      
      {notification.show && (
        <div className="notification">
          {notification.productName} added to cart!
        </div>
      )}

      <h1>Browse Categories</h1>
      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <Link to={`/categories/${category.slug}`}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;