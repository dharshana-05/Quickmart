// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
      </Link>
      <button onClick={addToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;