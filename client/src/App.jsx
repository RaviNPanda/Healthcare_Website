import React from 'react'
import Landing from './pages/Landing';
import Register from './pages/Register';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
