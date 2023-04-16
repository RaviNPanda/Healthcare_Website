import React from "react";
import { useNavigate } from 'react-router-dom'
import mrbean from '../Images/mrbean_patient.jpeg'
import { useSelector, useDispatch } from "react-redux";
import * as Patient_data_Actions from '../redux/Patient_data';
import Sidebar from '../component/Sidebar';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function Profile() {
    const Patient_data = useSelector((state) => state.Patient_data.personal_data)

    return (
        <Layout
            className="site-layout"
            style={{

            }}
        >
            <Header
                h1
                style={{
                    padding: 0,
                    background: "#00004d",
                }}
            >
                <h1 className='ml-6 mt-4 font-bold text-white text-2xl'>{`${String(Patient_data.name).toUpperCase()}'s Profile.`}</h1>
            </Header>

            <Content
                style={{
                    margin: '24px 16px 0',
                    overflow: 'initial',
                }}
            >
                <div className="flex justify-center">

                    <img className="w-32 h-32 rounded-full object-cover mr-4 my-4  max-w-lg transition-all duration-300  blur-sm hover:blur-none" src={mrbean} alt="Profile Picture">

                    </img>
                    <div className="text-xl">
                        <h2 className="font-bold my-8">{Patient_data.name}</h2>
                        <p className="text-gray-600">Tuberculosis</p>
                    </div>
                </div>
                <div className="mt-3 bg-gray-200">
                    <h3 className="font-bold mb-2 ml-3">Description</h3>
                    <p className="text-gray-600 ml-3">Tuberculosis (TB) is an infectious disease caused by a bacterium called Mycobacterium tuberculosis. TB primarily affects the lungs, but it can also affect other parts of the body, such as the kidneys, spine, and brain.</p>
                </div>
                <div className="mt-6 bg-gray-200">
                    <h3 className="font-bold mb-2 ml-3">Common Preventions</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-3">
                        <li className="text-gray-600">Vaccination</li>
                        <li className="text-gray-600">Infection Control</li>
                        <li className="text-gray-600">Screening</li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="font-bold mb-2 ml-3">Details</h3>
                    <ul className="list-disc list-inside text-gray-600 ml-3">
                        <li>Email: {Patient_data.email}</li>
                        <li>Phone: {Patient_data.phone}</li>
                        <li>Date of Birth: {String(Patient_data.dob).substring(0,10)}</li>
                        <li>Gender: {Patient_data.gender}</li>
                    </ul>

                </div>
            </Content>
        </Layout>

    )
}

export default Profile