import React from 'react'
import Navbar from '../Components/Navbar'
import JobContainer from '../Components/JobContainer'

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <JobContainer showAll/>
    </div>
  )
}

export default Jobs
