import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './RideOffers.css'
import { useNavigate } from "react-router-dom";

function RideOffers() {

    const { loginWithRedirect } = useAuth0();


    // Test
    let navigate = useNavigate();

    const routeChange = () =>{ 
        navigate(-1);
    }

   
    return (
        <div className='container'>
            <div className="card">
                <hr></hr>
                <h4 className="card-title text-center"> New Rideshare Publication </h4>
                <hr></hr>
                <div className="row">

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Rideshare from:</h5>
                                <form className="form-floating">
                                    <input type="time" class="form-control" id="floatingPassword" name='from'/>
                                </form>
                                <h5 className="card-title">To:</h5>
                                <form className="form-floating">
                                    <input type="time" class="form-control" id="floatingPassword" name='to'/>
                                </form>
                                <h5 className="card-title">Date:</h5>
                                <form className="form-floating">
                                    <input type="date" class="form-control" id="floatingPassword" name='date'/>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Positions:</h5>
                                <form className="form-floating">
                                    <input type="number" class="form-control" id="floatingPassword" name='positions'/>
                                </form>
                                <h5 className="card-title">Cost:</h5>
                                <form className="form-floating">
                                    <input type="number" class="form-control" id="floatingPassword" placeholder='0.00 MXN' name='cost'/>
                                </form>
                                <h5 className="card-title">Additional Comments:</h5>
                                <form className="form-floating">
                                    <input input='text' class="form-control" id="floatingPassword" placeholder='0.00 MXN' name='comments'/>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row text-center">
                    <div className="col-sm-15">
                    <button type="submit" className="btn btn-success button">Publish</button>
                    </div>

                    
                </div>

            </div>
    </div>
   )
 }
 
 export default RideOffers