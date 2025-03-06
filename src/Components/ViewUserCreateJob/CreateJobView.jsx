import React, { useEffect, useState } from 'react';
import Container from '../../common/Container';
import { GoPencil } from 'react-icons/go';
import { MdAddPhotoAlternate } from "react-icons/md";
import Input from '../../common/Input';
import { getJobCreate } from '../../api/Api';

function CreateJobView({ formData }) {

  useEffect(() => {
    getJobCreate();
  }, []);

  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [editField, setEditField] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const openEditModal = (field, value) => {
    setEditField(field);
    setEditValue(value);
    setIsOpen(true);
  };

  const handleSave = () => {
    console.log(`Updated ${editField}:`, editValue);
    setIsOpen(false);
  };

  return (
    <Container>
      <div className="overflow-auto p-6 space-y-6 rounded-lg">
        <div className="text-center text-sm font-semibold text-gray-800">
          <p>Nice work! Now all you need to do is review for accuracy and add your logo.</p>
          <p>If you want to make any changes, just click the edit icons.</p>
        </div>

        {/* Logo Upload Section */}
        <div className="border py-4 px-6 flex flex-col items-center bg-gray-50 rounded-lg shadow-md w-full">
          <div className="border w-20 h-20 flex justify-center items-center rounded-full bg-gray-200 relative overflow-hidden shadow-lg">
            {!image ? (
              <>
                <input type="file" className="absolute w-full h-full opacity-0 cursor-pointer" onChange={handleImageChange} />
                <MdAddPhotoAlternate className="text-gray-500 text-2xl" />
              </>
            ) : (
              <img src={image} alt="Uploaded" className="w-20 h-20 object-cover rounded-full border" />
            )}
          </div>
          <p className="text-sm text-gray-600 mt-2">Click to upload your company logo</p>
        </div>

        {/* Job Details */}
        <div className="space-y-4">
          <p className="font-semibold text-blue-600">Job Title & Location</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">{formData?.company_name_on_job}</p>
            <button className="bg-blue-200 rounded-full p-2" onClick={() => openEditModal('Company Name', formData?.company_name_on_job)}><GoPencil /></button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">{formData?.location}</p>
            <button className="bg-blue-200 rounded-full p-2" onClick={() => openEditModal('Location', formData?.location)}><GoPencil /></button>
          </div>
        </div>

        <div className="border"></div>

        {/* Job Timings */}
        <div className="space-y-4">
          <p className="font-semibold text-gray-800">Job Timings</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">{formData?.timing}</p>
            <button className="bg-blue-200 rounded-full p-2" onClick={() => openEditModal('Job Timing', formData?.timing)}><GoPencil /></button>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Responsibilities</p>
            <button className="bg-blue-200 rounded-full p-2" onClick={() => openEditModal('Responsibilities', formData?.summary_responsibilties)}><GoPencil /></button>
          </div>
        </div>

        {/* Qualifications */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Qualifications</p>
            <button className="bg-blue-200 rounded-full p-2" onClick={() => openEditModal('Qualifications', formData?.equipment_and_skills)}><GoPencil /></button>
          </div>
        </div>

        {/* Where will candidates apply? */}
        <div className="space-y-4">
          <p className="text-blue-600 font-semibold">Where will candidates apply?</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-700">{formData?.Website}</p>
            <button className="bg-blue-200 rounded-full p-2" onClick={() => openEditModal('Website', formData?.Website)}><GoPencil /></button>
          </div>
        </div>

        {/* Modal for Editing */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-95 animate-fadeIn">
              <h2 className="text-xl font-semibold mb-4">Edit {editField}</h2>
              <Input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
              <div className="flex justify-end space-x-3 mt-4">
                <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400">
                  Cancel
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default CreateJobView;
