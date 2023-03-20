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

    const savedata =(e)=>{
        e.preventDefault();
        console.log(user);
        navigate("/");
    }
    return (
        <div className="bg-blue-700 flex justify-center items-center">
            <div className="bg-white p-4 w-4/12 my-5">
                <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
                <form>
                    <div className="mb-4">
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
                    <div className="mb-6">
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
                    <div className="mb-6">
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
                    <div className="mb-6">
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

                    <div className="mb-6">
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
                    <div className="mb-6">
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
                    <div className="mb-6">
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
                    <div className="flex  justify-center">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={savedata}>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register