import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure you're using 'react-router-dom' instead of 'react-router'
import Router from './Router.jsx';
import { StrictMode } from 'react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
