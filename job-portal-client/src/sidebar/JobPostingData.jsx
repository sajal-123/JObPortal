import React from 'react'
import InputField from '../components/InputField'

function JobPostingData({handlechange}) {
    const now =new Date();
    const twentyFourHoursAgo=new Date(now-24*60*60*1000);
    const sevendaysAgo=new Date(now-7*24*60*60*1000);
    const ThirtyDaysAgo=new Date(now-30*24*60*60*1000);


    //  convert Date To String
    const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0,10);
    const SevendaysAgoDate=sevendaysAgo.toISOString().slice(0,10);
    const ThirtydaysAgoDate=ThirtyDaysAgo.toISOString().slice(0,10);
    // console.log(twentyFourHoursAgoDate)
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
      <div>
      <label htmlFor="day" className='sidebar-label-container'>
            <input type="radio" name='test' id='day' value="" onChange={handlechange} />
            <span className='checkmark'></span>All
        </label>
        <InputField handlechange={handlechange} value={twentyFourHoursAgoDate} name="test" title="Last 24 Hours" />
        <InputField handlechange={handlechange} value={SevendaysAgoDate} name="test" title="Last 7 days" />
        <InputField handlechange={handlechange} value={ThirtydaysAgoDate} name="test" title="Last 30 days" />
      </div>
    </div>
  )
}

export default JobPostingData
