import axios from "axios";


const token = localStorage.getItem("access_token")
console.log(token)
const instance = axios.create({
    baseURL: "https://roaster.shopifystudio.xyz/api/",
    headers: {
        "Authorization": `Bearer ${token}`
    }
})

// instance.interceptors.response.use(
//     (response) => {

//         return response;
//     },
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             console.error("Unauthorized, redirecting to login...");

//         }
//         return Promise.reject(error);
//     })

export default instance;