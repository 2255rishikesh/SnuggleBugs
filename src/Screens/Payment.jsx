import React, { useState } from 'react';

const ShoppingCart = () => {
  const [showAddressInput, setShowAddressInput] = useState(false);
  const [shippingAddress, setShippingAddress] = useState("Brady Cooper, New Civil Colony, Salt Lake City, Utah, 2971 Avenue.");
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Jeans with sequins",
      size: "XL",
      color: "Blue",
      price: 39.00,
      quantity: 2
    },
    {
      id: 2,
      name: "Robinson Printed",
      size: "XXL",
      color: "Blue",
      price: 29.00,
      quantity: 1
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) newQuantity = 1;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const saveNewAddress = () => {
    const newAddress = document.getElementById("newAddressInput").value;
    if (newAddress.trim() !== "") {
      setShippingAddress(newAddress);
      alert("Shipping address updated successfully!");
      setShowAddressInput(false);
    } else {
      alert("Please enter a valid address.");
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-6">Shopping Cart</h2>
          
          <div className="p-4 bg-white shadow-md rounded-md mb-4">
            <p className="font-medium">LOGIN ✅</p>
            <p className="text-gray-600">Michael Smith • +806-445-4453</p>
          </div>
          
          <div className="p-4 bg-white shadow-md rounded-md mb-6">
            <p className="font-medium">SHIPPING ADDRESS ✅</p>
            <p className="text-gray-600">{shippingAddress}</p>
            <button 
              onClick={() => setShowAddressInput(!showAddressInput)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Change Address
            </button>
            {showAddressInput && (
              <div className="mt-2">
                <input
                  type="text"
                  id="newAddressInput"
                  placeholder="Enter new address"
                  className="w-full p-2 border rounded-md"
                />
                <button
                  onClick={saveNewAddress}
                  className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Save Address
                </button>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-white shadow-md rounded-md">
            <p className="font-medium mb-4">PAYMENT METHOD</p>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="text-black"
                />
                <span className="text-lg font-medium">Debit / Credit Card</span>
              </label>
              {paymentMethod === 'card' && (
                <div>
                  <input type="text" placeholder="Enter Card Number" className="w-full p-3 border rounded-md mb-3" />
                  <div className="flex space-x-4">
                    <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border rounded-md" />
                    <input type="text" placeholder="CVV" className="w-1/3 p-3 border rounded-md" />
                  </div>
                </div>
              )}
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'paypal'}
                  onChange={() => setPaymentMethod('paypal')}
                  className="text-black"
                />
                <span className="text-lg font-medium">PayPal</span>
              </label>
              {paymentMethod === 'paypal' && (
                <div>
                  <input type="text" placeholder="Enter PayPal Email" className="w-full p-3 border rounded-md" />
                </div>
              )}
              
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'googlepay'}
                  onChange={() => setPaymentMethod('googlepay')}
                  className="text-black"
                />
                <span className="text-lg font-medium">Google Pay</span>
              </label>
              {paymentMethod === 'googlepay' && (
                <div>
                  <input type="text" placeholder="Enter Google Pay ID" className="w-full p-3 border rounded-md" />
                </div>
              )}
              
              <button className="w-full bg-black text-white py-3 rounded-md mt-4 text-lg">
                Pay ₹{calculateTotal()}
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-lg font-semibold mb-4">Your Order</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-sm">Size: {item.size} • Color: {item.color}</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-12 p-1 border rounded-md text-center"
                    min="1"
                  />
                  <p className="font-medium ml-2">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 border-t">
            <p className="text-lg font-semibold">Total Amount: ₹{calculateTotal()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;