import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);
 
  const [cpassword, setcPassword] = useState('');

  const [data, setData] = useState({
    name : "",
    email : "",
    password : ""
  })

  const handleCloseButtonClick = () => {
    setLoginFormVisible(false);
  };

  const handleChange=(e)=>{
    setData({...data, [e.target.id]: e.target.value})
  }

 const handleConfirmPasswordChange = (e) =>{
  setcPassword(e.target.value)
 }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.password === cpassword) {
      axios.post("http://localhost:8080/register",data)
      .then(response =>{
        console.log("Success" + response);

      })
      toast.success('🥳 Login SuccessFul!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setLoginFormVisible(false);
    } else {
      toast.error('💀 Enter Valid Email or Password!', {
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
          <Link to="/">
            <div
              id="close-login-btn"
              className="fas fa-times"
              onClick={handleCloseButtonClick}
            ></div>
          </Link>

          <form onSubmit={handleSubmit}>
            <h3>sign in</h3>
            <span>Username</span>
            <input
              type="text"
              id = "name"
              className="box"
              placeholder="enter your username"
              required
              onChange={handleChange}
            />

            <span>email</span>
            <input
              type="email"
              id = "email"
              className="box"
              placeholder="enter your email"
              required
              onChange={handleChange}
            />

            <span>password</span>
            <input
              type="password"
              id = "password"
              className="box"
              placeholder="enter your password"
              required
              onChange={handleChange}
            />

            <span>confirm password</span>
            <input
              type="password"
              className="box"
              placeholder="confirm password"
              required
              onChange={handleConfirmPasswordChange}
            />

            
            <input type="submit" value="sign in" className="btn" />
            
            {/*
            
            <div className="check-box">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">remember me</label>
            </div>



      //       <p>
      //         forgot password? <a href="">click here</a>
      //       </p>
            
      //       <Link to='/login'>
      //         <p>
      //           don't have an account ? <a href="">SignUp</a>
      //         </p>
      // </Link> 


            <p>
              forgot password? <Link to="/forgot-password">click here</Link>
            </p>
            <Link to="/signup">
              <p>
                don't have an account? <span>SignUp</span>
              </p>
            </Link>

    */}

    
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
