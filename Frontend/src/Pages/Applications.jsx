import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { assets, jobsApplied } from '../assets/assets';
import moment from 'moment';

function Applications() {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="p-6 m-4 border border-blue-200 rounded-lg bg-white shadow-md">
        <h2 className="font-bold text-lg mb-4">Your Resume</h2>
        <div className="mb-6">
          {isEdit ? (
            <div className="flex items-center">
              <label htmlFor="resumeUpload" className="flex items-center cursor-pointer">
                <p className="p-2 bg-blue-200 border border-blue-200 rounded-lg text-blue-700">
                  Select Resume
                </p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                  hidden
                />
                <img src={assets.profile_upload_icon} className="ml-2" alt="Upload Icon" />
              </label>
              <button
                onClick={() => setIsEdit(false)}
                className="px-6 py-2 ml-4 bg-green-200 border border-green-300 rounded-lg text-green-800"
              >
                Save
              </button>
            </div>
          ) : (
            <div>
              {resume ? (
                <a
                  href={URL.createObjectURL(resume)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-200 border border-blue-200 rounded-lg text-blue-600"
                >
                  View Resume
                </a>
              ) : (
                <p className="text-gray-500">No resume uploaded</p>
              )}
              <button
                onClick={() => setIsEdit(true)}
                className="px-6 py-2 ml-4 bg-green-200 border border-green-300 rounded-lg text-green-800"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="font-bold text-lg mb-4">Jobs Applied</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Job Title</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Company</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Applied On</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {jobsApplied.map((job, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 flex items-center">
                    <img src={job.logo} alt={job.company} className="w-10 h-10 mr-2 rounded" />
                    {job.company}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{job.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{job.location}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {moment(job.date).format('LL')}
                  </td>
                 
                  <td>
                     <span className={`border border-gray-300 px-4 py-2 font-bold ${
                      job.status === 'rejected'
                        ? 'text-red-500'
                        : job.status === 'pending'
                        ? 'text-yellow-500'
                        : 'text-green-500'
                    }`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Applications;
