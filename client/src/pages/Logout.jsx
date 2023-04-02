import React,{useState} from 'react'
import Modal from 'react-modal';

import { useNavigate } from 'react-router-dom'
import {BiLogOut} from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';

import * as Patient_data_Actions from '../redux/Patient_data';

function Logout() {
    const [Isopen, setIsopen] = useState(true)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout_function = async () => {
        fetch('/api/logout', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(() => {
            dispatch(Patient_data_Actions.loginupdate());
            navigate('/')
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div>
            <>
                <Modal onRequestClose={() => setIsopen(false)} isOpen={Isopen} className="space-y-3 shadow-lg shadow-black z-10 text-white w-3/12 h-2/6 mx-[38vw] my-[30vh] p-4 bg-blue-600 rounded-xl">
                    <div className='flex justify-center'>
                        <BiLogOut size="3rem" className='flex align-middle' />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-bold text-2xl'>LOGOUT</h1>
                        <p>Do you really want to Logout!!</p>
                    </div>
                    <div className='flex justify-between'>
                        <button onClick={() => { setIsopen(false); navigate('/') }} className="mt-[15px] bg-orange-400 rounded-xl w-24 p-[3px] hover:bg-orange-200">Close</button>
                        <button onClick={() => { setIsopen(false); logout_function()}} className="mt-[15px] bg-green-400 rounded-xl w-24 p-[3px] hover:bg-green-200">Ok</button>
                    </div>
                </Modal>
            </>
        </div>
    )
}

export default Logout