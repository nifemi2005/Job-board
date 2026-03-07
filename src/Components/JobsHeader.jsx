import React from 'react'

const JobsHeader = ({count}) => {
  return (
    <div className='px-4 md:px-9 py-5 sm:py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6 border-b border-gray-200 pb-6'>
        <div>
            <h2 className='font-bold text-3xl text-gray-900'>Available Jobs</h2>
            <p className='text-gray-500 mt-1 font-semibold text-sm'>Showing {count} available jobs </p>
        </div>
        <div className='flex items-center gap-3'>
            <span className="text-sm text-gray-500">Sort by:</span>
            <select name="" id="" className='border rounded-lg border-gray-900 text-sm px-3 py-2 bg-gray-100 text-gray-800'>
                <option value="">Newest</option>
                <option value="">Oldest</option>
                <option value="">Most Relevant</option>
            </select>
        </div>
    </div>
  )
}

export default JobsHeader