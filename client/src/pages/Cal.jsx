import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Photo from "../Images/tp.png";
import Sidebar from "../component/Sidebar";
function Cal() {
  const [value, onChange] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const l='block m-3 text-black p-2 w-96 cursor-pointer transition duration-200 ease-in-out bg-transparent hover:bg-blue-300 border-2'
  const s='block m-3 text-black p-2  cursor-pointer transition duration-200 ease-in-out bg-transparent hover:bg-blue-300 rounded w-35 border-2 ml-4'
  const p='bg-blue-500 text-white p-2 m-3 rounded w-35 border-2 ml-4'
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };
  const handleOptionChange1 = (event) => {
    const selectedValue1 = event.target.value;
    setSelectedOption1(selectedValue1);
  };
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div>
      <div className="flex">
      <div className="flex m-3">
        <Calendar className=" " onChange={onChange} value={value} />
      </div>
      <div className="ml-6 p-3 mt-2 border-spacing-1 border-2 ">
      <div className="m-3 font-bold">
        <h4 >Doctor Details</h4>
        </div>
        <div className=" flex justify-between border-2">
          <div className="flex w-72 ">
            <div>
              <img className="rounded-full w-14 h-14" src={Photo} alt="" />
            </div>
            <div>
              <p className="m-3 mb-0 mt-1 font-bold">Dr. Sandy</p>
              <p className=" ml-3 mt-0 text-xs">Specialist</p>
            </div>
          </div>
          <div className="-w-96 ml-96 ">
            <button className="content-end m-2 bg-blue-500 p-2 font-bold rounded ">Appointment</button>
          </div>
        </div><br /><br />
        <div className="m=3 p-2 border-2 font-bold">
          <p>Available Clinic</p>
        </div>
        <div className="flex flex-row border-2">
      <label  className={selectedOption === "Option 1" ?  "bg-blue-500 text-white p-2 m-2 w-96 border-2" : l}>
        <input className="hidden" type="radio" name="options" value="Option 1" checked={selectedOption === "Option 1"} onChange={handleOptionChange} />
        <p className="m-3 mb-0 mt-1 font-bold">Clinic 1</p>
              <p className=" ml-3 mt-0 text-xs">Specialist</p>
      </label>
      <label  className={selectedOption === "Option 2" ?  "bg-blue-500 text-white p-2 m-2 w-96 border-2" : l}>
        <input className="hidden" type="radio" name="options" value="Option 2" checked={selectedOption === "Option 2"} onChange={handleOptionChange} />
        <p className="m-3 mb-0 mt-1 font-bold">Clinic 2</p>
              <p className=" ml-3 mt-0 text-xs">Specialist</p>
      </label>
      {/* <label className={selectedOption === "Option 3" ? "bg-gray-800 text-white p-2" : l}>
        <input className="hidden" type="radio" name="options" value="Option 3" checked={selectedOption === "Option 3"} onChange={handleOptionChange} />
        <span className="ml-2">Option 3</span>
      </label> */}
    </div>
    <br /><br />
        <div className="m=3 p-2 border-2 font-bold">
          <p>Available Time Slots</p>
        </div>
        <div className=" border-2">
        <div className="flex flex-row content-center pl-6">
        <label className={selectedOption1 === "Option 3" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 3" checked={selectedOption1 === "Option 3"} onChange={handleOptionChange1} />
        <span className="ml-2">09:00 AM</span>
      </label>
      <label className={selectedOption1 === "Option 4" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 4" checked={selectedOption1 === "Option 4"} onChange={handleOptionChange1} />
        <span className="ml-2">10:00 AM</span>
      </label>
      <label className={selectedOption1 === "Option 5" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 5" checked={selectedOption1 === "Option 5"} onChange={handleOptionChange1} />
        <span className="ml-2">11:00 AM</span>
      </label>
      <label className={selectedOption1 === "Option 6" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 6" checked={selectedOption1 === "Option 6"} onChange={handleOptionChange1} />
        <span className="ml-2">12:00 PM</span>
      </label>
      <label className={selectedOption1 === "Option 7" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 7" checked={selectedOption1 === "Option 7"} onChange={handleOptionChange1} />
        <span className="ml-2">01:00 PM</span>
      </label>
      <label className={selectedOption1 === "Option 8" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 8" checked={selectedOption1 === "Option 8"} onChange={handleOptionChange1} />
        <span className="ml-2">02:00 PM</span>
      </label>
    </div><br />
    <div className="flex flex-row  content-center pl-6">
        <label className={selectedOption1 === "Option 1" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 1" checked={selectedOption1 === "Option 1"} onChange={handleOptionChange1} />
        <span className="ml-2">03:00 PM</span>
      </label>
      <label className={selectedOption1 === "Option 2" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 2" checked={selectedOption1 === "Option 2"} onChange={handleOptionChange1} />
        <span className="ml-2">04:00 PM</span>
      </label>
      <label className={selectedOption1 === "Option 9" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 9" checked={selectedOption1 === "Option 9"} onChange={handleOptionChange1} />
        <span className="ml-2">05:00 PM</span>
      </label>
      <label className={selectedOption1 === "Option 10" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 10" checked={selectedOption1 === "Option 10"} onChange={handleOptionChange1} />
        <span className="ml-2">06:00 PM</span>
      </label>
      <label className={selectedOption1 === "Option 11" ? p : s}>
        <input className="hidden" type="radio" name="options" value="Option 11" checked={selectedOption1 === "Option 11"} onChange={handleOptionChange1} />
        <span className="ml-2">07:00 PM</span>
      </label>
      
    </div>
    </div>
      </div>
    </div>
      </div>
    </div>
   
  );
}
export default Cal;
