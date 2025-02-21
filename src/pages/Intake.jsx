import React, { useEffect, useState } from 'react'
import CompanyForm from '../Components/CompanyProfileForm'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../feature/ProfileSlice'
import SubscriptionPlans from './Subscription'
import Loader from '../common/Loader'

const token = localStorage.getItem("access_token")
// console.log(token, "sdsd")

function Intake() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProfile())
    }, [])
    const profile = useSelector((state) => state);
    console.log(profile)


    return (
        <div>
            {profile.profile.loading ? (
                <Loader />
            ) : ( 
                <>
                    {profile?.profile?.profileData?.stepper === "Subscription" ? (
                        <SubscriptionPlans />
                    ) : profile?.profile?.profileData?.stepper === "profile" ? (
                        <CompanyForm />
                    ) : null}
                </>
            )}


        </div>
    )
}

export default Intake