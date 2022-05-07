import React from 'react'
import Navbar from './Navbar/Navbar';
import NewBid from '../student/NewBid';
import Offers from './Offers';

function Home() {
  return (
    <div className='home'>
        <Navbar />
        <Offers />
    </div>
    
  )
}

export default Home