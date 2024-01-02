import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import Home from './Components/Home'
import "./assets/All.css"

function App() {

  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
       </Routes>
    </>
  )
}

export default App
