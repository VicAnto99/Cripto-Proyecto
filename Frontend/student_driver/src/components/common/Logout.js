import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Logout.css'

function Logout() {

    const { logout } = useAuth0();

  return (
    <div className='logout'>
        <button type='button' className='btn btn-danger' onClick={() => logout( {returnTo: window.location.origin} )}>Log Out</button>
    </div>
  )
}

export default Logout