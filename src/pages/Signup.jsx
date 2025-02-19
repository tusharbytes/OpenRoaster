import axios from 'axios';
import React, { use, useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Loader from '../common/Loader';
import { toast, ToastContainer } from 'react-toastify';

function Signup() {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    const [formSign, setFormSign] = useState({
        name: "",
        email: "",
        contact_Number: "",
        password: "",
        confirm_password: "",
        checked: false
    });
    const [error, setError] = useState({});
    const validation = () => {
        const newError = {};

        if (!formSign.name) {
            newError.name = "Name is required";
        }
        if (!formSign.email) {
            newError.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formSign.email)) {
            newError.email = "Enter a valid email";
        }
        if (!formSign.contact_Number) {
            newError.contact_Number = "Contact number is required";
        } else if (!/^\d{10}$/.test(formSign.contact_Number)) {
            newError.contact_Number = "Enter a valid 10-digit contact number";
        }
        if (!formSign.password) {
            newError.password = "Password is required";
        } else if (formSign.password.length < 6) {
            newError.password = "Password must be at least 6 characters long";
        }
        if (!formSign.confirm_password) {
            newError.confirm_password = "Confirm your password";
        } else if (formSign.password !== formSign.confirm_password) {
            newError.confirm_password = "Passwords do not match";
        }
        if (!formSign.checked) {
            newError.checked = "You must agree to the terms and conditions";
        }

        setError(newError);
        return Object.keys(newError).length === 0;
    };

    const [loader, setLoader] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validation()) {
            setLoader(true)
            try {
                const response = await axios.post(`${apiUrl}/signup`, formSign);
                console.log(response, "response");
                if (response.status === 200) {
                    setLoader(false)
                    toast.success("User Signup Successfully")
                    setFormSign({
                        name: "",
                        email: "",
                        contact_Number: "",
                        password: "",
                        confirm_password: "",
                        checked: false
                    })
                }
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div className="container ">

            {loader ? <Loader /> :
                <div className='p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="bg-white  rounded-lg">
                        <h2 className="text-2xl font-semibold text-center">Welcome</h2>
                        <p className='pb-4 text-center text-gray-500'>Please enter your details below to proceed.</p>

                        <div className="space-y-2">
                            <input
                                value={formSign.name}
                                onChange={(e) => setFormSign({ ...formSign, name: e.target.value })}
                                className="px-3 w-full py-4 placeholder-black border rounded-md"
                                type="text"
                                placeholder="Name"
                            />
                            {!formSign.name && <p className="text-red-500 text-sm">{error.name}</p>}

                            <input
                                value={formSign.email}
                                onChange={(e) => setFormSign({ ...formSign, email: e.target.value })}
                                className="px-3 w-full py-4 placeholder-black border rounded-md"
                                type="email"
                                placeholder="Email"
                            />
                            {!formSign.email && <p className="text-red-500 text-sm">{error.email}</p>}

                            <input
                                value={formSign.contact_Number}
                                onChange={(e) => setFormSign({ ...formSign, contact_Number: e.target.value })}
                                className="px-3 w-full py-4 placeholder-black border rounded-md"
                                type="tel"
                                placeholder="Mobile Number"
                            />
                            {error.contact_Number && <p className="text-red-500 text-sm">{error.contact_Number}</p>}

                            <input
                                value={formSign.password}
                                onChange={(e) => setFormSign({ ...formSign, password: e.target.value })}
                                className="px-3 w-full py-4 placeholder-black border rounded-md"
                                type="password"
                                placeholder="Password"
                            />
                            {error.password && <p className="text-red-500 text-sm">{error.password}</p>}

                            <input
                                value={formSign.confirm_password}
                                onChange={(e) => setFormSign({ ...formSign, confirm_password: e.target.value })}
                                className="px-3 w-full py-4 placeholder-black border rounded-md"
                                type="password"
                                placeholder="Confirm Password"
                            />
                            {error.confirm_password && <p className="text-red-500 text-sm">{error.confirm_password}</p>}

                            <div className="flex items-center space-x-2">
                                <input
                                    checked={formSign.checked}
                                    onChange={(e) => setFormSign({ ...formSign, checked: e.target.checked })}
                                    type="checkbox"
                                    id="terms"
                                />
                                <label htmlFor="terms" className="text-sm">I agree to the terms and conditions</label>
                            </div>
                            {error.checked && <p className="text-red-500 text-sm">{error.checked}</p>}

                            <button
                                onClick={handleSubmit}
                                className="bg-blue-500 w-full py-4 rounded-3xl text-white font-medium hover:bg-blue-600 transition">
                                Sign up
                            </button>

                            <div className="flex items-center my-4 text-gray-500">
                                <div className="flex-1 h-px bg-gray-600"></div>
                                <span className="px-3">OR</span>
                                <div className="flex-1 h-px bg-gray-600"></div>
                            </div>

                            <div className='flex gap-3 justify-center'>
                                <span className='flex items-center font-bold rounded-xl gap-1 px-4 py-2 border cursor-pointer hover:bg-gray-100'>
                                    <FcGoogle /> Google
                                </span>
                                <span className='px-4 py-2 border flex items-center gap-1 rounded-xl font-bold cursor-pointer hover:bg-gray-100'>
                                    <FaApple /> Apple
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img className='rounded-2xl h-full object-cover' src="/images/teamwork1.jpg" alt="Teamwork" />
                    </div>
                </div>}
            <ToastContainer />
        </div>
    );
}

export default Signup;