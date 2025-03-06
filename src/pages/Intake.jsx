import React, { useEffect } from "react";
import CompanyForm from "../Components/CompanyProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, resetProfile } from "../feature/ProfileSlice"; // Combined imports
import SubscriptionPlans from "./dashboard/Subscription";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

function Intake() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Directly access state.profile to avoid redundant nesting
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]); // ✅ Added `dispatch` as a dependency

  // ✅ Logout Function
  const handleLogout = () => {
    dispatch(resetProfile()); // ✅ Reset Redux state first
    localStorage.clear(); // ✅ Clear local storage
    navigate("/signin"); // ✅ Then navigate to login
  };

  return (
    <div className="">
      {/* <div className=" p-1 flex justify-end">
       <button className="bg-red-400 hover:bg-red-500 text-white px-3 py-2 rounded-2xl " onClick={handleLogout}>Log Out</button>
   </div> */}

      {/* ✅ Better readability using switch-like conditional rendering */}
      {profile?.profileData?.stepper === "Subscription" ? (
        <SubscriptionPlans />
      ) : profile?.profileData?.stepper === "Profile" ? (
        <CompanyForm />
      ) 
      : profile?.profileData?.stepper === "Active" ? (<Dashboard/>)
      : (
        <div className="flex justify-center items-center h-screen">
        <p className="text-center animate-bounce">Searching....</p> </div> // ✅ Handle undefined case
      )}
     
    </div>
  );
}

export default Intake;
