import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import Sidebar from '../component/Sidebar';
import * as Patient_data_Actions from '../redux/Patient_data';

function Profile() {
    const Patient_data = useSelector((state) => state.Patient_data.personal_data)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const callAboutPage = async () => {
        try {
            const res = await fetch('/api/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json();

            if (res.status != 200) {
                const error = new error(res.error)
                throw error;
            }
            else{
                dispatch(Patient_data_Actions.collectdata(data));
                console.log(data);
            }
        } catch (error) {
            window.alert("Please Login First.")
            navigate('/Home')
        }
    }

    useEffect(() => {
        if(Object.keys(Patient_data).length === 0){
            callAboutPage()
        }
    }, []);

    return (
        <div className='flex flex-row'>
            <Sidebar />
            <div className="flex ml-[20vw] mt-8">
                <ul className="space-y-4">
                    <li>
                        <div className="w-28 h-28 rounded-3xl bg-red-600"></div>
                    </li>
                    <li>
                        <div className="">{Patient_data.name}</div>
                    </li>
                    <li>
                        <div className="">{Patient_data.email}</div>
                    </li>
                    <li>
                        <div className="">{Patient_data.phone}</div>
                    </li>
                    <li>
                        <div className="">{Patient_data.dob}</div>
                    </li>
                    <li>
                        <div className="">{Patient_data.gender}</div>
                    </li>                 
                </ul>
            </div>
            
        </div>

    )
}

export default Profile