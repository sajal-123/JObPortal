import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperience from './WorkExperience'
import EmployementType from './EmployementType'

const SideBar = ({handlechange,handldeClick}) => {
  return (
    <div className='space-y-5'>
     <h3 className=' text-lg font-bold mb-2'>Filtered</h3>
     <Location handlechange={handlechange}/>
     <Salary handlechange={handlechange} handldeClick={handldeClick}/>
     <JobPostingData handlechange={handlechange}/>
     <WorkExperience handlechange={handlechange}  />
     <EmployementType handlechange={handlechange} />
    </div>
  )
}

export default SideBar
