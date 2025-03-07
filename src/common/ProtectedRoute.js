import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const ProtectedRoute = ({ children }) => {
   
 
    const token = Cookies.get("access_token");
    const stepper = Cookies.get("Stepper");
    console.log(stepper ==="Profile")


  
  
    if (token && stepper === "Profile") {
        console.log("innnn");
    <Navigate to="/intake" />
    }
    if (!token) {
        return <Navigate to="/signin" replace />;
    }

    return children;
};

export default ProtectedRoute;
