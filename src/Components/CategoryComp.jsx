
import React from 'react';
import './Category.css';  
import Cardcomponents from './Cardcomponents'; 
import { Link } from 'react-router-dom';  

const Category = () => {
  return (
    <div className="category-container">
      <h1 className="category-title">Categories</h1>

      <div className="category-grid">
        <Link to="/category" className="category-link">
          <Cardcomponents 
            id={'ert'}
            imgurl={"https://i.pinimg.com/originals/fb/5c/4b/fb5c4b1a647ac8998405ff85a42c7b93.jpg"} 
          />
        </Link>

        
        <Link to="/category" className="category-link">
          <Cardcomponents 
            id={'ert2'}
            imgurl={"https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/original/mothercare/banner/318_202308290926_MC_CategoryTiles_180x180_baby_care@2x_100.jpg"} 
          />
        </Link>
      </div>
    </div>
  );
};

export default Category;
