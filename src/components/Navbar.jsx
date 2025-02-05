import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

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
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {NAVIGATION.map((item) => (
          <li key={item.title} className="navbar-item">
            <a  href={`/${item.segment}`} className="navbar- ">
              {item.icon}
              <span>{item.title}</span>
            </a >
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
