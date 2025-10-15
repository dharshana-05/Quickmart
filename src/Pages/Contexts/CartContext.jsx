
import { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    const savedCart = localStorage.getItem('groceryCart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  
  useEffect(() => {
    localStorage.setItem('groceryCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      return existing
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const cartTotal = cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };