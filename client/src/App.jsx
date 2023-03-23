import React from 'react'
import Landing from './pages/Landing';
import Land from './pages/land'
import Register from './pages/Register';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Home" element={<Land />}/>
      </Routes>
      

    </div>
  )
}

export default App
