import React, { useState, useEffect } from 'react'
import ref from '../Images/20-ITA56-24.jpg';
import { Button, DatePicker, Modal, TimePicker, Typography } from 'antd';
const { Text, Link } = Typography;
import { useSelector } from "react-redux";



function Appointment_cards() {
  const Patient_data = useSelector((state) => state.Patient_data.personal_data)

  const [doctors_data, setdoctor_data] = useState([]); // for getting doctor's data
  const [selection, setselection] = useState([]); // Data for modal

  const [booking_detail, setbooking_detail] = useState({
    doctor_name:"",
    email: Patient_data.email,
    name:Patient_data.name,
    date:"",
    time:""
  })

// database call for 
  const get_doctor_data = async () => {
    try {
      const res = await fetch('/api/get_doctor', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json();
      setdoctor_data(data);
      // console.log(data);

      if (res.status != 200) {
        const error = new error(res.error)
        throw error;
      }
      else {
        console.log(data[0].name);
      }
    } catch (error) {
      console.log("cannot find the data");
    }
  }

  useEffect(() => {
    if ((doctors_data).length === 0) {
      get_doctor_data()
    }
  }, []);

  // book apoointment

  const setdata_appointmnet=(e)=>{
    const setval = e.target.name;
    console.log(setval);
    setbooking_detail({...booking_detail, doctor_name:selection.name, [setval]: e.target.value})
  }

  const book_appointment = async(e)=>{
    e.preventDefault();
    const {doctor_name,email, name, date, time } = booking_detail;
    console.log(doctor_name,email, name, date, time );
    try {
      const res = await fetch('/api/add_appointment', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          doctor_name,email, name, date, time 
        })
      });
      const message = await res.json();
  
      if (res.status === 422 || res.status === 522 || !message) {
        window.alert("error occured");
      } else {
        console.log("appointment saved successfully");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error(error);
    }
  }


  // set doctor data for modal
  const set_data_for_sample = (index) => {
    setselection(doctors_data[index]);
  }

  // Modal code
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleCancel = (e) => {
    setIsModalOpen(false);
  };

  const format = 'HH:mm';

  return (
    <div className="flex flex-row flex-wrap">
      {
        doctors_data.map((data, index) => (
          <div className="flex flex-row hover:cursor-pointer " key={index} onClick={() => { set_data_for_sample(index), showModal() }}>
            <div className="w-96 h-64 bg-gray-200 rounded-lg shadow-xl mt-8 mx-5 hover:bg-gray-600">
              <img src={ref} alt="Profile picture" className="w-20 h-20 rounded-full mr-4 my-8 mx-4"></img>
              <div>
                <h2 className="text-xl font-bold mb-2 hover:text-white mx-4">{data.name}</h2>
                <p className="text-black text-base hover:text-white mx-4">{data.degree}</p>
                <p className="text-black text-base hover:text-white mx-4">Sunday-Friday</p>
                <p className="text-black text-base hover:text-white mx-4">{data.gender}</p>
              </div>
            </div>
          </div>
        ))
      }
      {selection.length != 0 &&
        <Modal title="Book Appointment" maskClosable={false} open={isModalOpen}  okText={"Book"} okButtonProps={{style: { display:'none' } }} cancelButtonProps={{style: { display:'none' } }} style={{ textAlign: "center" }}>
          <form className='flex flex-col items-center' method='POST' >
            <div>
              <Text keyboard>Dr.{String(selection.name).toUpperCase()}</Text>
              <h2>{selection.degree}</h2>
            </div>
            <div className='flex flex-col space-y-3 mt-3'>
              <input type="text" name='name' className='border-[1px] border-stone-300 rounded-lg p-2 active:border-blue-400' defaultValue={Patient_data.name} onChange={setdata_appointmnet} />
              <input type='date' name='date' className='border-[1px] border-stone-300 rounded-lg p-2 active:border-blue-400' onChange={setdata_appointmnet}  />
              <input type='time' name='time' className='border-[1px] border-stone-300 rounded-lg p-2 active:border-blue-400' onChange={setdata_appointmnet}  />            </div>
            <div className='flex flex-row space-x-5 mt-3'>
            <button type='reset' className='border-2 bg-red-500 rounded-lg text-white px-2 py-1 hover:bg-red-400' onClick={handleCancel}>cancel</button>
            <button type='submit' min="00:00" max="12:00" className='border-2 bg-green-600 rounded-lg text-white px-2 py-1 hover:bg-green-400' onClick={book_appointment}>Book</button>
            </div>
          </form>
        </Modal>
      }
    </div>
  )
}

export default Appointment_cards