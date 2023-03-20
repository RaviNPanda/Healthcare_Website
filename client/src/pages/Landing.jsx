import React from 'react'
import Slide1 from '../Images/slide_1.webp';

import { NavLink, useNavigate } from 'react-router-dom'
import Login from '../component/Login';
import Navbar from '../component/Navbar';
import Landing_slide_pages from '../component/Landing_slide_pages';
function Landing() {
  const navigate = useNavigate();
  return (
    <>
      <main className='flex flex-col'>
        {/* Navbar */}
        <Navbar />
        {/* <!-- first slide --> */}
        <section className="flex mt-20 flex-row justify-center">
          <div>
            <img src={Slide1} alt="" />
          </div>
          <div>
            <p className="my-2 py-4 text-indigo-500 text-4xl font-bold">
              AVAIL YOUR FREE DEMO
            </p>
            <p>No commitments, contracts or obligations.</p>
            <div>
              <br />
              <h1 className='text-4xl font-bold'>Login</h1>
              <div className="flex justify-center py-10">
                <Login />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- first slide ended--> */}

        {/* slide 2 */}
            <Landing_slide_pages />
        {/* slide 2 end */}


      </main>
    </>
  )
}

export default Landing