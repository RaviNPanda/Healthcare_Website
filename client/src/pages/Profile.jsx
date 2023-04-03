import React,{useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import mrbean from '../Images/mrbean_patient.jpeg'
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
            <body class="bg-gray-100">
	<header class="bg-white py-2 px-8 shadow-md">
		<h1 class="text-3xl font-bold">Patient Profile</h1>
	</header>
	
		<div class="flex justify-center">
   
			<img class="w-32 h-32 rounded-full object-cover mr-4 my-4  max-w-lg transition-all duration-300  blur-sm hover:blur-none" src={mrbean} alt="Profile Picture">
          
            </img>
			<div class="text-xl">
				<h2 class="font-bold my-8">{Patient_data.name}</h2>
				<p class="text-gray-600">Tuberculosis</p>
			</div>
		</div>
		<div class="mt-3 bg-gray-200">
			<h3 class="font-bold mb-2 ml-3">Description</h3>
			<p class="text-gray-600 ml-3">Tuberculosis (TB) is an infectious disease caused by a bacterium called Mycobacterium tuberculosis. TB primarily affects the lungs, but it can also affect other parts of the body, such as the kidneys, spine, and brain.</p>
		</div>
        <div class="mt-6 bg-gray-200">
			<h3 class="font-bold mb-2 ml-3">Common Preventions</h3>
			<ul class="list-disc list-inside text-gray-600 ml-3">
                <li class="text-gray-600">Vaccination</li>
                <li class="text-gray-600">Infection Control</li>
                <li class="text-gray-600">Screening</li>
            </ul>
		</div>
		<div class="mt-6">
			<h3 class="font-bold mb-2 ml-3">Details</h3>
			<ul class="list-disc list-inside text-gray-600 ml-3">
				<li>Email: {Patient_data.email}</li>
				<li>Phone: {Patient_data.phone}</li>
				<li>Date of Birth: {Patient_data.dob}</li>
                <li>Gender: {Patient_data.gender}</li>
			</ul>
		
        </div>
            </body>
        </div>

    )
}

export default Profile