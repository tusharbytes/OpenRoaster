import axios from "axios";

const token = localStorage.getItem("access_token");

const url = "https://roaster.shopifystudio.xyz/api/";

export const profileUpdate = async (payload) => {
    
    try {
        const response = await axios.patch(`${url}business/profile-update`,
            payload,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        console.log("Update Response:", response.data);
    } catch (error) {
        console.error("Profile update failed:", error.response ? error.response.data : error.message);
    }
};


export const profileImage = async (file) => {
    
    const formData = new FormData();
    formData.append("image", file) 

    try {
        const response = await axios.post(`${url}business/change/image`,
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error(
            "Image upload failed:",
            error.response ? error.response.data : error.message
        );
        throw error; 
    }
};

