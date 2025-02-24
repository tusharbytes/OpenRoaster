import React from "react";
import { FcAbout, FcBusinessman } from "react-icons/fc";
import { GoBell } from "react-icons/go";
import { IoHomeOutline, IoOptionsOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import Container from "../common/Container";

const Dashboard = () => {
    return (
        <Container className="overflow-hidden p-6 min-h-screen">
            {/* <!-- Header --> */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                    <img
                        src="../images/logo.jpg"
                        alt="Logo"
                        className="h-12 cursor-pointer"
                    />
                </div>
                <div className="mt-4 md:mt-0">
                    <ul className="flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-12">
                        <li className="cursor-pointer hover:text-blue-500 text-lg md:text-xl flex items-center">Dashboard</li>
                        <li className="cursor-pointer hover:text-blue-500 text-lg md:text-xl flex items-center">Jobs & Shift</li>
                        <li className="cursor-pointer hover:text-blue-500 text-lg md:text-xl flex items-center">Find candidates</li>
                        <li className="cursor-pointer hover:text-blue-500 text-lg md:text-xl flex items-center">Account users</li>
                        <li className="cursor-pointer hover:text-blue-500 text-lg md:text-xl flex items-center">Directory</li>
                        <li className="cursor-pointer hover:text-blue-500 text-lg md:text-xl flex items-center">Messages</li>
                        <li className="cursor-pointer hover:text-blue-500 text-lg md:text-xl flex items-center"><IoSettingsOutline /></li>
                        <li className="cursor-pointer hover:text-blue-500 text-lg md:text-xl flex items-center"><GoBell /></li>
                        <li className="cursor-pointer hover:text-blue-500 text-2xl md:text-4xl flex items-center"><FcBusinessman /></li>
                        <select className="text-lg">
                            <option value="">Select</option>
                            <option  value="">LogOut</option>

                        </select>
                    </ul>
                </div>
            </div>

            {/* <!-- Main Content --> */}
            <div className="bg-[#F4F9FF] mt-6 p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-center p-4">
                    <div className="flex py-2 items-center gap-2">
                        <p>All Jobs</p>
                        <p className="bg-blue-500 text-white px-2 py-2 rounded-xl text-2xl cursor-pointer"><IoOptionsOutline /></p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                        <input className="px-4 border py-2 md:py-4 rounded-xl" type="text" placeholder="Search Candidate" />
                        <button className="px-4 py-2 md:py-4 rounded-xl bg-blue-500 text-white">Post New Job</button>
                    </div>
                </div>

                {/* <!-- No Jobs Section --> */}
                <div className="bg-white flex flex-col items-center justify-center min-h-[60vh] p-4">
                    <img className="w-[200px] md:w-[400px] h-auto" src="../images/nojob.jpg" alt="No jobs" />
                    <p className="text-center mt-4">No jobs listed</p>
                    <div className="text-center py-4">
                        <button className="bg-[#5983b5] px-4 py-2 text-white rounded-xl">Post job</button>
                    </div>
                </div>
            </div>
        </Container>

    );
};

export default Dashboard;
