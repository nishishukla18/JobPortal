import React, { useCallback, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
//import { use } from 'react'
import { AppContext } from '../Context/AppContext'
import Loading from './Loading '
import Navbar from '../Components/Navbar'
import { assets } from '../assets/assets'
import moment from 'moment'
import kConvert from 'k-convert'
import JobCard from '../Components/JobCard'

function ApplyJob() {
  const {id} = useParams()

  const [jobData,setJobData] = useState(null)
  const {jobs} = useContext(AppContext)

  const fetchJob = async()=>{
    const data = jobs.filter(job=>job._id===id)
    if(data.length!=0){
      setJobData(data[0])
      console.log(data[0])
    } 
  }
  useEffect(()=>{
    if(jobs.length>0){
      fetchJob()
    }

  },[id,jobs])
  return jobData?(
    <div>
      <Navbar/>
       <div>
        <div>
        <div>
        <div className="flex flex-col lg:flex-row items-center p-6 bg-blue-50 rounded-lg border border-blue-200 space-y-4 lg:space-y-0 lg:space-x-4">
  {/* Company Logo */}
  <img
    src={jobData.companyId.image}
    alt="Company Logo"
    className="w-16 h-16 rounded-full object-cover"
  />

  {/* Job Details */}
  <div className="flex flex-col w-full space-y-4">
    {/* Job Title and Apply Button */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0 mt-5">
      <h1 className="text-xl font-semibold text-gray-800">{jobData.title}</h1>
      <button className="p-2 bg-blue-600 text-white font-medium text-sm rounded hover:bg-blue-700">
        Apply Now
      </button>
    </div>

    {/* Job Information */}
    <div className="flex flex-wrap gap-4 text-gray-600">
      {/* Company Name */}
      <span className="flex items-center space-x-2">
        <img src={assets.suitcase_icon} alt="Company Icon" className="w-5 h-5" />
        <span>{jobData.companyId.name}</span>
      </span>

      {/* Location */}
      <span className="flex items-center space-x-2">
        <img src={assets.location_icon} alt="Location Icon" className="w-5 h-5" />
        <span>{jobData.location}</span>
      </span>

      {/* Level */}
      <span className="flex items-center space-x-2">
        <img src={assets.person_icon} alt="Person Icon" className="w-5 h-5" />
        <span>{jobData.level}</span>
      </span>

      {/* Salary */}
      <span className="flex items-center space-x-2">
        <img src={assets.money_icon} alt="Money Icon" className="w-5 h-5" />
        <span>CTC: {kConvert.convertTo(jobData.salary)}</span>
      </span>
    </div>

    {/* Posted Date */}
    <p className="text-sm text-gray-500">Posted {moment(jobData.date).fromNow()}</p>
  </div>
</div>

      
       {/* Job Description */}
      {/* Job Description */}
<div className="bg-white shadow-md rounded-lg border border-gray-200 p-6 flex flex-col lg:flex-row lg:items-start lg:space-x-6">
  {/* Main Job Description */}
  <div className="lg:w-2/3">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Job Description
    </h2>
    <div
      className="text-gray-700 space-y-4"
      dangerouslySetInnerHTML={{ __html: jobData.description }}
    ></div>
    <div className="mt-6 flex justify-end">
      <button className="px-6 py-2 bg-blue-600 text-white font-medium text-sm rounded hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  </div>

  {/* More Jobs Section */}
  <div className="bg-gray-50 p-4 border border-gray-200 rounded-lg shadow-md lg:w-1/4">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">
      More jobs from {jobData.companyId.name}
    </h2>
    <div className="space-y-4">
      {jobs
        .filter(
          (job) =>
            job._id !== jobData._id && job.companyId._id === jobData.companyId._id
        )
        .slice(0, 4)
        .map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
    </div>
  </div>
</div>

        </div>
        </div>
       </div>
    </div>
  ):(
    <Loading/>
  )
}

export default ApplyJob