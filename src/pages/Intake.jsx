import React, { useEffect, useState } from 'react'
import CompanyForm from '../Components/CompanyProfileForm'

const token = localStorage.getItem("access_token")
// console.log(token, "sdsd")

function Intake() {
   

    return (
        <div>
            <CompanyForm />
        </div>
    )
}

export default Intake