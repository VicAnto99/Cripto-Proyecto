import React, { useEffect, useState } from 'react';
import './Offers.css';
import Web3 from 'web3';


function Offers() {

  const [ walletAccount, setWalletAccount ] = useState('')
  const [ currentChain, setCurrentChain ] = useState('')
  const riderWallet = '0x39297d2fcbe54cbBA9689D83F1862173690b3Bd2';
  const driverWallet = '0x9AEC4Adb7c7d4E6B281101B9465f936Ad2EcaD84';

  // Initialize the application and MetaMask Event Handlers
  useEffect(() => {

    // Setup Listen Handlers on MetaMask change events
    if(typeof window.ethereum !== 'undefined') {
        // Add Listener when accounts switch
        window.ethereum.on('accountsChanged', (accounts) => {

          console.log('Account changed: ', accounts[0])
          setWalletAccount(accounts[0])

        })
        
        // Do something here when Chain changes
        window.ethereum.on('chainChanged', (chaindId) => {

          console.log('Chain ID changed: ', chaindId)
          setCurrentChain(chaindId)

        })

    } else {

        alert('Please install MetaMask to use this service!')

    }
  }, []);

  // sender: 0x9AEC4Adb7c7d4E6B281101B9465f936Ad2EcaD84
  // receiver: 0x39297d2fcbe54cbBA9689D83F1862173690b3Bd2

  const handleSendTransaction = async (sender, receiver, amount) => {
    const gasPrice = '0x5208' // 21000 Gas Price
    const amountHex = (amount * Math.pow(10,18)).toString(16)
    
    const tx = {
      from: sender,
      to: receiver,
      value: amountHex,
      gas: gasPrice,
    }

    await window.ethereum.request({ method: 'eth_sendTransaction', params: [ tx ]})

  }
    
  return (
    <div className='offers'>
      <div className='container mt-5'>
        <div className='offers_container_title'>
          <h2>Offers</h2>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Date</th>
              <th scope="col"> Start Time</th>
              <th scope="col"> End Time</th>
              <th scope="col">Positions</th>
              <th scope="col"> Start Place</th>
              <th scope="col"> End Place</th>
              <th scope="col">Duration</th>
              <th scope="col">Cost</th>
              <th scope="col">Offer - 5</th>
              <th scope="col">Offer - 10</th>
              <th scope="col">Offer - 15</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{driverWallet.substring(0,12)}...</th>
              <td>Monday 25 May</td>
              <td>19:00</td>
              <td>20:00</td>
              <td>2</td>
              <td>Ciudad Universitaria</td>
              <td>Polanco</td>
              <td>1 hour</td>
              <td>10ETH</td>             
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 5)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 10)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 15)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">{driverWallet.substring(0,12)}...</th>
              <td>Monday 25 May</td>
              <td>13:00</td>
              <td>14:30</td>
              <td>1</td>
              <td>Neza</td>
              <td>Tlalpan</td>
              <td>2 hour</td>
              <td>12ETH</td>             
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 5)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 10)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 15)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">{driverWallet.substring(0,12)}...</th>
              <td>Monday 25 May</td>
              <td>09:00</td>
              <td>09:30</td>
              <td>4</td>
              <td>Coapa</td>
              <td>Insurgentes</td>
              <td>30 minutes</td>
              <td>8ETH</td>             
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 5)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 10)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg" onClick={() => handleSendTransaction(driverWallet, riderWallet, 15)}><i class="glyphicon glyphicon-ok"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='offers_container_title'>
          <h2>Rides</h2>
          <h4 className='text-center'>No rides yet.</h4>
        </div> 
      </div>
  </div> 
)}

export default Offers