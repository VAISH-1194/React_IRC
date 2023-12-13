import Nav from "./components/Nav"

import Home from "./components/Home"

import Feature from "./components/Feature"

import Arrival from "./components/Arrival"

import Review from "./components/Review"

import Blog from "./components/Blog"

import Login from "./components/Login"

import SignUp from "./components/SignUp"

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