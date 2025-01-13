import React from "react";
import { assets } from "../assets/assets";
import {useNavigate} from 'react-router-dom'

function JobCard({ job }) {
  const navigate = useNavigate();
  return (
    <div className="border rounded-lg p-4 bg-white flex flex-col space-y-4">
      {/* Company Logo */}
      <div className="w-12 h-12">
        <img
          src={assets.company_icon}
          alt="Company Icon"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Job Title */}
      <h4 className="font-medium text-lg text-gray-800">{job.title}</h4>

      {/* Job Location and Level */}
      <div className="flex justify-between text-gray-600 text-sm">
        <span>{job.location}</span>
        <span>{job.level}</span>
      </div>

      {/* Job Description */}
      <p
        className="text-gray-600 text-sm"
        dangerouslySetInnerHTML={{
          __html: job.description.slice(0, 150) + "...",
        }}
      ></p>

      {/* Action Buttons */}
      <div className="flex justify-between">
        <button onClick={()=>{navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm hover:bg-blue-100">
          Apply Now
        </button>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className="text-gray-600 border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default JobCard;
