import React from 'react'
import InputField from '../components/InputField'

function Location({handlechange}) {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>
      <div>
        <label htmlFor="test" className='sidebar-label-container'>
            <input type="radio" name='test' id='test' value="" onChange={handlechange} />
            <span className='checkmark'></span>All
        </label>
        <InputField handlechange={handlechange} value="london" name="test" title="London" />
        <InputField handlechange={handlechange} value="Seattle" name="test" title="Seattle" />
        <InputField handlechange={handlechange} value="madrid" name="test" title="Madrid" />
        <InputField handlechange={handlechange} value="boston" name="test" title="Boston" />
      </div>
    </div>
  )
} 

export default Location
