import React from 'react'
import Navbar from '../Components/Navbar'
import JobContainer from '../Components/JobContainer'
import Footer from '../Components/Footer'

const Jobs = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-lvh'>
        <JobContainer showAll/>
      </div>
      <Footer/>
    </div>
  )
}

export default Jobs
