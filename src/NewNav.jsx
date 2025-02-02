import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useNavigate, useLocation, Route, Routes } from 'react-router';
import Home from './screens/Home';
import Product from './screens/Product';
// import AddBlog from './AddBlog';
// import Home from './Home';

// Navigation configuration
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

// Theme configuration
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Main content with routing
function DemoPageContent() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

function NewNav({ window }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Parse search parameters using URLSearchParams
  const searchParams = new URLSearchParams(location.search);

  // Custom router logic for AppProvider
  const router = {
    pathname: location.pathname, // Current path
    navigate: navigate,          // Provide navigate explicitly
    searchParams: searchParams,  // Add searchParams to the router object
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
         logo: <img src="https://t3.ftcdn.net/jpg/04/55/44/80/360_F_455448073_L2iwBovQhZoO6YNo9IWimRhpisCDr2LP.jpg" alt="" />,
        title: 'SungleBugs',
        homeUrl: '/',
      }}
      router={router} // Pass the fixed router object
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
  );
}

NewNav.propTypes = {
  // Injected by the documentation to work in an iframe. Remove if not needed.
  window: PropTypes.func,
};

export default NewNav;
