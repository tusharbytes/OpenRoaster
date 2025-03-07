import React, { useEffect, useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../feature/ProfileSlice";
import Container from "../common/Container";
import Loader from "../common/Loader";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        dispatch(getProfile());
    }, [dispatch]);

    const profile = useSelector((state) => state);
    
    const handleLogOut = () => {
        localStorage.clear();
        navigate("/signin");
    };

    return (
        <>
        {profile.profile.loading ? <Loader/> :
        <Container>
            
            <div className="flex flex-col md:flex-row justify-between items-center px-6 bg-white">
                {/* Logo and Mobile Menu */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <img
                        src="/images/dahboard_logo.svg"
                        alt="Logo"
                        className="h-12 w-auto md:h-16 cursor-pointer"
                    />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-3xl p-2 sm:hidden">
                        <MdFormatListBulleted />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden sm:flex flex-wrap justify-center items-center gap-4 text-lg">
                    <Link to="/dashboard/home" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                        Dashboard
                    </Link>
                    {profile?.profile?.profileData?.stepper === "Profile" ? (
                        <>
                            <Link to="/intake" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                Create Profile
                            </Link>
                            <button
                                onClick={handleLogOut}
                                className="cursor-pointer hover:text-red-500 hover:bg-white whitespace-nowrap bg-red-500 text-white px-4 py-2 rounded-xl"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/all-jobs" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                All Jobs
                            </Link>
                            <Link to="/find-candidates" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                Find Candidates
                            </Link>
                            <Link to="/account-users" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                Account Users
                            </Link>
                            <Link to="/messages" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                Messages
                            </Link>
                            <div className="flex gap-2 items-center">
                                <Link to="/dashboard/setting" className="cursor-pointer hover:text-blue-500">
                                    <IoMdSettings size={24} />
                                </Link>
                                <Link to="/notifications" className="cursor-pointer hover:text-blue-500">
                                    <GoBell size={24} />
                                </Link>
                                {profile?.profile?.profileData?.business?.image ? (
                                    <img src={profile.profile.profileData.business.image} className="w-[25px] rounded-full" alt="Profile" />
                                ) : (
                                    <FcBusinessman className="cursor-pointer hover:text-blue-500 text-2xl md:text-4xl" />
                                )}
                                <select
                                    onChange={(e) => e.target.value === "logOut" && handleLogOut()}
                                    className="w-[20px] rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option value="logOut">Log Out</option>
                                </select>
                            </div>
                        </>
                    )}
                </ul>

                {/* Mobile Navigation */}
                {isOpen && (
                    <ul className="sm:hidden flex flex-col items-center bg-white shadow-md p-4 gap-4">
                        <Link to="/dashboard/home" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                            Dashboard
                        </Link>
                        {profile?.profile?.profileData?.stepper === "Profile" ? (
                            <Link to="/intake" className="cursor-pointer w-full hover:text-blue-500 whitespace-nowrap">
                                Create Profile
                                  </Link>
                        ) : (
                            <>
                                <Link to="/all-jobs" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                    All Jobs
                                </Link>
                                <Link to="/find-candidates" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                    Find Candidates
                                </Link>
                                <Link to="/account-users" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                    Account Users
                                </Link>
                                <Link to="/messages" className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                                    Messages
                                </Link>
                                <Link to="/dashboard/setting" className="cursor-pointer hover:text-blue-500">
                                    <IoMdSettings size={24} />
                                </Link>
                                <Link to="/notifications" className="cursor-pointer hover:text-blue-500">
                                    <GoBell size={24} />
                                </Link>
                                <FcBusinessman className="cursor-pointer hover:text-blue-500 text-2xl" />
                                <select
                                    onChange={(e) => e.target.value === "logOut" && handleLogOut()}
                                    className="text-lg rounded-lg p-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select</option>
                                    <option value="logOut">Log Out</option>
                                </select>
                            </>
                        )}
                    </ul>
                )}
            </div> 
        </Container>}</>
    );
};

export default Navbar;