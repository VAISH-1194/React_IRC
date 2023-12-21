import  React from 'react';
import AddUsers from './Pages/AddUsers';
import EditUsers from './Pages/EditUsers';
import Users from './Pages/Users';
import {Routes, Route} from 'react-router-dom';
import './Assets/CSS/core.css'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/addusers' element={<AddUsers/>}/>
          <Route path='/editusers/:id' element={<EditUsers/>}/>
        </Routes>
    </>
  );
}

export default App;
