import React, { useState } from 'react'
import {FiMapPin, FiSearch} from 'react-icons/fi'

function Banner({query,handleInputChange}) {
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 ' >
            <h1 className='text-5xl font-bold text-primary md:text-6xl md:leading-tight md:mb-8'>
                Find your <span className='text-sky-600'>new Jobs</span> today
            </h1>
            <p className='text-lg text-black/70 mb-8'>Thousands of jobs in the field of ocmputer,engeneering and technology sectors are waiting for you</p>
            <form >
                <div className='flex justify-start md:flex-row flex-col md:gap-2'>
                    <div className='flex md:rounded-s-md rounded shadow-sm  ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
                            <input type="text" name='title' placeholder='Search for jobs' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-700 placeholder:text-gray-400 focus:right-0 sm-text-sm sm-leading-6' 
                            onChange={handleInputChange}
                            value={query}/>
                            <FiSearch className=' absolute mt-2.5 ml-2 text-gray-400 '/>
                    </div>
                    <div className='flex md:rounded-s-none rounded shadow-sm  ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3  w-full'>
                            <input type="text" name='title' placeholder='Location' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm-text-sm sm-leading-6' />
                            <FiMapPin className=' absolute mt-2.5 ml-2 text-gray-400 '/>
                    </div>
                    <button type='submit' className=' bg-sky-500 py-2 px-8 text-white md:rounded-s-none rounded'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Banner
