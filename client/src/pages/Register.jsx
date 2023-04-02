import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: "", dob: "", gender: "", email: "", phone: "", password: "", cpassword: ""
    });

    const inputhandle = (e) => {
        let naam = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [naam]: value })
    }


    // const savedata = (e)=>{
    //     e.preventDefault();
    //     console.log(user);
    // }

    const PostData = async (e)=>{
        e.preventDefault();
        console.log(user);
        const {name,email,gender,phone,dob,password,cpassword} = user;
        const res = await fetch("/api/register",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            // field name is same as field name in db so not writing like name:name
            name,email,gender,phone,dob,password,cpassword
          })
        })
        
        const data = await res.json();
        if(res.status ===422 || !data){
          window.alert("Invalid registration")
          console.log("invalid registration")
        }
        else{
          window.alert("registration completed")
          console.log("successfull registration")
    
          navigate("/");
        }
        
    }

    return (
        <div className="min-h-screen bg-gradient-to-tr from-sky-400 to-sky-50 py-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-8/12 bg-white rounded-xl shadow-lg mx-auto overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-[url('/src/Images/tir-appointme-5.webp')]">
            <h2 className="text-3xl">Welcome</h2>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className='mb-4 '>Create your account. It's free and take a minute</p>
            <form>
                    <div className="mt-5">
                        <label className="block text-gray-700 font-bold mb-2" >
                            Full name
                        </label>
                        <input
                        onChange={inputhandle}
                        value={user.name}
                        name="name"
                        type="text"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Full name"
                    />
                    </div>
                    <div className="mt-5">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Date of birth
                        </label>
                        <input
                        onChange={inputhandle}
                        value={user.dob}
                        name="dob"
                        type="date"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Date of Birth"
                    />
                    </div>
                    <div className="mt-5">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Gender
                        </label>
                        <select name="gender" onChange={inputhandle} className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option value={user.gender}>Select Your Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Others</option>
                    </select>
                    </div>
                    <div className="mt-5">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            onChange={inputhandle}
                            value={user.email}
                            name="email"
                            type="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    </div>

                    <div className="mt-5">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Number
                        </label>
                        <input
                            onChange={inputhandle}
                            value={user.number}
                            max="10"
                            name="phone"
                            type="number"
                            placeholder="Number"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    </div>
                    <div className="mt-5">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Password
                        </label>
                        <input
                            onChange={inputhandle}
                            value={user.password}
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    </div>
                    <div className="mt-5">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Confirm Password
                        </label>
                        <input
                            onChange={inputhandle}
                            value={user.cpassword}
                            name="cpassword"
                            type="password"
                            placeholder="Confirm your Password"
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    </div>
                    {/* <div className='mt-5'>
                        <input type="checkbox" className='border border-gray-400'/>
                        <span>I accept the <a href='#' className="text-purple-500 font-semibold">Terms of Use</a> & <a href='#' className="text-purple-500 font-semibold">Private policy</a></span>
                    </div> */}
                    <div className="flex  justify-center mt-5">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={PostData}>
                            Register
                        </button>
                    </div>
                    
                </form>
          </div>
      
        </div>
        
      </div>
          
    </div>
    )
}

export default Register