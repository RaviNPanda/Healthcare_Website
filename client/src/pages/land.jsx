import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function land(){
    const [open,setOpen]=useState(true);
    const navigate = useNavigate();
    const Menus= [
        {
            title:"Home",
            src:"Chart_fill"
        },
        {
            title:"Dashboard",
            src:"Chart_fill"
        },
        {
            title:"Schedule",
            src:"Calendar"
        },
        {
            title:"Reliable Doctor",
            src:"User",
            gap:true

        },
        {
            title:"Appointment",
            src:"Chat"
        }

    ];

    const callAboutPage =async ()=>{
        try { 
          const res = await fetch('/api/Home',{
            method:"GET",
            headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:"include"
          })
  
          const data = await res.json();
          console.log("this is about of react",data)
        //   setUserdata(data);
  
          if(!res.status===200){
            const error = new error(res.error)
            throw error;
          }
        } catch (error) {
          navigate('/')
          window.alert("Please Login First.")
        }
     }
  
    useEffect(() => {
        callAboutPage()
    }, []);
  
    return(
        <div className="flex">
        <div className={`${open ? 'w-72' : 'w-20'} h-screen p-5 pt-8 bg-dark-purple relative`}>
            <img src="./src/assets/control.png" className={`absolute cursor-pointer rounded-full -right-3 top-9 border-2 border-dark-purple ${!open && 'rotate-180'}`} 
            onClick={()=> setOpen(!open)}/>
            <div className="flex gap-x-4 items-center">
                <img src="./src/assets/logo.png" alt="" 
                className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                />
                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>
                    Designer
                </h1>
            </div>
            <ul className="pt-6">
                {Menus.map((menu,index)=> (
                   <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                    <img src={`./src/assets/${menu.src}.png`}/>
                    <span className={`${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                   </li> 
                ))}
            </ul>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <h1>Home Page</h1>
        </div>
        </div>
    )
}

export default land