import React from 'react'
import Sidebar from '../component/Sidebar';
import { useSelector } from "react-redux";


export default function () {
  const islogin = useSelector((state)=>state.Patient_data.islogin)
  console.log(islogin);

  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div>
        {islogin}
        harsh
      </div>
    </div>
  )
}
