import React from 'react'
import Home from './components/Home'
import './assets/All.css'
import {Routes, Route} from 'react-router-dom'

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
