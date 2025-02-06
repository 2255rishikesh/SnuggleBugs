import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Correct for defining routes
import Product from './screens/Product';
import Login from './screens/Login';
import Home from './screens/Home';
// Import other screens as needed

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      {/* Add other routes as needed */}
    </Routes>
  );
}

export default Router;
