import React from 'react'
import image_2 from '../Images/image_2.webp';
import image_3 from '../Images/2.webp';
import image_4 from '../Images/3.webp';
import image_5 from '../Images/4.webp';
import image_6 from '../Images/tir-appointme-5.webp';
function Landing_slide_pages() {
  return (
    <div>
        <div className="flex bg-indigo-100 p-2 ">
          <div className="flex-auto content-center my-14 mx-20">
            <h1 className="font-bold text-4xl ">Out-Patient Management</h1>
            <p className="mt-5  text-justify font-normal text-gray-500 space-x-14 space-y-7">Our hospital management system is a comprehensive software solution that provides efficient management of outpatient services, including appointment scheduling, queue management, and patient alerts.
            </p>
            <button className=" font-bold mt-5 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
          </div>
          <img src={image_2} className="h-80 justify-center" alt="" />
        </div>

        <div className="flex ">
          <img src={image_3} className="h-80 justify-center" alt="" />
          <div className="flex-auto content-center my-14 mx-20">
            <h1 className="font-bold text-4xl ">In-Patient Management</h1>
            <p className="mt-7  text-justify font-normal text-gray-500 space-x-14 space-y-7">Our hospital management system also provides efficient management of inpatient services, including room management, doctor scheduling, and patient monitoring. It allows medical professionals to schedule doctor visits and appointments, ensuring timely care.
            </p>
            <button className=" font-bold mt-7 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
          </div>
        </div>

        <div className="flex bg-indigo-100 p-2 ">
          <div className="flex-auto content-center my-14 mx-20">
            <h1 className="font-bold text-4xl ">Patient Information System</h1>
            <p className="mt-7  text-justify font-normal text-gray-500 space-x-14 space-y-7">We have a robust patient inhtmlFormation system htmlFor storing electronic medical records and e-prescriptions. With this system, medical staff can easily access and update patient records, including medical histories, test results, and treatment plans.
            </p>
            <button className=" font-bold mt-7 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
          </div>
          <img src={image_4} className="h-80 justify-center" alt="" />
        </div>

        <div className="flex  p-2 ">
          <img src={image_5} className="h-80 justify-center" alt="" />
          <div className="flex-auto content-center my-14 mx-20">
            <h1 className="font-bold text-4xl ">Lobby Management</h1>
            <p className="mt-7  text-justify font-normal text-gray-500 space-x-14 space-y-7">Customise lobby display boards provide to provide real-time updates on wait times, allowing patients to plan their time accordingly and reducing frustration and anxiety associated with long wait times.
            </p>
            <button className=" font-bold mt-7 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
          </div>
        </div>

        <div className="flex bg-indigo-100 p-2 ">
          <div className="flex-auto content-center my-14 mx-20">
            <h1 className="font-bold text-4xl ">Custom Website & Mobile App</h1>
            <p className="mt-7  text-justify font-normal text-gray-500 space-x-14 space-y-7">We even offer custom mobile apps and websites, allowing medical professionals to manage their hospital on the go. It can be easily integrated with lab and pharmacy systems. Additionally, the system offers a powerful reporting module, allowing you to generate daily reports and track key metrics htmlFor multiple locations.
            </p>
            <button className=" font-bold mt-7 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
          </div>
          <img src={image_6} className="h-80 justify-center" alt="" />
        </div>    

    </div>
  )
}

export default Landing_slide_pages