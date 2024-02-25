import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function MyJobs() {
  const email = "sajalag78@gmail.com"
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setisLoading] = useState(true);

  // Set current Page
  const [currentPage,setCurrentPage]=useState(1);
  const itemsPage=4;

  useEffect(() => {
    setisLoading(true);
    fetch(`http://localhost:5000/myJobs/sajalag78@gmail.com`)
      .then(res => res.json())
      .then((data) => {
        setJobs(data)
        setisLoading(false)
      })
  }, [])
   
  // pagination
  const indexOfLastitem=currentPage+itemsPage;
  const indexOfFirstItem=indexOfLastitem-itemsPage;
  const currentJobs=jobs.slice(indexOfFirstItem,indexOfLastitem)
  
  const nextPage=()=>{
    if(indexOfLastitem<jobs.length){
      setCurrentPage(currentPage+1);
    }
  }
  const prevPage=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1);
    }
  }


  const handleSearch = () => {
    const filter = jobs.filter((job) => job.jobTitle.toLowerCase().includes(searchText.toLowerCase()) || job.description.toLowerCase().includes(searchText.toLowerCase()))
    // console.log(filter)
    setJobs(filter);
    setisLoading(false)
  }
  const handleDelete=(id)=>{
    // console.log(id)
    fetch(`http://localhost:5000/job/${id}`,{
      method:"DELETE"
    }).then(res=>res.json()).then(data=>{
      if(data.acknowledged===true){
        alert("Jobs Deleted Successfuly !!!");
      }
    })
  }
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">

      <div className="my-jobs-container">
        <h1 className=" text-center p-4">All mY Jobs</h1>
        <div className="search-box p-2 text-center mb-2">
          <input onChange={(e) => setSearchText(e.target.value)} type="text" name="search" id="search" className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full" />
          <button className=" bg-sky-700 text-white font-semibold px-8 py-2 rounded-sm mb-4" onClick={handleSearch}>Search</button>
        </div>
      </div>

      {/* listing */}

      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">All Jobs</h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to='/post-job'><button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post A job</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      TITLE
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Company Name
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Salary
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      EDIT
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      DELETE
                    </th>
                  </tr>
                </thead>
                {
                      isLoading ? (
                        <div className="flex items-center justify-center m-4"><p>Loading..........</p></div>
                      ): (
                        <tbody>
                        {
                          jobs.map((job,index)=>(
      
                        <tr key={index}>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                            {index+1}
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                            {job.jobTitle}
                          </td>
                          <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {job.companyName}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            {job.minPrice} - {job.maxPrice}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                           <button><Link to={`/edit-job/${job?._id}`}>Edit</Link></button>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                            <button onClick={()=>handleDelete(job._id)} className=" bg-red-700 py-2 px-6 text-white">Delete</button>
                          </td>
                        </tr>
                          ))
                        }
                      </tbody>
      
                      )
                    }

              </table>
            </div>
          </div>
        </div>
         {/* Pagination */}
         <div className="flex justify-center text-black space-x-8">
          {
            currentPage>1 &&(
              <button className=" hover:underline" onClick={prevPage}>Previous</button>
            )
          }
          {
            indexOfLastitem<jobs.length && (
              <button className=" hover:underline" onClick={nextPage}>Next</button>
            )
          } 
         </div>


      </section>

    </div>
  )
}

export default MyJobs
