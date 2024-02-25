import React from 'react'
import Button from './Button'
import InputField from '../components/InputField'

function Salary({handlechange,handldeClick}) {
  return (
    <div className=' text-lg font-medium mb-2'>
       <h4 className='text-lg font-medium mb-2'>Salary</h4>
       <div className='mb'>
        <Button onclickHandler={handldeClick} value="" title="Hourly"/>
        <Button onclickHandler={handldeClick} value="Monthly" title="Monthly"/>
        <Button onclickHandler={handldeClick} value="Yearly" title="Yearly"/>
       </div>
       <div className=' mt-5'>
       <label htmlFor="sal" className='sidebar-label-container'>
            <input type="radio" name='test' id='sal' value="" onChange={handlechange} />
            <span className='checkmark'></span>All
        </label>
       <InputField handlechange={handlechange} value={30} name="test" title="< 30000K" />
        <InputField handlechange={handlechange} value={50} name="test" title="< 50000K" />
        <InputField handlechange={handlechange} value={80} name="test" title="< 80000K" />
        <InputField handlechange={handlechange} value={100} name="test" title="< 100000K" />
       </div>
    </div>
  )
}

export default Salary
