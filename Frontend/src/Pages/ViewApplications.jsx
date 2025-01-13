import React from 'react';
import { assets, viewApplicationsPageData } from '../assets/assets';

function ViewApplications() {
  return (
    <div className="p-4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">View Applications</h1>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse max-w-4xl bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 text-left">#</th>
              <th className="border border-gray-300 px-4 text-left">User Name</th>
              <th className="border border-gray-300 px-4 text-left max-sm:hidden">Job Title</th>
              <th className="border border-gray-300 px-4 text-left max-sm:hidden">Location</th>
              <th className="border border-gray-300 px-4 text-left">Resume</th>
              <th className="border border-gray-300 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {viewApplicationsPageData.map((applicant, index) => (
              <tr key={applicant.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 text-center py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2 flex items-center gap-3">
                  <img
                    src={applicant.imgSrc}
                    alt={`${applicant.name}'s avatar`}
                    className="w-8 h-8 rounded-full mr-3 max-sm:hidden"
                  />
                  <span>{applicant.name}</span>
                </td>
                <td className="border border-gray-300 max-sm:hidden px-4 py-2">{applicant.jobTitle}</td>
                <td className="border border-gray-300 px-4 py-2">{applicant.location}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={applicant.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    <img
                      src={assets.resume_download_icon}
                      alt="Download Resume"
                      className="w-6 h-6 inline"
                    />
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-2 relative">
                  <div className="relative group inline-block">
                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded relative text-left">
                      ...
                    </button>
                    <div className="absolute hidden group-hover:block bg-white border border-gray-300 rounded shadow-lg z-10 w-32 mt-2">
                      <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-green-600">
                        Accept
                      </button>
                      <button className="block px-4 py-2 hover:bg-gray-100 w-full text-left text-red-500">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewApplications;
