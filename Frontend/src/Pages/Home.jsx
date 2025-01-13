import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import JobList from '../Components/JobList'
import AppDownload from '../Components/AppDownload'
import Footer from '../Components/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <JobList />
            <AppDownload/>
            <Footer/>
        </div>
    )
}

export default Home