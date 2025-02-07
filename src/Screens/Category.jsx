// src/Card.js
import React from 'react';
import './styles/Category.css'
import NavBar from '../Components/Navbar';
function Card({ image, title, description, buttonText, onButtonClick }) {
  return (
    <div>
      <NavBar/>
    <div className="card">
     <br></br>
      <img src={"https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/07jan2025/493771609-1.JPG"} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="dress">{title="Baby gear"}</h2>
        <p className="card-description">{description="Mothercare Cruze Baby Stroller - Cabin-Friendly Stroller With Pull Handle And One Button Fold For Babies From 0-4 Years(Birth To 22Kg) - Black"}</p>
        <button className="card-button" onClick={onButtonClick}>
          {buttonText="24,000$"}
        </button>
      </div><br></br>
      <div  className="card">
      <img src={"https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/07jan2025/493771610-1.JPG"} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="dress">{title="Baby gear"}</h2>
        <p className="card-description">{description="Mothercare Cruze Baby Stroller - Cabin-Friendly Stroller With Pull Handle And One Button Fold For Babies From 0-4 Years(Birth To 22Kg) - Navy"}</p>
        <button className="card-button" onClick={onButtonClick}>
          {buttonText="24,999$"}
        </button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Card;

