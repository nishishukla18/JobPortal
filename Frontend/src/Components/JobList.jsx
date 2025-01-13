import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

function JobList() {
  const { isSearched, searchFilter, setSearchFilter,jobs } = useContext(AppContext);

  const [showFilter,setShowFilter] = useState(true)
  const [currPge,setCurrPage] = useState(1)
  const [selectedCategories,setSelectedCategories] = useState([])
  const [selectedLocations,setSelectedLocations] = useState([])
  const [filteredJobs ,setFilterJobs] = useState(jobs)

  const handleCategoryChange = (category) =>{
    setSelectedCategories(
      prev =>prev.includes(category)? prev.filter(c=>c!==category):[...prev,category]
    )
  }
  const handleLocationChange = (location) =>{
    setSelectedLocations(
      prev =>prev.includes(location)? prev.filter(c=>c!==location):[...prev,location]
    )
  }
  useEffect(()=>{
       const matchesCategory = job=>selectedCategories.length==0 || selectedCategories.includes(job.category)

       const matchesLocation = job=>selectedLocations.length===0 || selectedLocations.includes(job.locations)

       const matchesTitle = job=>searchFilter.title==="" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())

       const matchesSearchLocation = job => searchFilter.location==="" || job.location

       const newFilteredJobs = jobs.slice().reverse().filter(
        job=>matchesCategory(job) && matchesLocation(job) && matchesTitle(job) && matchesSearchLocation(job)
       )
       setFilterJobs(newFilteredJobs)
       setCurrPage(1)
  },[jobs,selectedCategories,selectedLocations,searchFilter])
  return (
    <div className="2xl:px-20 mx-auto flex flex-col lg:flex-row gap-8 py-8">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white p-4 border rounded-lg">
        {/* Current Search Filter */}
        {isSearched && (searchFilter.title || searchFilter.location) && (
          <>
            <h3 className="font-medium text-lg mb-4">Current Search</h3>
            <div className="mb-4 text-gray-600 space-y-2">
              {searchFilter.title && (
                <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                  {searchFilter.title}
                  <img
                    onClick={(handleCategoryChange) =>
                      setSearchFilter((prev) => ({ ...prev, title: "" }))
                    }
                    className="cursor-pointer w-4 h-4"
                    src={assets.cross_icon}
                    alt="Clear Title Filter"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="inline-flex items-center gap-2.5 bg-pink-50 border border-pink-200 px-4 py-1.5 rounded">
                  {searchFilter.location}
                  <img
                    onClick={(handleLocationChange) =>
                      setSearchFilter((prev) => ({ ...prev, location: "" }))
                    }
                    className="cursor-pointer w-4 h-4"
                    src={assets.cross_icon}
                    alt="Clear Location Filter"
                  />
                </span>
              )}
            </div>
          </>
        )}
        <button onClick={e=>setShowFilter(prev=>!prev)} className="px-6 py-1.5 rounded border border-gray-400 lg:hidden ">
            {showFilter?"Close":"Filters"}
        </button>
        {/* Category Filter */}
        <div className={showFilter?"":"max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input type="checkbox" className="w-4 h-4" name="" id="" onChange={()=> handleCategoryChange(category)}
                checked = {selectedCategories.includes(category)}
                />
                {category}
                
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showFilter?"":"max-lg:hidden pt-14"}>
          <h4 className="font-medium text-lg py-4">Search by Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input type="checkbox" className="w-4 h-4"  onChange={()=> handleLocationChange(location)}
                checked = {selectedLocations.includes(location)}/>
                {location}
               
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listings */}
      <section className="flex-1">
        <h3 className="px-4 font-semibold text-2xl" id="job-list">Latest Jobs</h3>
        <p className="px-4 text-gray-600">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
          {filteredJobs.slice((currPge-1)*6,currPge*6).map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        {/* pagination */}
        {filteredJobs.length>0 && (
          <div className="flex items-center justify-center">
            <a href="#job-list">
              <img  onClick={()=>setCurrPage(Math.max(currPge-1))} src={assets.left_arrow_icon} alt="" />
            </a>
            {Array.from({length:Math.ceil(filteredJobs.length/6)}).map((_,index)=>(
           <a key={index} href="#job-list">
            <button onClick={()=>setCurrPage(index+1)} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currPge===index+1?'bg-blue-100 text-blue-500':'text-gray-500'}`}>{index+1}</button>
           </a>
      ))}
      <a href="#job-list">
        <img onClick={()=>setCurrPage(Math.min(currPge+1,Math.ceil(jobs.length/6)))} src={assets.right_arrow_icon} alt="" />
      </a>
          </div>
        )}
      </section>
    </div>
  );
}

export default JobList;
