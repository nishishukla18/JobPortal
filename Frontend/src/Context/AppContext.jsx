// import { createContext, useEffect, useState } from "react";
// import { jobsData } from "../assets/assets";

// export const AppContext = createContext();

// export const AppContextProvider = (props) => {

//     const [searchFilter, setSearchFilter] = useState(
//         {
//             title: '',
//             location: ''
//         }
//     )
//     const [isSearched, setIsSearched] = useState(false)
//     const[jobs,setJobs] = useState([])
     
//     const [showRecuiter,setShowRecuiter] = useState(false) 
//     //functionto fetch job data
//     const fetchJobs = async()=>{
//         setJobs(jobsData)
//     }
//     useEffect(()=>{
//         fetchJobs()
//     },[])
//     const value = {
//         setSearchFilter, searchFilter,
//         setIsSearched, isSearched,
//         setJobs,jobs,
//         setShowRecuiter,showRecuiter
//     }
//     return (<AppContext.Provider value={value}>
//         {props.children}
//     </AppContext.Provider>)
// }


import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    })
    const [isSearched, setIsSearched] = useState(false)
    const [jobs, setJobs] = useState([])
    const [showRecuiter, setShowRecuiter] = useState(false)

    // Function to fetch job data
    const fetchJobs = async () => {
        setJobs(jobsData)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    const value = {
        setSearchFilter, searchFilter,
        setIsSearched, isSearched,
        setJobs, jobs,
        setShowRecuiter, showRecuiter
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}