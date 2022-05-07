import React from 'react'
import Logout from '../Logout.js';

function Navbar() {
  return (
    <div className="home_navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">StudentDrive</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              <a class="nav-link" href='/rideOffers'>RideShare Offers</a>
              <a class="nav-link" href='/newBid'>New Bid</a>
              <a class='nav-link' href='#'>About us</a>
            </div>
          </div>
          <Logout />
        </div>   
      </nav>
    </div>
  )
}

export default Navbar