import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import * as Patient_data_Actions from '../redux/Patient_data';
import Sidebar_content from '../component/Sidebar_content';



function Sidebar() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Patient_data = useSelector((state)=>state.Patient_data.personal_data)

    const callAboutPage = async () => {
        try {
            const res = await fetch('/api/Home', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json();
            dispatch(Patient_data_Actions.collectdata(data));
            if (!res.status === 200) {
                const error = new error(res.error)
                throw error;
            }
        } catch (error) {
            navigate('/home')
            window.alert("Please Login First.")
        }
    }

    useEffect(() => {
        if(Object.keys(Patient_data).length === 0){
            callAboutPage()
        }
    }, []);

    return (
        <div className="flex">
            <div className={`${open ? 'w-72' : 'w-20'} h-screen p-5 pt-8 bg-blue-600 relative`}>
                <img src="./src/assets/control.png" className={`absolute cursor-pointer rounded-full -right-3 top-9 border-2 border-dark-purple ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)} />
                <div className="flex gap-x-4 items-center">
                    <img src="./src/assets/logo.png" alt=""
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                    />
                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
                        Designer
                    </h1>
                </div>
                <Sidebar_content open={open}/>
            </div>
        </div>
    )
}

export default Sidebar