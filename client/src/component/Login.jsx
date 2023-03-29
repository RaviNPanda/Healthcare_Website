import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
    const [data, setData] = useState({
        email: "", password: ""
    });
    const navigate = useNavigate();
    const collectdata = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handlelogin=async (e)=>{
        e.preventDefault();
        const {email,password} = data;
        const res = await fetch('/api/login',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
              email,password
          })
        })
        const message = await res.json();
    if(res.status===422 || !message){
      window.alert('something went wrong')
      console.log("error occured at login.jsx at 30")
    }
    else{
      window.alert("Logged in successfully")

      navigate("/Home");
    }

  }
    return (
        <div>
            <form method='POST'>
                <div className="relative mb-3 xl:w-96">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        onChange={collectdata}
                        value={data.email}
                        name="email"
                        type="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="relative mb-3 xl:w-96">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                        Password
                    </label>
                    <input
                        onChange={collectdata}
                        value={data.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="flex  justify-center flex-col">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handlelogin}>
                        Login
                    </button>
                    <NavLink to="/Register" className="mt-3 hover:text-blue-600">Not registered yet ? </NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login