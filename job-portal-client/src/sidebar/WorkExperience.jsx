import React from 'react'
import InputField from '../components/InputField'
function WorkExperience({handlechange}) {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Work Experiense</h4>
    <div>
    <label htmlFor="day" className='sidebar-label-container'>
          <input type="radio" name='exp' id='day' value="" onChange={handlechange} />
          <span className='checkmark'></span>Any experience
      </label>
      <InputField handlechange={handlechange} value="Intership" name="exp" title="Intership" />
      <InputField handlechange={handlechange} value="Work remotely" name="exp" title="Work remotely" />
    </div>
  </div>
  )
}

export default WorkExperience
