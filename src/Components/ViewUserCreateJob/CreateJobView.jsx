import React, { useState } from 'react'
import Container from '../../common/Container'
import { GoPencil } from 'react-icons/go';

function CreateJobView({saveFormData}) {
  console.log(saveFormData ,"saveFormData")
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  return (
    <Container>
      <div className="p-6 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center text-xl font-semibold text-gray-800">
          <p>Nice work! Now all you need to do is review for accuracy and add your logo.</p>
          <p>If you want to make any changes, just click the edit icons on the right of each entry.</p>
        </div>

        <div className="border w-full h-full py-6 px-4 flex justify-center bg-gray-50 rounded-lg">
          <div className="border w-32 h-32 flex justify-center items-center rounded-full bg-gray-100 relative overflow-hidden shadow-md">
            {!image ? (
              <>
              <input
                type="file"
                className="absolute w-full h-full opacity-0 cursor-pointer"
                onChange={handleImageChange}
              /> 
              
              </>
            ) : (<> <p className="absolute bottom-2 text-xs text-gray-500">Click to upload your company logo</p>
              <img src={image} alt="Uploaded" className="w-32 h-32 object-cover rounded-full border" />
          </>   )}
         
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-blue-600">Job Title & Location</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Health</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Company Name</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Full Address</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold text-gray-800">Job Timings</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Full Address</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Overview</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Responsibilities</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Qualifications</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
          <p className="text-gray-700">1</p>
        </div>

        <div className="space-y-4">
          <p className="text-blue-600 font-semibold">Job Details</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Job Type</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">Skills</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-blue-600 font-semibold">Where will candidates apply?</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">1</p>
            <p className="bg-blue-200 rounded-full p-2 cursor-pointer"><GoPencil /></p>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default CreateJobView