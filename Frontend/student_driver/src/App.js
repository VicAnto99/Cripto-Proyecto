import React from 'react';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './components/common/Login.js';
import Logout from './components/common/Logout.js';
import Home from './components/common/Home.js';

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className='app'>
      {/* If theres a user, show profile and logout. Otherwise only login */}
      {isAuthenticated ? (
        <>
          <Home />
        </>  
      ) : (
        <Login />
      )}
          
    </div>
  );
}

export default App;
