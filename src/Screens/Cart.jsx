import React, { useState } from 'react';
import './styles/Cart.css'
// Cart Component
const Cart = () => {
  // Cart Items State
  const [cartItems, setCartItems] = useState([
   { _id: 'errt',
    title: 'Sport Isofix Car Seat Charcoal Grey',
    description: 'A comfortable and safe car seat for children.',
    price: '24,299.00',
    imageUrl:
        'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',

}]);

  // Remove Item Function
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate Total Price
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <div className="item-info">
                <p className="item-name">{item.name}</p>
                <p className="item-price">Price: ${item.price}</p>
                <p className="item-quantity">Qty: {item.quantity}</p>
                <p className="item-total">Total: ${item.price * item.quantity}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="cart-summary">
        <h2>Total: ${getTotal()}</h2>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
