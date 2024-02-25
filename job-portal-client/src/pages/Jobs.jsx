import React from 'react'

function Jobs({result}) {
  return (
    <>
    <div><h2 className=' text-lg font-bold'>{result.length} Jobs</h2></div>
    <section>{result}</section>
    </>
  )
}

export default Jobs
