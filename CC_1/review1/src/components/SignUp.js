import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';

function SignUp() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCloseButtonClick = () => {
    setLoginFormVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (email === 'vaish1194@gmail.com' && password === '12345') {
    //   window.alert('Login successful!');
    //   setLoginFormVisible(false); 
    // } else {
    //   alert('Invalid username or password. Please check your credentials.');
    // }
    
  };

  return (
    <>
      {isLoginFormVisible && (
        <div className="login-form-container" id="login">
          <div
            id="close-login-btn"
            className="fas fa-times"
            onClick={handleCloseButtonClick}
          ></div>

          <form onSubmit={handleSubmit}>
            <h3>sign Up</h3>
            <span>email</span>
            <input
              type="email"
              className="box"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>password</span>
            <input
              type="password"
              className="box"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="check-box">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">remember me</label>
            </div>

            <input type="submit" value="sign in" className="btn" />
            {/* <p>
              forgot password? <a href="">click here</a>
            </p> */}
            <p>
              already have an account ? <a href="">SignIn</a>
            </p>
          </form>
        </div>
      )}
    </>
  );
}

export default SignUp;
