import React from "react";
import Container from "../../common/Container";
import { Link } from "react-router-dom";

const settingsOptions = [
  { name: "Edit profile", path: "" },
  { name: "My Subscription", path: "/dashboard/subscription" },
  { name: " Change password" },
  { name: "Terms and conditions" },
  { name: "Privacy policy" },
  { name: "Help and Support" },
];

const Settings = () => {
  return (
     <Container>
      <div className="bg-[#F4F9Fb] h-screen  px-4 flex flex-col">
        <h2 className="text-2xl font-semibold text-center py-4 text-gray-800">
          Account Settings
        </h2>

        <div className="space-y-4">
          {settingsOptions.map((option, index) => (
            <Link
              key={index}
              to={option.path}
              className="flex justify-between items-center border bg-white p-5 rounded-lg  "
            >
              <p className="text-gray-700 font-medium">{option.name}</p>
              <p className="text-gray-400 text-lg">›</p>
            </Link>
          ))}
        </div>
      </div>
      </Container>
    
  );
};

export default Settings;
