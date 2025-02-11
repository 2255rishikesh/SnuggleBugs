import React, { useState, useCallback } from "react";
import './styles/Cart.css';


const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => (
  <div className="cart-item">
    <div className="item-image">
      <img src={item.imageUrl} alt={item.title} />
    </div>
    <div className="item-info">
      <p className="item-name">{item.title}</p>
      <p className="item-price">${item.price.toFixed(2)}</p>

      <div className="item-quantity">
        <button
          onClick={() => onDecrease(item._id)}
          className="quantity-btn"
          disabled={item.quantity <= 1}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="quantity-count">{item.quantity}</span>
        <button
          onClick={() => onIncrease(item._id)}
          className="quantity-btn"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
      <button
        className="remove-btn"
        onClick={() => onRemove(item._id)}
        aria-label="Remove item"
      >
        Remove
      </button>
    </div>
  </div>
);


const CartSummary = ({ total, onCouponChange, onApplyCoupon, coupon, onCheckout }) => (
  <div className="cart-summary">
    <div className="summary-line">
      <span>Total Price:</span>
      <span>${total}</span>
    </div>

    <div className="coupon-section">
      <input
        type="text"
        value={coupon}
        onChange={onCouponChange}
        placeholder="Enter coupon code"
        aria-label="Coupon code input"
      />
      <button onClick={onApplyCoupon} className="apply-coupon-btn" aria-label="Apply coupon">
        Apply Coupon
      </button>
    </div>

    <button className="checkout-btn" onClick={onCheckout} aria-label="Proceed to checkout">
      Proceed to Checkout
    </button>
  </div>
);


const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      _id: 'errt',
      title: 'Sport Isofix Car Seat Charcoal Grey',
      price: 24299.00,
      quantity: 1,
      imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
    },
  ]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  
  const getTotal = useCallback(() => {
    let total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    total -= total * (discount / 100); 
    return total.toFixed(2);
  }, [cartItems, discount]);

  
  const updateQuantity = useCallback((id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id
          ? { ...item, quantity: action === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
          : item
      )
    );
  }, []);

  
  const applyCoupon = useCallback(() => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(10);
    } else if (coupon === 'DISCOUNT20') {
      setDiscount(20);
    } else {
      alert('Invalid coupon code');
      setDiscount(0);
    }
  }, [coupon]);

  
  const removeItem = useCallback((id) => {
    setCartItems((prevItems) => prevItems.filter(item => item._id !== id));
  }, []);

  
  const handleCheckout = () => {
    alert('Proceeding to checkout...');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem
              key={item._id}
              item={item}
              onIncrease={() => updateQuantity(item._id, 'increase')}
              onDecrease={() => updateQuantity(item._id, 'decrease')}
              onRemove={removeItem}
            />
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <CartSummary
          total={getTotal()}
          onCouponChange={(e) => setCoupon(e.target.value)}
          onApplyCoupon={applyCoupon}
          coupon={coupon}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default Cart;
