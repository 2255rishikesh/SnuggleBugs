import React, { useState } from 'react';
import './styles/Cart.css';

// Cart Component
const Cart = () => {
  // Cart Items State
  const [cartItems, setCartItems] = useState([
    {
      _id: 'errt',
      title: 'Sport Isofix Car Seat Charcoal Grey',
      description: 'A comfortable and safe car seat for children.',
      price: 24299.00, // Price as a number
      quantity: 1,
      imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
    },
  ]);

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0); // Discount state (percentage)

  // Remove Item Function
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Calculate Total Price
  const getTotal = () => {
    let total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    // Apply discount if there is one
    total = total - (total * (discount / 100));
    return total.toFixed(2);
  };

  // Handle Discount Coupon
  const applyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(10); // 10% discount
    } else if (coupon === 'DISCOUNT20') {
      setDiscount(20); // 20% discount
    } else {
      alert('Invalid coupon code');
      setDiscount(0);
    }
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item._id} className="cart-item">
              <div className="item-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="item-info">
                <p className="item-name">{item.title}</p>
                <p className="item-price">Price: ${item.price.toFixed(2)}</p>
                <div className="item-quantity">
                  {/* Decrease Button */}
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="quantity-btn"
                    aria-label="Decrease quantity"
                    disabled={item.quantity <= 1} // Disable button if quantity is 1
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  {/* Increase Button */}
                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="quantity-btn"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeItem(item._id)}
                aria-label="Remove Item"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Total: ${getTotal()}</h2>

          <div className="coupon-section">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
              aria-label="Coupon code input"
            />
            <button onClick={applyCoupon} className="apply-coupon-btn">
              Apply Coupon
            </button>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
