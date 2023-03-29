import React,{useEffect} from 'react'
import Sidebar from '../component/Sidebar';
export default function () {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div>
        hello world
      </div>
    </div>
  )
}
