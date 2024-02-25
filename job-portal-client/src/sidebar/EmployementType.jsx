import React from 'react'
import InputField from '../components/InputField'

function EmployementType({handlechange}) {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <div>
      <label htmlFor="day" className='sidebar-label-container'>
            <input type="radio" name='employee' id='employee' value="" onChange={handlechange} />
            <span className='checkmark'></span>All category
        </label>
        <InputField handlechange={handlechange} value="Part-time" name="employee" title="Part-time" />
        <InputField handlechange={handlechange} value="Full-time" name="employee" title="Full-time" />
        <InputField handlechange={handlechange} value="Temporary" name="employee" title="Temporary" />
      </div>
    </div>
  )
}

export default EmployementType
