import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Loader from '../common/Loader';
import { toast, ToastContainer } from 'react-toastify';
import Input from '../common/Input';
import Container from '../common/Container';
import { Link, useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_BASE_URL;
function Signup() {


    const navigate = useNavigate()
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
                // console.log(response.data.errors.email, "response");
                setLoader(false)
                if (response.data.errors?.email) {
                    toast.error("The email has already been taken");
                }
                if (response.data.errors?.password) {
                    toast.error("The password field must be at least 8 characters"); 
                

                }
                if (response.data.access_token) {
                    localStorage.setItem("access_token", response.data.access_token);
                    localStorage.setItem("refresh_token", response.data.refresh_token);
                    toast.success("User Signup Successfully")
                    setFormSign({
                        name: "",
                        email: "",
                        contact_Number: "",
                        password: "",
                        confirm_password: "",
                        checked: false
                    })
                    setLoader(true)
                        navigate("/intake")
                 
                }
            } catch (error) {
              
            }
        }
    };

    return (
        <Container >
            <div className=" flex p-4  justify-center  " >
                {loader ? <Loader /> :
                    <div className='p-6   grid grid-cols-1 md:grid-cols-2 items-center gap-6'>
                        <div className="bg-white flex-row justify-center   rounded-lg">
                            <h2 className="text-[2rem] md:text-2xl font-semibold text-center">Welcome</h2>
                            <p className='pb-4 text-center text-gray-500'>Please enter your details below to proceed.</p>

                            <div className="space-y-2">
                                <Input
                                    type="text"
                                    name="name"
                                    value={formSign.name}
                                    onChange={(e) => setFormSign({ ...formSign, name: e.target.value })}
                                    placeholder="Name"
                                    error={error.name}
                                />

                                <Input
                                    type="email"
                                    name="email"
                                    value={formSign.email}
                                    onChange={(e) => setFormSign({ ...formSign, email: e.target.value })}
                                    placeholder="Email"
                                    error={error.email}
                                />

                                <Input
                                    type="number"
                                    value={formSign.contact_Number}
                                    onChange={(e) => setFormSign({ ...formSign, contact_Number: e.target.value })}
                                    placeholder="Mobile_number"
                                    error={error.contact_Number}
                                />

                                <Input
                                    type="password"
                                    name="passsword"
                                    value={formSign.password}
                                    onChange={(e) => setFormSign({ ...formSign, password: e.target.value })}
                                    placeholder="password"
                                    error={error.password}
                                />

                                <Input
                                    type="password"
                                    name="name"
                                    value={formSign.confirm_password}
                                    onChange={(e) => setFormSign({ ...formSign, confirm_password: e.target.value })}
                                    placeholder="Confirm_password"
                                    error={error.confirm_password}
                                />



                                <div className="flex items-center space-x-2">
                                    <Input
                                        type="checkbox"
                                        name="check"
                                        value={formSign.checked}
                                        onChange={(e) => setFormSign({ ...formSign, checked: e.target.value })}
                                        error={error.checked}
                                    />

                                    <label htmlFor="terms" className="text-sm">I agree to the terms and conditions</label>
                                </div>


                                <button
                                    onClick={handleSubmit}
                                    className="bg-blue-400 w-full py-4 rounded-3xl text-white font-medium hover:bg-blue-600 transition">
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
                                <div className='text-center pt-4'>
                                <p>Already have Account? <Link className='text-blue-500' to={"/signin"}>Sign in</Link></p>
                            </div>
                            </div>
                        </div>
                        <div className='hidden sm:hidden md:block'>
                            <img className='rounded-2xl md:h-[601px] sm:object-contain object-cover' src="/images/loginBanner.svg" alt="Teamwork" />
                        </div>


                    </div>}
                <ToastContainer />
            </div>
        </Container>
    );
}

export default Signup;