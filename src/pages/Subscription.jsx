import React, { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Container from "../common/Container";
import { useDispatch } from "react-redux";
import { profileUpdate } from "../api/Api";
import { getProfile } from "../feature/ProfileSlice";

const plans = [
    {
        title: "Open Roster + Free",
        subtitle: "Free Plan (Freemium Model)",
        price: "$0/",
        day: "month",
        features: [
            "Post a limited number of job listings",
            "Access to a basic pool of RosterPros",
            "Basic applicant tracking",
            "You can send message to 10 candidates and post 3 jobs"
        ],
        buttonText: "Continue"
    },
    {
        title: "Open Roster + FlexiPlan",
        subtitle: "FlexiPlan (Essential Features)",
        price: "$17/",
        day: "day",
        features: [
            "Promoted job postings",
            "Set your daily budget. Start and stop campaigns anytime.",
            "Unlimited applicants",
            "You can send message to 30 candidates",
            "Published to OpenRoster application and extensive partner network",
            "Automatically sent to relevant candidates",
            "Ad-free experience"
        ],
        buttonText: "Continue"
    },
    {
        title: "Open Roster + Premium",
        subtitle: "Premium Plan (Advanced Tools)",
        price: "$250/",
        day: "month",
        features: [
            "Everything in the Standard Plan",
            "Featured job listings for higher visibility",
            "AI-powered candidate matching",
            "Advanced analytics and reporting",
            "Dedicated account manager for personalized support"
        ],
        buttonText: "Continue"
    },
    {
        title: "Open Roster + ELITE Staffing",
        subtitle: "OpenRoster ELITE staffing stack",
        price: "",
        features: [
            "On-demand staffing platform",
            "Access and management payments to Rosterpros in one suite",
            "Access to credentialed RosterPros with all licenses and background checks",
            "All Premium features",
            "API integration with your HR or ATS systems",
            "Bulk shift and contracts management with RosterPros",
            "Easy to Use Dashboard",
            "Priority support with dedicated account managers",
            "AI Powered shifts matching",
            "Overtime management tool",
            "Hire RosterPros to Permanent placements after 6 months at a low commission"
        ],
        buttonText: "Request"
    }
];

const SubscriptionPlans = () => {

const dispatch = useDispatch()

const handleAddPlan =async(i)=>{
  await   profileUpdate({ plan: i})
  dispatch(getProfile())

}

    return (
        <Container>
            <div className="bg-blue-50  ">
                <div className="max-w-7xl mx-auto ">
                    <h2 className="text-2xl font-bold text-center">Choose your right plan!</h2>
                    <p className="text-gray-600 text-center">Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!</p>
                    <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {plans.map((plan, index) => (
                            <div key={index} className="border bg-white flex flex-col h-full rounded-lg p-6 shadow-lg">
                                <h3 className="text-lg font-semibold text-gray-900">{plan.title}</h3>
                                <p className="text-sm text-gray-500">{plan.subtitle}</p>
                                <p className="text-2xl font-bold flex justify-center mt-4">
                                    {plan.price} <span className="text-blue-400">{plan.day}</span>
                                </p>
                                <ul className=" text-sm text-gray-700">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex   gap-2">
                                            <span className="text-green-500">
                                                <IoMdCheckmarkCircleOutline />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto">
                                    <button onClick={()=>handleAddPlan(plan.title)} className="mt-6 w-full bg-blue-400 text-white py-2 rounded-3xl hover:bg-blue-700">
                                      Continue
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default SubscriptionPlans;
