import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { products, categories } from '../Data/Products';
import ProductCard from '../components/ProductCard';
import { CartContext } from './Contexts/CartContext';
import './Category.css';

const Category = () => {
  const { slug } = useParams();
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState({ show: false, productName: '' });

  const currentCategory = categories.find(cat => cat.slug === slug);
  const categoryProducts = products.filter(product => product.categoryId === currentCategory?.id);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification({ show: true, productName: product.name });
    setTimeout(() => setNotification({ show: false, productName: '' }), 3000);
  };

  if (!currentCategory) {
    return <div className="error-message">Category not found</div>;
  }

  return (
    <div className="category-page">
      
      {notification.show && (
        <div className="notification">
          {notification.productName} added to cart!
        </div>
      )}

      <div className="category-header">
     
        <div className="category-info">
          <h1>{currentCategory.name}</h1>
          
        </div>
      </div>
      
      <div className="products-container">
        {categoryProducts.length === 0 ? (
          <p className="no-products">No products found in this category</p>
        ) : (
          <div className="products-grid">
            {categoryProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;