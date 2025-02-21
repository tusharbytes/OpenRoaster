import axios from 'axios'
import React, { useState } from 'react'
import { FaApple } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Loader from '../common/Loader'
import Input from '../common/Input'
import Container from '../common/Container'

function Login() {
    const apiUrl = process.env.REACT_APP_API_BASE_URL;

    const [userLog, setUserLog] = useState({
        email: "",
        password: "",
        checked: false
    })
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!userLog.email) {
            formErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userLog.email)) {
            formErrors.email = "Invalid email address";
        }
        if (!userLog.password) {
            formErrors.password = "Password is required";
        } else if (userLog.password.length < 6) {
            formErrors.password = "Password must be at least 6 characters";
        }
        if (!userLog.checked) {
            formErrors.checked = "You must agree to the terms";
        }


        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };
    const [loader, setLoader] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateForm()) {
            setLoader(true)
            try {

                const response = await axios.post(`${apiUrl}/login`, userLog);
                console.log(response, "userlog");
                localStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem("refresh_token", response.data.refresh_token);

                if (response.status === 200) {
                    setLoader(false)
                    toast.success("User Sign In Successfully")
                    setUserLog({
                        email: "",
                        password: "",
                        checked: false
                    })
                }
            } catch (error) {
                console.error("Login failed", error);
                setLoader(false)
                toast.error("user not Exit")
            }
        }
    };

    return (
        <Container className="container ">
            <div className='flex justify-center '>
                {loader ? <Loader /> : <div className='  justify-center items-center p-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="bg-white  rounded-lg">
                        <h2 className="text-[2rem] md:text-2xl font-semibold text-center">Welcome</h2>
                        <p className='pb-4 text-center text-gray-500'>Please enter your details below to proceed.</p>

                        <div className="space-y-2">
                            <Input
                                type="email"
                                name="email"
                                value={userLog.email}
                                onChange={(e) => setUserLog({ ...userLog, email: e.target.value })}
                                placeholder="Email"
                                error={errors.email}
                            />
                            <Input
                                type="password"

                                value={userLog.password}
                                onChange={(e) => setUserLog({ ...userLog, password: e.target.value })}
                                placeholder="Enter password"
                                error={errors.password}
                            />
                            <div className=' flex justify-between'>
                                <div className='flex gap-1 items-center'>
                                    
                                    <input
                                        checked={userLog.checked}
                                        onChange={(e) => setUserLog({ ...userLog, checked: e.target.checked })}
                                        type="checkbox"
                                        id="terms"
                                    // error={errors.checked}
                                    />
                                    <div>
                                    <label >Remember me</label>
                                    {errors.checked && <p className="text-red-500 text-sm">{errors.checked}</p>}
                                    </div>
                                </div>
                                <p>Forget password</p>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="bg-blue-400 w-full py-4 rounded-3xl text-white font-medium hover:bg-blue-600 transition">
                                Sign In
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
                                <p>no have Account? <Link className='text-blue-500' to={"/signup"}>Signup</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className='hidden md:block '>
                        <img className='rounded-2xl md:h-[601px] sm:object-contain object-cover' src="/images/loginBanner.svg" alt="Teamwork" />
                    </div>
                </div>}
                <ToastContainer />
            </div>
        </Container>
    )
}

export default Login