
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Category.css';
import NavBar from '../Components/Navbar';

function Card({ image, title, description, buttonText, onButtonClick }) {
  const addItemToCart = () => {
    const item = {
      _id: 'errt',
      title: 'Sport Isofix Car Seat Charcoal Grey',
      price: 24299.00,
      imageUrl: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg',
    };
    
    localStorage.setItem('cartItem', JSON.stringify(item));
  };

  return (
    <div className="card-container">
      <NavBar />
      
      <div className="card">
        <img 
          src={"https://i5.walmartimages.com/asr/db3d3c75-01a7-4151-8561-70ecb8c251eb.5a84450ec772907331cf7ca1bf7e732a.jpeg"} 
          alt={title} 
          className="card-image" 
        />
        
        <div className="card-content">
          <h2 className="card-title">{title || "PatPat Newborn Baby Girls Clothes Long Sleeve Romper Jumpsuit Striped Pants Outfit Set 12-18 Months"}</h2>
          <p className="card-description">{description || ""}</p>

          <Link to="/cart">
            <button className="card-button" onClick={addItemToCart}>
              {buttonText || "₹999.00"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
