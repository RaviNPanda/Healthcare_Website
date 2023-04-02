import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Modal from 'react-modal';
import { ImCross } from 'react-icons/im';
import { MdOutlineDoneOutline } from 'react-icons/md';

import {useSelector,useDispatch} from 'react-redux';
import * as Patient_data_Actions from '../redux/Patient_data';

function Login() {

    const islogin = useSelector((state)=>state.Patient_data.islogin)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "", password: ""
    });

    // model states
    const [error, seterror] = useState(false) //for error modal
    const [login, setlogin] = useState(false) // for login modal
    const [Isopen, setIsopen] = useState(false) // for modal close and open
  
    
    const collectdata = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handlelogin = async (e) => {
        e.preventDefault();
        const { email, password } = data;
      
        try {
          const res = await fetch('/api/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email, password
            })
          });
          const message = await res.json();
      
          if (res.status === 422 || res.status === 522 || !message) {
            seterror(true);
            setIsopen(true);
          } else {
            setIsopen(true);
            setlogin(true);
            dispatch(Patient_data_Actions.loginupdate());
          }
        } catch (error) {
          console.error(error);
        }
      };


    return (
        <div>
            {/* modal over error */}
            {error &&
                <>
                    <Modal onRequestClose={() => setIsopen(false)} isOpen={Isopen} className="space-y-3 shadow-lg shadow-black z-10 text-white w-3/12 h-2/6 mx-[38vw] my-[30vh] p-4 bg-blue-600 rounded-xl">
                        <div className='flex justify-center'>
                            <ImCross size="3rem" className='flex align-middle' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <h1 className='font-bold text-2xl'>Opps!!</h1>
                            <p>INvalid Information</p>
                        </div>
                        <div className='flex justify-between'>
                            <button onClick={() => {setIsopen(false), seterror(false)}} className="mt-[15px] bg-orange-400 rounded-xl w-24 p-[3px] hover:bg-orange-200">Close</button>
                            <button onClick={() => { setIsopen(false), seterror(false)}} className="mt-[15px] bg-green-400 rounded-xl w-24 p-[3px] hover:bg-green-200">Ok</button>
                        </div>
                    </Modal>
                </>
            }
            {/* Modal over login success */}
            {login &&
                <>
                    <Modal onRequestClose={() => setIsopen(false)} isOpen={Isopen} className="space-y-3 shadow-lg shadow-black z-10 text-white w-3/12 h-2/6 mx-[38vw] my-[30vh] p-4 bg-blue-600 rounded-xl">
                        <div className='flex justify-center'>
                            <MdOutlineDoneOutline size="3rem" className='flex align-middle' />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <h1 className='font-bold text-2xl'>Success..</h1>
                            <p>Logged In successfully</p>
                        </div>
                        <div className='flex justify-between'>
                            <button onClick={() => {setIsopen(false), setlogin(false), navigate("/Home")}} className="mt-[15px] bg-green-400 rounded-xl w-24 p-[3px] hover:bg-green-200">Ok</button>
                        </div>
                    </Modal>
                </>
            }
            {/* login form */}
            <form method='POST'>
                <div className="relative mb-3 xl:w-96">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        onChange={collectdata}
                        value={data.email}
                        name="email"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="relative mb-3 xl:w-96">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Password
                    </label>
                    <input
                        onChange={collectdata}
                        value={data.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex  justify-center flex-col">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlelogin}>
                        Login
                    </button>
                    <NavLink to="/Register" className="mt-3 hover:text-blue-600">Not registered yet ? </NavLink>
                </div>
            </form>
        </div>
    )
}

export {Login}