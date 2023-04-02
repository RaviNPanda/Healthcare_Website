import React, { useState, useEffect } from "react";
import Sidebar_content from '../component/Sidebar_content';



function Sidebar() {

    const [open, setOpen] = useState(true);

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