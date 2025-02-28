import axios from "axios";

const getToken = () => localStorage.getItem("access_token");
const getRefreshToken = () => localStorage.getItem("refresh_token");

const instance = axios.create({
    baseURL: "https://roaster.shopifystudio.xyz/api/",
    headers: {
        "Authorization": `Bearer ${getToken()}`
    }
});

// Request Interceptor
instance.interceptors.request.use(
    (req) => {
        console.log("Request:", req);
        const token = getToken();
        if (token) {
            req.headers.Authorization = `Bearer ${token}`;
        }
        return req;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor
instance.interceptors.response.use(
    (response) => response, // Success handler
    async (error) => {
        if (error.response?.status === 401) {
            try {
                const refreshToken = getRefreshToken();
                console.log("Refreshing Token...");

                const refreshResponse = await axios.post(
                    "https://roaster.shopifystudio.xyz/api/refresh-token",
                    { refresh_token: refreshToken }
                );
                const newAccessToken = refreshResponse.data.access_token;
                const refresh_token = refreshResponse.data.refresh_token

                localStorage.setItem("access_token", newAccessToken);
                localStorage.setItem("refresh_token", refresh_token);


                // Update Axios instance header
                instance.defaults.headers["Authorization"] = `Bearer ${newAccessToken}`;

                // Retry the original request
                error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
                return instance(error.config);
                

            } catch (refreshError) {
                console.error("Error refreshing token:", refreshError);
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
