import React from 'react'
import Landing from './pages/Landing';
import Land from './pages/land'
import Register from './pages/Register';


import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Dashboard" element={<Register />}/>
        <Route path="/Home" element={<Land />}/>
      </Routes>
      {/* <BrowserRouter>
        <Sidebar>
      <Routes>
      
        
        <Route path="/Register" element={<Register />}/>
        

      
    
      <Route path="/Dashboard" element={<Register />}/>
        <Route path="/Home" element={<Land />}/>
      </Routes>
    </Sidebar>
    </BrowserRouter> */}

    </div>
  )
}

export default App
