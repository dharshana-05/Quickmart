
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Contexts/CartContext';
import './Cart.css';


const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <Link to="/products" className="shop-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;