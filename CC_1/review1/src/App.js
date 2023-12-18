import Nav from "./Components/Nav"

import Home from "./Components/Home"

import Feature from "./Components/Feature"

import Arrival from "./Components/Arrival"

import Review from "./Components/Review"

import Blog from "./Components/Blog"

import Login from "./Components/Login"

import SignUp from "./Components/SignUp"

import whole from "./Assets/CSS/whole.css"


import { Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
       <Nav />
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />


        {/* <Route path="/reviews" element={<Review />} />
          <Route path="/blog" element={<Blog />} /> 
       <Route path="/arrival" element={<Arrival/>} />
        <Route path="/features" element={<Feature/>} />   */}


      </Routes>

    </>
  );
}

export default App;