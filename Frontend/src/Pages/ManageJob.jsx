import React from 'react';
import { manageJobsData } from '../assets/assets';
import moment from 'moment';
import {useNavigate} from 'react-router-dom'

function ManageJob() {
  const navigate = ()=>{
    const navigate = useNavigate()
  }
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Manage Jobs</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left font-semibold border border-gray-300">#</th>
              <th className="px-4 py-2 text-left font-semibold border border-gray-300">Job Title</th>
              <th className="px-4 py-2 text-left font-semibold border border-gray-300">Date</th>
              <th className="px-4 py-2 text-left font-semibold border border-gray-300">Location</th>
              <th className="px-4 py-2 text-left font-semibold border border-gray-300">Applicants</th>
              <th className="px-4 py-2 text-center font-semibold border border-gray-300">Visible</th>
            </tr>
          </thead>
          <tbody>
            {manageJobsData.map((job, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 text-center border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">{job.title}</td>
                <td className="px-4 py-2 border border-gray-300">{moment(job.date).format('LL')}</td>
                <td className="px-4 py-2 border border-gray-300">{job.location}</td>
                <td className="px-4 py-2 border border-gray-300">{job.applicants}</td>
                <td className="px-4 py-2 text-center border border-gray-300">
                  <input type="checkbox" className="scale-125 ml-4 accent-blue-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={e=>navigate('/manage-job')} className='p-2 bg-black text-white mt-4 '>Add new job</button>
      </div>
    </div>
  );
}
 
export default ManageJob
