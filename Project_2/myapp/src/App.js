import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard.jsx';
import Product from './Pages/Product.js';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import TopOffers from './Pages/TopOffers.js';

const App = () => {
  return (
    <React.StrictMode>
    <BrowserRouter>

    <Navbar/>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topoffers" element={<TopOffers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;