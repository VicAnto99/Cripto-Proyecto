import React from 'react'
import './Login.css'
import { useAuth0 } from "@auth0/auth0-react";

function Login() {

   const { loginWithRedirect } = useAuth0();
  
    return (
    <div className='login'>
        <div className='text-center'>
            <img src='studentdriver-logo.jpeg' className='img'></img>
            <h2 className='txt'>Clic on login to enjoy the benefits of StudentDriver</h2>
            <h2>and share rides with people from Tec de Monterrey</h2>
        </div>
        <div>
            <button type='button' className='btn btn-primary boton' onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    </div>
  )
}

export default Login