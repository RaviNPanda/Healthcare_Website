import React from 'react'
import Landing from './pages/Landing';
import Home from './pages/Home'
import Register from './pages/Register';
import Profile from './pages/Profile';
import Trail from './pages/trial';
import {Route, Routes} from 'react-router-dom';
import Modal from 'react-modal';
Modal.setAppElement("#root");
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/trail" element={<Trail />}/>

      </Routes>
    </div>
  )
}

export default App
