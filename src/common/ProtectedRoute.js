import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("access_token"); // Check for token

    return token ? children : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
