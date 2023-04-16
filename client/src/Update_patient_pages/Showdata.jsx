import React, { useState } from 'react'
import Sidebar from '../component/Sidebar'
import Medical_data from './Medical';
import Personal_admin from './Personal_admin';
import Charges from './Charges';
import {FiEdit} from 'react-icons/fi';
function Showdata() {
    const [Medical, setMedical] = useState(true)
    const [personal, setpersonal] = useState(false)
    const [charges, setcharges] = useState(false)
    return (
            <div className='flex flex-col w-11/12 m-2'>
                <div className='flex flex-row w-12/12  justify-around h-fit m-3 p-2 bg-gray-300'>
                    <div className={`${Medical === true ? 'bg-blue-500 p-2 rounded-2xl text-white':''} w-4/12 hover:cursor-pointer flex justify-center` } onClick={() => {setMedical(true),setpersonal(false),setcharges(false)} }>
                        <button>Medical detail</button>
                    </div>
                    <div className={`${personal === true ? 'bg-blue-500 p-2 rounded-2xl text-white':''} w-4/12 hover:cursor-pointer flex justify-center` } onClick={() => {setMedical(false),setpersonal(true),setcharges(false)}}>
                        <button>Personal detail</button>
                    </div>
                    <div className={`${charges === true ? 'bg-blue-500 p-2 rounded-2xl text-white':''} w-4/12 hover:cursor-pointer flex justify-center` } onClick={() => {setMedical(false),setpersonal(false),setcharges(true)}}>
                        <button>Charges</button>
                    </div>
                </div>
                <div className='flex bg-red-500 w-12/12 h-3/4 m-3 justify-center'>
                    {
                        Medical && !personal && !charges &&
                        <Medical_data />
                    }
                    {
                        !Medical && personal && !charges &&
                        <Personal_admin />
                    }
                    {
                        !Medical && !personal && charges &&
                        <Charges />
                    }
                </div>
                <div className='flex justify-end m-2'>
                    <button className='p-3 bg-green-500 rounded-full hover:bg-green-700 hover:text-white hover:shadow-xl hover:shadow-gray-500'><FiEdit size={"5vh"}/></button>
                </div>
            </div>
    )
}

export default Showdata