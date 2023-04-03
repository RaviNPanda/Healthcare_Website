import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

import { IconContext } from 'react-icons';
import { MdAccountCircle } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { IoStatsChart } from 'react-icons/io5';
import { BiDonateBlood } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';


function Sidebar_content(props) {
    const Menus = [
        {
            title: "Home",
            src: <AiFillHome className={`${!props.open && "hover:"}`}/>,
            link: "/Home"
        },
        {
            title: "Profile",
            src: <MdAccountCircle />,
            link: "/profile"
        },
        {
            title: "Appoinment",
            src: <BsFillCalendar2CheckFill/>,
            link: "/trail"
        },
        {
            title: "Previous",
            src: <IoStatsChart />,
            link: "/Cal"
        },
        {
            title: "Blood donation",
            src: <BiDonateBlood size="28px"/>,
            gap: true,
            link: "/"
        },
        {
            title: "logout",
            src: <BiLogOut />,
            link: "/logout"
        }

    ];
    return (
            <ul className="pt-6">
                <IconContext.Provider value={{ color: "white", size: '25px' }}>
                    {Menus.map((menu, index) => (
                        <NavLink key={index} to={menu.link}>
                            <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                                {menu.src}
                                <span className={`${!props.open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                            </li>
                        </NavLink>
                    ))}
                </IconContext.Provider>
            </ul>
    )
}

export default Sidebar_content