import instance from "../service/Instance";

export const profileUpdate = async (payload) => {
    
    try {
        const response = await instance.patch(`business/profile-update`, payload);
    } catch (error) {
        console.error("Profile update failed:", error.response ? error.response.data : error.message);
    }
};


export const profileImage = async (file) => {
    
    const formData = new FormData();
    formData.append("image", file) 

    try {
        const response = await instance.post(`business/change/image`,formData);

        return response.data;
    } catch (error) {
        console.error(
            "Image upload failed:",
            error.response ? error.response.data : error.message
        );
        throw error; 
    }
};

 