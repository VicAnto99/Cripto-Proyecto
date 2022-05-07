import React from 'react'
import './Login.css'
import { useAuth0 } from "@auth0/auth0-react";

function Login() {

   const { loginWithRedirect } = useAuth0();
  
    return (
    <div className='login'>
        <div className='text-center'>
            <button type='button' className='btn btn-primary mt-5' onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    </div>
  )
}

export default Login