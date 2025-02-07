// src/CartPage.js
import React, { useState } from 'react';
import './styles/Cart.css';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    calculateTotal([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    calculateTotal(newCart);
  };

  const updateQuantity = (index, quantity) => {
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  const applyCoupon = () => {
    // Example coupon logic
    if (couponCode === 'DISCOUNT10') {
      setDiscount(0.1); // 10% discount
    } else {
      setDiscount(0);
    }
    calculateTotal(cart);
  };

  const calculateTotal = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total - total * discount);
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <img src={product.image} alt={product.name} className="cart-image" />
          <div className="cart-details">
            <h3>{product.name}</h3>
            <p>Size: {product.size}</p>
            <input
              type="number"
              value={product.quantity}
              onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
              min="1"
            />
            <p>Price: ${product.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="coupon-code">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter coupon code"
        />
        <button onClick={applyCoupon}>Apply Coupon</button>
      </div>
      <div className="total">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default CartPage;
