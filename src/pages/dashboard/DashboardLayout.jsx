import { Outlet } from "react-router-dom";
import Topbar from "../../Components/Topbar";

const DashboardLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet /> {/* This will render the nested dashboard routes */}
    </div>
  );
};

export default DashboardLayout;
