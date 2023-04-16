import { Layout, Menu, theme } from 'antd';
import React, { useState, useEffect } from 'react';
import { ImCalendar, ImHome, ImProfile } from 'react-icons/im';
import { MdBloodtype, MdLogout, MdSettings } from 'react-icons/md';
import { Navigate } from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;

import { Routes, Route, useNavigate } from 'react-router-dom';


// calling pages
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';
import Appointment_cards from '../pages/Appointment_cards';
import Appointment_List from '../pages/Appointment_List';


const items = [
    { label: "Home", icon: <ImHome />, key: "/Home" },
    { label: "Appoinment", icon: <ImCalendar />, key: "/appoint" },
    { label: "Profile", icon: <ImProfile />, key: "/profile" },
    { label: "Appointment History", icon: <MdBloodtype />, key: "/Appointment_list" },
    { label: "Setting", icon: <MdSettings />, key: "/setting" },
    { label: "Logout", icon: <MdLogout />, key: "/logout" }
]

function Sidebar() {

    const [open, setOpen] = useState(false);
    const token = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setOpen(!open)
    }, [collapsed])

    return (
        <Layout>
            <Sider collapsible collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                style={{
                    height:"100vh",position: "relative", left: 0, top: 0, bottom: 0,
                }}>
                <div style={{height: 32, margin: 16}}>
                    <div className="flex gap-x-4 items-center">
                        <img src="./src/assets/logo.png" alt="" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>
                        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
                            Hospital
                        </h1>
                    </div>
                </div>

                <Menu
                    onClick={({ key }) => {
                        if (key === "blood") {

                        }
                        else {
                            navigate(key);
                        }
                    }}
                    theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
            {
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Home' element={<Home />} />
                    <Route path='/appoint' element={<Appointment_cards />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/Appointment_list' element={<Appointment_List />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            }

        </Layout>


    )
}

export default Sidebar

