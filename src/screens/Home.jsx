import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Navbar';
import './styles/home.css';
import Cardcomponents from '../Components/Cardcomponents';
import CategoryComp from '../Components/CategoryComp';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import About from './About';
import { useAuth } from '../Contexts/AuthContext';

function Home() {
  const { axiosInstance } = useAuth();
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get('/categories');
        if (data) {
          setCategorys(data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
      <img
        src="https://momcozy.com/cdn/shop/files/20240914MOMCOZY-first.jpg?v=1732959895&width=1200"
        className={'header'}
        alt="Header Image"
        loading="lazy"
      />
      <center>
        <h1>The love language</h1>
      </center>
<div style={{display:"flex", justifyContent:"flex-start", flexDirection:"row"}}>
      {categorys && categorys[1]?.items?.map(item => (
        <Link key={item._id} to={`/category/${categorys[1]?._id}/product/${item._id}`}>
          <Cardcomponents
            id={item._id}
            imgurl={item.imageUrl1}
            title={item.title}
          />
        </Link>
      ))}
      </div>

      <div className="centered-heading-horizontal">
        <h1>Welcome to Our Store</h1>
        <ImageSlider />
      </div>

      {categorys.length > 0 && <CategoryComp data={categorys} />}

      <div className="promotional-section">
        <img
          src="https://momcozy.com/cdn/shop/files/20241026MOMCOZY-1200-1498-h_-head.jpg?v=1732953745&width=600"
          alt="SnuggleBugs"
        />
        <div className="promotional-text">
          <h1>SnuggleBugs care, the best promise to babies</h1>
          <p>We focus on safe and caring baby products...</p>
          <span>"Cozy beginnings, happy futures."</span>
        </div>
      </div>

      <About />
    </div>
  );
}

export default Home;
