import React from 'react';
import NavBar from '../Components/Navbar';
import './styles/home.css';
import Cardcomponents from '../Components/Cardcomponents';
import CategoryComp from '../Components/CategoryComp';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <NavBar />

      <img
        src="https://momcozy.com/cdn/shop/files/20240914MOMCOZY-first.jpg?v=1732959895&width=1200"
        className={'header'}
        alt="Header Image"
      />
      <center>
        <h1>The love language</h1>
      </center>

      {/* Wrap the Cardcomponents in Link to navigate to the Product page */}
      <Link to="/product">
        <Cardcomponents
          id={'ert'}
          imgurl={
            'https://cdn.pixelspray.io/v2/black-bread-289bfa/XUefL6/wrkr/t.resize(h:600,w:600)/data/mothercare/06Aug2021/UA087-1.jpg'
          }
          title={'Baby Gear'}
        />
      </Link>
      <br />
      <br />

      <CategoryComp />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100vw',
          alignItems: 'center',
        }}
      >
        <img
          src="https://momcozy.com/cdn/shop/files/20241026MOMCOZY-1200-1498-h_-head.jpg?v=1732953745&width=600"
          alt="SnuggleBugs"
          style={{ flex: 1, maxWidth: '50%', height: 'auto' }}
        />
        <div
          style={{
            flex: 1,
            maxWidth: '50%',
            paddingLeft: '20px',
            paddingRight: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h1
            style={{
              fontSize: '2.5rem',
              color: '#2a9d8f',
              fontWeight: '600',
              lineHeight: '1.3',
              marginBottom: '20px',
            }}
          >
            SnuggleBugs care, the best promise to babies
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: '#333',
              lineHeight: '1.6',
              fontWeight: '400',
              textAlign: 'justify',
              marginBottom: '20px',
            }}
          >
            We focus on safe and caring baby products. We make sure only natural
            and harmless materials are used and go out of our way to apply strict
            and high standards of craftsmanship. What's more, we think highly of
            product designs based on the concept of comfort and user experience.
            To us, nothing is more important than a baby feeling cozy. When a
            baby is cozy and taken good care of, we believe parents can breathe
            and relax.
          </p>
          <div
            style={{
              textAlign: 'right',
              marginTop: '20px',
            }}
          >
            <span
              style={{
                fontSize: '1.2rem',
                color: '#2a9d8f',
                fontWeight: '500',
                fontStyle: 'italic',
              }}
            >
              Cozy beginnings, happy futures.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
