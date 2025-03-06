import React, { useEffect, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { Link, useNavigate, } from "react-router-dom";
import Container from "../common/Container";
import { IoMdSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../feature/ProfileSlice";
function Topbar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const profile = useSelector((state) => state)

    useEffect(()=>{
        dispatch(getProfile())
    },[])

    const [isOpen, setIsOpen] = useState(false);

    const handleLogOut = () => {
        localStorage.clear()
        navigate("/signin")
    }

    return (

        <Container>
        <div className=" ">
     
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-center  px-6 bg-white  ">
                {/* Logo */}
                <div className="flex items-center justify-between  ">
                    {/* Logo */}
                    <img
                        src="/images/dahboard_logo.svg"
                        alt="Logo"
                        className="h-12 w-auto md:h-16 cursor-pointer"
                    />

                    {/* Mobile Menu Button (Visible on small screens) */}
                    <div className="flex sm:hidden justify-end w-[250px]">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-3xl p-2"
                        >
                            <MdFormatListBulleted />
                        </button>
                    </div>
                </div>
                {/* Navbar */}
                <span className="w-full  md:flex justify-end items-center">
                    {/* Mobile Menu Button */}


                    {/* Desktop Navigation */}
                    <ul className="hidden sm:flex flex-wrap justify-center items-center gap-4 text-lg">
                        <Link to={"/dashboard/home"} className={`cursor-pointer hover:text-blue-500 whitespace-nowrap  `}>
                            Dashboard
                        </Link>
                        <Link className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                            AllJobs
                        </Link>
                        <Link className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                            Find Candidates
                        </Link>
                        <Link className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                            Account users
                        </Link>
                        <Link className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                            Messages
                        </Link>

                        <span>
                            <div className="flex gap-2 items-center ">
                                <Link to={"/dashboard/setting"} className={`cursor-pointer hover:text-blue-500 `}>
                                    <IoMdSettings className={`cursor-pointer hover:text-blue-500 whitespace-nowrap `} ></IoMdSettings>
                                </Link>
                                <Link className="cursor-pointer hover:text-blue-500">
                                    <GoBell size={24} />
                                </Link>
                              {profile?.profile?.profileData?.business.image ? <div><img src={profile?.profile?.profileData?.business.image } className="w-[25px] rounded-full" /> </div>: <Link className="cursor-pointer hover:text-blue-500 text-2xl md:text-4xl">
                                    <FcBusinessman />
                                </Link> }
                                 <select
                        onChange={(e) => e.target.value === "logOut" && handleLogOut()}
                        className=" w-[20px]  rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value=""></option>
                        <option value="logOut">Log Out</option>
                    </select>
                            </div>

                        </span>
                    </ul>
                  

                </span>
            </div>
            {/* Mobile Navigation */}
            {isOpen && (
                <ul className="sm:hidden flex flex-col items-center bg-white shadow-md p-4 gap-4">
                        <Link to={"/dashboard/home"} className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                           Dashboard 
                        </Link>
                        <Link  className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                        AllJobs 
                        </Link>
                        <Link  className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                        Find Candidates 
                        </Link>
                        <Link  className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                        Account users 
                        </Link>
                    <Link to={"/dashboard/setting"} className="cursor-pointer hover:text-blue-500">
                        <IoSettingsOutline size={24} />
                    </Link>
                    <Link className="cursor-pointer hover:text-blue-500">
                        <GoBell size={24} />
                    </Link>
                    <Link className="cursor-pointer hover:text-blue-500 text-2xl">
                        <FcBusinessman />
                    </Link>
                    {/* Logout Dropdown */}
                    <span>
                        <select className="text-lg rounded-lg p-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select</option>
                            <option value="logOut">Log Out</option>
                        </select>
                    </span>
                </ul>
            )}
</div>
</Container>
    )
}

export default Topbar