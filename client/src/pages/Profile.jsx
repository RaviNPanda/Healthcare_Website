import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from '../component/Sidebar';
function Profile() {
    const Patient_data = useSelector((state) => state.Patient_data.personal_data)
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