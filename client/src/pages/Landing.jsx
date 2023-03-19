import React from 'react'
import Slide1 from '../Images/slide_1.webp';
import logo from '../Images/logo.png';
import image_2 from '../Images/image_2.webp';
import image_3 from '../Images/2.webp';
import image_4 from '../Images/3.webp';
import image_5 from '../Images/4.webp';
import image_6 from '../Images/tir-appointme-5.webp';

function Landing() {
  return (
    <>
      <main className='flex flex-col'>
        {/* Navbar */}
        <section className="fixed z-10 w-full bg-blue-700 h-24 flex flex-row justify-between"
        >
          {/* logo section */}
          <div className="flex flex-row space-x-2 pt-3 pl-12">
            <img src={logo} className="m-1 w-14 h-14" alt="" />
            <div className="flex flex-col mt-1">
              <span className="font-mono text-[23px] text-white font-bold w-1/4"
              >HOSPITAL</span
              >
              <span className="font-mono text-[9px] text-white font-bold"
              >Bayerische Motoren Werke</span
              >
            </div>
          </div>
          {/* logo section end*/}
          <div className="flex pt-8">
            <ul className="flex flex-row space-x-16 ml-12 text-white font-bold">
              <div>
                <li className="cursor-pointer">Home</li>
              </div>
              <div className="hover:bg-">
                <li className="cursor-pointer">Detail</li>
              </div>
              <div className="hover:bg-">
                <li className="cursor-pointer">Contact</li>
              </div>
              <div className="hover:bg-">
                <li className="cursor-pointer">Customer</li>
              </div>
              <div className="hover:bg-">
                <li className="cursor-pointer">Booking</li>
              </div>
            </ul>
          </div>
          <div className="p-7">
            <button
              className="text-white shadow-slate-700 shadow-xl bg-gradient-to-r from-purple-500 ... p-2 rounded-3xl px-9 hover:bg-pink-400"
            >
              Sign up
            </button>
          </div>
        </section>

        {/* <!-- first slide --> */}
        <section className="flex mt-20 flex-row justify-center">
          <div>
            <img src={Slide1} alt="" srcset="" />
          </div>
          <div>
            <p className="my-2 py-4 text-indigo-500 text-4xl font-bold">
              AVAIL YOUR FREE DEMO
            </p>
            <p>No commitments, contracts or obligations.</p>
            <div>
              <div className="flex justify-center py-10">
                <div>
                  <div className="relative mb-3 xl:w-96">
                    <input
                      type="email"
                      className="peer m-0 h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label
                      for="floatingInput"
                      className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                    >Email address</label
                    >
                  </div>
                  <div className="relative mb-3 xl:w-96">
                    <input
                      type="password"
                      className="peer m-0 h-[58px] w-full rounded border border-solid border-neutral-300 bg-white bg-clip-padding py-4 px-3 text-base font-normal leading-tight text-neutral-700 ease-in-out placeholder:text-transparent focus:border-primary focus:bg-white focus:pt-[1.625rem] focus:pb-[0.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 [&:not(:placeholder-shown)]:pt-[1.625rem] [&:not(:placeholder-shown)]:pb-[0.625rem]"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label
                      for="floatingPassword"
                      className="pointer-events-none absolute top-0 left-0 origin-[0_0] border border-solid border-transparent py-4 px-3 text-neutral-700 transition-[opacity,_transform] duration-100 ease-in-out peer-focus:translate-x-[0.15rem] peer-focus:-translate-y-2 peer-focus:scale-[0.85] peer-focus:opacity-[0.65] peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:scale-[0.85] peer-[:not(:placeholder-shown)]:opacity-[0.65] motion-reduce:transition-none dark:text-neutral-200"
                    >Password</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- first slide ended--> */}

        {/* slide 2 */}
        <div class="flex bg-indigo-100 p-2 ">
        <div class="flex-auto content-center my-14 mx-20">
        <h1 class="font-bold text-4xl ">Out-Patient Management</h1>
        <p class="mt-5  text-justify font-normal text-gray-500 space-x-14 space-y-7">Our hospital management system is a comprehensive software solution that provides efficient management of outpatient services, including appointment scheduling, queue management, and patient alerts.
        </p>
        <button class=" font-bold mt-5 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
        </div>
        <img src={image_2} class="h-80 justify-center" alt=""/>
    </div>
   
    <div class="flex ">
        <img src={image_3} class="h-80 justify-center" alt="" />
        <div class="flex-auto content-center my-14 mx-20">
        <h1 class="font-bold text-4xl ">In-Patient Management</h1>
        <p class="mt-7  text-justify font-normal text-gray-500 space-x-14 space-y-7">Our hospital management system also provides efficient management of inpatient services, including room management, doctor scheduling, and patient monitoring. It allows medical professionals to schedule doctor visits and appointments, ensuring timely care. 
        </p>
        <button class=" font-bold mt-7 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
        </div>
    </div>
   
    <div class="flex bg-indigo-100 p-2 ">
        <div class="flex-auto content-center my-14 mx-20">
        <h1 class="font-bold text-4xl ">Patient Information System</h1>
        <p class="mt-7  text-justify font-normal text-gray-500 space-x-14 space-y-7">We have a robust patient information system for storing electronic medical records and e-prescriptions. With this system, medical staff can easily access and update patient records, including medical histories, test results, and treatment plans.
        </p>
        <button class=" font-bold mt-7 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
        </div>
        <img src={image_4} class="h-80 justify-center" alt=""/>
    </div>
    
    <div class="flex  p-2 ">
        <img src={image_5} class="h-80 justify-center" alt=""/>
        <div class="flex-auto content-center my-14 mx-20">
        <h1 class="font-bold text-4xl ">Lobby Management</h1>
        <p class="mt-7  text-justify font-normal text-gray-500 space-x-14 space-y-7">Customise lobby display boards provide to provide real-time updates on wait times, allowing patients to plan their time accordingly and reducing frustration and anxiety associated with long wait times.
        </p>
        <button class=" font-bold mt-7 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
        </div>
    </div>
    
    <div class="flex bg-indigo-100 p-2 ">
        <div class="flex-auto content-center my-14 mx-20">
        <h1 class="font-bold text-4xl ">Custom Website & Mobile App</h1>
        <p class="mt-7  text-justify font-normal text-gray-500 space-x-14 space-y-7">We even offer custom mobile apps and websites, allowing medical professionals to manage their hospital on the go. It can be easily integrated with lab and pharmacy systems. Additionally, the system offers a powerful reporting module, allowing you to generate daily reports and track key metrics for multiple locations.
        </p>
        <button class=" font-bold mt-7 bg-blue-800 text-white p-2 rounded-none">Avail free Demo</button>
        </div>
        <img src={image_6} class="h-80 justify-center" alt=""/>
    </div>

        {/* slide 2 end */}


      </main>
    </>
  )
}

export default Landing