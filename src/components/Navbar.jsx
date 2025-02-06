import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useLocation } from 'react-router-dom';
import './NavBar.css';

const NAVIGATION = [
  {
    segment: '',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'baby-care',
    title: 'Baby Care',
    icon: <ChildFriendlyIcon />,
  },
  {
    segment: 'pregnancy-care',
    title: 'Pregnancy Care',
    icon: <PregnantWomanIcon />,
  },
  {
    segment: 'login',
    title: 'Login',
    icon: <LoginIcon />,
  },
  {
    segment: 'user',
    title: 'User',
    icon: <PersonIcon />,
  },
  {
    segment: 'admin',
    title: 'Admin',
    icon: <AdminPanelSettingsIcon />,
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       {/* The button to toggle the sidebar */}
       <button className="toggle-btn" onClick={toggleNavBar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <nav className={`navbar ${isOpen ? 'open' : 'closed'}`}>
        <ul className="navbar-list">
          {NAVIGATION.map((item) => (
            <li key={item.title} className="navbar-item">
              <a
                href={`/${item.segment}`}
                className={location.pathname === `/${item.segment}` ? 'active' : ''}
              >
                <span className="icon">{item.icon}</span>
                {isOpen && <span className="title">{item.title}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
     
    </div>
  );
}

export default NavBar;
