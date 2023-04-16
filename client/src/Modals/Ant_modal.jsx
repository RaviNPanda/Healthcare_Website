import { Button, Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Ant_modal = (props) => {
    console.log(props);
    const [open, setOpen] = useState(props.open);
    const [confirmLoading, setConfirmLoading] = useState(false);


    const handleCancel = () => {
        setOpen(false);
        props.setShowModal(false);

    };

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", dob: "", gender: "", email: "", phone: "", password: "", cpassword: ""
    });

    const inputhandle = (e) => {
        let naam = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [naam]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        console.log(user);

        const { name, email, gender, phone, dob, password, cpassword } = user;

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, gender, phone, dob, password, cpassword
            })
        })

        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid registration")
            console.log("invalid registration")
        }

        else {

            setConfirmLoading(true);
            setTimeout(() => {
                setOpen(false);
                setConfirmLoading(false);
            }, 2000);
            props.setShowModal(false);

            window.alert("registration completed")
            console.log("successfull registration")
        }
    }

    return (
        <>
            <Modal
             style={{
                top: 20,
              }}
                title="Title"
                open={open}
                onOk={PostData}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
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
                </form>
            </Modal>
        </>
    );
};

export default Ant_modal;
