import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard.jsx';
import Product from './Pages/Product.js';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.js';
import Login from './Pages/Login.js';
import Features from './Pages/Featured.js';
import NewArrival from './Pages/NewArrival.jsx';
import Footer from './Pages/Footer.js';

const App = () => {
  return (
    <React.StrictMode>
    <BrowserRouter>

    <Navbar/>
      <Sidebar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/newarrival" element={<NewArrival />} />
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