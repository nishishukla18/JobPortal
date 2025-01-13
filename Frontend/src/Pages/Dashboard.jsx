import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar for recruiter panel */}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            onClick={() => navigate('/')}
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt="Logo"
          />
          <div className="flex items-center gap-3">
            <p className="hidden sm:block">Welcome, User</p>
            <div className="relative group">
              <img
                className="w-8 border rounded-full cursor-pointer"
                src={assets.company_icon}
                alt="Company Icon"
              />
              <div className="absolute hidden group-hover:block top-full right-0 mt-2 w-32 bg-white border border-gray-300 rounded shadow-md z-10">
                <ul className="text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content with sidebar */}
      <div className="flex flex-1">
        {/* Left sidebar */}
        <div className="w-16 sm:w-1/4 bg-gray-100 border-r border-gray-200 h-screen p-3 sm:p-5">
          <ul className="space-y-4">
            <NavLink
              to="/dashboard/add-job"
              className={({ isActive }) =>
                `flex flex-col sm:flex-row items-center gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-200 ${
                  isActive ? 'bg-gray-300 font-bold' : ''
                }`
              }
            >
              <img className="w-6 h-6" src={assets.add_icon} alt="Add Job Icon" />
              <p className="hidden sm:block text-sm">Add Job</p>
            </NavLink>
            <NavLink
              to="/dashboard/manage-jobs"
              className={({ isActive }) =>
                `flex flex-col sm:flex-row items-center gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-200 ${
                  isActive ? 'bg-gray-300 font-bold' : ''
                }`
              }
            >
              <img className="w-6 h-6" src={assets.home_icon} alt="Manage Jobs Icon" />
              <p className="hidden sm:block text-sm">Manage Jobs</p>
            </NavLink>
            <NavLink
              to="/dashboard/view-applications"
              className={({ isActive }) =>
                `flex flex-col sm:flex-row items-center gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-200 ${
                  isActive ? 'bg-gray-300 font-bold' : ''
                }`
              }
            >
              <img
                className="w-6 h-6"
                src={assets.person_tick_icon}
                alt="View Applications Icon"
              />
              <p className="hidden sm:block text-sm">View Applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Outlet for nested routes */}
        <div className="flex-1 p-3 sm:p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
