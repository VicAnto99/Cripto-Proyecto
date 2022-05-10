import React from 'react'
import Logout from '../Logout.js';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h2>StudentDrive</h2>
        </NavLink>
        <Bars/>
          <NavMenu>
            <NavLink to='/rideOffers' activeStyle>Rideshare Offers</NavLink>
            <NavLink to='/newBid' activeStyle>New Bid</NavLink>
            <NavLink to='/contact' activeStyle>Contact Us</NavLink>
          </NavMenu>
          <Logout/>
      </Nav>
    </>
  )
}

export default Navbar