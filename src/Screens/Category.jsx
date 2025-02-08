// src/Card.js
import React from 'react';
import './styles/Category.css';
import NavBar from '../Components/Navbar';  // Assuming NavBar is used across pages

// Card Component
function Card({ image, title, description, buttonText, onButtonClick }) {
  return (
    <div className="card-container">
      {/* NavBar placed outside Card */}
      <NavBar />
      
      <div className="card">
        <img src={"https://i5.walmartimages.com/asr/db3d3c75-01a7-4151-8561-70ecb8c251eb.5a84450ec772907331cf7ca1bf7e732a.jpeg"} alt={title} className="card-image" />
        
        <div className="card-content">
          {/* Ensure title and description are passed as props, otherwise, default */}
          <h2 className="card-title">{title || "PatPat Newborn Baby Girls Clothes Long Sleeve Romper Jumpsuit Striped "}</h2>
          <p className="card-description">{description || "well designed clothes"}</p>

          {/* Button to trigger click event */}
          <button className="card-button" onClick={onButtonClick}>
            {buttonText || "₹999.00"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
