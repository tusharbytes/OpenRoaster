import React, { useState } from 'react'
import Input from '../../common/Input'
import { useSelector } from 'react-redux'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { IoMdAdd } from 'react-icons/io'
import { FaChevronUp } from 'react-icons/fa'





function PostAJob() {
    const [stepCount, setStepCount] = useState(0)

    const title = {
        0: "Job Basics ",
        1: "Candidate Requirements",
        2: "Describe the Job",
        3: "Job Setting",
        4: "Job Setting"
    }


    const profile = useSelector((state) => state)
    const [summaryAdd, setSummaryAdd] = useState(false)
    const [qualificationsAdd, setQualificationsAdd] = useState(false)
    const [description, setDescription] = useState(false)

    const [formData, setFormData] = useState({
        job_title: "",
        job_location: "",
        company_name: "",
        openings: "",
        job_timing: "",
    })
    const handleUpSummary = () => {
        setSummaryAdd(false)
    }



    const handleNextStep = () => {
        // Validate required fields before proceeding
        // if (stepCount === 0 && (!formData.job_title || !formData.job_location || !formData.company_name || !formData.openings || !formData.job_timing)) {
        //     alert("Please fill in all required fields.");
        //     return;
        // }
        setStepCount(stepCount + 1);
    }

    return (
        <div className="bg-gradient-to-b from-blue-500 to-gray-900 min-h-screen flex flex-col justify-center items-center p-4 relative">

            {/* Back Button */}
            {stepCount > 0 && (
                <button
                    onClick={() => setStepCount(stepCount - 1)}
                    className="absolute top-4 left-6 text-white p-2 rounded-md"
                >
                    <IoArrowBackCircleOutline className="w-10 h-10" />
                </button>
            )}
            <h2 className="text-xl font-semibold text-center text-white py-2    ">{title[stepCount]}</h2>
            <div className=" md:w-[750px] bg-white p-6 rounded-2xl shadow-md">

                {/* Step 1: Job Basics */}
                {stepCount === 0 && (
                    <div>


                        <div className="py-4 space-y-4">
                            <div>
                                <label className="block">Job Title <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.job_title}
                                    onChange={(e) => setFormData({ ...formData, job_title: e.target.value })} name="job_title" required />
                            </div>

                            <div>
                                <label className="block">Job Location <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.job_location}
                                    onChange={(e) => setFormData({ ...formData, job_location: e.target.value })} name="job_location" required />
                            </div>

                            <div>
                                <label className="block">Company Name on Job Listing <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.company_name}
                                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} name="company_name" required />
                            </div>

                            <p>Job notifications will be sent to: <span className='text-[#5494DC] font-semibold'>{profile?.profile?.profileData?.email}</span></p>

                            <div>
                                <label className="block">No. of Openings <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.openings}
                                    onChange={(e) => setFormData({ ...formData, openings: e.target.value })} name="openings" required type="number" />
                            </div>

                            <div>
                                <label className="block">Job Timing <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.job_timing}
                                    onChange={(e) => setFormData({ ...formData, job_timing: e.target.value })} name="job_timing" required />
                            </div>

                            <p className="text-xs text-gray-500">Please mention job timings correctly, otherwise candidates may not join.</p>
                        </div>
                    </div>

                )}

                {/* Step 2: Candidate Requirements */}
                {stepCount === 1 && (
                    <div>
                        <div className="flex gap-2 py-4">
                            <button className="px-4 py-2 rounded-xl text-white bg-blue-500">Fresher Only</button>
                            <button className="px-4 py-2 rounded-xl text-white bg-blue-500">Experienced Only</button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block">Job info/Job Description</label>
                                <textarea className="w-full border rounded-md p-2" rows="4"></textarea>
                            </div>
                            <div>
                                <label className="block">Job Type</label>
                                <select className="w-full px-2 py-2 rounded-xl border">
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                </select>
                            </div>
                            <div>
                                <label className="block">Skills</label>
                                <Input onChange={(e) => setFormData({ ...formData, job_title: e.target.value })} type="text" name="skills" />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Job Description HEALTH */}
                {stepCount === 2 && (
                    <div className=' sm:w-[350px]   w-[270px] md:w-[700px]'>
                        <p className="text-center text-sm text-gray-600">
                            Enter details in each section for the best results.
                        </p>

                        <h2 className="text-center text-xl text-blue-600 font-semibold mt-2">
                            Home Health AID (HHA)
                        </h2>
                        <p className="text-center text-gray-500">SICS, Springfield, USA</p>

                        <div className="py-4">
                            <h2 className="py-2">Get the most out of your job listing.</h2>
                            <button className="px-2 py-2 border border-blue-500 text-blue-500">View job writing tips</button>
                        </div>
                        <p className='text-sm pb-2'>Describe your company and the job, but no one wants to read a novel to decide if they're a good fit for this role.</p>
                        <p className='text-sm pb-2'>Why would someone want to work for you over a competitor? Growth opportunities? Exciting projects? Better location? An inclusive environment?</p>
                        <p className='text-sm pb-2'>Provide a little insight into your company values and culture. Plus, a friendly and inviting tone can do wonders when it comes to response rates.</p>

                        <div className="border-b py-2 text-[#5494DC] font-semibold  flex items-center justify-between"> <span> Summary & Responsibilities <span className="text-red-500">*</span></span>
                            {summaryAdd === true ? <FaChevronUp onClick={handleUpSummary} /> :
                                <IoMdAdd onClick={() => {
                                    setSummaryAdd(true)
                                }} className='cursor-pointer' > </IoMdAdd>}</div>
                        {summaryAdd && <textarea className="w-full border rounded-md p-2 placeholder:font-semibold placeholder:text-[#5494DC]" placeholder='Summary  ' rows="4"></textarea>}

                        <div className="border-b py-2 text-[#5494DC] font-semibold flex items-center justify-between">Qualifications & Skills
                            {qualificationsAdd === true ? <FaChevronUp className='cursor-pointer' onClick={() => setQualificationsAdd(false)} /> :
                                <IoMdAdd onClick={() => {
                                    setQualificationsAdd(true)
                                }} className='cursor-pointer' > </IoMdAdd>}</div>
                        {qualificationsAdd && <textarea className="w-full border rounded-md p-2  placeholder:font-semibold placeholder:text-[#5494DC]" placeholder='Qualifications & Skills' rows="4"></textarea>}

                        <div className="border-b py-2 text-[#5494DC] font-semibold flex items-center justify-between">Company Description
                            {description === true ? <FaChevronUp className='cursor-pointer' onClick={() => setDescription(false)} /> :
                                <IoMdAdd onClick={() => {
                                    setDescription(true)
                                }} className='cursor-pointer' > </IoMdAdd>} </div>
                        {description && <textarea className="w-full border rounded-md p-2  placeholder:font-semibold placeholder:text-[#5494DC]" placeholder='Company Description' rows="4"></textarea>}
                    </div>
                )}

                {/* Step 4: Job Application Settings */}
                {stepCount === 3 && (
                    <div>
                        <div className="flex gap-2">
                            <button className="bg-transprint text-blue-500 border border-blue-500 rounded-xl px-3 py-2">On OpenRoaster App</button>
                            <button className="bg-blue-500 text-white rounded-xl px-3 py-2">On my website</button>
                        </div>
                    </div>
                )}

                {/* Step 5: Enter Application URL */}
                {stepCount === 4 && (
                    <div>
                        <div className='flex  gap-2 pb-2'>
                            <button className='bg-blue-400 text-white rounded-xl px-3 py-2 '>On OpenRoaster App</button>
                            <button className='bg-blue-400 text-white rounded-xl px-3 py-2 '>On my website</button>

                        </div>
                        <h2>Enter Application URL</h2>
                        <label className="block">Job URL <span className="text-red-500">*</span></label>
                        <input onChange={(e) => setFormData({ ...formData, job_title: e.target.value })} className="w-full px-3 py-2 border rounded-md" type="url" required />
                    </div>
                )}
            </div>

            <div className="w-[250px] flex justify-center mt-4">
                {stepCount === 4 ? <button className="bg-[#5494DC]  text-white py-3 px-[6rem] rounded-3xl hover:bg-blue-600">
                    Continue
                </button> :
                    <button onClick={handleNextStep} className="bg-[#5494DC]  text-white py-3 px-[6rem] rounded-3xl hover:bg-blue-600">
                        Next
                    </button>}
            </div>
        </div>
    )
}

export default PostAJob;
