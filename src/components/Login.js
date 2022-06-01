import React from 'react';
import {Link} from "react-router-dom"
import '../styles/login.css'

const Login = () => {
  return(
    <div className='login'>
        <div className="log">
        <h3>Login</h3>

<form>
    <label htmlFor="username">Username:</label> <br /> 
    <input type="text" name="username" id="username" placeholder='Enter Username'/> <br /> <br />
    <label htmlFor="password">Password:</label> <br /> 
    <input type="password" name="password" id="password" placeholder='Enter Password'/> <br /> <br />
    <button>Log In</button>
</form>          

<div className='forgot'>
    <p>Not a Subscriber? <Link to = '/register'>Register</Link> </p>
    <p><Link to='/password' >Forgot Password</Link></p>
</div>
        </div>
</div>

  )    
        
};

export default Login;
