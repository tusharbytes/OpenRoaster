import React, { useEffect } from "react";
import CompanyForm from "../Components/CompanyProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { getProfile, resetProfile } from "../feature/ProfileSlice"; // Combined imports
import SubscriptionPlans from "./dashboard/Subscription";
import { useNavigate } from "react-router-dom";

function Intake() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Directly access state.profile to avoid redundant nesting
  const profile = useSelector((state) => state.profile);


  useEffect(  () => {
  dispatch(getProfile());
  }, [dispatch]); // ✅ Added `dispatch` as a dependency

  

  return (
    <div className="">
      

      {/* ✅ Better readability using switch-like conditional rendering */}
      {profile?.profileData?.stepper === "Subscription" ? (
        <SubscriptionPlans />
      ) : profile?.profileData?.stepper === "Profile" ? (
        <CompanyForm />
      ) 
      : profile?.profileData?.stepper === "Active" ? (navigate("/dashboard/home"))
      : (
        <div className="flex justify-center items-center h-screen">
        <p className="text-center animate-bounce">Searching....</p> </div> // ✅ Handle undefined case
      )}
     
    </div>
  );
}

export default Intake;
