import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { GoBell } from "react-icons/go";
import { IoOptionsOutline, IoSettingsOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Container from "../common/Container";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()


  const handleLogOut = (e) => {
    const selectOption = e.target.value
    if (selectOption === "logOut") {
      localStorage.clear()
      navigate("/signin")
    }

  }

  return (
    <Container>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 bg-white  ">
        {/* Logo */}
        <img
          src="/images/log1.jpg"
          alt="Logo"
          className="h-12 w-auto md:h-16 cursor-pointer"
        />

        {/* Navbar */}
        <div className="w-full">
          {/* Mobile Menu Button */}
          <div className="sm:hidden flex justify-start">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl p-2">
              <MdFormatListBulleted />
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex flex-wrap justify-center items-center gap-6 text-lg">
            {["Dashboard", "Jobs & Shifts", "Find candidates", "Account users", "Directory", "Messages"].map((item, index) => (
              <li key={index} className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                {item}
              </li>
            ))}
            <li className="cursor-pointer hover:text-blue-500">
              <IoSettingsOutline size={24} />
            </li>
            <li className="cursor-pointer hover:text-blue-500">
              <GoBell size={24} />
            </li>
            <li className="cursor-pointer hover:text-blue-500 text-2xl md:text-4xl">
              <FcBusinessman />
            </li>
            <span>
              <select onChange={handleLogOut} className="text-lg w-[20px]   rounded-lg  m-[-25px] bg-white   focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Select</option>
                <option value="logOut">Log Out</option>
              </select>
            </span>
          </ul>
        </div>
      </div>
         {/* Mobile Navigation */}
         {isOpen && (
                <ul className="sm:hidden flex flex-col items-center bg-white shadow-md p-4 gap-4">
                    {["Dashboard", "Jobs & Shifts", "Find candidates", "Account users", "Directory", "Messages"].map((item, index) => (
                        <li key={index} className="cursor-pointer hover:text-blue-500 whitespace-nowrap">
                            {item}
                        </li>
                    ))}
                    <li className="cursor-pointer hover:text-blue-500">
                        <IoSettingsOutline size={24} />
                    </li>
                    <li className="cursor-pointer hover:text-blue-500">
                        <GoBell size={24} />
                    </li>
                    <li className="cursor-pointer hover:text-blue-500 text-2xl">
                        <FcBusinessman />
                    </li>
                    {/* Logout Dropdown */}
                    <span>
                        <select onChange={handleLogOut} className="text-lg rounded-lg p-1 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select</option>
                            <option value="logOut">Log Out</option>
                        </select>
                    </span>
                </ul>
            )}

      {/* Main Content */}
      <div className="bg-[#F4F9FF] mt-6 p-6">
        {/* Top Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center   p-4  rounded-xl">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-lg">All Jobs</p>
            <button className="bg-blue-500 text-white p-2 rounded-xl text-2xl">
              <IoOptionsOutline />
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <input
              className="px-4 border py-2 md:py-3 rounded-xl w-full md:w-auto shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="text"
              placeholder="Search Candidate"
            />
            <button className="px-4 py-2 md:py-3 rounded-xl bg-blue-500 text-white shadow-md hover:bg-blue-600 transition duration-300">
              <Link to="/postajob">Post New Job</Link>
            </button>
          </div>
        </div>

        {/* No Jobs Section */}
        <div className="bg-white flex flex-col items-center justify-center min-h-[60vh] p-6 rounded-lg mt-6">
          <img
            className="w-[200px] md:w-[350px] h-auto"
            src="/images/nojob.jpg"
            alt="No jobs"
          />
          <p className="text-center mt-4 text-gray-600 text-lg">No jobs listed</p>
          <button className="bg-[#5983b5] px-4 py-2 text-white rounded-xl shadow-md hover:bg-[#476a92] transition duration-300 mt-4">
            Post Job
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
