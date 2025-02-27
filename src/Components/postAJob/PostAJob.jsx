import React, { useEffect, useState } from 'react'
import Input from '../../common/Input'
import { useDispatch, useSelector } from 'react-redux'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { IoMdAdd } from 'react-icons/io'
import { FaChevronUp } from 'react-icons/fa'
import { jobCreate } from '../../api/Api'
import { toast, ToastContainer } from 'react-toastify'
import { getProfile } from '../../feature/ProfileSlice'


function PostAJob() {
    const [stepCount, setStepCount] = useState(0)

    const title = {
        0: "Job Basics ",
        1: "Candidate Requirements",
        2: "Describe the Job",
        3: "Job Setting",
        4: "Job Setting"
    }

  const dispatch  = useDispatch()

  useEffect(()=>{
dispatch(getProfile())
  },[])
    const profile = useSelector((state) => state)
    console.log(profile,"dff")
    const [summaryAdd, setSummaryAdd] = useState(false)
    const [qualificationsAdd, setQualificationsAdd] = useState(false)
    const [description, setDescription] = useState(false)
    const [click, setClick] = useState(false)
    const [settingClick, setSettingClick] = useState(false)

    const [errors, setErrors] = useState({});
    const validateStep = (step) => {
        let newErrors = {};

        if (step === 0) {
            if (!formData.title) newErrors.title = "Job Title is required";
            if (!formData.location) newErrors.location = "Job Location is required";
            if (!formData.company_name_on_job) newErrors.company_name_on_job = "Company Name is required";
            if (!/^\d{4}$/.test(formData.num_of_opening)) {
                newErrors.num_of_opening = "Number of openings must be a 4-digit number";
            }

            if (!formData.timeing) newErrors.timeing = "Job Timing is required";
        }

        if (step === 1) {
            if (!formData.job_info) newErrors.job_info = "Job Description is required";
            if (!formData.total_experience) newErrors.total_experience = "select One";
            if (!formData.job_type) newErrors.job_type = "Please select a Job Type";
            if (!formData.skills) newErrors.skills = "Skills are required";
        }

        if (step === 2) {
            if (!formData.summary_responsibilties) newErrors.summary_responsibilties = "Summary & Responsibilities are required";

            if (!formData.equipment_and_skills) newErrors.equipment_and_skills = "Qualifications & Skills are required";
            if (!formData.description) newErrors.description = "Company Description is required";
        }

        if (step === 3) {
            if (!formData.Website) {
                newErrors.Website = "Chose any One";
            }
        }

        if (step === 4) {
            if (!formData.apply_url) {
                newErrors.apply_url = "Application URL is required";
            } else {
                // URL validation using regex
                const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
                if (!urlPattern.test(formData.apply_url)) {
                    newErrors.apply_url = "Please enter a valid URL (starting with http:// or https://)";
                }
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        company_name_on_job: "",
        num_of_opening: "",
        timeing: "",
        job_info: "",
        job_type: "",
        skills: "",
        description: "",
        equipment_and_skills: "",
        summary_responsibilties: "",
        apply_url: "",
        total_experience: "",
        candidate_apply: ""
    })
    const handleUpSummary = () => {
        setSummaryAdd(false)
    }

    const handleNextStep = () => {
        if (validateStep(stepCount)) {
            setStepCount(stepCount + 1);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateStep(stepCount)) {
            await jobCreate(formData)
            toast.success("Post created successfully!")
        }
    };


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
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    error={errors.title}
                                    name="job_title" required />
                            </div>

                            <div>
                                <label className="block">Job Location <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    error={errors.location}
                                    name="job_location" required />
                            </div>

                            <div>
                                <label className="block">Company Name on Job Listing <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.company_name_on_job}
                                    onChange={(e) => setFormData({ ...formData, company_name_on_job: e.target.value })}
                                    error={errors.company_name_on_job}
                                    name="company_name" required />
                            </div>

                            <p>Job notifications will be sent to: <span className='text-[#5494DC] font-semibold'>{profile?.profile?.profileData?.email}</span></p>

                            <div>
                                <label className="block">No. of Openings <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.num_of_opening}
                                    onChange={(e) => setFormData({ ...formData, num_of_opening: e.target.value })}
                                    error={errors.num_of_opening}
                                    name="openings" required type="number" />
                            </div>

                            <div>
                                <label className="block">Job Timing <span className="text-red-500">*</span></label>
                                <Input
                                    value={formData.timeing}
                                    onChange={(e) => setFormData({ ...formData, timeing: e.target.value })}
                                    error={errors.timeing}
                                    name="job_timing" required />
                            </div>

                            <p className="text-xs text-gray-500">Please mention job timings correctly, otherwise candidates may not join.</p>
                        </div>
                    </div>

                )}

                {/* Step 2: Candidate Requirements */}
                {stepCount === 1 && (
                    <div>
                        <p className='pb-2'>Totel Experience condidate <span className='text-red-500'>*</span></p>

                        {errors.total_experience && <p className='text-red-500 pb-2'>{errors.total_experience}</p>}

                        <div className="flex gap-2 pb-4">

                            <button onClick={() => {
                                setClick(false)
                                setFormData({ ...formData, total_experience: "Fresher" })
                            }} className={`px-4 py-2 rounded-xl  ${click ? "text-blue-500 border border-blue-500 bg-tranceprint" : " text-white bg-blue-500"}`}>Fresher Only</button>
                            <button onClick={() => {
                                setClick(true)
                                setFormData({ ...formData, total_experience: "Experienced" })
                            }} className={`px-4 py-2 rounded-xl  ${click ? " text-white bg-blue-500" : "text-blue-500 border border-blue-500 bg-tranceprint"}`}>Experienced Only</button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block">Job info/Job Description</label>
                                <textarea value={formData.job_info} onChange={(e) => setFormData({ ...formData, job_info: e.target.value })} className="w-full border rounded-md p-2" rows="4"></textarea>
                                {errors.job_info && <p className='text-red-500 pb-2'>{errors.job_info}</p>}

                            </div>
                            <div>
                                <label className="block">Job Type</label>
                                <select
                                    onChange={(e) => setFormData({ ...formData, job_type: e.target.value })}
                                    className="w-full px-2 py-2 rounded-xl border"
                                    value={formData.job_type}
                                >
                                    <option value="">Select an option</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="contract">Contract</option>
                                </select>
                                {errors.job_type && <p className='text-red-500 pb-2'>{errors.job_type}</p>}

                            </div>
                            <div>
                                <label className="block">Skills</label>
                                <Input
                                    value={formData.skills}
                                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                                    error={errors.skills}
                                    type="text" name="skills" />
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
                        {summaryAdd && <textarea
                            value={formData.summary_responsibilties}
                            onChange={(e) => setFormData({ ...formData, summary_responsibilties: e.target.value })}
                            className="w-full border rounded-md p-2 placeholder:font-semibold placeholder:text-[#5494DC]" placeholder='Summary  ' rows="4"></textarea>}
                        {errors.summary_responsibilties && <p className='text-red-500 pb-2'>{errors.summary_responsibilties}</p>}

                        <div className="border-b py-2 text-[#5494DC] font-semibold flex items-center justify-between">Qualifications & Skills
                            {qualificationsAdd === true ? <FaChevronUp className='cursor-pointer' onClick={() => setQualificationsAdd(false)} /> :
                                <IoMdAdd onClick={() => {
                                    setQualificationsAdd(true)
                                }} className='cursor-pointer' > </IoMdAdd>}</div>
                        {qualificationsAdd && <textarea

                            value={formData.equipment_and_skills}
                            onChange={(e) => setFormData({ ...formData, equipment_and_skills: e.target.value })}
                            className="w-full border rounded-md p-2  placeholder:font-semibold placeholder:text-[#5494DC]" placeholder='Qualifications & Skills' rows="4"></textarea>}
                        {errors.equipment_and_skills && <p className='text-red-500 pb-2'>{errors.equipment_and_skills}</p>}

                        <div className="border-b py-2 text-[#5494DC] font-semibold flex items-center justify-between">Company Description
                            {description === true ? <FaChevronUp className='cursor-pointer' onClick={() => setDescription(false)} /> :
                                <IoMdAdd onClick={() => {
                                    setDescription(true)
                                }} className='cursor-pointer' > </IoMdAdd>} </div>
                        {description && <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full border rounded-md p-2  placeholder:font-semibold placeholder:text-[#5494DC]" placeholder='Company Description' rows="4"></textarea>}
                        {errors.description && <p className='text-red-500 pb-2'>{errors.description}</p>}

                    </div>
                )}

                {/* Step 4: Job Application Settings */}
                {stepCount === 3 && (
                    <div>
                        <div className="flex gap-2">

                            <button onClick={() => {
                                setSettingClick(false)
                                setFormData({ ...formData, Website: "App" })
                            }} className={`px-4 py-2 rounded-xl  ${settingClick ? "text-blue-500 border border-blue-500 bg-tranceprint" : " text-white bg-blue-500"}`}>On OpenRoaster App</button>
                            <button onClick={() => {
                                setSettingClick(true)
                                setFormData({ ...formData, Website: "website" })
                            }} className={`px-4 py-2 rounded-xl  ${settingClick ? " text-white bg-blue-500" : " text-blue-500 border border-blue-500 bg-tranceprint"}`}>On my website</button>
                        </div>
                        {errors.Website && <p className='text-red-500 pb-2'>{errors.Website}</p>}

                    </div>
                )}

                {/* Step 5: Enter Application URL */}
                {stepCount === 4 && (
                    <div>
                        <div className='flex  gap-2 pb-2'>
                            <button onClick={() => {
                                setSettingClick(false)
                                setFormData({ ...formData, Website: "App" })
                            }} className={`px-4 py-2 rounded-xl  ${settingClick ? "text-blue-500 border border-blue-500 bg-tranceprint" : " text-white bg-blue-500"}`}>On OpenRoaster App</button>
                            <button onClick={() => {
                                setSettingClick(true)
                                setFormData({ ...formData, Website: "website" })
                            }} className={`px-4 py-2 rounded-xl  ${settingClick ? " text-white bg-blue-500" : " text-blue-500 border border-blue-500 bg-tranceprint"}`}>On my website</button>

                        </div>
                        <h2>Enter Application URL</h2>
                        <label className="block">Job URL <span className="text-red-500">*</span></label>
                        <Input
                            value={formData.apply_url}
                            onChange={(e) => setFormData({ ...formData, apply_url: e.target.value })}
                            error={errors.apply_url}
                            className="w-full px-3 py-2 border rounded-md" type="url" required />
                    </div>
                )}
            </div>

            <div className="w-[250px] flex justify-center mt-4">
                {stepCount === 4 ? <button onClick={(e) => handleSubmit(e)} className="bg-[#5494DC]   text-white py-3 px-[6rem] rounded-3xl hover:bg-blue-600">
                    Continue
                </button> :
                    <button onClick={handleNextStep} className="bg-[#5494DC]  text-white py-3 px-[6rem] rounded-3xl hover:bg-blue-600">
                        Next
                    </button>}
                <ToastContainer />
            </div>
        </div>
    )
}

export default PostAJob;
