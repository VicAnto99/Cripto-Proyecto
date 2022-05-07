import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
  <Auth0Provider
    domain="motomami.us.auth0.com"
    clientId="ECXlCWbLDNiOYs9jI5mIUecJud7xnSL6"
    redirectUri={window.location.origin}
  >
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/> */}
    </Routes>
  </Auth0Provider>
  </Router>
  </React.StrictMode>
);
