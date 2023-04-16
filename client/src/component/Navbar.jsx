import React, { useState,useEffect } from 'react';
import logo from '../Images/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import Ant_modal from '../Modals/Ant_modal';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const showoption =()=>{
    setShowModal(true)
  }
  
  
  return (
    <div>
      <section className="fixed z-10 w-full bg-blue-700 h-24 flex flex-row justify-between">
        {/* logo section */}
        <div className="flex flex-row space-x-2 pt-3 pl-12">
          <img src={logo} className="m-1 w-14 h-14" alt="" />
          <div className="flex flex-col mt-1">
            <span className="font-mono text-[23px] text-white font-bold w-1/4">HOSPITAL</span>
            <span className="font-mono text-[9px] text-white font-bold">Bayerische Motoren Werke</span>
          </div>
        </div>
        {/* logo section end*/}

        <div className="pl-7 p-7">
          <button
            className=" text-white shadow-slate-700 shadow-xl bg-gradient-to-r from-purple-500 ... p-2 rounded-3xl px-9 hover:bg-pink-400 btn btn-warning ms-3  hover:text-black"
            onClick={() => showoption() }
            role="button"
          >
            Sign Up
          </button>
        </div>
      </section>
          {showModal && <Ant_modal open={true} setShowModal={setShowModal}/>}
    </div>
  );
}

export default Navbar;
