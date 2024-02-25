import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import SideBar from '../sidebar/SideBar';
import NewsLetter from '../components/NewsLetter';

const Home = () => {

  const [selectcategory, setselectCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurretnPage] = useState(1);
  const itemsperPage = 6;
  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data)
      setLoading(false);
    });
  }, [])

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  // Can also use Indexof instead of includes
  const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().includes(query.toLowerCase()) || job.description.toLowerCase().includes(query.toLowerCase()))
  console.log(filterItems)

  // -------------------------------Radio FIlter-----------------------
  const handlechange = (e) => {
    setselectCategory(e.target.value);
  }

  // ----------------Button based filtering-----------
  const handldeClick = (e) => {
    setselectCategory(e.target.value)
  }

  // calculate the index range
  const calculateRange = () => {
    const startIndex = (currentPage - 1) * itemsperPage;
    const endIndex = startIndex * itemsperPage;
    return { startIndex, endIndex }
  }
  const nextPage = () => {
    if (currentPage < Math.ceil(result.length / itemsperPage)) {
      setCurretnPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurretnPage(currentPage - 1);
    }
  };

  // -------------Main function-------------------
  const filterData = (jobs, selected, query) => {
    let filterJObs = jobs;
    //  Filtering input Items
    if (query) {
      filterJObs = filterItems
    }
    //  category filtering
    if (selected) {
      filterJObs = filterJObs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate }) => (
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase()===selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate>=selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
        ));

      console.log(filterJObs)
    }

    const { startIndex, endIndex } = calculateRange();
    // filterJObs=filterJObs.slice(startIndex,endIndex)
    return filterJObs.map((data, i) => <Card key={i} data={data} />);
  }
  const result = filterData(jobs, selectcategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-3'>
        {/* Job card Left Side */}
        <div className='p-4 rounded mr-4 mb-4 bg-white' >
          <SideBar handlechange={handlechange} handldeClick={handldeClick} />
        </div>
        {/* Job card */}

        <div className='col-span-2 bg-white p-4 rounded mr-4 mb-4' >
          {
            loading ? (<h3>Loading...................</h3>) : (result.length > 0 ? (<Jobs result={result} />) : (<>
              <h2 className=' text-lg font-bold'>{result.length} Jobs</h2>
              <p>No data Found</p></>))
          }
          {/* Paginnation here */}

        {
          result.length > 0 ?
            (
              <div className='flex justify-center mt-4 space-x-8'>
                <button className=' hover:underline' onClick={prevPage} disabled={currentPage === 1}>
                  Previous
                </button>
                <span className=' mx-2'>
                  Page {currentPage} of {Math.ceil(result.length / itemsperPage)}
                </span>
                <button className=' hover:underline' onClick={nextPage} disabled={currentPage === Math.ceil(result.length / itemsperPage)}>
                  Next
                </button>
              </div>
            ) : ""
        }
        </div>
        {/* Job card right Side */}
        <div className='p-4 rounded   mr-4 mb-4 bg-white' > 
        <NewsLetter/>
        </div>
      </div>
    </div>
  )
}

export default Home
