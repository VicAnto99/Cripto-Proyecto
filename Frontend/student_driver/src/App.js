import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import Login from './components/common/Login.js';
import Logout from './components/common/Logout.js';
import Home from './components/common/Home.js';

function App() {

  const { isAuthenticated } = useAuth0();
  const [account, setAccount] = useState(); // state variable to set account.
  const [balance, setBalance] = useState(); // state variable to set balance.

  useEffect(() => {
    async function load(){
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      // Balance of the account.
      const balance = await web3.eth.getBalance(accounts[0]);

      setBalance(web3.utils.fromWei(balance, 'ether'));
      setAccount(accounts[0]);
    }
    load();
  }, []);

  return (
    <div className='app'>
      {/* If theres a user, show profile and logout. Otherwise only login */}
      {isAuthenticated ? (
        <>
          <Home />
          <p className='text-center mt-5'>Your account is: {account}</p>
          <p className='text-center'>Your balance is: {balance} ETH</p>
        </>  
      ) : (
        <Login />
      )}
          
    </div>
  );
}

export default App;
