import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../common/ProtectedRoute";
import Intake from "../pages/Intake";
import Dashboard from "../pages/dashboard/Dashboard";
import SubscriptionPlans from "../pages/dashboard/Subscription";
import PostAJob from "../Components/postAJob/PostAJob";
import Payment from "../pages/Payment";
import CreateJobView from "../Components/ViewUserCreateJob/CreateJobView";
import Settings from "../pages/dashboard/Settings";
import Topbar from "../Components/Topbar";

const MyRoutes = () => {
  const routes = useRoutes([
    // Public Routes
    { element: <Home />, path: "/" },
    { element: <Login />, path: "/signin" },
    { element: <Signup />, path: "/signup" },

    // Protected Routes
    { element: (<ProtectedRoute><Intake /></ProtectedRoute>), path: "/intake" },
    { element: (<ProtectedRoute><Payment /></ProtectedRoute>), path: "/payment" },

    { element: (<ProtectedRoute><PostAJob /></ProtectedRoute>), path: "/postajob" },
    { element: (<ProtectedRoute><CreateJobView /></ProtectedRoute>), path: "/createjobview" },

// dashboard routes

    { element: (<ProtectedRoute><Topbar/><Dashboard /> </ProtectedRoute>), path: "/dashboard/home" },
    { element: (<ProtectedRoute><Topbar/><Settings /></ProtectedRoute>), path: "/dashboard/setting" },
    { element: (<ProtectedRoute><Topbar/><SubscriptionPlans /></ProtectedRoute>), path: "/dashboard/subscription" },

   
  ]);

  return routes;
};

export default MyRoutes;
