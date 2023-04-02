import React,{useEffect} from 'react'
import ref from '../Images/20-ITA56-24.jpg';
import { useSelector, useDispatch } from 'react-redux';
import * as Patient_data_Actions from '../redux/Patient_data';
import Sidebar from '../component/Sidebar';

function trial() {
 

  return (
    <div className='flex flex-row'>
            <Sidebar />
            <div class="flex flex-col">
              <div class="flex flex-row">
            <div class="w-96 h-64 bg-gray-200 rounded-lg shadow-xl mt-8 mx-5 hover:bg-blue-600">
             <img src={ref} alt="Profile picture" class="w-20 h-20 rounded-full mr-4 my-8 mx-4"></img>
  <div>
    <h2 class="text-xl font-bold mb-2 hover:text-white mx-4">Dr.Ravinarayan Panda</h2>
    <p class="text-black text-base hover:text-white mx-4">Chief Surgeon, M.B.B.S</p>
    <p class="text-black text-base hover:text-white mx-4">Sunday-Friday</p>
    <p class="text-black text-base hover:text-white mx-4">10:00 AM to 1:00 PM & 4:00 PM to 8:00 PM</p>
  </div>
  
            </div>
            <div class="w-96 h-64 bg-gray-200 rounded-lg shadow-xl mt-8 mx-9 hover:bg-blue-600">
  
            </div>
            </div>
            <div class="flex flex-row">
            <div class="w-96 h-64 bg-gray-200 rounded-lg shadow-xl mt-8 mx-5 hover:bg-blue-600">
  
            </div>
            <div class="w-96 h-64 bg-gray-200 rounded-lg shadow-xl mt-8 mx-9 hover:bg-blue-600">
  
            </div>
            </div>

            </div>
            
        </div>

  )
}

export default trial