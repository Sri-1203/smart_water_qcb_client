import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

import './signin.css';
function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios.post('https://smart-water-qcb-server.onrender.com/login',  {email,password})
        .then(result => {
            console.log(result);
            if(result.data === "Success"){
                console.log("Login Success");
            localStorage.setItem('email', email);
              alert(`Login successfull: ${email}`);
                navigate('/dashboard');
            }
            else if(result.data.message === "Wrong password"){
              alert('Incorrect password! Please try again.');
          }
     })
     .catch((err) => console.log(err));
   };
  
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
      <>
        <h1 className="heading">
          <Link to="/">Smart Water</Link>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h3 className="inhead">Sign in</h3>
            <hr />
            <label htmlFor="email">
            </label>
            <input  type="email" placeholder="Your Email" name="email" required onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="psd">
            </label>
            <input type="password" placeholder="Your Password" name="psd" required onChange={(e)=>setPassword(e.target.value)}/>
            <label className="text" htmlFor="remember">
            <input type="checkbox" checked={true} name="remember" /> <b>Remember Me</b>
            </label>
            <button className={'button mt-10'} type="submit">Sign In</button>
          </div>
        </form>
        <div className='container'>
        <Link className={'button mt-10'} to="/signup" role="button">Sign Up</Link>
        </div>
      </>
      </div>
    </div>
  );
}

export default Signin;