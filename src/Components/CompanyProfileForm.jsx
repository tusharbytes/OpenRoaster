import React, { useEffect, useMemo, useState } from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import { LuImagePlus } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { profileImage, profileUpdate } from '../api/Api';
import { toast, ToastContainer } from 'react-toastify';
import { getProfile } from '../feature/ProfileSlice';
import Loader from '../common/Loader';



function CompanyForm() {


    const profile = useSelector((state) => state)
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null);
    const dispatch = useDispatch()


    const initialFormState = useMemo(
        () => ({
            legal_company: profile?.business?.legal_company || "",
            business_name: profile?.business?.business_name || "",
            established_year: profile?.business?.established_year || "",
            email: profile?.email || "",
            mobile_number: profile?.business?.mobile_number || "",
            licensed_number: profile?.business?.licensed_number || "",
            states_licensed: profile?.business?.state_licensed || "",
            address1: profile?.business?.address_1 || "",
            address2: profile?.business?.address_2 || "",
            city: profile?.business?.city || "",
            state: profile?.business?.state || "",
            zipCode: profile?.business?.zip_code || "",
        }),
        [profile]
    );

    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        if (!profile) {
            dispatch(getProfile());
        } else {
            setFormData(initialFormState);
            setPreview(profile.business?.image || null);
        }
    }, [profile, dispatch, initialFormState]);

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
        await profileImage(file);

    };


    const [error, setError] = useState({});


    const payload = {
        name: formData.business_name,
        established_year: formData.established_year,
        email: profile?.profile?.profileData?.email,
        phone: formData.mobile_number,
        licensed_number: formData.licensed_number,
        state_licensed: formData.states_licensed,
        address_1: formData.address1,
        address_2: formData.address2,
        state: formData.state,
        city: formData.city,
        zip_code: formData.zipCode
    }
    // console.log(payload, "payload")

    const validation = () => {
        const newError = {};

        if (!formData.legal_company) {
            newError.legal_company = 'Legal company name is required';
        }

        if (!formData.business_name) {
            newError.business_name = 'Business name is required';
        }

        if (!formData.established_year.match(/^(19|20)\d{2}$/)) {
            newError.established_year = 'Enter a valid year';
        }

        if (!formData.address1) {
            newError.address1 = 'Address  is required';
        }

        if (!formData.city) {
            newError.city = 'City is required';
        }

        if (!formData.state) {
            newError.state = 'State is required';
        }

        setError(newError);

        return Object.keys(newError).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            try {
                await profileUpdate(payload);
                toast.success("Profile updated successfully!");
                dispatch(getProfile());
                setFormData({
                    legal_company: '',
                    business_name: '',
                    established_year: '',
                    email: '',
                    mobile_number: '',
                    licensed_number: '',
                    states_licensed: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zipCode: '',
                });

            } catch (error) {
                toast.error("Failed to update profile.");
                console.error("Error updating profile:", error);
            }
        } else {
            console.log("Form validation failed", error);
        }
    };
    return (
        <Container>
             {profile?.profile.loading ? <Loader /> :
            <div className='p-2 max-w-xl mx-auto bg-white rounded-xl space-y-4'>
                <h2 className='text-2xl font-bold text-center'>Company Profile</h2>
                <div className='flex flex-col text-center items-center'>
                    <input
                        onChange={handleFileChange}
                        type="file" name="company_logo" className='hidden' id='company_logo' />

                    <p htmlFor="company_logo" className="text-center text-2xl bg-gray-100 cursor-pointer rounded-[50%] w-[6rem] h-[6rem] flex items-center justify-center border overflow-hidden">
                        {preview || profile?.profile?.profileData?.business?.image ? (
                            <img
                                src={preview || profile?.profile?.profileData?.business?.image}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <LuImagePlus />
                        )}

                    </p>

                    <label htmlFor='company_logo' className='cursor-pointer text-center text-blue-500'>

                        Click to upload your company logo
                    </label>
                    <p className='text-xs text-gray-500'>.png, .jpg, .jpeg (max 800 x 400px)</p>
                </div>

                {/* all input Fields*/}
                <div className='py-2'>
                    <label>Legal company</label><span className='text-red-500'>*</span>
                    <Input
                        name='legal_company'
                        value={formData.legal_company || profile?.profile?.profileData?.business?.legal_company}
                        onChange={(e) => setFormData({ ...formData, legal_company: e.target.value })}
                        required
                        error={error.legal_company}
                    />

                    <label>Business name</label><span className='text-red-500'>*</span>
                    <Input
                        name='business_name'
                        value={formData.business_name || profile?.profile?.profileData?.business?.business_name}
                        onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                        required
                        error={error.business_name}
                    />

                    <label>Established year</label><span className='text-red-500'>*</span>
                    <Input
                        name='established_year'
                        type='number'
                        value={formData.established_year || profile?.profile?.profileData?.business?.established_year}
                        onChange={(e) => setFormData({ ...formData, established_year: e.target.value })}
                        required
                        error={error.established_year}
                    />

                    <label>Email</label><span className='text-red-500'>*</span>
                    <Input
                        name='email' type='email'
                        value={profile?.profile?.profileData?.email}
                    />

                    <label>Mobile number</label>
                    <Input
                        name='mobile_number'
                        type='number'

                        value={formData.mobile_number || profile?.profile?.profileData?.business?.mobile_number}
                        onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                        required
                    />
                    <label>Licensed number</label>
                    <Input
                        value={formData.licensed_number || profile?.profile?.profileData?.business?.licensed_number}
                        onChange={(e) => setFormData({ ...formData, licensed_number: e.target.value })}
                        required
                    />
                    <label>States Licensed </label>
                    <Input
                        value={formData.states_licensed || profile?.profile?.profileData?.business?.state_licensed}
                        onChange={(e) => setFormData({ ...formData, states_licensed: e.target.value })}
                        required
                    />


                    <h2 className='py-2'>Company Address<span className='text-red-500'>*</span></h2>

                    <label>Address 1</label>
                    <Input
                        name='address1'
                        value={formData.address1 || profile?.profile?.profileData?.business?.address_1}
                        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                        required
                        error={error.address1}
                    />
                    <label>Address 2</label>
                    <Input
                        name='address1'
                        value={formData.address2 || profile?.profile?.profileData?.business?.address_2}
                        onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
                        required
                        error={error.address1}
                    />
                    <label>City</label>
                    <Input
                        name='city'
                        value={formData.city || profile?.profile?.profileData?.business?.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}

                        error={error.city}
                    />

                    <label>State</label>
                    <Input
                        name='state'
                        value={formData.state || profile?.profile?.profileData?.business?.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}

                        error={error.state}
                    />

                    <label>Zip/Postal code</label>
                    <Input
                        name='zipCode'
                        type='number'
                        value={formData.zipCode || profile?.profile?.profileData?.business?.zip_code}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        required
                        error={error.zipCode}
                    />
                </div>
                <div className='flex justify-center w-full'>
                    <button onClick={(e) => handleSubmit(e)} className=' text-center bg-blue-400 text-white py-3 px-[5rem] md:px-[10rem] rounded-3xl hover:bg-blue-600'>
                        
                   {profile?.profile.profileData.stepper === "Active" ? "Update" :" Save"}
                    </button>
                </div>
            </div> }
            <ToastContainer />
        </Container>
    );
}

export default CompanyForm;
