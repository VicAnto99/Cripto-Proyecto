import React, { useEffect, useState } from 'react';
import './Offers.css';
import { useNavigate } from "react-router-dom";



function Offers() {
    
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
              <th scope="col">Time</th>
              <th scope="col">Positions</th>
              <th scope="col">Place</th>
              <th scope="col">Offer</th>
            </tr>
          </thead>
          <tbody>
            
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