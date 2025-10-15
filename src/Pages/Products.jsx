import React, { useContext, useState } from 'react';
import { useSearch } from '../Pages/Contexts/SearchContext';
import { products } from '../Data/Products';
import { CartContext } from '../Pages/Contexts/CartContext';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const { searchTerm } = useSearch();
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState({ show: false, productName: '' });

  
  const filteredProducts = products.filter(product => {
    if (!searchTerm) return true;
    
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      (product.category && product.category.toLowerCase().includes(searchTerm))
    );
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification({ show: true, productName: product.name });
    setTimeout(() => setNotification({ show: false, productName: '' }), 3000);
  };

  return (
    <div className="products-page">
      <h1>All Products</h1>
      
      {/* Notification Popup */}
      {notification.show && (
        <div className="notification">
          {notification.productName} has been added to your cart!
        </div>
      )}
      
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={() => handleAddToCart(product)} 
            />
          ))
        ) : (
          <div className="no-results">
            {searchTerm ? `No products found for "${searchTerm}"` : 'No products available'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;