import React, { useState } from 'react';

function Login() {
  const [isSignUp, setSignUp] = useState(false);

  const handleSignUpClick = () => {
    setSignUp(true);
  };

  const handleSignInClick = () => {
    setSignUp(false);
  };

  const checkPassword = () => {
    let password = document.getElementById("pswd").value.trim();
    let check = "Vaish1194";
  
    if (password === check) {
      alert("Login Successful!");
    } else {
      alert("Incorrect Password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      // Handle sign-up form submission
      console.log("Sign Up Form Submitted");
    } else {
      // Handle sign-in form submission
      checkPassword();
    }
  };

  return (
    <>
      <h2>Login/Signup Form</h2>
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              {/* Social icons */}
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" id="e-mail" />
            <input type="password" placeholder="Password" id="pswd" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              {/* Social icons */}
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details and start your journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
