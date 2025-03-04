import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../common/ProtectedRoute";
import Intake from "../pages/Intake";
import Dashboard from "../pages/Dashboard";
import SubscriptionPlans from "../pages/Subscription";
import PostAJob from "../Components/postAJob/PostAJob";
import Payment from "../pages/Payment";
import CreateJobView from "../Components/ViewUserCreateJob/CreateJobView";

const MyRoutes = () => {
  const routes = useRoutes([
    // Public Routes
    { element: <Home />, path: "/" },
    { element: <Login />, path: "/signin" },
    { element: <Signup />, path: "/signup" },

    // Protected Routes
    { element: (<ProtectedRoute><Intake /></ProtectedRoute>), path: "/intake" },
    { element: (<ProtectedRoute><Payment /></ProtectedRoute>), path: "/payment" },

    { element: (<ProtectedRoute><Dashboard /></ProtectedRoute>), path: "/dashboard" },
    { element: (<ProtectedRoute><SubscriptionPlans /></ProtectedRoute>), path: "/subscription" },
    { element: (<ProtectedRoute><PostAJob /></ProtectedRoute>), path: "/postajob" },
    { element: (<ProtectedRoute><CreateJobView /></ProtectedRoute>), path: "/createjobview" },

  ]);

  return routes;
};

export default MyRoutes;
