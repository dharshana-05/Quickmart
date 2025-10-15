import React, { useContext, useState } from 'react';
import { CartContext } from './Contexts/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useContext(CartContext);
  const [isPaid, setIsPaid] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
   
    if (!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv) {
      alert('Please fill in all payment details');
      return;
    }
    
    
    setIsPaid(true);
    clearCart(); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (isPaid) {
    return (
      <div className="confirmation-container">
        <div className="confirmation-card">
          <div className="checkmark">✓</div>
          <h2>Order Confirmed!</h2>
          <p>Your payment of ${cartTotal.toFixed(2)} was successful.</p>
          <p>Thank you for shopping with us!</p>
          <button 
            className="continue-shopping-btn"
            onClick={() => window.location.href = '/'}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      
      <div className="checkout-left">
        <h2>Payment Information</h2>
        <form className="payment-form" onSubmit={handlePaymentSubmit}>
          <div className="form-group">
            <label>Card Number</label>
            <input 
              type="text" 
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456" 
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Expiry Date</label>
              <input 
                type="text" 
                name="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY" 
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input 
                type="text" 
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
                placeholder="123" 
              />
            </div>
          </div>
          <button type="submit" className="pay-btn">
            Pay ${cartTotal.toFixed(2)}
          </button>
        </form>
      </div>

      {/* Right: Order Summary */}
      <div className="checkout-right">
        <h2>Order Summary</h2>
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)} × {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="total-section">
              <h3>Total</h3>
              <p className="total-amount">${cartTotal.toFixed(2)}</p>
            </div>
          </>
        ) : (
          <p className="empty-cart-message">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Checkout;