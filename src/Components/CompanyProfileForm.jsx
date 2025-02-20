import React, { useState } from 'react';
import Container from '../common/Container';
import Input from '../common/Input';
import { LuImagePlus } from 'react-icons/lu';

function CompanyForm() {
    const [formData, setFormData] = useState({
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

    const [error, setError] = useState({});

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

        if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            newError.email = 'Enter a valid email';

        }

        if (!formData.address1) {
            newError.address1 = 'Address 1 is required';
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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation()) {
            console.log(formData, "Form submitted successfully");
        } else {
            console.log("Form validation failed", error);
        }
    };

    return (
        <Container>
            <div className='p-2 max-w-xl mx-auto bg-white rounded-xl space-y-4'>
                <h2 className='text-2xl font-bold text-center'>Company Profile</h2>
                <div className='flex flex-col text-center items-center'>
                    <input type="file" name="company_logo" className='hidden' id='company_logo' />
                    <p htmlFor='company_logo' className='text-center text-2xl bg-gray-100 cursor-pointer rounded-[50%] py-6 px-6 border'><LuImagePlus /></p>
                    <label htmlFor='company_logo' className='cursor-pointer text-center text-blue-500'>

                        Click to upload your company logo
                    </label>
                    <p className='text-xs text-gray-500'>.png, .jpg, .jpeg (max 800 x 400px)</p>
                </div>

                <div className='py-2'>
                    <label>Legal company</label><span className='text-red-500'>*</span>
                    <Input
                        name='legal_company'
                        value={formData.legal_company}
                        onChange={(e) => setFormData({ ...formData, legal_company: e.target.value })}
                        required
                        error={error.legal_company}
                    />

                    <label>Business name</label><span className='text-red-500'>*</span>
                    <Input
                        name='business_name'
                        value={formData.business_name}
                        onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                        required
                        error={error.business_name}
                    />

                    <label>Established year</label><span className='text-red-500'>*</span>
                    <Input
                        name='established_year'
                        value={formData.established_year}
                        onChange={(e) => setFormData({ ...formData, established_year: e.target.value })}
                        required
                        error={error.established_year}
                    />

                    <label>Email</label><span className='text-red-500'>*</span>
                    <Input
                        name='email' type='email'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                        error={error.email}
                    />

                    <label>Mobile number</label>
                    <Input
                        name='mobile_number'
                        value={formData.mobile_number}
                        onChange={(e) => setFormData({ ...formData, mobile_number: e.target.value })}
                        required
                    />
                    <label>Licensed number</label>
                    <Input
                        value={formData.licensed_number}
                        onChange={(e) => setFormData({ ...formData, licensed_number: e.target.value })}
                        required
                    />
                    <label>States Licensed </label>
                    <Input
                        value={formData.states_licensed}
                        onChange={(e) => setFormData({ ...formData, states_licensed: e.target.value })}
                        required
                    />


                    <h2 className='py-2'>Company Address<span className='text-red-500'>*</span></h2>

                    <label>Address 1</label>
                    <Input
                        name='address1'
                        value={formData.address1}
                        onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                        required
                        error={error.address1}
                    />

                    <label>City</label>
                    <Input
                        name='city'
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}

                        error={error.city}
                    />

                    <label>State</label>
                    <Input
                        name='state'
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}

                        error={error.state}
                    />

                    <label>Zip/Postal code</label>
                    <Input
                        name='zipCode'
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        required
                        error={error.zipCode}
                    />

                    <button onClick={handleSubmit} className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>Save</button>
                </div>
            </div>
        </Container>
    );
}

export default CompanyForm;
