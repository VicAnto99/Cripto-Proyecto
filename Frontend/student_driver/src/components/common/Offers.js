import React, { useEffect, useState } from 'react';
import './Offers.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function Offers() {

  const URL = "http://localhost:4000/student_drive/get_offers";
  let navigate = useNavigate(); 
  const getData = async () => {
    const response = axios.get(URL);
    return response;
  } 

  const [list, setList] = useState([]);

  useEffect(() =>{
    getData("/").then((response) =>{
      setList(response.data);
    })
  }, [])

  const routeChange = () =>{ 
    navigate('/newBid');
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
                <th scope="col">Time</th>
                <th scope="col">Positions</th>
                <th scope="col">Place</th>
                <th scope="col">Offer</th>
              </tr>
            </thead>
            <tbody>
                {/* Fetch all the offers into the table */}
                {list.map((offer, index) => {
                  return (
                    <tr key={index}>
                      <th>{offer._id.substring(0,9)}</th>
                      <td>{offer.offers_date}</td>
                      <td>{offer.offers_from}{'-'}{offer.offers_to}</td>
                      <td>{offer.offers_positions}</td>
                      <td>{offer.offers_comments}</td>
                      <td>
                        <button type="button" class="btn btn-info btn-circle btn-lg" onClick={routeChange}><i class="glyphicon glyphicon-ok"></i></button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>  
        </div>
    </div>
)}

export default Offers