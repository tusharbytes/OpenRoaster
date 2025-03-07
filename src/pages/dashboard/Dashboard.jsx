import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../../common/Container";
import { IoOptionsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../feature/ProfileSlice";


const Dashboard = () => {
  
  
const dipatch = useDispatch()

useEffect(()=>{
  dipatch(getProfile())
},[dipatch])

const profile = useSelector((state)=>state?.profile?.profileData?.stepper)
   
  return (
    <>
    
    <Container>
      
     <div className="bg-[#F4F9FF] ">
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
            <Link to={profile === "Profile" ? "/intake" : "/postajob"}>Post New Job</Link>

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
    </>
  );
};

export default Dashboard;
