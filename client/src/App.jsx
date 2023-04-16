import React from 'react'
import Sidebar from './component/Sidebar';
import Landing from './pages/Landing';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const islogin = useSelector((state) => state.Patient_data.islogin)
  // console.log(islogin);
  return (
    <div>
      {
        islogin && <Sidebar />
      }

      {
        !islogin && <Landing />
      }
    </div>
  )
}

export default App