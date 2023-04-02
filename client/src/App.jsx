import React from 'react'
import Landing from './pages/Landing';
import Home from './pages/Home'
import Register from './pages/Register';


import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {

  const islogin = useSelector((state) => state.Patient_data.islogin)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/Register" element={<Register />}/>

        

        {
          islogin &&
          <>
           
            <Route path="/Home" element={<Home />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/logout" element={<Logout />}/>
            <Route path="/trail" element={<Trail />}/>
          </>
        }
        <>
        <Route path="*" element={<Login_Error />}/>
        </>
             


      </Routes>
    </div>
  )
}

export default App
