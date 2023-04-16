import React from 'react';
import Sidebar from '../component/Sidebar'
import { useNavigate } from 'react-router-dom'
import mrbean from '../Images/mrbean_patient.jpeg'

const ListDoctor = () => {
    return (

        <div className="flex flex-row">
            <div className='flex justify-center w-11/12  border-8 border-red-700'>
                <div className='flex-col flex'>
                    <div className="flex justify-center">
                        <img className="w-32 h-32 rounded-full object-cover mr-4 my-4 transition-all duration-300  blur-sm hover:blur-none" src={mrbean} alt="Profile Picture" />
                    </div>
                    <div className='flex-col flex'>
                        <input type="text" placeholder='name' />
                        <input type="text" placeholder='position' />
                    </div>
                    <div>
                        <button>click</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListDoctor;