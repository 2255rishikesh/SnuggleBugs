
import React from 'react';
import './Category.css';
import Cardcomponents from './Cardcomponents';
import { Link } from 'react-router-dom';

const Category = ({ data }) => {
  return (
    <div className="category-container">
      <h1 className="category-title">Categories</h1>



      <div className="category-grid">
        {data.map((item) => (
          <Link to={`/category/${item._id}`} className="category-link">
            <Cardcomponents
              id={item._id}
              imgurl={item.items[0].imageUrl1}
            />
          </Link>

        ))}

      </div>
    </div>
  );
};

export default Category;
