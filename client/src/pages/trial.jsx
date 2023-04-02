import React,{useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux';
import * as Patient_data_Actions from '../redux/Patient_data';
import Sidebar from '../component/Sidebar';

function trial() {
 

  return (
    <div className='flex flex-row'>
            <Sidebar />
            <div className="flex ml-[20vw] mt-8">
                <h1>harsh yadav trail</h1>
            </div>

            
        </div>

  )
}

export default trial