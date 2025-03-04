import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React, { useState } from 'react'
import Input from '../common/Input'



function Payment() {
const stripe = useStripe()
const elements = useElements()

const [formData  , setFormData] =useState({
    name :"",
    email:"",
    dob:""
})

const handleSubmit = async(e ) =>{
e.preventDefault()

const {error , payment } = await stripe.createPaymentMethod({
    type :"card",
    card  : elements.getElement(CardElement)

})
}

   return (
    <div className="flex items-center justify-center min-h-screen   p-4">
        
    <form
      onSubmit={handleSubmit}
      className="bg-white  rounded-2xl p-6 w-96 transform transition duration-500 hover:scale-105"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Secure Payment
      </h2>
  
      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Name</label>
          <Input
          value={formData.name}
          onChange={(e)=>setFormData({...formData , name:e.target.value})}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>
  
        {/* Email Input */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <Input
           value={formData.email}
           onChange={(e)=>setFormData({...formData , email:e.target.value})}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>
  
        <div>
          <label className="block text-gray-700 font-semibold mb-1">Date of Birth</label>
          <Input
           value={formData.dob}
           onChange={(e)=>setFormData({...formData , dob:e.target.value})}
            type="date"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            required
          />
        </div>
  
        {/* Card Input */}
        <div className=" p-3 rounded-lg bg-gray-50  ">
          <label className="block text-gray-700 font-semibold mb-1">Card Details</label>
          <CardElement
            className="px-3 w-full py-[1.5rem] placeholder-black border rounded-[1.375rem] "
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#333",
                  "::placeholder": { color: "#a0aec0" },
                },
              },
            }}
          />
        </div>
      </div>
  
      {/* Pay Button */}
      <button
        type="submit"
        disabled={!stripe}
        className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 px-4 rounded-full hover:opacity-90 transition duration-300 shadow-lg disabled:bg-gray-400"
      >
        Pay Securely
      </button>
    </form>
  </div>
  
  
  )
}

export default Payment