import React from 'react'
import Navbar from '../Components/Navbar'
import JobContainer from '../Components/JobContainer'
import Footer from '../Components/Footer'

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <JobContainer showAll/>
      <Footer/>
    </div>
  )
}

export default Jobs
