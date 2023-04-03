import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Photo from "../Images/tp.png";
import Sidebar from "../component/Sidebar";
function Cal() {
  const [value, onChange] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const l = 'block m-3 text-black p-2 w-96 cursor-pointer transition duration-200 ease-in-out bg-transparent hover:bg-blue-300 border-2'
  const s = 'block m-3 text-black p-2  cursor-pointer transition duration-200 ease-in-out bg-transparent hover:bg-blue-300 rounded w-35 border-2 ml-4'
  const p = 'bg-blue-500 text-white p-2 m-3 rounded w-35 border-2 ml-4'
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };
  const handleOptionChange1 = (event) => {
    const selectedValue1 = event.target.value;
    setSelectedOption1(selectedValue1);
  };
  const times = [
    {
      time: "10:PM"
    },
    {
      time: "11:PM"
    },
    {
      time: "12:PM"
    },
    {
      time: "1:PM"
    },
    {
      time: "2:PM"
    },
    {
      time: "3:PM"
    },
    {
      time: "4:PM"
    },
    {
      time: "5:PM"
    },
    {
      time: "6:PM"
    },
    {
      time: "7:PM"
    },
  ]
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div>
        <div className="flex">
          {/* calendar started */}
          <div className="flex m-3">
            <Calendar className="" onChange={onChange} value={value} />
          </div>
          {/* Calendar ended  */}
          <div className="w-8/12 ml-6 p-3 mt-2 border-spacing-1 border-2">
            <div className="m-3 font-bold">
              <h4 >Doctor Details</h4>
            </div>
            {/* appointment button and image */}
            <div className=" flex border-2 justify-between">
              <div className="flex">
                <div>
                  <img className="rounded-full w-14 h-14" src={Photo} alt="" />
                </div>
                <div>
                  <p className="m-3 mb-0 mt-1 font-bold">Dr. Sandy</p>
                  <p className=" ml-3 mt-0 text-xs">Specialist</p>
                </div>
              </div>
              <div className="">
                <button className="content-end m-2 bg-blue-500 p-2 font-bold rounded ">Appointment</button>
              </div>
            </div><br /><br />
              {/* appointment button and image */}

            <div className="m=3 p-2 border-2 font-bold">
              <p>Available Clinic</p>
            </div>
            <div className="flex flex-row border-2">
              <label className={selectedOption === "Option 1" ? "bg-blue-500 text-white p-2 m-2 w-96 border-2" : l}>
                <input className="hidden" type="radio" name="options" value="Option 1" checked={selectedOption === "Option 1"} onChange={handleOptionChange} />
                <p className="m-3 mb-0 mt-1 font-bold">Clinic 1</p>
                <p className=" ml-3 mt-0 text-xs">Specialist</p>
              </label>
              <label className={selectedOption === "Option 2" ? "bg-blue-500 text-white p-2 m-2 w-96 border-2" : l}>
                <input className="hidden" type="radio" name="options" value="Option 2" checked={selectedOption === "Option 2"} onChange={handleOptionChange} />
                <p className="m-3 mb-0 mt-1 font-bold">Clinic 2</p>
                <p className=" ml-3 mt-0 text-xs">Specialist</p>
              </label>
            </div>
            <br /><br />
            <div className="m=3 p-2 border-2 font-bold">
              <p>Available Time Slots</p>
            </div>
            <div className=" border-2">
              <div className="flex flex-row flex-wrap pl-6">
                {
                  times.map((item, index) => (
                    <label className={selectedOption1 === `Option ${index}` ? p : s}>
                      <input className="hidden" type="radio" name="options" value="Option 3" checked={selectedOption1 === "Option 3"} onChange={handleOptionChange1} />
                      <span className="ml-2">{item.time}</span>
                    </label>
                  )
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Cal;
