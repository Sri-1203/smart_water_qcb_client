import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';

import './signin.css';


  
function Signup() {
  const [Bid, setBid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    axios.post('https://smart-water-qcb-server.onrender.com/signup',  {email,password,Bid})
     .then((result) => {
      console.log(result);
      if (result.data === 'Username already registered') {
        alert('Username already registered! Please try a different username.');
        return;
       }

      if (result.data === 'Email already registered') {
       alert('E-mail already registered! Please try a different email address.');
       return;
      }
  
      alert('Registered successfully! Please Login to proceed.');
      navigate('/');

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
            <h3 className="inhead">Sign up</h3>
            <hr />
            <label htmlFor="email">
            </label>
            <input  type="email" placeholder="Your Email" name="email" required onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="psd">
            </label>
            <input type="password" placeholder="Your Password" name="psd" required onChange={(e)=>setPassword(e.target.value)}/>
            <input type="text" placeholder="Braclet ID" name="psd" required onChange={(e) => setBid(e.target.value)}/>

            <label className="text" htmlFor="remember">
              <input type="checkbox" checked={true} name="remember" /> <b>Remember Me</b>
            </label>
            <button className={'button mt-20'} type="submit">Sign Up</button>
            <Link to="/" role="text" className="intext">already have an Account</Link>
          </div>
        </form>
      </>
      </div>
    </div>
  );
}

export default Signup;