import React from 'react';
import {Link} from "react-router-dom"
import "../styles/register.css"

const Register = () => {
  return (  
        <div className='register'>
            <div className="registers">
            <h3>Register with MiddleMan</h3>
        
        <form>
            <div className="sign">
            <div className="first">
            <label htmlFor="first-name">First Name:</label> <br />
            <input type="text" name="name" id="first-name"  placeholder='Enter First Name'/> <br /> <br />
            <label htmlFor="surname">Surname:</label> <br />
            <input type="text" name="surname" id="surname" placeholder='Enter Surname' /> <br /> <br />
            <label htmlFor="email">Email:</label> <br />
            <input type="email" name="email" id="email" placeholder='Enter Email'/> <br /> <br />
           
            </div>
             <div className="second">
             <label htmlFor="tel">Phone Number:</label> <br />
            <input type="tel" name="tel" id="tel" placeholder='Enter Phone Number'/> <br /> <br />
            <label htmlFor="username">Username:</label> <br />
            <input type="text" name="username" id="username" placeholder='Enter Username' /> <br /> <br />
            <label htmlFor="password">Password:</label> <br />
            <input type="password" name="password" id="password" placeholder='Enter Password'/> <br /> <br />
            
             </div>
            
            </div>
            <div className="reg-button">
            <button>Register</button>
        
            </div>
             </form>
            </div>
                      
        </div>)
        
};

export default Register;
