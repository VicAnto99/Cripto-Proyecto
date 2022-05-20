import React, { useEffect, useState } from 'react';
import './Offers.css';
import { useNavigate } from "react-router-dom";
import App from '../../App.js';


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
              <th scope="col"> Start Time</th>
              <th scope="col"> End Time</th>
              <th scope="col">Positions</th>
              <th scope="col"> Start Place</th>
              <th scope="col"> End Place</th>
              <th scope="col">Duration</th>
              <th scope="col">Cost</th>
              <th scope="col">Offer - 100</th>
              <th scope="col">Offer - 200</th>
              <th scope="col">Offer - 300</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">user_1</th>
              <td>Monday 25 May</td>
              <td>19:00</td>
              <td>20:00</td>
              <td>2</td>
              <td>Ciudad Universitaria</td>
              <td>Polanco</td>
              <td>1 hour</td>
              <td>10ETH</td>             
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
              </td>
            </tr>
            <tr>
              <th scope="row">user_1</th>
              <td>Monday 25 May</td>
              <td>13:00</td>
              <td>14:30</td>
              <td>1</td>
              <td>Neza</td>
              <td>Tlalpan</td>
              <td>2 hour</td>
              <td>12ETH</td>             
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
              </td>
              <td>
                  <button type="button" class="btn btn-info btn-circle btn-lg"><i class="glyphicon glyphicon-ok"></i></button>
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