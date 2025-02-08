import React, { useState } from "react";
import './styles/Cart.css';

const Cart = () => {
  // Cart Items State
  const [cartItems, setCartItems] = useState([
    {
      _id: 'errt',
      title: 'Sport Isofix Car Seat Charcoal Grey',
      description: 'A comfortable and safe car seat for children.',
      price: 24299.00,
      quantity: 1,
      imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
    },
  ]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  // Calculate Total Price
  const getTotal = () => {
    let total = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    total = total - (total * (discount / 100)); // Apply discount if available
    return total.toFixed(2);
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Handle Discount Coupon
  const applyCoupon = () => {
    if (coupon === 'DISCOUNT10') {
      setDiscount(10);
    } else if (coupon === 'DISCOUNT20') {
      setDiscount(20);
    } else {
      alert('Invalid coupon code');
      setDiscount(0);
    }
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item._id !== id));
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item._id} className="cart-item">
              <div className="item-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="item-info">
                <p className="item-name">{item.title}</p>
                <p className="item-price">${item.price.toFixed(2)}</p>

                <div className="item-quantity">
                  <button
                    onClick={() => decreaseQuantity(item._id)}
                    className="quantity-btn"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-count">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item._id)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>

                <p className="item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <div className="summary-line">
            <span>Total Price:</span>
            <span>${getTotal()}</span>
          </div>

          <div className="coupon-section">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
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
