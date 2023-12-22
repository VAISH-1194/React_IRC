import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function Login() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCloseButtonClick = () => {
    setLoginFormVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (email === 'vaish1194@gmail.com' && password === '12345') {
      toast.success('🦄 Wow so easy!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        
      setLoginFormVisible(false); 
    } 
    
    else {
      toast.error('🦄 Wow so easy!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
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
            <h3>sign in</h3>
            <span>email</span>
            <input
              type="email"
              className="box"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>


            <span>password</span>
            <input
              type="password"
              className="box"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>

            <div className="check-box">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">remember me</label>
            </div>

            <input type="submit" value="sign in" className="btn" />
            <p>
              forgot password? <a href="">click here</a>
            </p>

            <Link to='/login'>
                <p>
                  don't have an account ? <a href="">SignUp</a>
                </p>
            </Link>
          </form>
        </div>
      )}

      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />

    </>
  );
}

export default Login;
