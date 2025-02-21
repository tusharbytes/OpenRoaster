import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("access_token"); // Check for token

    return token ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
