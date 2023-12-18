// import Nav from "./Components/Nav"

// import Home from "./Components/Home"

// import Feature from "./Components/Feature"

// import Arrival from "./Components/Arrival"

// import Review from "./Components/Review"

// import Blog from "./Components/Blog"

// import Login from "./Components/Login"

// import SignUp from "./Components/SignUp"

// import "./Assets/CSS/whole.css"

// import Sidebar from "./Components/Sidebar"


// import { Route, Routes} from 'react-router-dom';
// import { Link } from 'react-router-dom';


// function App() {
//   return (
//     <>
//        <Nav />
//        <Sidebar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/sidebar" element={<Home />} /> */}
//         {/* <Route path="/login" element={<Login />} />
//         <Route path="/SignUp" element={<SignUp />} /> */}
//       </Routes>

//     </>
//   );
// }

// export default App;



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import "./Assets/CSS/whole.css"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Nav onSidebarToggle={handleSidebarToggle} />
      <Sidebar open={isSidebarOpen} onClose={handleSidebarToggle} />
      <Routes>
    <Route>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
    </Route>
      </Routes>
    </>
  );
}

export default App;
