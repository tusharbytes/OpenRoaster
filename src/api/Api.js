import instance from "../service/Instance";

export const profileUpdate = async (payload) => {

    try {
        const response = await instance.patch(`business/profile-update`, payload);
        return response.data.data
    } catch (error) {
        console.error("Profile update failed:", error.response ? error.response.data : error.message);
    }
};


export const profileImage = async (file) => {

        const formData = new FormData();
        formData.append("image", file)

    try {
        const response = await instance.post(`business/change/image`, formData);

        return response.data;
    } catch (error) {
        console.error(
            "Image upload failed:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};

export const jobCreate = async (payload) => {
  

    const response = await instance.post(`business/job/create`, payload);
    return response
}

export const getJobCreate = async (id) => { 

    const response = await instance.get(`business/job/get/${id}`,);
    return response.data
}